import NextAuth from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";
import {db} from "@/lib/db";
import authConfig from "@/auth.config";
import {getUserByEmail, getUserById} from "@/data/user";
import {getAccountByUserId} from "@/data/account";
import {UserRole} from "@prisma/client";

export const {
    handlers: {GET, POST},
    auth, signIn, signOut
} = NextAuth({
    pages: {
        signIn: "/sign-in",
    },
    events: {
        async linkAccount({user}) {
            await db.user.update({
                where: {id: user.id as string},
                data: {emailVerified: new Date()}
            })
        }
    },
    callbacks: {
        // check is email verified?
        async signIn({user, account}) {
            if (account?.provider !== "credentials") return true;

            const existingUser = await getUserById(user.id as string);
            // if (!existingUser?.emailVerified) return false;

            // if (existingUser.isTwoFactorEnabled) {
            //     const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);
            //     if (!twoFactorConfirmation) return false;
            //
            //     // Delete two factor confirmation for next sign in
            //     await db.twoFactorConfirmation.delete({
            //         where: {id: twoFactorConfirmation.id}
            //     })
            // }

            return true;
        },
        async session({token, session, user}) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                session.user.role = token.role as UserRole;
            }
            //
            // if (session.user) {
            //     session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
            // }

            if (session.user) {
                session.user.name = token.name;
                if (token.email != null) {
                    session.user.email = token.email;
                }
                session.user.isOAuth = token.isOAuth as boolean;
            }

            const fullUser = await getUserByEmail(session.user.email);

            return { ...session, user: { ...user, ...fullUser } };
        },
        async jwt({token}) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            const existingAccount = await getAccountByUserId(existingUser.id);
            token.isOAuth = !!existingAccount;
            token.name = existingUser.name;
            token.email = existingUser.email;
            token.role = existingUser.role;
            // token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;
            return token;
        },
    },
    adapter: PrismaAdapter(db),
    secret: "hEamG3FY804iEiZ396ysGN6Zc8mLDQq11+qYlkb5Vps",
    session: {strategy: "jwt"},
    ...authConfig
})
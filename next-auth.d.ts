import {DefaultSession} from "next-auth";
import {UserRole} from "@prisma/client";

export type ExtendedUser = DefaultSession["user"] & {
    id: string;
    role: UserRole;
    isOAuth: boolean;
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}
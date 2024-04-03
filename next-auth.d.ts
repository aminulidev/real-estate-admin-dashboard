import {DefaultSession} from "next-auth";
import {UserRole} from "@prisma/client";
import {DateTime} from "@auth/core/providers/kakao";

export type ExtendedUser = DefaultSession["user"] & {
    id: string;
    role: UserRole;
    phone: string;
    gender: string;
    dob: DateTime;
    bannerImage: string;
    signatureImage: string;
    address: string;
    isOAuth: boolean;
}

declare module "next-auth" {
    interface Session {
        user: ExtendedUser;
    }
}
"use client";
import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {GoogleIcon} from "@/components/icons/google-icon";
import {DEFAULT_LOGIN_REDIRECT} from "@/constatnts/routes";
import {signIn} from "next-auth/react";
type AuthFooterProps = {
    description: string;
    link: string;
    linkText: string;
}
export const AuthFooter = ({description, link, linkText}:AuthFooterProps) => {
    const handleSignIn = (provider: "google" | "github") => {
        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT
        });
    }

    return (
        <div className="space-y-5">
            <Button onClick={() => handleSignIn("google")} type="button" variant="outline">
                <GoogleIcon/>
                Sign up with Google
            </Button>
            <div className="text-center">
                {description}
                <Button asChild variant="link" size="link">
                    <Link className="ml-1" href={link}>{linkText}</Link>
                </Button>
            </div>
        </div>

    );
};
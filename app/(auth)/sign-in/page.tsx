import React from 'react';
import {AuthHeader} from "@/app/(auth)/_components/auth-header";
import {SignInForm} from "@/app/(auth)/_components/sign-in-form";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Sign in",
    description: "Sign in authentication page"
};

const SignInPage = () => {
    return (
        <>
            <AuthHeader
                title="Sign in"
                description="Please enter your details."
            />
            <SignInForm />
        </>
    );
};

export default SignInPage;
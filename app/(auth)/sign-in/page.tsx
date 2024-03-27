import React from 'react';
import {AuthHeader} from "@/app/(auth)/_components/auth-header";
import {SignInForm} from "@/app/(auth)/_components/sign-in-form";

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
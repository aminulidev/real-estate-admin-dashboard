import {AuthHeader} from "@/app/(auth)/_components/auth-header";
import {SignUpForm} from "@/app/(auth)/_components/sign-up-form";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Sign up",
    description: "Sign up authentication page"
};

const SignUpPage = () => {
    return (
        <>
            <AuthHeader
                title="Sign up"
                description="Please enter your details."
            />
            <SignUpForm />
        </>
    );
};

export default SignUpPage;
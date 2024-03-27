import React from 'react';
import Image from "next/image";
import {imageSignUpLayoutBg} from "@/constatnts/sign-up/images";

const SignUpLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="h-screen w-full grid grid-cols-1 lg:grid-cols-2">
            <div className="max-w-95 w-full mx-auto space-y-12 p-4.5 flex flex-col items-center justify-center">
                {children}
            </div>
            <div className="hidden lg:block">
                <Image className="h-screen" src={imageSignUpLayoutBg} alt={"imageSignUpLayoutBg"} />
            </div>
        </div>
    );
};

export default SignUpLayout;
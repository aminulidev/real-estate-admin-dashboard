import React from 'react';
import {Header} from "@/app/(backend)/_components/layout/header";
import {Sidebar} from "@/app/(backend)/_components/layout/sidebar";

type BackendLayoutProps = {
    children: React.ReactNode;
}

const BackendLayout = ({children}:BackendLayoutProps) => {
    return (
        <>
            <Header />
            <div className="w-full flex items-center">
                <Sidebar />
                {children}
            </div>
        </>
    );
};

export default BackendLayout;
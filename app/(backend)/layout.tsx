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
            <div className="relative top-17.5 w-full flex">
                <Sidebar />
                <div className="p-4.5 w-full lg:p-6 lg:ml-62.5">
                    {children}
                </div>
            </div>
        </>
    );
};

export default BackendLayout;
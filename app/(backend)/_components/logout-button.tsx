"use client";
import React from 'react';
import {logout} from "@/actions/logout";
interface LogoutButtonProps {
    children?: React.ReactNode
}
const LogoutButton = ({children}: LogoutButtonProps) => {
    const handleLogout = () => {
        logout();
    }
    return (
        <span onClick={handleLogout} className="flex items-center gap-2.5 cursor-pointer">
            {children}
        </span>
    );
};

export default LogoutButton;
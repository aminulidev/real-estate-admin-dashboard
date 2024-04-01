"use client";
import React from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {ProfileIcon} from "@/components/icons/profile-icon";
import {SettingsIcon} from "@/components/icons/settings-icon";
import PenIcon from "@/components/icons/pen-icon";

const ProfileDropdownMenu = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-lg font-medium inline-flex items-center mr-10">
                ...
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <PenIcon className="h-4 w-4 fill-popover-foreground transition-colors group-hover:fill-primary" />
                    Edit Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon className="h-4 w-4 fill-popover-foreground transition-colors group-hover:fill-primary" />
                    Settings
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdownMenu;
"use client";
import React from 'react';
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {SettingsIcon} from "@/components/icons/settings-icon";
import PenIcon from "@/components/icons/pen-icon";
import {useCurrentRole} from "@/hooks/use-current-role";
import {UserRole} from "@prisma/client";

const ProfileDropdownMenu = () => {
    const role = useCurrentRole();
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
                {role === UserRole.ADMIN ?
                    <DropdownMenuItem>
                        <SettingsIcon className="h-4 w-4 fill-popover-foreground transition-colors group-hover:fill-primary" />
                        Settings
                    </DropdownMenuItem> : null
                }
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdownMenu;
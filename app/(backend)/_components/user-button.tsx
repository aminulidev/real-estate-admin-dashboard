"use client";
import {useCurrentUser} from "@/hooks/use-current-user";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import {defaultAvatar} from "@/constatnts/dashboard/images";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import LogoutButton from "@/app/(backend)/_components/logout-button";
import {ProfileIcon} from "@/components/icons/profile-icon";
import {SettingsIcon} from "@/components/icons/settings-icon";
import {LogoutIcon} from "@/components/icons/logout-icon";
import {useCurrentRole} from "@/hooks/use-current-role";
import {UserRole} from "@prisma/client";
import EditProfileDialog from "@/app/(backend)/my-profile/_components/edit-profile-dialog";
import React, {useState} from "react";
import {DialogTrigger} from "@/components/ui/dialog";

export const UserButton = () => {
    const user =  useCurrentUser();
    const role =  useCurrentRole();

    return (
        <>
            <EditProfileDialog>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar>
                            {user?.image ?
                                <AvatarImage src={user.image} alt="user avatar" /> : null
                            }
                            <AvatarFallback>
                                <Image src={defaultAvatar} alt="user avatar" />
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="min-w-48">
                        <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DialogTrigger asChild>
                            <DropdownMenuItem>
                                <ProfileIcon className="h-4 w-4 fill-popover-foreground transition-colors group-hover:fill-primary" />
                                Edit Profile
                            </DropdownMenuItem>
                        </DialogTrigger>

                        {role === UserRole.ADMIN ?
                            <DropdownMenuItem>
                                <SettingsIcon className="h-4 w-4 fill-popover-foreground transition-colors group-hover:fill-primary" />
                                Settings
                            </DropdownMenuItem> : null
                        }
                        <DropdownMenuItem>
                            <LogoutButton>
                                <LogoutIcon className="h-4 w-4 fill-popover-foreground transition-colors group-hover:fill-primary" />
                                Logout
                            </LogoutButton>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </EditProfileDialog>

        </>
    );
};
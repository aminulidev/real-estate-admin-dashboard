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

export const UserButton = () => {
    const user = useCurrentUser();

    return (
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
            <DropdownMenuContent className="-right-3.5">
                <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>
                    <LogoutButton>Logout</LogoutButton>
                </DropdownMenuItem>
                <DropdownMenuItem>Dark Mode</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
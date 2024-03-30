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
            <DropdownMenuContent className="min-w-48">
                <DropdownMenuLabel>{user?.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <ProfileIcon className="h-4 w-4 fill-popover-foreground transition-colors group-hover:fill-primary" />
                    Edit Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <SettingsIcon className="h-4 w-4 fill-popover-foreground transition-colors group-hover:fill-primary" />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LogoutButton>
                        <LogoutIcon className="h-4 w-4 fill-popover-foreground transition-colors group-hover:fill-primary" />
                        Logout
                    </LogoutButton>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
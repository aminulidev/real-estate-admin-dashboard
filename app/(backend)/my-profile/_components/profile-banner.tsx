"use client";
import {useCurrentUser} from "@/hooks/use-current-user";
import Image from "next/image";
import {bannerBg, defaultAvatar} from "@/constatnts/dashboard/images";
import InputFile from "@/app/(backend)/_components/input-file";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const ProfileBanner = () => {
    const user = useCurrentUser();

    return (
        <div className="relative">
            <Image src={user?.bannerImage ? user.bannerImage : bannerBg} alt="bannerBg"
                   className="w-full aspect-video object-cover rounded-lg"/>
            <InputFile className="absolute top-4.5 left-4.5"/>
            <Avatar className="absolute left-4.5 -bottom-8 h-16 w-16 sm:-right-8 sm:top-4.5 sm:left-auto">
                {user?.image ?
                    <AvatarImage src={user.image} alt="profile image"/> : null
                }
                <AvatarFallback>
                    <Image src={defaultAvatar} alt="profile image"/>
                </AvatarFallback>
            </Avatar>
        </div>
    );
};

export default ProfileBanner;
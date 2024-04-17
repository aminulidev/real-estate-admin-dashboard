"use client";
import {useCurrentUser} from "@/hooks/use-current-user";
import Image from "next/image";
import {bannerBg, defaultAvatar, uploadedBannerBg} from "@/constatnts/dashboard/images";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {EditProfileBanner} from "@/app/(backend)/my-profile/_components/edit-profile-banner";

const ProfileBanner = () => {
    const user = useCurrentUser();

    return (
        <div className="relative">
            <Image
                src={uploadedBannerBg ? uploadedBannerBg : bannerBg} alt="bannerBg"
                className="w-full aspect-video object-cover rounded-lg"
            />
            <EditProfileBanner />
            <Avatar
                className="absolute left-4.5 -bottom-8 h-16 w-16 sm:-right-8 sm:top-4.5 sm:left-auto">
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
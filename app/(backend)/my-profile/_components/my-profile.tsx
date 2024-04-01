"use client";
import React from 'react';
import Image from "next/image";
import {bannerBg, defaultAvatar} from "@/constatnts/dashboard/images";
import InputFile from "@/app/(backend)/_components/input-file";
import LocationIcon from "@/components/icons/location-icon";
import ProfileInfoItem from "@/app/(backend)/my-profile/_components/profile-info-item";
import PhoneIcon from "@/components/icons/phone-icon";
import EmailIcon from "@/components/icons/email-icon";
import {useCurrentUser} from "@/hooks/use-current-user";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const MyProfile = () => {
    const currentUser = useCurrentUser();
    console.log(currentUser);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12.5 sm:gap-15 bg-card p-4 md:p-5 rounded-xl">
            {/*banner*/}
            <div className="relative">
                <Image src={bannerBg} alt="bannerBg" className="w-full aspect-video object-cover rounded-lg" />
                <InputFile className="absolute top-4.5 left-4.5" />
                <Avatar className="absolute left-4.5 -bottom-8 h-16 w-16 sm:-right-8 sm:top-4.5 sm:left-auto">
                    {currentUser?.image ?
                        <AvatarImage src={currentUser.image} alt="profile image" /> : null
                    }
                    <AvatarFallback>
                        <Image src={defaultAvatar} alt="profile image" />
                    </AvatarFallback>
                </Avatar>
            </div>
            {/*profile info*/}
            <div className="space-y-5 sm:pt-4.5">
                <div className="space-y-1.5">
                    <h2 className="text-base font-semibold leading-6">{currentUser?.name}</h2>
                    <p className="text-sm font-normal leading-5.5 text-secondary-foreground">Admin</p>
                </div>
                <ProfileInfoItem
                    label="Address"
                    icon={<LocationIcon className="fill-foreground"/>}
                    text="4517 Washington Ave. Manchaster"
                />
                <ProfileInfoItem
                    label="Phone Number"
                    icon={<PhoneIcon className="fill-foreground"/>}
                    text="+0123 456 7890"
                />
                <ProfileInfoItem
                    label="Email"
                    icon={<EmailIcon className="fill-foreground"/>}
                    text={currentUser?.email}
                />
            </div>
        </div>
    );
};

export default MyProfile;
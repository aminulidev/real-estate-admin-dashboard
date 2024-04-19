import React from 'react';
import LocationIcon from "@/components/icons/location-icon";
import ProfileInfoItem from "@/app/(backend)/my-profile/_components/profile-info-item";
import PhoneIcon from "@/components/icons/phone-icon";
import EmailIcon from "@/components/icons/email-icon";
import {capitalize} from "@/lib/utils";
import ProfileBanner from "@/app/(backend)/my-profile/_components/profile-banner";
import ProfileSignature from "@/app/(backend)/my-profile/_components/profile-signature";
import {CalendarClockIcon, Users2Icon} from "lucide-react";
import {currentUser} from "@/lib/currentUser";
import {currentRole} from "@/lib/currentRole";
import EditProfileDialog from "@/app/(backend)/my-profile/_components/edit-profile-dialog";

const MyProfile = async () => {
    const user = await currentUser();
    const role = await currentRole();

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12.5 sm:gap-15 bg-card p-4 md:p-5 rounded-xl">
            {/*banner*/}
            <ProfileBanner/>
            {/*profile info*/}
            <div className="space-y-5 sm:pt-4.5">
                <div className="space-y-1.5">
                    <h2 className="text-base font-semibold leading-6">{user?.name}</h2>
                    <p className="text-sm font-normal leading-5.5 text-secondary-foreground capitalize">
                        {capitalize(role)}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <ProfileInfoItem
                        label="Email"
                        icon={<EmailIcon className="fill-foreground"/>}
                        text={user?.email ? user.email : "N/A"}
                    />
                    <ProfileInfoItem
                        label="Phone Number"
                        icon={<PhoneIcon className="fill-foreground"/>}
                        text={user?.phone ? user.phone : "N/A"}
                    />
                    <ProfileInfoItem
                        label="Gender"
                        icon={<Users2Icon size="18" className="fill-foreground"/>}
                        text={user?.gender ? capitalize(user.gender) : "N/A"}
                    />
                    <ProfileInfoItem
                        label="Date of birth"
                        icon={<CalendarClockIcon size="18" className=""/>}
                        // @ts-ignore
                        text={user?.dob.toDateString()}
                    />
                    <ProfileInfoItem
                        label="Address"
                        icon={<LocationIcon className="fill-foreground"/>}
                        text={user?.address ? user.address : "N/A"}
                    />
                    <ProfileSignature />
                </div>

            </div>
        </div>
    );
};

export default MyProfile;
import React from 'react';
import LocationIcon from "@/components/icons/location-icon";
type ProfileInfoItemProps = {
    label: string;
    icon: React.ReactNode;
    text: string | null | undefined;
}
const ProfileInfoItem = ({label, icon, text} : ProfileInfoItemProps) => {
    return (
        <div className="space-y-1.5">
            <label className="text-sm font-normal leading-5.5 text-secondary-foreground">{label}</label>
            <div className="inline-flex items-center gap-x-2.5 h-11 w-full rounded-lg border border-input bg-card p-2.5 text-sm font-normal leading-5.5">
                {icon}
                {text}
            </div>
        </div>
    );
};

export default ProfileInfoItem;
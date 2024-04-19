import React from 'react';
import Image from "next/image";
import Badge from "@/app/(backend)/_components/badge";
import LocationIcon from "@/components/icons/location-icon";
import BedIcon from "@/components/icons/bed-icon";
import CrossIcon from "@/components/icons/cross-icon";
import Link from "next/link";

type PropertyListType = {
    id: string,
    imgSrc: string,
    price: string,
    name: string,
    location: string,
    beds: string,
    area: string
}
const PropertyListItem = ({id, imgSrc, price, name, location, beds, area} : PropertyListType) => {
    return (
        <div className="flex gap-2.5">
            <Image className="rounded-lg max-w-28 md:max-w-fit" src={imgSrc} alt={name} width={200} height={125} />
            <div className="space-y-2 md:space-y-3">
                <Badge text={price} />
                <h2 className="text-xs hover:text-primary font-semibold leading-4 md:text-base md:leading-6">
                    <Link href={`/property/${id}`}>{name}</Link>
                </h2>
                <div className="flex items-center gap-0.5">
                    <LocationIcon className="fill-secondary-foreground" />
                    <address className="text-xs leading-4 font-normal text-secondary-foreground md:text-sm md:leading-5.5">{location}</address>
                </div>
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-1.5">
                        <BedIcon className="fill-secondary-foreground"/>
                        <span className="text-xs font-medium leading-4">{beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <CrossIcon className="fill-secondary-foreground"/>
                        <span className="text-xs font-medium leading-4">{area}M</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyListItem;
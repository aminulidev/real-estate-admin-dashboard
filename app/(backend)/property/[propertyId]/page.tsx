import React from 'react';
import {Metadata} from "next";
import PageTitle from "@/app/(backend)/_components/page-title";
import PropertyCarousel from "@/app/(backend)/property/[propertyId]/_components/property-carousel";
import {Button} from "@/components/ui/button";
import LocationIcon from "@/components/icons/location-icon";
import StarIcon from "@/components/icons/star-icon";
import BedIcon from "@/components/icons/bed-icon";
import BathIcon from "@/components/icons/bath-icon";
import CrossIcon from "@/components/icons/cross-icon";
import KitchenIcon from "@/components/icons/kitchen-icon";
import WifiIcon from "@/components/icons/wifi-icon";

export const metadata: Metadata = {
    title: "Property Details",
    description: "Property Details page"
};

const PropertyDetailsPage = () => {
    return (
        <div className="bg-card p-4 md:p-5 rounded-xl space-y-5">
            <PageTitle pageTitle="< Details"/>
            <div className="flex flex-col md:flex-row gap-5">
                <div className="basis-full space-y-5">
                    <PropertyCarousel />
                    <div className="space-y-5">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2.5">
                                <span className="text-lg font-medium">Apartment</span>
                                <h2 className="text-2xl font-medium">Star Sun Hotel & Apartment</h2>
                                <div className="flex items-center gap-0.5">
                                    <LocationIcon className="fill-secondary-foreground"/>
                                    <address
                                        className="text-xs leading-4 font-normal text-secondary-foreground md:text-sm md:leading-5.5">
                                        North Carolina, USA
                                    </address>
                                </div>
                            </div>
                            <div className="space-y-2.5">
                                <div className="flex items-center gap-0.5">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <StarIcon key={index}/>
                                    ))}
                                </div>
                                <p className="text-base font-medium">Price</p>
                                <p className="text-sm text-secondary-foreground font-normal">
                                    <span className="text-2xl text-primary font-bold">$80</span> For One Day
                                </p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <span className="text-lg font-medium">Facility</span>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                <div className="flex items-center gap-1.5">
                                    <BedIcon className="fill-secondary-foreground"/>
                                    <span className="text-sm font-medium leading-4">4 Beds</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <BathIcon className="fill-secondary-foreground"/>
                                    <span className="text-sm font-medium leading-4">4 Beds</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <CrossIcon className="fill-secondary-foreground"/>
                                    <span className="text-xs font-medium leading-4">28M Area</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <KitchenIcon className="fill-secondary-foreground"/>
                                    <span className="text-xs font-medium leading-4">Kitchen</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <BathIcon className="fill-secondary-foreground"/>
                                    <span className="text-xs font-medium leading-4">Balcony</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <WifiIcon className="fill-secondary-foreground"/>
                                    <span className="text-xs font-medium leading-4">Wifi</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <span className="text-lg font-medium">Description</span>
                            <p className="text-sm font-normal text-secondary-foreground">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                                remaining essentially unchanged.
                            </p>
                        </div>

                    </div>
                </div>
                <div className="basis-full md:basis-1/3">
                    <Button type="button">Book Now</Button>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetailsPage;
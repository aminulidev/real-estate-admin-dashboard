import React from 'react';
import {Metadata} from "next";
import PageTitle from "@/app/(backend)/_components/page-title";
import {Button} from "@/components/ui/button";
import PropertyFilter from "@/app/(backend)/property/_components/property-filter";
import PropertyListItem from "@/app/(backend)/property/_components/property-list-item";
import propertyImg from "@/public/images/property/property-1.png";

export const metadata: Metadata = {
    title: "Property",
    description: "Property page"
};

const PropertyPage = () => {

    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <PageTitle pageTitle="Property List"/>
                <Button className="w-fit">+ Add Property</Button>
            </div>

            <div className="bg-card p-4 md:p-5 rounded-xl space-y-5">
                <PropertyFilter />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <PropertyListItem
                        id="1"
                        // @ts-ignore
                        imgSrc={propertyImg}
                        price="$7400"
                        name="Metro Jayakarta Hotel & Spa"
                        location="North Carolina, USA"
                        beds="4"
                        area="28"
                    />
                    <PropertyListItem
                        id="2"
                        // @ts-ignore
                        imgSrc={propertyImg}
                        price="$7400"
                        name="Metro Jayakarta Hotel & Spa"
                        location="North Carolina, USA"
                        beds="4"
                        area="28"
                    />

                </div>
            </div>

        </div>
    );
};

export default PropertyPage;
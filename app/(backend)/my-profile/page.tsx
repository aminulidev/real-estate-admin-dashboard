import React from 'react';
import {Metadata} from "next";
import PageTitle from "@/app/(backend)/_components/page-title";
import MyProfile from "@/app/(backend)/my-profile/_components/my-profile";

export const metadata: Metadata = {
    title: "MyProfile",
    description: "MyProfile page"
};

const MyProfilePage = () => {
    return (
        <div className="space-y-5">
            <PageTitle pageTitle="My Profile" />
            <MyProfile />
        </div>
    );
};

export default MyProfilePage;
"use client"
import React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {defaultSignature} from "@/constatnts/dashboard/images";
import {useCurrentUser} from "@/hooks/use-current-user";

const ProfileSignature = () => {
    const user = useCurrentUser();

    return (
        <div className="space-y-1.5">
            <div className="flex items-center justify-between">
                <label className="text-sm font-normal leading-5.5 text-secondary-foreground">Signature</label>
                <Button className="text-sm font-normal leading-5.5" variant="link" size="link">Update
                    Signature
                </Button>
            </div>
            <div
                className="inline-flex items-center gap-x-2.5 h-11 w-full rounded-lg border border-input bg-card p-2.5 text-sm font-normal leading-5.5">
                <Image className="max-w-40 mx-auto" alt="signatureImage"
                   src={user?.signatureImage ? user.signatureImage : defaultSignature}
                />
            </div>
        </div>
    );
};

export default ProfileSignature;
import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {EditProfileForm} from "@/app/(backend)/my-profile/_components/edit-profile-form";

const EditProfileDialog = ({children}:{children: React.ReactNode}) => {

    return (
        <Dialog>
            {children}
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit your profile</DialogTitle>
                </DialogHeader>
                <EditProfileForm />
            </DialogContent>
        </Dialog>
    );
};

export default EditProfileDialog;
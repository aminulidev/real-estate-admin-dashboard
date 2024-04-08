import React, {ChangeEvent} from 'react';
import InputFile from "@/app/(backend)/_components/input-file";
import {useForm} from "react-hook-form";
import {currentUser} from "@/lib/currentUser";
import {db} from "@/lib/db";
import {toast} from "sonner";

const EditProfileBanner = () => {
    const { register } = useForm();

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) {
            toast.error("No file selected");
            return;
        }

        try {
            const reader = new FileReader();

            reader.onloadend = async () => {
                const image = reader.result?.toString().split(',')[1]; // Extract base64 data

                // Send the base64-encoded image data to the server
                const response = await fetch(`/api/profile/upload-banner/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ image }),
                });

                if (response.ok) {
                    toast.success("File uploaded successfully");
                } else {
                    toast.error(response.statusText);
                }
            };

            reader.readAsDataURL(file);
        } catch (error) {
            toast.error("Error uploading file");
        }
    };

    return (
        <form>
            <InputFile name="image" register={register} onChange={handleFileChange} className="absolute top-4.5 left-4.5"/>
        </form>
    );
};

export default EditProfileBanner;
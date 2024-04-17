import React, { ChangeEvent } from 'react';
import InputFile from '@/app/(backend)/_components/input-file';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const EditProfileBanner = () => {
    const { register } = useForm();

    const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) {
            toast.error('No file selected');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('image', file);

            // Send the FormData object to the server
            const response = await fetch(`/api/profile/upload-banner/`, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                toast.success('File uploaded successfully');
            } else {
                toast.error(response.statusText);
            }
        } catch (error) {
            toast.error('Error uploading file');
        }
    };

    return (
        <form>
            <InputFile
                register={register}
                onChange={handleFileChange}
                name="image"
                className="absolute top-4.5 left-4.5"
            />
        </form>
    );
};

export default EditProfileBanner;

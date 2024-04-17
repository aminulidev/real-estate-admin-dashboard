'use client'

import React, { useState } from 'react'
import CameraIcon from "@/components/icons/camera-icon";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {UploadCloud} from "lucide-react";
import {toast} from "sonner";

export function EditProfileBanner() {
	const [file, setFile] = useState<File>();
	const [isUploading, setIsUploading] = useState(false);

	const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		setIsUploading(true);
		e.preventDefault()
		if (!file) return

		try {
			const data = new FormData()
			data.set('file', file)

			const res = await fetch('/api/profile/banner-upload', {
				method: 'POST',
				body: data
			})
			// handle the error
			if (!res.ok) {
				setIsUploading(false);
				toast.error("Banner failed to upload!");
				throw new Error(await res.text());
			}
			if (res.ok) {
				setIsUploading(false);
				toast.success("Banner successfully uploaded!");
			}
		} catch (e: any) {
			setIsUploading(false);
			toast.error("Something went wrong!");
			// Handle errors here
			console.error(e)
		}
	}

	return (
		<form onSubmit={onSubmit} className="absolute top-4.5 left-4.5 flex items-center gap-2">
			<Label htmlFor="change-bg" className="whitespace-nowrap">
                <span
					className="flex items-center cursor-pointer gap-x-2.5 bg-background hover:bg-background/80 rounded-lg text-xs font-normal px-4 py-3">
                    <CameraIcon className="fill-popover-foreground"/>
                    Change Photo
                </span>
				<input
					type="file"
					name="file"
					id="change-bg"
					onChange={(e) => setFile(e.target.files?.[0])}
					className="hidden"
				/>
			</Label>

			{file ?
				<Button
					disabled={isUploading}
					type="submit" className="h-10.5 px-3 py-2">
					<UploadCloud />
				</Button> : null
			}
		</form>
	)
}
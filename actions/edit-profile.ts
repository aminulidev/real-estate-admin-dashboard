"use server";
import * as z from "zod"
import {EditProfileSchema} from "@/schemas/dashboard-schemas";
import {currentUser} from "@/lib/currentUser";
import {db} from "@/lib/db";
import { join } from "path";
import { writeFile } from 'fs/promises'

export const editProfile = async (values: z.infer<typeof EditProfileSchema>) => {
    const validatedFields = EditProfileSchema.safeParse(values);
    if (!validatedFields.success) {
        return {error: "Invalid fields!"}
    }

    const {name, phone, gender, dob, address} = validatedFields.data;

    const existingUser = await currentUser();
    if (!existingUser) return {error: "User not found!"}

    await db.user.update({
        where: {id: existingUser.id},
        data: {name, phone, gender, dob, address}
    });

    return {success: "Profile updated!"}
}

// export const bannerUpload = async (formData) => {
//     const file: File | null = formData.get('file') as unknown as File
//     if (!file) {
//         throw new Error('No file uploaded')
//     }
//
//     const bytes = await file.arrayBuffer()
//     const buffer = Buffer.from(bytes)
//
//     // With the file data in the buffer, you can do whatever you want with it.
//     // For this, we'll just write it to the filesystem in a new location
//     const path = join('/', 'tmp', file.name)
//     await writeFile(path, buffer)
//     console.log(`open ${path} to see the uploaded file`)
//
//     return { success: true }
// }
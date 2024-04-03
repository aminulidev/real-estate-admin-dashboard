"use server";
import * as z from "zod"
import {EditProfileSchema} from "@/schemas/dashboard-schemas";
import {currentUser} from "@/lib/currentUser";
import {db} from "@/lib/db";

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
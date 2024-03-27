"use server";
import { SignUpSchema } from "@/schemas/auth-schema";
import * as z from "zod";
import bcrypt from "bcryptjs";
import {db} from "@/lib/db";
import {getUserByEmail} from "@/data/user";

export const register = async (values: z.infer<typeof SignUpSchema>) => {
    const validatedFields = SignUpSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields!" };
    }

    const { name, email, password } = validatedFields.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already taken!" };
    }

    try {
        await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        return { success: "Sign up successfully!" };
    } catch (error) {
        // Handle any unexpected errors
        return { error: "Failed to create user." };
    }
};
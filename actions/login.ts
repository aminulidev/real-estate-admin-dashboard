"use server";
import * as z from "zod";
import {signIn} from "@/auth";
import {DEFAULT_LOGIN_REDIRECT} from "@/constatnts/routes";
import {AuthError} from "next-auth";
import {getUserByEmail} from "@/data/user";
import {SignInSchema} from "@/schemas/auth-schema";

export const login = async (values: z.infer<typeof SignInSchema>) => {
    const validatedFields = SignInSchema.safeParse(values);

    if (!validatedFields.success) {
        return {error: "Invalid fields!"}
    }

    const {email, password} = validatedFields.data;

    const existingUser = await getUserByEmail(email);
    if (!existingUser || !existingUser.email || !existingUser.password) {
        return {error: "Email does not exist!"}
    }

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        });

        return {success: "Login success!"};

    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials!"}
                default:
                    return {error: "Something went wrong!"}
            }
        }

        throw error;
    }
}
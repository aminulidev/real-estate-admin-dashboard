import * as z from "zod"

export const SignUpSchema = z.object({
    name: z.string().min(1, "Name is required!"),
    email: z.string().min(1, "Email is required").email("Invalid email!"),
    password: z.string().min(1, "Password is required!").min(8, "Password minimum 8 character long!"),
});

export const SignInSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email!"),
    password: z.string().min(1, "Password is required!"),
});
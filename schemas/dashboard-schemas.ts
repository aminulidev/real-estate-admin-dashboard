import * as z from "zod"

export const EditProfileSchema = z.object({
    name: z.string().min(1, "Name is required!"),
    phone: z.string().min(1, "Phone is required!").min(10, "Minimum 10 digit long!"),
    gender: z.string({required_error: "Please select a gender"}),
    dob: z.date({required_error: "A date of birth is required."}),
    address: z.string({
        required_error: "Please select address.",
    }),

});
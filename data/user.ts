import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    try {
        const user = await db.user.findUnique({ where: { email } });
        return user; // Return the user if found
    } catch (error) {
        console.error("Error fetching user by email:", error);
        throw error; // Rethrow the error to propagate it to the caller
    }
};

export const getUserById = async (id: string) => {
    try {
        const user = await db.user.findUnique({ where: { id } });
        return user; // Return the user if found
    } catch (error) {
        console.error("Error fetching user by email:", error);
        throw error; // Rethrow the error to propagate it to the caller
    }
}
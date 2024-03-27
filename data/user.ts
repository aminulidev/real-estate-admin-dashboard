import {db} from "@/lib/db";

export const getUserByEmail = async (email: string) => {
    try {
        await db.user.findUnique({where: {email}})
    } catch {return null}
}

export const getUserById = async (id: string) => {
    try {
        await db.user.findUnique({where: {id}})
    } catch { return null }
}
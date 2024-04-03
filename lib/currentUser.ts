import {auth} from "@/auth";
import {getUserById} from "@/data/user";

export const currentUser = async () => {
    const session = await auth();
    const id = session?.user.id;

    const user = await getUserById(id as string);

    return user;
}
import Image from "next/image";
import {logo} from "@/constatnts/dashboard/images";
import Link from "next/link";

export const Logo = () => {
    return (
        <Link href="/" className="hidden lg:flex items-center gap-2.5">
            <Image src={logo} alt="website logo" className="w-8" />
            <span className="text-2xl font-bold">Yariga</span>
        </Link>
    );
};
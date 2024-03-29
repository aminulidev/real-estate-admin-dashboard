import Image from "next/image";
import {logo} from "@/constatnts/dashboard/images";

export const Logo = () => {
    return (
        <div className="hidden lg:flex items-center gap-2.5">
            <Image src={logo} alt="website logo" className="w-8" />
            <span className="text-2xl font-bold">Yariga</span>
        </div>
    );
};
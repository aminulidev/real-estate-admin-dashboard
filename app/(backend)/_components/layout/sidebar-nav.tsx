"use client";
import {sidebarRoute} from "@/constatnts/dashboard/sidebar-route";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

export const SidebarNav = () => {
    const pathName = usePathname();

    return (
        <nav>
            {sidebarRoute.map((route) =>
                <Link
                    href={route.url} key={route.name}
                    className={cn(
                        "flex items-center gap-2.5 text-popover-foreground py-5 px-4 rounded-xl h-14 text-base font-bold group hover:bg-primary hover:text-card active:bg-primary active:text-card",
                        pathName === route.url ? "bg-primary text-card" : null
                    )}>
                    <route.icon className={cn(
                        "fill-popover-foreground transition-colors group-hover:fill-card",
                        pathName === route.url ? "fill-card" : null
                    )}/>
                    {route.name}
                </Link>
            )}
        </nav>
    );
};
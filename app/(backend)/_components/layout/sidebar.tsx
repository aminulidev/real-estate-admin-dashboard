import {SidebarNav} from "@/app/(backend)/_components/layout/sidebar-nav";

export const Sidebar = () => {
    return (
        <aside className="hidden fixed top-17.5 min-w-62.5 py-6 px-4 h-full bg-white lg:block">
            <SidebarNav />
        </aside>
    );
};
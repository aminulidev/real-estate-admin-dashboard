import {MenuBarIcon} from "@/components/icons/menu-bar-icon";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import {SidebarNav} from "@/app/(backend)/_components/layout/sidebar-nav";

export const MenuBarButton = () => {
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden">
                <MenuBarIcon />
            </SheetTrigger>
            <SheetContent side="left" className="pt-12">
                <SidebarNav />
            </SheetContent>
        </Sheet>

    );
};
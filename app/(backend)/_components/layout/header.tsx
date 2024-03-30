import {MenuBarButton} from "@/app/(backend)/_components/menu-bar-button";
import {UserButton} from "@/app/(backend)/_components/user-button";
import {Logo} from "@/components/logo";
import ThemeSwitcher from "@/app/(backend)/_components/theme-switcher";
import NotificationButton from "@/app/(backend)/_components/notification-button";

export const Header = () => {
    return (
        <header className="fixed z-50 w-full h-17.5 flex items-center justify-between bg-card py-3.5 px-4.5">
            <div className="flex items-center gap-4">
                <MenuBarButton />
                <Logo />
            </div>

            <div className="flex items-center gap-3.5">
                <UserButton />
                <NotificationButton />
                <ThemeSwitcher />
            </div>
        </header>
    );
};
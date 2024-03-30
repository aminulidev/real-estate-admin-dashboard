import {DashboardIcon} from "@/components/icons/dashboard-icon";
import {PropertyIcon} from "@/components/icons/property-icon";
import {AgentIcon} from "@/components/icons/agent-icon";
import {StartIcon} from "@/components/icons/start-icon";
import {MessageIcon} from "@/components/icons/message-icon";
import {ProfileIcon} from "@/components/icons/profile-icon";

export const sidebarRoute = [
    {name: "Dashboard", url: "/dashboard", icon: DashboardIcon},
    {name: "Property", url: "/property", icon: PropertyIcon},
    {name: "Agent", url: "/agent", icon: AgentIcon},
    {name: "Review", url: "/review", icon: StartIcon},
    {name: "Message", url: "/message", icon: MessageIcon},
    {name: "My Profile", url: "/my-profile", icon: ProfileIcon},
];
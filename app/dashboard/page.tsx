import {auth} from "@/auth";
import LogoutButton from "@/app/dashboard/_components/logout-button";

const DashboardPage = async () => {
    const sesstion = await auth();
    console.log(sesstion);

    return (
        <div>
            DashboardPage
            {JSON.stringify(sesstion)}

            <LogoutButton>Logout</LogoutButton>
        </div>
    );
};

export default DashboardPage;
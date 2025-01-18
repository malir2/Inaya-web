import { useState } from "react";
import Overview from "../components/Overview";
import SideBaar from "../components/SideBaar";
import { useTheme } from "../context/ThemeChanger";
import Profile from "../components/Profile";
import Details from "../components/Details";

function Main() {
    // State to manage the active tab
    const [activeTab, setactiveTab] = useState<number | null>(0);

    // Get the current theme from the ThemeChanger context
    const { theme } = useTheme();

    return (
        <>
            <div className={`flex justify-center lg:justify-between lg:gap-4 w-full ${theme === 'dark' ? "bg-light" : "blue-background-image"} h-auto py-3 px-5`}>
                <SideBaar activeTab={activeTab} setactiveTab={setactiveTab} />
                {activeTab === 0 && <div className="overflow-x-auto">
                    <Overview />
                </div>}
                {activeTab === 1 && <Details />}
                {activeTab === 4 && <Profile />}
            </div>
        </>
    )
}

export default Main;
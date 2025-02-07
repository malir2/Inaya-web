import { useState } from "react";
import Overview from "../components/Overview";
import SideBaar from "../components/SideBaar";
import { useTheme } from "../context/ThemeChanger";
import Profile from "../components/Profile";
import Details from "../components/Details";
import New from "../components/New";
import ProductOverview from "../components/ProductOverview";

function Main() {
    // State to manage the active tab
    const [activeTab, setactiveTab] = useState<number | null>(0);

    // Get the current theme from the ThemeChanger context
    const { theme } = useTheme();

    return (
        <>
            <div className={`flex justify-center lg:justify-between lg:gap-4 w-full ${theme === 'dark' ? "bg-light" : "blue-background-image"} h-full xl:py-3 px-2`}>
                <SideBaar activeTab={activeTab} setactiveTab={setactiveTab} />
                {activeTab === 0 && <div className="overflow-x-auto">
                    <Overview />
                </div>}
                {activeTab === 6 && <Details />}
                {activeTab === 2 && <ProductOverview />}
                {activeTab === 4 && <New />}
                {activeTab === 5 && <Profile />}
            </div>
        </>
    )
}

export default Main;
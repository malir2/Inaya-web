import { useState } from "react";
import Overview from "../components/Overview";
import SideBaar from "../components/SideBaar";
import { useTheme } from "../context/ThemeChanger";
import blueBg from "../assets/blue-bg.png";

function Home() {


    const [activeTab, setactiveTab] = useState<number | null>(0);


    const { theme } = useTheme();

    console.log(theme);

    return (
        <>
            <div className={`flex justify-center lg:justify-between lg:gap-4 w-full ${theme === 'dark' ? "bg-light" : "blue-background-image"} h-auto py-3 px-5`}>                <SideBaar activeTab={activeTab} setactiveTab={setactiveTab} />
                <div className="overflow-x-auto">
                    <Overview />
                </div>
            </div>
        </>
    )
}

export default Home
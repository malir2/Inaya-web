import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeChanger";
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

export default function Overview() {
    const { toggleTheme, theme } = useTheme();
    return (
        <div>
            {/* Header Section */}
            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
                <h4 className="text-white font-semibold ms-6 lg:ms-0">Commodities Overview</h4>
                <div className="flex items-center justify-end gap-2 md:gap-5">
                    {/* Search Input */}
                    <div className={`${theme === "dark" ? "bg-[#868686]" : "bg-blueLighter"} px-2 py-1 rounded-xl`}>
                        <span className={`fa-solid fa-magnifying-glass ${theme === "dark" ? "text-yellow" : "text-blue"} mr-3`}></span>
                        <input type="text" placeholder="Type here..." className={`${theme === "dark" ? "bg-[#868686] caret-yellow" : "bg-blueLighter caret-blue"} w-[8rem] md:w-[12rem] focus-visible:outline-0 text-white focus-visible::border-none`} />
                    </div>
                    {/* User Icon */}
                    <Link to="/sign-in">
                        <div>
                            <span className={`fa-solid fa-user ${theme === "dark" ? "text-yellow" : "text-white"}`}></span>
                            <span className="text-white ml-3">Sign In</span>
                        </div>
                    </Link>
                    {/* Settings Icon */}
                    <div>
                        <span onClick={toggleTheme} className={`fa-solid fa-gear ${theme === "dark" ? "text-yellow" : "text-white"} cursor-pointer`}></span>
                    </div>
                    {/* Notifications Icon */}
                    <div>
                        <span className={`fa-solid fa-bell ${theme === "dark" ? "text-yellow" : "text-white"}`}></span>
                    </div>
                </div>
            </div>
            {/* Welcome Section */}
            <div className="relative flex w-auto mt-10">
                <h1 className="text-white font-bold text-[2rem]">Welcome Jhon 👋</h1>
                <div className="absolute bottom-[-1rem] left-[-10px] right-[-10px] w-[100%] md:w-[40%] rounded-xl h-[0.3rem] bg-yellow"></div>
            </div>
            {/* First Row Component */}
            <div className="mt-10">
                <FirstRow />
            </div>
            {/* Second Row Component */}
            <div className="mt-10 w-[100%] overflow-auto scrollbar">
                <SecondRow />
            </div>
        </div>
    )
}

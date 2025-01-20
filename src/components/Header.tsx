import Switch from "./ToggleButton";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeChanger";

interface CircularProgressProps {
    page: String;
}

const Header: React.FC<CircularProgressProps> = ({
    page
}) => {
    const { toggleTheme, theme } = useTheme();

    // Function to format the page title
    const formatPageTitle = (page: String) => {
        if (page.includes("/")) {
            const parts = page.split("/");
            return (
                <>
                    <span className="text-gray-400 font-normal">{parts[0].trim()}</span> / {parts[1].trim()}
                </>
            );
        }
        return page;
    };

    return (
        <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:items-center justify-between">
            <h4 className="text-white font-semibold ms-6 lg:ms-0 text-xl">{formatPageTitle(page)}</h4>
            <div className="flex items-center justify-end gap-2 md:gap-5">
                {/* Search Input */}
                <div className={`${theme === "dark" ? "bg-[#868686]" : "bg-white"} px-2 py-1 rounded-2xl`}>
                    <span className={`fa-solid fa-magnifying-glass ${theme === "dark" ? "text-yellow" : "text-blue"} mr-3`}></span>
                    <input type="text" placeholder="Type here..." className={`${theme === "dark" ? "bg-[#868686] caret-yellow" : "bg-white caret-blue"} placeholder:text-${theme === "dark" ? "white" : "dark"} font-poppins w-[6rem] md:w-[12rem] focus-visible:outline-0 text-white focus-visible::border-none text-sm`} />
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
                    <Switch />
                </div>
                <div>
                    <span onClick={toggleTheme} className={`fa-solid fa-gear ${theme === "dark" ? "text-yellow" : "text-white"} cursor-pointer`}></span>
                </div>
                {/* Notifications Icon */}
                <div>
                    <span className={`fa-solid fa-bell ${theme === "dark" ? "text-yellow" : "text-white"}`}></span>
                </div>
            </div>
        </div>
    )
}

export default Header
import { useTheme } from "../context/ThemeChanger";
import FirstRow from "./FirstRow";
import Header from "./Header";
import SecondRow from "./SecondRow";

// Overview Component
export default function Overview() {
    // Get the current theme from the ThemeChanger context
    const { theme } = useTheme();

    return (
        <div>
            {/* Header Section */}
            <Header page={"Commodities Overview"} />
            {/* Welcome Section */}
            <div className="relative flex w-auto mt-3">
                <h1 className="text-white font-bold text-[2rem]">Welcome Jhon 👋</h1>
            </div>
            <div className={`w-[70%] xl:w-[30%] xxl:w-[20%] h-[0.33rem] my-1 ${theme === "blue" ? "bg-custom-gradient" : "bg-[#F5A32E]"}`}></div>
            {/* First Row Component */}
            <div className="mt-3">
                <FirstRow />
            </div>
            {/* Second Row Component */}
            <div className="mt-5 md:mt-7 w-[100%] overflow-auto scrollbar">
                <SecondRow />
            </div>
        </div>
    )
}

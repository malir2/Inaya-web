
// import { useTheme } from "../context/ThemeChanger";
import FirstRow from "./FirstRow";
import Header from "./Header";
import SecondRow from "./SecondRow";


export default function Overview() {
    // const { theme } = useTheme();
    return (
        <div>
            {/* Header Section */}
            <Header />
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

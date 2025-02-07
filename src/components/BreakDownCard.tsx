import { useTheme } from "../context/ThemeChanger";

interface BreakDownCardProps {
    percent: number;
    product: string;
}

const BreakDownCard: React.FC<BreakDownCardProps> = ({ percent, product }) => {
    const { theme } = useTheme();
    return (
        <div className={`min-w-[22rem] min-h-[3rem] ${theme === "dark" ? "bg-[#404040]" : "bg-[#2C4A70]"} grid grid-cols-2 items-center px-4 rounded-xl`}>
            <p className="text-lg uppercase text-white">{product}</p>
            <div className="flex justify-end items-center">
                <div className="ml-auto shadow-black w-[85%] h-[1rem] bg-gradient-to-r from-[#00A35E] via-[#E6E939] to-[#FF0000] rounded-2xl mr-0 xxl:mr-5 relative">
                    <span style={{ left: `${percent}%` }} className={`absolute top-[-12%] w-[0.5rem] rounded-b-md bg-gray-600 h-[1.3rem]`}></span>
                </div>
            </div>
        </div>
    );
};

export default BreakDownCard;
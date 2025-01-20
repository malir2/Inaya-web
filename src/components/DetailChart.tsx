import { useTheme } from "../context/ThemeChanger";
import "../css/detail.css";

const TrendChart = () => {

    const { theme } = useTheme();

    const data = [10, 20, 50, 40, 70, 90, 100, 80, 60]; // Sample data for bars

    return (
        <div className={`${theme === "dark" ? "bg-dark" : "profile-blue"} text-white rounded-2xl pt-2 pb-3 px-4 mt-3 md:mt-0 xl:mt-7 xxl:mt-1`}>
            <h3 className="font-semibold text-[1.3rem] xl:text-[1rem] xxl:text-[2.3rem] mb-2">Trend over last year</h3>
            <div className={`flex items-end gap-4 px-5 py-4 rounded-xl ${theme === "dark" ? "bg-light" : "bg-blue/20"}`}>
                {/* Y-axis labels */}
                <div className="flex flex-col text-white h-20 translate-y-[-0.7rem] text-sm leading-[1.1rem]">
                    <span>100</span>
                    <span>80</span>
                    <span>60</span>
                    <span>40</span>
                    <span>20</span>
                    <span>0</span>
                </div>
                {/* Bar chart */}
                <div className="flex justify-between items-end w-full space-x-2 h-20 detail-chart">
                    {data.map((value, index) => (
                        <div
                            key={index}
                            className={`w-2 rounded-md ${theme === "dark" ? "chart-line-dark" : "chart-line-blue"} ${index === data.length - 1 ? "bg-yellow-500" : "bg-white"
                                }`}
                            style={{
                                height: `${(value / 100) * 100}%`, // Scale height dynamically
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrendChart;

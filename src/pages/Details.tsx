import { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import { useTheme } from "../context/ThemeChanger";
import "../css/detail.css";

function Details() {
    const { theme } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTop, setIsTop] = useState(true);
    const [isBottom, setIsBottom] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const dummyData = [
        {
            title: "Cost Intelligence",
            description: "By December 2024, gold prices likely range USD 2200-2500/oz, driven by geopolitical tensions, economic uncertainty, and strong central bank demand. Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar."
        },
        {
            title: "Market Analysis",
            description: "The market is expected to see significant growth in the coming months due to increased demand and favorable economic conditions."
        },
        {
            title: "Economic Forecast",
            description: "Economic indicators suggest a positive outlook for the next quarter, with potential for increased investment and consumer spending."
        },
        {
            title: "Economic Forecast",
            description: "Economic indicators suggest a positive outlook for the next quarter, with potential for increased investment and consumer spending."
        },
        {
            title: "Economic Forecast",
            description: "Economic indicators suggest a positive outlook for the next quarter, with potential for increased investment and consumer spending."
        }
    ];

    const handleUpClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: -200, behavior: 'smooth' });
        }
    };

    const handleDownClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: 200, behavior: 'smooth' });
        }
    };

    const handleScroll = () => {
        if (scrollRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
            setIsTop(scrollTop === 0);
            setIsBottom(scrollTop + clientHeight >= scrollHeight);
        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
            return () => {
                scrollElement.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <div className="w-full">
            <Header />
            <div className="mt-5 grid grid-cols-12 sm:gap-12">
                <div className="col-span-12 xxl:col-span-8">
                    <div className="mt-10 xxl:mt-0 w-full flex flex-col md:flex-row gap-3 xxl:gap-5">
                        <div className="rounded-2xl md:w-1/2 p-3 xxl:p-5 h-[100%] flex flex-col detail-picture-section">
                            <div className="mb-auto">
                                <div className="inline-flex items-center gap-2 bg-white rounded-xl px-3">
                                    <p>Analysis status:</p>
                                    <div className="w-[1rem] h-[1rem] rounded-full bg-[#0FDA2A]"></div>
                                </div>
                                <h1 className="mt-0 text-white text-[2rem] xl:text-[3.4rem] font-medium font-poppins">GOLD</h1>
                            </div>
                            <p className="mt-5 text-white">Last refreshed: 5 minutes ago</p>
                        </div>
                        <div className={`${theme === "dark" ? "bg-dark" : "profile-blue"} w-[90%] md:w-[40%] rounded-2xl p-3 xxl:p-5 relative flex flex-col`}>
                            <div className="w-1/2 sm:w-full md:w-1/2 mb-auto">
                                <h1 className="mt-0 text-white text-[1.8rem] xl:text-[2.4rem] font-medium font-poppins">Perception
                                    Index</h1>
                            </div>
                            <p className="text-white mt-[3rem] md:mt-0">From all price drivers</p>
                            <div className="absolute top-[50%] translate-y-[-50%] left-[65%] sm:left-[86%] md:left-[70%] xxl:left-[60%]">
                                <CircularProgress percentage={67} riskLabel="Medium High Risk" />
                            </div>
                        </div>

                    </div>
                    <div className={`rounded-lg p-5 ${theme === "dark" ? "bg-dark" : "profile-blue"} mt-10`}>
                        <h1 className="text-white font-bold text-3xl">Cost Intelligence</h1>
                        <p className="mt-2 text-gray-400">By December 2024, gold prices likely range USD 2200-2500/oz, driven by geopolitical tensions, economic uncertainty, and strong central bank demand.
                            Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar.</p>
                    </div>

                    {/* Analysis Section */}
                    <div className={`rounded-lg p-5 overflow-hidden ${theme === "dark" ? "bg-dark" : "profile-blue"} mt-5`}>
                        <div className="mb-5 flex justify-between items-center">
                            <h1 className="text-white font-bold text-3xl">Price Driver Risk Analysis</h1>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleUpClick}
                                    disabled={isTop}
                                    className={`${theme === "blue" ? "bg-white text-blue" : "bg-light text-yellow"} px-2 py-1 rounded ${isTop ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    <span className="fa-solid fa-angle-up text-xl"></span>
                                </button>
                                <button
                                    onClick={handleDownClick}
                                    disabled={isBottom}
                                    className={`${theme === "blue" ? "bg-blueLight text-white" : "bg-light text-yellow"} px-2 py-1 border-white rounded ${isBottom ? "opacity-50 cursor-not-allowed" : ""}`}
                                >
                                    <span className="fa-solid fa-angle-down text-xl"></span>
                                </button>
                            </div>
                        </div>
                        <div ref={scrollRef} className="overflow-auto h-[20rem] flex flex-col gap-5 scrollbar">
                            {dummyData.map((data, index) => (
                                <div key={index} className={`rounded-lg p-3 ${theme === "dark" ? "bg-light" : "bg-blue/10"}`}>
                                    <div className="flex justify-between items-center">
                                        <h1 className="text-white text-2xl">{data.title}</h1>
                                        <div className="w-[20%] h-[1.5rem] bg-gradient-to-r from-[#00A35E] via-[#E6E939] to-[#FF0000] rounded-2xl mr-5 relative">
                                            <span className="absolute left-[50%] top-[-5%] w-[0.3rem] bg-gray-700 h-[1.3rem]"></span>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-400">{data.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="border border-green-600 col-span-4"></div>
            </div>
        </div>
    )
}


interface CircularProgressProps {
    percentage: number;
    riskLabel: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
    percentage,
    riskLabel,
}) => {
    const radius = 16; // Radius of the circle
    const circumference = 2 * Math.PI * radius; // Circumference of the circle
    const strokeDashoffset =
        circumference - (percentage / 100) * circumference; // Anticlockwise progress

    return (
        <div className="relative w-auto h-auto rounded-full overflow-hidden">
            {/* SVG Circle */}
            <svg
                className="absolute transform rotate-90"
                viewBox="0 0 36 36"
            >
                {/* Background Circle */}
                <circle
                    cx="18"
                    cy="18"
                    r={radius}
                    strokeWidth="2.5"
                    fill="transparent"
                    stroke="#2d2d2d" // Background color
                />
                {/* Gradient Progress Circle */}
                <circle
                    cx="18"
                    cy="18"
                    r={radius}
                    strokeWidth="2.5"
                    fill="transparent"
                    stroke="url(#gradient)" // Applying gradient
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                />
                {/* Defining Gradient */}
                <defs>
                    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#f59e0b" /> {/* Amber */}
                        <stop offset="80%" stopColor="#2d2d2d" /> {/* Amber */}
                    </linearGradient>
                </defs>
            </svg>

            {/* Inner Content */}
            <div className="text-center bg-dark/70 w-[9rem] h-[9rem] xl:w-[12rem] xl:h-[12rem] xxl:w-[15rem] xxl:h-[15rem] flex items-center flex-col justify-center rounded-full">
                <div className="text-amber-500 text-lg">⚠️</div>
                <div className="text-[1rem] xl:text-[2rem] xxl:text-[4rem] font-bold text-white font-poppins">{percentage}%</div>
                <div className="text-[0.7rem] xl:text-sm text-gray-400">{riskLabel}</div>
            </div>

        </div>
    );
};

export default Details;
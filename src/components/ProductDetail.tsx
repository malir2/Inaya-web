import { useRef } from "react"
import { useTheme } from "../context/ThemeChanger"
import CircularProgress from "./CircularProgress"
import TrendChart from "./DetailChart"
import Header from "./Header"
import BreakDownCard from "./BreakDownCard"

function ProductDetail() {

    const breakDownCardData = [
        { percent: 30, product: "COCOA SOLIDS" },
        { percent: 50, product: "HAZELNUTS" },
        { percent: 70, product: "SUCROSE" },
        { percent: 30, product: "COCOA SOLIDS" },
        { percent: 50, product: "HAZELNUTS" },
        { percent: 70, product: "SUCROSE" },
        { percent: 30, product: "COCOA SOLIDS" },
        { percent: 50, product: "HAZELNUTS" },
    ];

    const { theme } = useTheme()
    const scrollRef2 = useRef<HTMLDivElement>(null);
    const handleUpClick = (scrollRef: React.RefObject<HTMLDivElement>) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: -200, behavior: 'smooth' });
        }
    };

    // Handle scroll down
    const handleDownClick = (scrollRef: React.RefObject<HTMLDivElement>) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ top: 200, behavior: 'smooth' });
        }
    };

    const dummyData2 = [
        {
            title: "Implement Hedging Strategies",
            description: "Use futures and options to hedge against gold price fluctuations and reduce exposure."
        },
        {
            title: "Diversify Investment Portfolio",
            description: "Spread investments across various assets to mitigate risks from gold price volatility and economic uncertainties."
        },
        {
            title: "Employ Currency Hedging",
            description: "Use currency derivatives to protect against US dollar fluctuations impacting gold investments."
        },
        {
            title: "Monitor Central Bank Actions",
            description: "Stay informed on central bank gold purchases to adjust strategies based on market influences."
        },
        {
            title: "Stay Alert to Geopolitical Events",
            description: "Regularly assess geopolitical developments to proactively manage risks affecting gold prices."
        },
        {
            title: "Anticipate Interest Rate Changes",
            description: "Adjust gold positions in response to potential US interest rate cuts influencing opportunity costs."
        },
        {
            title: "Use Stop-Loss Orders",
            description: "Set stop-loss orders to limit potential losses if gold prices fall unexpectedly."
        },
    ];

    const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: -200, behavior: "smooth" });
        }
    };

    const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
        if (ref.current) {
            ref.current.scrollBy({ left: 200, behavior: "smooth" });
        }
    };

    const productBreakdownRef = useRef<HTMLDivElement>(null);

    return (
        <div className="w-full">
            <Header page={"Commodities Overview  /  Commodity Details"} />
            <div className="mt-1 xxl:mt-5 grid grid-cols-12 sm:gap-5">
                <div className="col-span-12 xl:col-span-8">
                    <div className="mt-3 xxl:mt-0 w-full flex flex-col md:flex-row gap-3 xxl:gap-5">
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
                        <div className={`${theme === "dark" ? "bg-dark" : "profile-blue"} w-[100%] sm:w-[90%] md:w-[40%] rounded-2xl p-3 xxl:p-5 relative flex flex-col`}>
                            <div className="w-1/2 sm:w-full md:w-1/2 mb-auto">
                                <h1 className="mt-0 text-white text-[1.8rem] lg:text-[2rem] xxl:text-[2.4rem] font-medium font-poppins">Perception
                                    Index</h1>
                            </div>
                            <p className="text-white mt-[3rem] md:mt-0">From all price drivers</p>
                            <div className="absolute top-[50%] translate-y-[-50%] left-[60%] min-[407px]:left-[70%] sm:left-[86%] md:left-[70%] xl:left-[65%] xxl:left-[63%]">
                                <CircularProgress percentage={59} theme={theme} />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-span-12 xl:col-span-4 xl:mt-0 ml-0 xl:ml-[2rem] min-[1437px]:ml-[1rem] min-[1505px]:ml-0 xxl:mt-0">
                    <TrendChart />
                </div>
            </div>
            <div className="mt-3 xl:mt-7 grid grid-rows-1 grid-cols-12 gap-3 items-start lg:gap-5">
                <div className="col-span-12 xl:col-span-8 h-auto section-1">
                    <div className={`rounded-2xl pt-1 pb-3 px-5 ${theme === "dark" ? "bg-dark" : "profile-blue"}`}>
                        <h1 className="text-white font-bold text-[1.9rem] xxl:text-[2.2rem]">Cost Intelligence</h1>
                        <p className="mt-0 text-gray-400">Cocoa and hazelnut prices are projected to rise by March 2025 due to supply issues from crop diseases and adverse weather affecting West African and Azerbaijani yields, coupled with strong global demand.
                            Palm oil faces price volatility from labor shortages and biofuel demand, while sucrose prices may stabilize as Asia's economic growth offsets declining demand elsewhere.4, gold prices likely range USD 2200-2500/oz, driven by geopolitical tensions, economic uncertainty, and strong central bank demand.
                            Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar.</p>
                    </div>


                    {/* Analysis Section */}
                    <div className="grid grid-cols-12">
                        <div className={`rounded-2xl px-5 pb-5 pt-3 col-span-12 ${theme === "dark" ? "bg-dark" : "profile-blue"} mt-3`}>
                            <div className="flex justify-between items-center">
                                <h1 className="text-white font-bold text-[1.2rem] lg:text-[1.9rem]">Product Breakdown</h1>
                                <div className="flex gap-2">
                                    <button
                                        className={`${theme === "blue" ? "bg-white text-blue" : "bg-yellow text-light"} px-2 py-1 rounded-lg`}
                                        onClick={() => scrollLeft(productBreakdownRef)}
                                    >
                                        <span className="fa-solid fa-angle-left text-xl"></span>
                                    </button>
                                    <button
                                        className={`${theme === "blue" ? "bg-blueLight text-white" : "bg-yellow text-light"} px-2 py-1 border-white rounded-lg`}
                                        onClick={() => scrollRight(productBreakdownRef)}
                                    >
                                        <span className="fa-solid fa-angle-right text-xl"></span>
                                    </button>
                                </div>
                            </div>
                            <div ref={productBreakdownRef} className="flex items-center overflow-auto mt-6 gap-5 scrollbar">
                                {breakDownCardData.map((card) => (
                                    <BreakDownCard
                                        key={card.product}
                                        percent={card.percent}
                                        product={card.product}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-4 mt-3 md:mt-0 section-2">
                    {/* Side bar slider */}
                    <div className={`rounded-2xl p-5 overflow-hidden ${theme === "dark" ? "bg-dark" : "profile-blue"}`}>
                        <div className="mb-2 flex justify-between items-center">
                            <h1 className="text-white font-bold text-xl text-[1.7rem] xxl:text-[2.1rem]">Recommendations</h1>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleUpClick(scrollRef2)}
                                    className={`${theme === "blue" ? "bg-white text-blue" : "bg-yellow text-light"} px-2 py-1 rounded-lg`}
                                >
                                    <span className="fa-solid fa-angle-up text-xl"></span>
                                </button>
                                <button
                                    onClick={() => handleDownClick(scrollRef2)}
                                    className={`${theme === "blue" ? "bg-blueLight text-white" : "bg-yellow text-light"} px-2 py-1 border-white rounded-lg`}
                                >
                                    <span className="fa-solid fa-angle-down text-xl"></span>
                                </button>
                            </div>
                        </div>
                        <div ref={scrollRef2} className="overflow-auto h-[21rem] xxl:h-[17rem] flex flex-col scrollbar">
                            {dummyData2.map((data, index) => (
                                <div key={index} className="py-3 border-b-2 border-gray-600 sidebar-data-div">
                                    <div className="flex items-center">
                                        <span className="fa-solid fa-rocket text-white text-sm"></span>
                                        <div className="flex justify-between items-center">
                                            <h1 className="text-white
                                        text-lg xxl:text-2xl ml-3 uppercase font-medium">{data.title}</h1>
                                        </div>
                                    </div>
                                    <p className="mt-2 ml-5 text-gray-400">{data.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default ProductDetail
import { useRef } from "react";
import Header from "./Header";
import { useTheme } from "../context/ThemeChanger";
import "../css/detail.css";
import TrendChart from "./DetailChart";
import CircularProgress from "./CircularProgress";

function Details() {
    // Theme context
    const { theme } = useTheme();
    // References for scrollable containers
    const scrollRef1 = useRef<HTMLDivElement>(null);
    const scrollRef2 = useRef<HTMLDivElement>(null);

    // Dummy data for analysis

    const dummyData = [
        {
            title: "ECONOMIC UNCERTAINTY ",
            description: "Gold prices for December 2024 are expected to rise due to economic and geopolitical uncertainties. The escalation of tensions, such as the Israel-Palestine conflict turning into war, increases market volatility and boosts gold’s appeal as a safe haven, potentially causing short-term price spikes. Global economic uncertainty and lower interest rates, which reduce the opportunity cost of holding gold, further drive demand. While a strong US dollar can pressure gold, recent rebounds in both assets reflect safe-haven demand. If tensions persist and interest rates remain low, gold could reach new highs.",
            score: '40'
        },
        {
            title: "GEOPOLITICAL TENSIONS",
            description: "In December 2024, gold prices are influenced by geopolitical tensions and economic factors. Rising tensions in the Middle East increase demand for gold as a hedge against uncertainty, supporting higher prices in the short term. Mixed U.S. economic data, including a weaker labor market, could lead to expectations for interest rate cuts, further boosting gold prices by reducing the opportunity cost of holding bullion. Historically, gold prices rise as real yields on U.S. Treasuries fall. Market forecasts suggest gold could reach $3000 per ounce in the next 6 to 12 months, driven by geopolitical and economic factors.",
            score: '60'
        },
        {
            title: "CENTRAL BANK GOLD RESERVES",
            description: "In December 2024, gold prices are influenced by geopolitical tensions and economic factors. Rising tensions in the Middle East increase demand for gold as a hedge against uncertainty, supporting higher prices in the short term. Mixed U.S. economic data, including a weaker labor market, could lead to expectations for interest rate cuts, further boosting gold prices by reducing the opportunity cost of holding bullion. Historically, gold prices rise as real yields on U.S. Treasuries fall. Market forecasts suggest gold could reach $3000 per ounce in the next 6 to 12 months, driven by geopolitical and economic factors.",
            score: '20'
        },
        {
            title: "ECONOMIC UNCERTAINTY ",
            description: "Gold prices for December 2024 are expected to rise due to economic and geopolitical uncertainties. The escalation of tensions, such as the Israel-Palestine conflict turning into war, increases market volatility and boosts gold’s appeal as a safe haven, potentially causing short-term price spikes. Global economic uncertainty and lower interest rates, which reduce the opportunity cost of holding gold, further drive demand. While a strong US dollar can pressure gold, recent rebounds in both assets reflect safe-haven demand. If tensions persist and interest rates remain low, gold could reach new highs.",
            score: '70'
        },
        {
            title: "GEOPOLITICAL TENSIONS",
            description: "In December 2024, gold prices are influenced by geopolitical tensions and economic factors. Rising tensions in the Middle East increase demand for gold as a hedge against uncertainty, supporting higher prices in the short term. Mixed U.S. economic data, including a weaker labor market, could lead to expectations for interest rate cuts, further boosting gold prices by reducing the opportunity cost of holding bullion. Historically, gold prices rise as real yields on U.S. Treasuries fall. Market forecasts suggest gold could reach $3000 per ounce in the next 6 to 12 months, driven by geopolitical and economic factors.",
            score: "40"
        },
        {
            title: "CENTRAL BANK GOLD RESERVES",
            description: "In December 2024, gold prices are influenced by geopolitical tensions and economic factors. Rising tensions in the Middle East increase demand for gold as a hedge against uncertainty, supporting higher prices in the short term. Mixed U.S. economic data, including a weaker labor market, could lead to expectations for interest rate cuts, further boosting gold prices by reducing the opportunity cost of holding bullion. Historically, gold prices rise as real yields on U.S. Treasuries fall. Market forecasts suggest gold could reach $3000 per ounce in the next 6 to 12 months, driven by geopolitical and economic factors.",
            score: "30"
        },
    ];

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

    // Handle scroll up
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
                                <CircularProgress percentage={67} theme={theme} />
                            </div>
                        </div>

                    </div>

                </div>
                <div className="col-span-12 xl:col-span-4 xl:mt-0 ml-0 xl:ml-[2rem] min-[1437px]:ml-[1rem] min-[1505px]:ml-0 xxl:mt-0">
                    <TrendChart />
                </div>
            </div>
            <div className="mt-3 xl:mt-5 grid grid-cols-12 sm:gap-5">
                <div className="col-span-12 xl:col-span-8">
                    <div className={`rounded-2xl pt-1 pb-3 px-5 ${theme === "dark" ? "bg-dark" : "profile-blue"}`}>
                        <h1 className="text-white font-bold text-[1.9rem] xxl:text-[2.2rem]">Cost Intelligence</h1>
                        <p className="mt-0 text-gray-400">By December 2024, gold prices likely range USD 2200-2500/oz, driven by geopolitical tensions, economic uncertainty, and strong central bank demand.
                            Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar.</p>
                    </div>


                    {/* Analysis Section */}
                    <div className={`rounded-2xl px-5 pb-3 pt-1 overflow-hidden ${theme === "dark" ? "bg-dark" : "profile-blue"} mt-3`}>
                        <div className="mb-1 flex justify-between items-center">
                            <h1 className="text-white font-bold text-[1.9rem] xxl:text-[2.2rem]">Price Driver Risk Analysis</h1>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleUpClick(scrollRef1)}
                                    className={`${theme === "blue" ? "bg-white text-blue" : "bg-yellow text-light"} px-2 py-1 rounded-lg`}
                                >
                                    <span className="fa-solid fa-angle-up text-xl"></span>
                                </button>
                                <button
                                    onClick={() => handleDownClick(scrollRef1)}
                                    className={`${theme === "blue" ? "bg-blueLight text-white" : "bg-yellow text-light"} px-2 py-1 border-white rounded-lg`}
                                >
                                    <span className="fa-solid fa-angle-down text-xl"></span>
                                </button>
                            </div>
                        </div>
                        <div ref={scrollRef1} className="overflow-auto h-[20rem] xl:min-h-[34.85rem] flex flex-col gap-5 scrollbar">
                            {dummyData.map((data, index) => (
                                <div key={index} className={`rounded-2xl p-3 ${theme === "dark" ? "bg-light" : "bg-blue/10"}`}>
                                    <div className="flex justify-between flex-wrap items-center">
                                        <h1 className="text-white text-xl sm:text-2xl">{data.title}</h1>
                                        <div className="ml-auto shadow-black w-[50%] sm:w-[20%] xxl:w-[18%] h-[1.3rem] bg-gradient-to-r from-[#00A35E] via-[#E6E939] to-[#FF0000] rounded-2xl mr-0 xxl:mr-5 relative">
                                            <span style={{ left: `${data?.score}%` }} className={`absolute top-[-12%] w-[0.5rem] rounded-b-md bg-gray-600 h-[1.3rem]`}></span>
                                        </div>
                                    </div>
                                    <p className="mt-2 text-gray-400">{data.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xl:col-span-4 mt-3 md:mt-0">
                    {/* Side bar slider */}
                    <div className={`rounded-2xl p-5 overflow-hidden ${theme === "dark" ? "bg-dark" : "profile-blue"}`}>
                        <div className="mb-0 flex justify-between items-center">
                            <h1 className="text-white font-bold text-xl text-[1.7rem] xxl:text-[2.1rem]">Risk Mitigation Actions</h1>
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
                        <div ref={scrollRef2} className="overflow-auto h-[20rem] xl:min-h-[44.5rem] flex flex-col scrollbar">
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

        </div>
    )
}




export default Details;
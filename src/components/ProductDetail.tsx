import { useRef, useState } from "react";
import { useTheme } from "../context/ThemeChanger";
import CircularProgress from "./CircularProgress";
import TrendChart from "./DetailChart";
import Header from "./Header";
import BreakDownCard from "./BreakDownCard";
import ParaSection from "./ParaSection";
import Nutella from "../assets/nutella.png";

function ProductDetail() {
    const [tabs, setTab] = useState<number>(1);

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

    const paraSectionData = [
        {
            heading: "ECONOMIC UNCERTAINTY",
            content: "Cocoa prices are set to rise by December 2024 due to the impact of crop diseases like Black Pod and Witches' Broom, historically reducing yields by up to 30% in West Africa, the primary cocoa-producing region. Fixed pricing mechanisms in Ghana and Côte d'Ivoire exacerbate supply risks, limiting farmers' ability to respond to international market fluctuations and heightening supply shortages. While efforts like genetic analysis and disease-resistant varieties are underway, they offer no immediate relief. The ICCO's August 2024 report noted low prices from surplus inventory, but as reserves dwindle and manufacturing demand rises, December prices are expected to climb. Growers are urged to adopt better hygiene practices and fungicides to mitigate short-term risks. Combined with regulatory hurdles and increased demand, these factors point to continued upward price trends into early 2025.",
            percent: 70,
        },
        {
            heading: "POLITICAL INSTABILITY",
            content: "Since 2016, cocoa prices have faced global depression, with a 20% drop from their 2015 peak. Political instability now threatens further disruptions, with December 2024 bringing heightened supply chain risks, exacerbated by lingering COVID-19 impacts. The Organic Cocoa Market Outlook (2024-2031) highlights growth opportunities driven by millennial demand and emerging markets, yet geopolitical tensions and trade disruptions continue to exert downward price pressures. Technological advances are improving efficiency, but fluctuating raw material prices, supply chain challenges, and inflation remain key concerns. Regulatory compliance offers mixed prospects, while geopolitical motives further complicate supply-demand dynamics. Despite projected revenue growth at a healthy CAGR, rising costs and competitive pressures suggest potential volatility and upward price trends in the near term, with cocoa prices likely increasing in the months ahead.",
            percent: 70,
        },
    ];

    const { theme } = useTheme();
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
            <Header page={"Products Overview  /  Product Details"} />
            <div className="mt-1 xxl:mt-5 grid grid-cols-12 sm:gap-5">
                <div className="col-span-12 xl:col-span-8">
                    <div className="mt-3 xxl:mt-0 w-full flex flex-col md:flex-row gap-3 xxl:gap-5">
                        <div style={{ backgroundImage: `url(${Nutella})` }} className="rounded-2xl md:w-1/2 p-3 xxl:p-5 h-[100%] flex flex-col detail-picture-section">
                            <div className="mb-auto">
                                <div className="inline-flex items-center gap-2 bg-white rounded-xl px-3">
                                    <p>Analysis status:</p>
                                    <div className="w-[1rem] h-[1rem] rounded-full bg-[#0FDA2A]"></div>
                                </div>
                                <h1 className="mt-0 text-white text-[2rem] xl:text-[3.4rem] font-medium font-poppins">Nutella</h1>
                            </div>
                            <p className="mt-5 text-white">Last refreshed: 5 minutes ago</p>
                        </div>
                        <div className={`${theme === "dark" ? "bg-dark" : "profile-blue"} w-[100%] sm:w-[90%] md:w-[40%] rounded-2xl p-3 xxl:p-5 relative flex flex-col`}>
                            <div className="w-1/2 sm:w-full md:w-1/2 mb-auto">
                                <h1 className="mt-0 text-white text-[1.8rem] lg:text-[2rem] xxl:text-[2.4rem] font-medium font-poppins">Intelligence Score</h1>
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
                        <h1 className="text-white font-bold text-[1.9rem] xxl:text-[2.2rem]">Product Intelligence</h1>
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
                                        className={`${theme === "blue" ? "bg-[#516A8D] text-white" : "bg-yellow text-light"} px-2 py-1 border-white rounded-lg`}
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
                                    className={`${theme === "blue" ? "bg-[#516A8D] text-white" : "bg-yellow text-light"} px-2 py-1 border-white rounded-lg`}
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
            <div>
                <div className="col-span-12 xl:col-span-8 h-auto ">
                    <div className="grid grid-cols-12">
                        <div className={`rounded-2xl px-5 pb-5 pt-3 col-span-12 ${theme === "dark" ? "bg-dark" : "profile-blue"} mt-3`}>
                            <div>
                                <h1 className="text-white font-bold text-[1.2rem] lg:text-[1.9rem]">Market Drivers</h1>
                            </div>

                            <div className="overflow-auto no-scrollbar">
                                <div className="grid grid-cols-5 gap-2 mt-1 w-[70rem] lg:w-full">
                                    <button onClick={() => {
                                        setTab(1);
                                    }} className={`px-4 py-1 ${theme === "dark" ? tabs === 1 ? "bg-yellow/80" : "bg-light" : tabs === 1 ? "bg-[rgba(0,117,255,1)]" : "bg-custom-gradient-blue"} text-white text-sm lg:text-md  xxl:text-xl font-medium rounded-t-xl uppercase`}>SUPPLIERS & RAW MATERIALS</button>
                                    <button onClick={() => {
                                        setTab(2);
                                    }} className={`px-4 py-1 ${theme === "dark" ? tabs === 2 ? "bg-yellow/80" : "bg-light" : tabs === 2 ? "bg-[rgba(0,117,255,1)]" : "bg-custom-gradient-blue"} text-white text-sm lg:text-md  xxl:text-xl font-medium rounded-t-xl uppercase`}>SALES MARKET</button>
                                    <button onClick={() => {
                                        setTab(3);
                                    }} className={`px-4 py-1 ${theme === "dark" ? tabs === 3 ? "bg-yellow/80" : "bg-light" : tabs === 3 ? "bg-[rgba(0,117,255,1)]" : "bg-custom-gradient-blue"} text-white text-sm lg:text-md  xxl:text-xl font-medium rounded-t-xl uppercase`}>Regulatory & Geopolitical </button>
                                    <button onClick={() => {
                                        setTab(4);
                                    }} className={`px-4 py-1 ${theme === "dark" ? tabs === 4 ? "bg-yellow/80" : "bg-light" : tabs === 4 ? "bg-[rgba(0,117,255,1)]" : "bg-custom-gradient-blue"} text-white text-sm lg:text-md  xxl:text-xl font-medium rounded-t-xl uppercase`}>Environment & Sustainability</button>
                                    <button onClick={() => {
                                        setTab(5);
                                    }} className={`px-4 py-1 ${theme === "dark" ? tabs === 5 ? "bg-yellow/80" : "bg-light" : tabs === 5 ? "bg-[rgba(0,117,255,1)]" : "bg-custom-gradient-blue"} text-white text-sm lg:text-md  xxl:text-xl font-medium rounded-t-xl uppercase`}>External
                                        Supply Chain Dynamics</button>
                                </div>
                            </div>
                            <div className={`px-8 py-2 border-[5px] ${theme === "dark" ? "border-yellow/80" : "border-[rgba(0,117,255,1)]"} h-[270px] overflow-auto no-scrollbar`}>
                                {tabs === 1 && <div className="grid lg:grid-cols-2 gap-5 lg:gap-[5rem]">
                                    {paraSectionData.map((data, index) => (
                                        <ParaSection key={index} heading={data.heading} content={data.content} percent={data.percent} />
                                    ))}
                                </div>}
                                {tabs === 2 && <div className="grid lg:grid-cols-2 gap-5 lg:gap-[5rem]">
                                    {paraSectionData.map((data, index) => (
                                        <ParaSection key={index} heading={data.heading} content={data.content} percent={data.percent} />
                                    ))}
                                </div>}
                                {tabs === 3 && <div className="grid lg:grid-cols-2 gap-5 lg:gap-[5rem]">
                                    {paraSectionData.map((data, index) => (
                                        <ParaSection key={index} heading={data.heading} content={data.content} percent={data.percent} />
                                    ))}
                                </div>}
                                {tabs === 4 && <div className="grid lg:grid-cols-2 gap-5 lg:gap-[5rem]">
                                    {paraSectionData.map((data, index) => (
                                        <ParaSection key={index} heading={data.heading} content={data.content} percent={data.percent} />
                                    ))}
                                </div>}
                                {tabs === 5 && <div className="grid lg:grid-cols-2 gap-5 lg:gap-[5rem]">
                                    {paraSectionData.map((data, index) => (
                                        <ParaSection key={index} heading={data.heading} content={data.content} percent={data.percent} />
                                    ))}
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
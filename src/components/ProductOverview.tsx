import { useTheme } from "../context/ThemeChanger";
import TrendChart from "./DetailChart";
import Header from "./Header";
import nutella from "../assets/nutella.png";
import { Grid, Card, CardContent, Typography, LinearProgress } from "@mui/material";
import { useState, useRef } from "react";
import CircularProgress2 from "./CircularProgress2";
import "../css/productOverview.css"
import BreakDownCard from "./BreakDownCard";
import goldImage from "../assets/Background-gold.png";
import alluminiumImage from "../assets/Alluminium.png";
import copperImage from "../assets/Copper.png";

// Overview Component
export default function ProductOverview() {
    // Get the current theme from the ThemeChanger context
    const { theme } = useTheme();

    return (
        <div className="w-[100%]">
            {/* Header Section */}
            <Header page={"Product Overview"} />
            {/* Welcome Section */}
            <div className="relative flex w-auto mt-3">
                <h1 className="text-white font-bold text-[2rem]">Welcome Jhon 👋</h1>
            </div>
            <div className={`w-[70%] xl:w-[30%] xxl:w-[20%] h-[0.33rem] my-1 ${theme === "blue" ? "bg-custom-gradient" : "bg-[#F5A32E]"}`}></div>
            <div className="mt-3 xl:translate-y-[-13%] xl:mt-[-40px] flex justify-center">
                <button className={`${theme === "dark" ? "bg-[#F5A32EB0]" : "bg-[#060B28BD]"} text-white rounded-md px-3 py-2 font-medium`}>CONFIGURE NEW PRODUCT</button>
            </div>
            {/* First Row Component */}
            <div className="mt-3 w-full">
                <FirstRowSec />
            </div>
            <div className="mt-3 w-full">
                <SecRowSec />
            </div>
        </div>
    )
}

interface Commodity {
    name: string;
    riskScore: number;
    time: string;
    image: string;
}

// Define commodities data
const commoditiesData: Commodity[] = [
    { name: "GOLD", riskScore: 67, time: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
    { name: "SILVER", riskScore: 48, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
    { name: "WHEAT", riskScore: 88, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "COPPER", riskScore: 55, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
    { name: "ALUMINIUM", riskScore: 72, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
    { name: "PLATINUM", riskScore: 65, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "NICKEL", riskScore: 50, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
    { name: "ZINC", riskScore: 45, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
    { name: "LEAD", riskScore: 40, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "TIN", riskScore: 35, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
    { name: "IRON", riskScore: 30, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
    { name: "STEEL", riskScore: 25, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "COBALT", riskScore: 20, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
];

interface DriverCards {
    percentage: number;
    name: string;
}

// Define driver cards data
const driverCardsData: DriverCards[] = [
    { percentage: 67, name: "SUPPLIERS & RAW MATERIALS" },
    { percentage: 75, name: "SALES MARKET" },
    { percentage: 55, name: "Environment & Sustainability" },
    { percentage: 67, name: "SUPPLIERS & RAW MATERIALS" },
    { percentage: 75, name: "SALES MARKET" },
    { percentage: 55, name: "Environment & Sustainability" },
    { percentage: 67, name: "SUPPLIERS & RAW MATERIALS" },
    { percentage: 75, name: "SALES MARKET" },
    { percentage: 55, name: "Environment & Sustainability" },
];

const DriverCardsComponent = ({ percentage, name }: DriverCards) => {
    const { theme } = useTheme();
    return (
        <div className="driver-section flex items-center">
            <div className={`${theme === "dark" ? "bg-[#181818BD]" : "bg-[#060B28BD]"} w-[12rem] h-[5rem] flex items-center px-5 rounded-2xl`}>
                <p className="uppercase text-white font-semibold">{name}</p>
            </div>
            <div className="relative w-[7rem] h-[7rem] translate-x-[-1rem]">
                <div className="absolute">
                    <CircularProgress2 percentage={percentage} theme={theme} />
                </div>
            </div>
        </div>
    );
};

// Define breakdown card data
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

const FirstRowSec = () => {
    // State for selected commodity
    const [selectedCommodity, setSelectedCommodity] = useState<Commodity>(commoditiesData[0]);

    // Refs for scrolling
    const marketDriversRef = useRef<HTMLDivElement>(null);
    const productBreakdownRef = useRef<HTMLDivElement>(null);

    // Handle commodity click event
    const handleCommodityClick = (commodity: Commodity) => {
        setSelectedCommodity(commodity);
    };

    // Theme context
    const { theme } = useTheme();

    // Function to get color class based on risk score
    const getProgressColorClass = (score: number) => {
        if (score > 80) return "progress-high";
        if (score > 50) return "progress-medium";
        return "progress-low";
    };

    // Scroll functions
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

    return (
        <div className={`${theme === "dark" ? "first-row" : "first-row-blue"} w-full`}>
            <Grid container spacing={3}>
                {/* Saved Commodities Section */}
                <Grid item xs={12} lg={5} xl={3.3}>
                    <Card className="card card-styling saved-commodities no-shadow no-padding no-margin">
                        <CardContent className="no-padding no-margin">
                            <div className="flex justify-between items-center mb-0">
                                <h1 className="text-2xl text-white font-bold">Saved Products</h1>
                                <span className="mr-3 m-0 text-white fa-solid fa-ellipsis-vertical"></span>
                            </div>
                            <div className="mb-7">
                                <span className="text-gray-300">Analysis Status </span><span className="fa-solid fa-circle-check text-green-500"></span>
                            </div>
                            <div className="grid grid-cols-2 section-one-titles">
                                <div><p className="text-sm">COMMODITIES</p></div>
                                <div><p className="text-sm">INTELLIGENCE SCORE</p></div>
                            </div>
                            <div className="commodities-section max-h-[220px] xl:max-h-[670px] xxl:max-h-[470px] overflow-auto no-scrollbar">
                                {commoditiesData.map((commodity) => (
                                    <div className={`commodities-item-container py-1`} key={commodity.name}>
                                        <div key={commodity.name} className={`${theme === "dark" ? "commodities-item" : "commodities-item-blue"} gap-5 sm:gap-0 py-2 grid grid-cols-2 ${selectedCommodity.name === commodity.name ? 'selected' : ''}`} onClick={() => handleCommodityClick(commodity)}>
                                            <div className="flex">
                                                <img
                                                    src={commodity.image}
                                                    alt={commodity.name}
                                                    className="commodity-image mr-4"
                                                />
                                                <div>
                                                    <p className="text-white">{commodity.name}</p>
                                                    <p className="text-[0.7rem] text-gray-500">22 DEC 7:20 PM</p>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="d-flex flex-col justify-center">
                                                    <Typography className="commodity-score no-margin">
                                                        {commodity.riskScore}%
                                                    </Typography>
                                                    <LinearProgress
                                                        variant="determinate"
                                                        value={commodity.riskScore}
                                                        className={`commodity-progress no-margin ${getProgressColorClass(commodity.riskScore)}`}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Grid>


                {/* Last Price Drivers Section */}
                <Grid item xs={12} lg={7} xl={8.7}>
                    <div className="flex justify-between items-center mb-0">
                        <h1 className="text-2xl text-white font-bold">Focus on</h1>
                        <span className="mr-3 m-0 text-white fa-solid fa-ellipsis-vertical"></span>
                    </div>
                    <div className="mt-1 xxl:mt-5 grid grid-cols-12 sm:gap-7">
                        <div className="col-span-12 xxl:col-span-8">
                            <div className="mt-3 xxl:mt-0 w-full flex flex-col md:flex-row gap-3 xxl:gap-5 h-full">
                                <div style={{ backgroundImage: `url(${nutella})`, backgroundSize: "cover" }} className="rounded-2xl xl:w-1/2 p-3 xxl:p-5 h-full flex flex-col detail-picture-section">
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-white rounded-xl px-3">
                                            <p className="text-black">Analysis status:</p>
                                            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0FDA2A]"></div>
                                        </div>
                                        <h1 className="mt-0 text-white text-[2rem] xl:text-[3.4rem] font-medium font-poppins">NUTELLA</h1>
                                    </div>
                                    <p className="mt-0 text-white">Last refreshed: 5 minutes ago</p>
                                </div>
                                <div className={`${theme === "dark" ? "bg-dark" : "profile-blue"} w-[100%] sm:w-[90%] xl:w-[40%] mt-7 mb-7 md:mt-0 md:mb-0 rounded-2xl p-3 xxl:p-5 relative flex flex-col circular-section`}>
                                    <div className="mt-2 w-[10%] md:w-[40%]">
                                        <h1 className="mt-0 text-white text-[1.2rem] font-medium font-poppins">Intelligence Score</h1>
                                    </div>
                                    <p className="w-[50%] text-white mt-3">From all market drivers</p>
                                    <div className="absolute top-[50%] translate-y-[-50%] left-[55%] sm:left-[80%] md:left-[57%] xl:left-[50%] xxl:left-[53%]">
                                        <CircularProgress2 percentage={67} theme={theme} />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-span-12 xxl:col-span-4">
                            <TrendChart headingSize={1.3} />
                        </div>
                    </div>

                    <div className="mt-3 xl:mt-4 grid grid-cols-12">
                        <div className={`rounded-2xl px-5 pb-3 pt-1 col-span-12 ${theme === "dark" ? "bg-dark" : "profile-blue"} mt-3`}>
                            <div className="mb-1 flex justify-between items-center">
                                <h1 className="text-white font-bold text-[1.2rem] lg:text-[1.9rem]">Market Drivers</h1>
                                <div className="flex gap-2">
                                    <button
                                        className={`${theme === "blue" ? "bg-white text-blue" : "bg-yellow text-light"} px-2 py-1 rounded-lg`}
                                        onClick={() => scrollLeft(marketDriversRef)}
                                    >
                                        <span className="fa-solid fa-angle-left text-xl"></span>
                                    </button>
                                    <button
                                        className={`${theme === "blue" ? "bg-blueLight text-white" : "bg-yellow text-light"} px-2 py-1 border-white rounded-lg`}
                                        onClick={() => scrollRight(marketDriversRef)}
                                    >
                                        <span className="fa-solid fa-angle-right text-xl"></span>
                                    </button>
                                </div>
                            </div>
                            <div ref={marketDriversRef} className="flex items-center overflow-auto w-full scrollbar">
                                {driverCardsData.map((driverCard) => (
                                    <DriverCardsComponent
                                        key={driverCard.name}
                                        percentage={driverCard.percentage}
                                        name={driverCard.name}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-12">
                        <div className={`rounded-2xl px-5 pb-3 pt-1 col-span-12 ${theme === "dark" ? "bg-dark" : "profile-blue"} mt-3`}>
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
                            <div ref={productBreakdownRef} className="flex items-center overflow-auto mt-3 gap-5 scrollbar">
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
                </Grid>
            </Grid>
        </div >
    );
};

interface SecCardProps {
    itemName: string;
    image: string;
    time: string;
    type: string;
    heading: string;
    description: string;
}

const SecCard: React.FC<SecCardProps> = ({ itemName, image, time, type, heading, description }) => {
    const { theme } = useTheme();
    return (
        <div className="min-w-[15rem] lg:min-w-[26rem]">
            <div style={{ backgroundImage: `url(${image})` }} className="rounded-3xl p-3 xxl:p-5 flex flex-col detail-picture-section">
                <div>
                    <div className="inline-flex items-center gap-2 bg-white rounded-xl px-3">
                        <p className="text-black">Analysis status:</p>
                        <div className="w-[1rem] h-[1rem] rounded-full bg-[#0FDA2A]"></div>
                    </div>
                    <h1 className="mt-0 text-white text-[2rem] xl:text-[3.4rem] font-medium font-poppins">{itemName}</h1>
                </div>
                <p className="text-white">Last refreshed: {time}</p>
            </div>
            <div className="px-4 pt-2">
                <p className="text-[#D9D9D9] text-[0.9rem]">{type}</p>
                <h1 className="text-white font-bold text-2xl">{heading}</h1>
                <p className="text-[#D9D9D9] mt-1">{description}</p>
                <div className="flex justify-end mt-2">
                    <button className={`flex items-center gap-3 px-3 rounded font-semibold ${theme === "dark" ? "bg-[#F5A32E] text-[#404040]" : "text-[#014AAC] bg-white"}`}>
                        <p className="text-sm">GO TO DETAILS</p><span className="fa-solid fa-arrow-turn-up rotate-90"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Define SecCard data
const secCardData: SecCardProps[] = [
    {
        itemName: "Gold",
        image: goldImage,
        time: "5 min ago",
        type: "Precious Metal",
        heading: "Gold Market Analysis",
        description: "Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar."
    },
    {
        itemName: "ALUMINIUM",
        image: alluminiumImage,
        time: "5 min ago",
        type: "Precious Metal",
        heading: "Cost Intelligence",
        description: "Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar."
    },
    {
        itemName: "ALUMINIUM",
        image: copperImage,
        time: "5 min ago",
        type: "Precious Metal",
        heading: "Cost Intelligence",
        description: "Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar."
    },
    {
        itemName: "Gold",
        image: goldImage,
        time: "5 min ago",
        type: "Precious Metal",
        heading: "Gold Market Analysis",
        description: "Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar."
    },
    {
        itemName: "ALUMINIUM",
        image: alluminiumImage,
        time: "5 min ago",
        type: "Precious Metal",
        heading: "Cost Intelligence",
        description: "Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar."
    },
    {
        itemName: "ALUMINIUM",
        image: copperImage,
        time: "5 min ago",
        type: "Precious Metal",
        heading: "Cost Intelligence",
        description: "Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar."
    },
    {
        itemName: "Gold",
        image: goldImage,
        time: "5 min ago",
        type: "Precious Metal",
        heading: "Gold Market Analysis",
        description: "Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar."
    },
    {
        itemName: "ALUMINIUM",
        image: alluminiumImage,
        time: "5 min ago",
        type: "Precious Metal",
        heading: "Cost Intelligence",
        description: "Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar."
    },
    {
        itemName: "ALUMINIUM",
        image: copperImage,
        time: "5 min ago",
        type: "Precious Metal",
        heading: "Cost Intelligence",
        description: "Mixed U.S. economic signals and possible interest rate cuts may enhance gold's appeal, despite challenges posed by a strong U.S. dollar."
    },
];

const SecRowSec = () => {
    const { theme } = useTheme();
    const secRowRef = useRef<HTMLDivElement>(null);

    // Scroll functions
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

    return (
        <div className="grid grid-cols-12">
            <div className={`rounded-2xl px-5 py-2 col-span-12 ${theme === "dark" ? "bg-dark" : "profile-blue"} mt-3`}>
                <div className="mb-3 flex justify-between items-center">
                    <h1 className="text-white font-bold text-[1.2rem] lg:text-[1.6rem]">Raw Materials Analysis</h1>
                    <div className="flex gap-2">
                        <button
                            className={`${theme === "blue" ? "bg-white text-blue" : "bg-yellow text-light"} px-2 py-1 rounded-lg`}
                            onClick={() => scrollLeft(secRowRef)}
                        >
                            <span className="fa-solid fa-angle-left text-xl"></span>
                        </button>
                        <button
                            className={`${theme === "blue" ? "bg-blueLight text-white" : "bg-yellow text-light"} px-2 py-1 border-white rounded-lg`}
                            onClick={() => scrollRight(secRowRef)}
                        >
                            <span className="fa-solid fa-angle-right text-xl"></span>
                        </button>
                    </div>
                </div>
                <div ref={secRowRef} className="flex gap-5 overflow-auto scrollbar">
                    {secCardData.map((card) => (
                        <SecCard
                            key={card.itemName}
                            itemName={card.itemName}
                            image={card.image}
                            time={card.time}
                            type={card.type}
                            heading={card.heading}
                            description={card.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
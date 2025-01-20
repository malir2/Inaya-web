import { useState } from "react";
import { Grid, Card, CardContent, Typography, LinearProgress } from "@mui/material";
import TrendOverLastYear from "./trend_over_chart";
import "../css/firstrow.css";
import { useTheme } from "../context/ThemeChanger";

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
];

// Define price drivers data
const priceDrivers = [
    {
        title: "Gold Prices Set to Surge Amid Geopolitical Tensions and Economic Uncertainty in December 2024",
        description: "Gold prices are expected to rise in December 2024 due to geopolitical tensions, including the Israel-Palestine conflict escalating into war, global economic uncertainties and strong safe-haven demand despite pressure from a strong US dollar.",
    },
    {
        title: "Middle East Tensions Fuel Rising Gold Demand in December 2024",
        description: "In December 2024, gold prices are influenced by geopolitical tensions and economic factors. Rising tensions in the Middle East increase demand for gold as a hedge against uncertainty, supporting higher prices in the short term. ",
    },
    {
        title: "Emerging Markets Lead Gold Price Surge Through Central Bank Purchases",
        description: "Increased central bank gold reserves are a key driver for gold prices, with significant purchases from emerging markets and BRICS nations, while Western central banks remain inactive. This trend points to a bullish outlook for gold as demand rises. ",
    },
];

const FirstRow = () => {
    // State for selected commodity
    const [selectedCommodity, setSelectedCommodity] = useState<Commodity>(commoditiesData[0]);

    // Chart data for commodities
    const chartData = [
        [67, 40, 65, 88, 72, 35, 70, 73, 16, 78, 50, 82], // GOLD
        [48, 30, 45, 87, 19, 52, 40, 53, 55, 67, 60, 72], // SILVER
        [31, 63, 60, 82, 24, 66, 65, 57, 69, 71, 33, 75], // WHEAT
        [60, 62, 28, 61, 53, 65, 34, 66, 68, 20, 72, 74], // PALLADIUM
    ];

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

    return (
        <div className={`${theme === "dark" ? "first-row" : "first-row-blue"}`}>
            <Grid container spacing={1}>
                {/* Saved Commodities Section */}
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Card className="card card-styling saved-commodities no-shadow no-padding no-margin">
                        <CardContent className="no-padding no-margin">
                            <div className="flex justify-between items-center mb-4">
                                <h1 className="text-2xl text-white font-bold">Saved Commodities</h1>
                                <span className="mr-3 m-0 text-white fa-solid fa-ellipsis-vertical"></span>
                            </div>
                            <div className="mb-4">
                                <span className="text-gray-300">Analysis Status </span><span className="fa-solid fa-circle-check text-green-500"></span>
                            </div>
                            <div className="grid grid-cols-2 section-one-titles">
                                <div><p className="text-sm">COMMODITIES</p></div>
                                <div><p className="text-sm">INDEX</p></div>
                            </div>
                            <div className="commodities-section max-h-[220px] xxl:max-h-[330px] overflow-auto no-scrollbar">
                                {commoditiesData.map((commodity) => (
                                    <div className={`commodities-item-container py-1`} key={commodity.name}>
                                        <div key={commodity.name} className={`${theme === "dark" ? "commodities-item" : "commodities-item-blue"} py-2 grid grid-cols-2 ${selectedCommodity.name === commodity.name ? 'selected' : ''}`} onClick={() => handleCommodityClick(commodity)}>
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

                {/* Trend Over Last Year Section */}
                <Grid item xs={12} sm={6} lg={4} xl={6}>
                    <Card className="card card-styling trend-chart no-shadow no-padding no-margin">
                        <CardContent className="no-padding no-margin">
                            <h1 className="text-2xl text-white font-bold">Trend Over Last Year</h1>
                            <TrendOverLastYear chartData={chartData} selectedCommodity={selectedCommodity.name} />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Last Price Drivers Section */}
                <Grid item xs={12} sm={12} lg={4} xl={3}>
                    <Card className="card card-styling last-price-drivers no-shadow no-padding no-margin">
                        <CardContent className="no-padding no-margin">
                            <div className="mb-4">
                                <h1 className="text-2xl text-white font-bold">Last Price Drivers</h1>
                            </div>
                            <div className="price-drivers-list no-margin max-h-[280px] xxl:max-h-[330px] overflow-y-auto no-scrollbar">
                                {priceDrivers.map((driver, index) => (
                                    <div key={index} className="price-driver-item no-margin">
                                        <div className="flex gap-2">
                                            <div><span className={`fa-solid fa-file ${theme === "dark" ? "text-[#F9A71A]" : "text-blue"}`}></span></div>
                                            <div>
                                                <h1 className="driver-title no-margin text-[0.6rem]">{driver.title}</h1>
                                                <p className="driver-description no-margin">
                                                    {driver.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default FirstRow;

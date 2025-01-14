import { useState } from "react";
import { Grid, Card, CardContent, Typography, LinearProgress } from "@mui/material";
import TrendOverLastYear from "./trend_over_chart";
import "./firstrow.css";

interface Commodity {
    name: string;
    riskScore: number;
    time: string;
    image: string;
}

const commoditiesData: Commodity[] = [
    { name: "GOLD", riskScore: 67, time: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
    { name: "SILVER", riskScore: 48, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
    { name: "WHEAT", riskScore: 61, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
];

const priceDrivers = [
    {
        title: "Gold Prices Set to Surge Amid Geopolitical Tensions",
        description:
            "Gold prices are expected to rise in December 2024 due to geopolitical tensions, economic uncertainty, and demand for safe-haven assets.",
    },
    {
        title: "Silver Gains Traction as Industrial Demand Grows",
        description:
            "Silver demand is increasing due to its usage in green technology and electronics, driving prices higher.",
    },
    {
        title: "Silver Gains Traction as Industrial Demand Grows",
        description:
            "Silver demand is increasing due to its usage in green technology and electronics, driving prices higher.",
    },
];

const FirstRow = () => {
    const [selectedCommodity, setSelectedCommodity] = useState<Commodity>(commoditiesData[0]);
    const [chartData, setChartData] = useState<number[][]>([
        [30, 40, 35, 50, 49, 60, 70, 80, 90, 100, 110, 120],
        [31, 40, 28, 51, 42, 53, 64, 75, 86, 97, 108, 119],
        [11, 32, 45, 32, 34, 52, 41, 60, 79, 98, 117, 136]
    ]);

    const handleCommodityClick = (commodity: Commodity) => {
        setSelectedCommodity(commodity);
        // Set random data for each commodity for the last 12 months
        const randomData = [
            Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
            Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
            Array.from({ length: 12 }, () => Math.floor(Math.random() * 100))
        ];
        setChartData(randomData);
    };

    return (
        <div className="first-row">
            <Grid container spacing={1}>
                {/* Saved Commodities Section */}
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                    <Card className="card card-styling saved-commodities no-shadow no-padding no-margin">
                        <CardContent className="no-padding no-margin">
                            <div className="flex justify-between items-center mb-3">
                                <Typography className="section-title">Saved Commodities</Typography>
                                <span className="mr-3 m-0 text-white fa-solid fa-ellipsis-vertical"></span>
                            </div>
                            <div className="mb-3">
                                <span className="text-gray-300">Analysis Status </span><span className="fa-solid fa-circle-check text-green-500"></span>
                            </div>
                            <div className="grid grid-cols-2 section-one-titles">
                                <div><p>COMMODITIES</p></div>
                                <div><p>INDEX</p></div>
                            </div>
                            <div className="commodities-section">
                                {commoditiesData.map((commodity) => (
                                    <div key={commodity.name} className={`commodities-item py-3 mb-3 grid grid-cols-2 ${selectedCommodity.name === commodity.name ? 'selected' : ''}`} onClick={() => handleCommodityClick(commodity)}>
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
                                                    className="commodity-progress no-margin"
                                                />
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
                            <Typography className="section-title no-margin">Trend Over Last Year</Typography>
                            <TrendOverLastYear chartData={chartData} />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Last Price Drivers Section */}
                <Grid item xs={12} sm={12} lg={4} xl={3}>
                    <Card className="card card-styling last-price-drivers no-shadow no-padding no-margin">
                        <CardContent className="no-padding no-margin">
                            <div className="mb-3">
                                <Typography className="section-title no-margin">Last Price Drivers</Typography>
                            </div>
                            <div className="price-drivers-list no-margin">
                                {priceDrivers.map((driver, index) => (
                                    <div key={index} className="price-driver-item no-margin">
                                        <div className="flex gap-3">
                                            <div><span className="fa-solid fa-file text-[#F9A71A]"></span></div>
                                            <div>
                                                <Typography className="driver-title no-margin">{driver.title}</Typography>
                                                <Typography className="driver-description no-margin">
                                                    {driver.description}
                                                </Typography>
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

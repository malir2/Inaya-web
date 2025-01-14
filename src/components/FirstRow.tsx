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
    { name: "Gold", riskScore: 67, time: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
    { name: "Silver", riskScore: 48, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
    { name: "Wheat", riskScore: 61, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
    { name: "Palladium", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
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
];

const FirstRow = () => {
    const [selectedCommodity, setSelectedCommodity] = useState<Commodity>(commoditiesData[0]);
    const [chartData, setChartData] = useState<number[]>([30, 40, 35, 50, 49]);

    const handleCommodityClick = (commodity: Commodity) => {
        setSelectedCommodity(commodity);
        // Set random data for each commodity for the last 5 months
        const randomData = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));
        setChartData(randomData);
    };

    return (
        <div className="first-row">
            <Grid container spacing={3}>
                {/* Saved Commodities Section */}
                <Grid item xs={12} sm={6} lg={4}>
                    <Card className="card card-styling saved-commodities">
                        <CardContent>
                            <Typography className="section-title">Saved Commodities</Typography>
                            {commoditiesData.map((commodity) => (
                                <div key={commodity.name} className="commodity-item" onClick={() => handleCommodityClick(commodity)}>
                                    <img
                                        src={commodity.image}
                                        alt={commodity.name}
                                        className="commodity-image"
                                    />
                                    <div className="commodity-info">
                                        <Typography className="commodity-name">{commodity.name}</Typography>
                                        <LinearProgress
                                            variant="determinate"
                                            value={commodity.riskScore}
                                            className="commodity-progress"
                                        />
                                    </div>
                                    <Typography className="commodity-score">
                                        {commodity.riskScore}%
                                    </Typography>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </Grid>

                {/* Trend Over Last Year Section */}
                <Grid item xs={12} sm={6} lg={4}>
                    <Card className="card card-styling trend-chart">
                        <CardContent>
                            <Typography className="section-title">Trend Over Last 5 Months</Typography>
                            <TrendOverLastYear commodity={selectedCommodity} chartData={chartData} />
                        </CardContent>
                    </Card>
                </Grid>

                {/* Last Price Drivers Section */}
                <Grid item xs={12} sm={12} lg={4}>
                    <Card className="card card-styling last-price-drivers">
                        <CardContent>
                            <Typography className="section-title">Last Price Drivers</Typography>
                            <div className="price-drivers-list">
                                {priceDrivers.map((driver, index) => (
                                    <div key={index} className="price-driver-item">
                                        <Typography className="driver-title">{driver.title}</Typography>
                                        <Typography className="driver-description">
                                            {driver.description}
                                        </Typography>
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

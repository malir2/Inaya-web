import { useTheme } from "../context/ThemeChanger";
import CircularProgress from "./CircularProgress";
import TrendChart from "./DetailChart";
import Header from "./Header";
import nutella from "../assets/nutella.png";
import { Grid, Card, CardContent, Typography, LinearProgress } from "@mui/material";
import { useState } from "react";

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
            {/* First Row Component */}
            <div className="mt-3 w-full">
                <FirstRowSec />
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
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
    { name: "PALLADIUM", riskScore: 60, time: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
];

const FirstRowSec = () => {
    // State for selected commodity
    const [selectedCommodity, setSelectedCommodity] = useState<Commodity>(commoditiesData[0]);


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
        <div className={`${theme === "dark" ? "first-row" : "first-row-blue"} w-full`}>
            <Grid container spacing={3}>
                {/* Saved Commodities Section */}
                <Grid item xs={12} sm={6} lg={5} xl={3.3}>
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
                            <div className="commodities-section max-h-[220px] xxl:max-h-[470px] overflow-auto no-scrollbar">
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


                {/* Last Price Drivers Section */}
                <Grid item xs={12} sm={12} lg={7} xl={8.7}>
                    <div className="mt-1 xxl:mt-5 grid grid-cols-12 sm:gap-5">
                        <div className="col-span-12 xl:col-span-8">
                            <div className="mt-3 xxl:mt-0 w-full flex flex-col md:flex-row gap-3 xxl:gap-5">
                                <div style={{ backgroundImage: `url(${nutella})`, backgroundSize: "cover" }} className="rounded-2xl md:w-1/2 p-3 xxl:p-5 h-[100%] flex flex-col detail-picture-section">
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-white rounded-xl px-3">
                                            <p>Analysis status:</p>
                                            <div className="w-[1rem] h-[1rem] rounded-full bg-[#0FDA2A]"></div>
                                        </div>
                                        <h1 className="mt-0 text-white text-[2rem] xl:text-[3.4rem] font-medium font-poppins">NUTELLA</h1>
                                    </div>
                                    <p className="mt-0 text-white">Last refreshed: 5 minutes ago</p>
                                </div>
                                <div className={`${theme === "dark" ? "bg-dark" : "profile-blue"} w-[100%] sm:w-[90%] md:w-[40%] rounded-2xl p-3 xxl:p-5 relative flex flex-col`}>
                                    <div className="w-1/2 sm:w-full md:w-1/2">
                                        <h1 className="mt-0 text-white text-[1.2rem] font-medium font-poppins">Intelligence
                                            <br />Score</h1>
                                    </div>
                                    <p className="text-white mt-3">From all <br />market drivers</p>
                                    <div className="absolute top-[50%] translate-y-[-50%] left-[60%] min-[407px]:left-[70%] sm:left-[86%] md:left-[70%] xl:left-[65%] xxl:left-[50%]">
                                        <CircularProgress size={15} percentage={67} riskLabel="Medium High Risk" theme={theme} />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className="col-span-12 xl:col-span-4 xl:mt-0 ml-0 xl:ml-[2rem] min-[1437px]:ml-[1rem] min-[1505px]:ml-3 xxl:mt-0">
                            <TrendChart headingSize={1.3} />
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
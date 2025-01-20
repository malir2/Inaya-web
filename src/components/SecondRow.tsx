import "../css/secondrow.css";
import "../css/firstrow.css";
import { RxDotsVertical } from "react-icons/rx";
import { FaCircleCheck } from "react-icons/fa6";
import { Grid, LinearProgress, Typography } from "@mui/material";
import { useTheme } from "../context/ThemeChanger";

const SecondRow = () => {
    // Theme context
    const { theme } = useTheme();

    // Define card data
    const cards = [
        {
            title: "Precious Metals",
            items: [
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 82, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Gold", score: 80, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
            ],
        },
        {
            title: "Industrial",
            items: [
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 81, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
            ],
        },
        {
            title: "Energy",
            items: [
                { name: "Gold", score: 87, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Gold", score: 87, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
            ],
        },
        {
            title: "Agricultural",
            items: [
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 88, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 50, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 88, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
            ],
        },
        {
            title: "Soft",
            items: [
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
            ],
        },
    ];

    const getProgressColorClass = (score: number) => {
        if (score > 80) return "progress-high";
        if (score > 50) return "progress-medium";
        return "progress-low";
    };

    return (
        <div className="sec-dashboard-row pb-3">
            <Grid container spacing={1}>
                {cards.map((card, index) => (
                    <Grid item xs={2.4} key={index}>
                        <div className={`bg-dark ${theme === "dark" ? "sec-card" : "sec-card-blue"} rounded-3xl`} style={{ width: "100%" }}>
                            <div className="sec-card-header">
                                <div className="title">
                                    <h2>{card.title}</h2>
                                    <div><RxDotsVertical /> </div>
                                </div>
                                <span className="status"> <p className="me-1 text-gray-400 font-bold">Analysis Status</p> <FaCircleCheck color="#22c55e" size={10} /></span>
                            </div>
                            <div className="sec-card-content">
                                <div className="grid grid-cols-3 section-one-titles">
                                    <div className="col-span-2"><p>COMMODITIES</p></div>
                                    <div><p>INDEX</p></div>
                                </div>
                                <div className="commodities-section commodities-section-set">
                                    {card.items.map((item, index) => (
                                        <div className="commodities-item-container2">
                                            <div key={index} className={`${theme === "dark" ? "commodities-item" : "commodities-item-blue"} py-2 grid grid-cols-3`}>
                                                <div className="col-span-2 flex">
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="commodity-image mr-4"
                                                    />
                                                    <div>
                                                        <p className="text-white">{item.name}</p>
                                                        <p className="text-[0.7rem] text-gray-500">22 DEC 7:20 PM</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="d-flex flex-col justify-center">
                                                        <Typography className="commodity-score no-margin">
                                                            {item.score}%
                                                        </Typography>
                                                        <LinearProgress
                                                            variant="determinate"
                                                            value={item.score}
                                                            className={`commodity-progress2 no-margin ${getProgressColorClass(item.score)}`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default SecondRow;

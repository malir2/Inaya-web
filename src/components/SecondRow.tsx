import "./secondrow.css";
import { RxDotsVertical } from "react-icons/rx";
import { FaCircleCheck } from "react-icons/fa6";
import { Grid, LinearProgress, Typography } from "@mui/material";

const SecondRow = () => {
    const cards = [
        {
            title: "Precious Metals",
            items: [
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Palladium", score: 60, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
            ],
        },
        {
            title: "Industrial",
            items: [
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Palladium", score: 60, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
            ],
        },
        {
            title: "Energy",
            items: [
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Palladium", score: 60, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
            ],
        },
        {
            title: "Agricultural",
            items: [
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Palladium", score: 60, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
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
                { name: "Palladium", score: 60, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
            ],
        },
        // Add more categories here...
    ];

    return (
        <div className="sec-dashboard-row">
            <Grid container spacing={1}>
                {cards.map((card, index) => (
                    <Grid item xs={12} sm={12} md={6} lg={3} xl={2.4} key={index}>
                        <div className="bg-dark sec-card" style={{ width: "100%" }}>
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
                                <div className="commodities-section">
                                    {card.items.map((item) => (
                                        <div key={item.name} className={`commodities-item py-2 mb-2 grid grid-cols-3 `}>
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
                                                        className="commodity-progress no-margin"
                                                    />
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

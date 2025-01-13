import "./secondrow.css";
import { RxDotsVertical } from "react-icons/rx";
import { FaCircleCheck } from "react-icons/fa6";

const SecondRow = () => {
    const cards = [
        {
            title: "Precious Metals",
            items: [
                { name: "Gold", score: 67, date: "22 Dec 7:20 PM", image: "https://img.freepik.com/free-photo/high-angle-aesthetic-wallpaper-with-gold-bars_23-2149872246.jpg" },
                { name: "Silver", score: 48, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCNVWYDQmu3mH5zco0PjSYfjLlQ8QP1nj69A&s" },
                { name: "Wheat", score: 61, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa0mbwIMEhfljBeVjGfBeQeKRyPjpXYToR7g&s" },
                { name: "Palladium", score: 60, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
            ],
        },
        {
            title: "Industrial Elements",
            items: [
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
                { name: "Palladium", score: 60, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
            ],
        },
        {
            title: "Agricultural",
            items: [
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
                { name: "Palladium", score: 60, date: "22 Dec 7:20 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR68LEv30kC3Yvo37cduwJeTTc7oRUN2YZZIA&s" },
            ],
        },
        // Add more categories here...
    ];

    return (
        <div className="sec-dashboard-row">
            {cards.map((card, index) => (
                <div className="sec-card" key={index}>
                    <div className="sec-card-header">
                        <div className="title">
                            <h2>{card.title}</h2>
                            <div><RxDotsVertical /> </div>
                        </div>
                        <span className="status"> <p className="me-1">Analysis Status</p> <FaCircleCheck color="#05b305" size={10} /></span>
                    </div>
                    <div className="sec-card-content">
                        <div className="sec-table-header">
                            <span>Commodities</span>
                            <span>Risk Score</span>
                        </div>
                        {card.items.map((item, idx) => (
                            <div className="sec-table-row" key={idx}>
                                <div className="sec-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="sec-item-info">
                                        <span>{item.name}</span>
                                        <span>{item.date}</span>
                                    </div>
                                </div>
                                <div className="sec-score">
                                    <span>{item.score}%</span>
                                    <div className="sec-score-bar">
                                        <div
                                            className="sec-score-bar-fill"
                                            style={{ width: `${item.score}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SecondRow;

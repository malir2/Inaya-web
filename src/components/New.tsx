import { useTheme } from "../context/ThemeChanger";
import Header from "./Header";
import CardImage from "../assets/card-bg.png";

// Dummy data for cards
const cardData = [
    {
        date: "15 January 2024",
        tags: ["grains", "grains"],
        title: "Grains End the Day Mixed",
        description: `March corn ended the day up 4¼¢ at $4.78¾ per bushel.
                      March soybeans closed down 4¾¢ at $10.42¾ per bushel.
                      March wheat contracts closed mixed. CBOT wheat ended the day up less than a penny at $5.47 per bushel. KC wheat ended the day down 3¼¢ at $5.57½ per bushel. Minneapolis wheat ended the day down 2¢ at $5.87½ per bushel.
                      The Grain Market Insider newsletter by Stewart-Peterson Inc. said, "Firm crude oil prices and strong ethanol production [as reported today by the U.S. ...`,
    },
    {
        date: "15 January 2024",
        tags: ["grains", "grains"],
        title: "Grains End the Day Mixed",
        description: `March corn ended the day up 4¼¢ at $4.78¾ per bushel.
                      March soybeans closed down 4¾¢ at $10.42¾ per bushel.
                      March wheat contracts closed mixed. CBOT wheat ended the day up less than a penny at $5.47 per bushel. KC wheat ended the day down 3¼¢ at $5.57½ per bushel. Minneapolis wheat ended the day down 2¢ at $5.87½ per bushel.
                      The Grain Market Insider newsletter by Stewart-Peterson Inc. said, "Firm crude oil prices and strong ethanol production [as reported today by the U.S. ...`,
    },
    {
        date: "15 January 2024",
        tags: ["grains", "grains"],
        title: "Grains End the Day Mixed",
        description: `March corn ended the day up 4¼¢ at $4.78¾ per bushel.
                      March soybeans closed down 4¾¢ at $10.42¾ per bushel.
                      March wheat contracts closed mixed. CBOT wheat ended the day up less than a penny at $5.47 per bushel. KC wheat ended the day down 3¼¢ at $5.57½ per bushel. Minneapolis wheat ended the day down 2¢ at $5.87½ per bushel.
                      The Grain Market Insider newsletter by Stewart-Peterson Inc. said, "Firm crude oil prices and strong ethanol production [as reported today by the U.S. ...`,
    },
    {
        date: "15 January 2024",
        tags: ["grains", "grains"],
        title: "Grains End the Day Mixed",
        description: `March corn ended the day up 4¼¢ at $4.78¾ per bushel.
                      March soybeans closed down 4¾¢ at $10.42¾ per bushel.
                      March wheat contracts closed mixed. CBOT wheat ended the day up less than a penny at $5.47 per bushel. KC wheat ended the day down 3¼¢ at $5.57½ per bushel. Minneapolis wheat ended the day down 2¢ at $5.87½ per bushel.
                      The Grain Market Insider newsletter by Stewart-Peterson Inc. said, "Firm crude oil prices and strong ethanol production [as reported today by the U.S. ...`,
    },
    {
        date: "15 January 2024",
        tags: ["grains", "grains"],
        title: "Grains End the Day Mixed",
        description: `March corn ended the day up 4¼¢ at $4.78¾ per bushel.
                      March soybeans closed down 4¾¢ at $10.42¾ per bushel.
                      March wheat contracts closed mixed. CBOT wheat ended the day up less than a penny at $5.47 per bushel. KC wheat ended the day down 3¼¢ at $5.57½ per bushel. Minneapolis wheat ended the day down 2¢ at $5.87½ per bushel.
                      The Grain Market Insider newsletter by Stewart-Peterson Inc. said, "Firm crude oil prices and strong ethanol production [as reported today by the U.S. ...`,
    },
    {
        date: "15 January 2024",
        tags: ["grains", "grains"],
        title: "Grains End the Day Mixed",
        description: `March corn ended the day up 4¼¢ at $4.78¾ per bushel.
                      March soybeans closed down 4¾¢ at $10.42¾ per bushel.
                      March wheat contracts closed mixed. CBOT wheat ended the day up less than a penny at $5.47 per bushel. KC wheat ended the day down 3¼¢ at $5.57½ per bushel. Minneapolis wheat ended the day down 2¢ at $5.87½ per bushel.
                      The Grain Market Insider newsletter by Stewart-Peterson Inc. said, "Firm crude oil prices and strong ethanol production [as reported today by the U.S. ...`,
    },
    {
        date: "15 January 2024",
        tags: ["grains", "grains"],
        title: "Grains End the Day Mixed",
        description: `March corn ended the day up 4¼¢ at $4.78¾ per bushel.
                      March soybeans closed down 4¾¢ at $10.42¾ per bushel.
                      March wheat contracts closed mixed. CBOT wheat ended the day up less than a penny at $5.47 per bushel. KC wheat ended the day down 3¼¢ at $5.57½ per bushel. Minneapolis wheat ended the day down 2¢ at $5.87½ per bushel.
                      The Grain Market Insider newsletter by Stewart-Peterson Inc. said, "Firm crude oil prices and strong ethanol production [as reported today by the U.S. ...`,
    },
    // Add more dummy data as needed
];

function New() {
    const { theme } = useTheme();
    return (
        <div className="w-full">
            <Header />
            <div className="grid grid-cols-12 gap-3 mt-8">
                <div className="col-span-12 md:col-span-9 order-2 md:order-1 h-[90vh] pb-5 overflow-auto scrollbar">
                    <div className="flex flex-wrap gap-5">
                        {cardData.map((card, index) => (
                            <div key={index} className="w-[100%] lg:w-[48%]">
                                <div className={`new-card h-auto rounded-2xl overflow-hidden ${theme === "dark" ? "bg-dark" : "profile-blue"}`}>
                                    <img src={CardImage} alt="" className="w-full h-[5rem] object-cover" />
                                    <div className="px-4">
                                        <div className="mt-2 flex justify-between items-center">
                                            <p className="text-grayC text-[0.7rem]">{card.date}</p>
                                            <div className="flex gap-1">
                                                {card.tags.map((tag, tagIndex) => (
                                                    <span key={tagIndex} className={`${theme === "dark" ? 'bg-grayC text-white' : "bg-blue text-white/70"}  px-2 text-[0.6rem] rounded-sm`}>{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="mt-1">
                                            <h1 className="relative text-xl font-bold text-white">{card.title}</h1>
                                            <div className="custom-border w-[80%] flex">
                                                <div className="w-1/2 left-border"></div>
                                                <div className="w-1/2 right-border"></div>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <p className={`${theme === "dark" ? "text-grayC" : "text-white/60"} leading-1 text-[0.7rem]`}>{card.description}</p>
                                        </div>
                                        <div className="flex justify-end py-3">
                                            <div className={`w-[1.3rem] h-[1.3rem] flex justify-center items-center ${theme === "dark" ? "bg-yellow" : "bg-white"} rounded`}>
                                                <span className={`fa-solid fa-arrow-turn-up ${theme === "dark" ? "text-white" : "text-blue"} rotate-90 text-sm`}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`col-span-12 md:col-span-3 order-1 md:order-2 md:h-[90vh] rounded-2xl ${theme === "dark" ? "bg-dark" : "profile-blue"} w-full py-7 px-4`}>
                    <h1 className="text-white font-bold text-2xl">Filters</h1>
                    <div className="custom-border w-full mt-3 flex">
                        <div className="w-1/2 left-border"></div>
                        <div className="w-1/2 right-border"></div>
                    </div>
                    <div className="mt-5 gap-2 grid grid-cols-12">
                        <div className="col-span-6 md:col-span-12 flex flex-col gap-1 relative">
                            <label htmlFor="group" className="text-gray-300 text-sm">Commodity Group</label>
                            <select id="group" className={`${theme === "dark" ? "bg-grayC" : "bg-blueLighter"} rounded-md py-2 px-3 w-full appearance-none text-white`}>
                                <option value="" className="text-white"></option>
                                <option value="" className="text-white">Commodity Group</option>
                            </select>
                            <span className="absolute right-3 top-[50%] translate-y-[35%] fa-solid fa-chevron-down text-gray-600"></span>
                        </div>
                        <div className="col-span-6 md:col-span-12 flex flex-col gap-1 relative">
                            <label htmlFor="group2" className="text-gray-300 text-sm">Commodity</label>
                            <select id="group2" className={`${theme === "dark" ? "bg-grayC" : "bg-blueLighter"} rounded-md py-2 px-3 w-full appearance-none text-white`}>
                                <option value="" className="text-white"></option>
                                <option value="" className="text-white">Commodity</option>
                            </select>
                            <span className="absolute right-3 top-[50%] translate-y-[35%] fa-solid fa-chevron-down text-gray-600"></span>
                        </div>
                        <div className="col-span-12 grid grid-cols-12 gap-2 mt-0 lg:mt-20">
                            <div className="col-span-6 md:col-span-12 flex flex-col gap-1 relative">
                                <label htmlFor="sources1" className="text-gray-300 text-sm">Sources</label>
                                <select id="sources1" className={`${theme === "dark" ? "bg-grayC" : "bg-blueLighter"} rounded-md py-2 px-3 w-full appearance-none text-white`}>
                                    <option value="" className="text-white"></option>
                                    <option value="" className="text-white">Sources</option>
                                </select>
                                <span className="absolute right-3 top-[50%] translate-y-[35%] fa-solid fa-chevron-down text-gray-600"></span>
                            </div>
                            <div className="col-span-6 md:col-span-12 flex flex-col gap-1 relative">
                                <label htmlFor="sources2" className="text-gray-300 text-sm">Sources</label>
                                <select id="sources2" className={`${theme === "dark" ? "bg-grayC" : "bg-blueLighter"} rounded-md py-2 px-3 w-full appearance-none text-white`}>
                                    <option value="" className="text-white"></option>
                                    <option value="" className="text-white">Sources</option>
                                </select>
                                <span className="absolute right-3 top-[50%] translate-y-[35%] fa-solid fa-chevron-down text-gray-600"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default New;
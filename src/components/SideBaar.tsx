import { useState } from "react";
import logo from "../assets/INAYA-icon.svg";
import { useTheme } from "../context/ThemeChanger";

interface SideBaarProps {
    activeTab: number | null;
    setactiveTab: (tab: number | null) => void;
}

function SideBaar({ activeTab, setactiveTab }: SideBaarProps) {
    // State to manage the sidebar open/close status
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    // State to manage the hover tab
    const [hoverTab, setHoverTab] = useState<number | null>(null);
    const [subcatergory, setSubcategory] = useState<boolean>(false);

    // Get the current theme from the ThemeChanger context
    const { theme } = useTheme();

    return (
        <>
            <div className="lg:relative">
                <div className="lg:sticky top-2">
                    {/* Sidebar for big screens */}
                    <div className="sticky top-0">
                        <div className={`w-[17.5rem] h-[100vh] xl:h-[97.8vh] overflow-auto no-scrollbar hidden sidebar ${theme === "dark" ? "bg-dark" : "bg-custom-gradient-two"} rounded-2xl lg:flex flex-col justify-between sticky top-0`}>
                            <div>
                                <img src={logo} alt="" className="mx-auto xxl:mt-1" />
                                <p className="text-center text-white uppercase">We hate to be late</p>
                                <div className="custom-border w-[87%] mx-auto flex mt-2 xxl:mt-3">
                                    <div className="w-1/2 left-border"></div>
                                    <div className="w-1/2 right-border"></div></div>
                                <div className="px-4">
                                    <div>
                                        <ul className="mt-2 xxl:mt-7">
                                            <li onMouseEnter={() => setHoverTab(0)}
                                                onClick={() => {
                                                    setactiveTab(0)
                                                    setSubcategory(false)
                                                }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl cursor-pointer sidebar-item ${hoverTab === 0 || activeTab === 0 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 0 || activeTab === 0 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-chart-simple text-[0.8rem] xxl:text-[1rem] ${hoverTab === 0 || activeTab === 0 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 0 || activeTab === 0 ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Commodities Overview</p>
                                                </div>
                                            </li>
                                            <li
                                                onClick={() => { setSubcategory(true) }}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${subcatergory ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${subcatergory ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-boxes text-[0.8rem] xxl:text-[1rem] ${subcatergory ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${subcatergory ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Commodity Details</p>
                                                </div>
                                            </li>
                                            <li>
                                                <ul className={`${subcatergory ? "max-h-96" : "max-h-0"} overflow-hidden transition-all ease-in-out duration-700 translate-x-[-2.5rem]`}>
                                                    <li onMouseEnter={() => setHoverTab(6)}
                                                        onClick={() => setactiveTab(6)}
                                                        onMouseLeave={() => setHoverTab(null)}
                                                        className={`p-2 rounded-xl sidebar-item cursor-pointer`}>
                                                        <div className="grid grid-cols-2 items-center gap-3">
                                                            <div className={`ml-auto icon-bg flex justify-center ${hoverTab === 6 || activeTab === 6 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                                <span className={`fa-solid fa-star text-[0.8rem] xxl:text-[1rem] ${hoverTab === 6 || activeTab === 6 ? "text-white " : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                            </div>
                                                            <p className={`${hoverTab === 6 || activeTab === 6 ? "text-white font-bold" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem] uppercase`}>Gold</p>
                                                        </div>
                                                    </li>
                                                    <li onMouseEnter={() => setHoverTab(7)}
                                                        onClick={() => setactiveTab(7)}
                                                        onMouseLeave={() => setHoverTab(null)}
                                                        className={`p-2 rounded-xl sidebar-item cursor-pointer`}>
                                                        <div className="grid grid-cols-2 items-center gap-3">
                                                            <div className={`ml-auto icon-bg flex justify-center ${hoverTab === 7 || activeTab === 7 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                                <span className={`fa-solid fa-star text-[0.8rem] xxl:text-[1rem] ${hoverTab === 7 || activeTab === 7 ? "text-white " : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                            </div>
                                                            <p className={`${hoverTab === 7 || activeTab === 7 ? "text-white font-bold" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem] uppercase`}>Silver</p>
                                                        </div>
                                                    </li>
                                                    <li onMouseEnter={() => setHoverTab(8)}
                                                        onClick={() => setactiveTab(8)}
                                                        onMouseLeave={() => setHoverTab(null)}
                                                        className={`p-2 rounded-xl sidebar-item cursor-pointer`}>
                                                        <div className="grid grid-cols-2 items-center gap-3">
                                                            <div className={`ml-auto icon-bg flex justify-center ${hoverTab === 8 || activeTab === 8 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                                <span className={`fa-solid fa-star text-[0.8rem] xxl:text-[1rem] ${hoverTab === 8 || activeTab === 8 ? "text-white " : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                            </div>
                                                            <p className={`${hoverTab === 8 || activeTab === 8 ? "text-white font-bold" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem] uppercase`}>Wheat</p>
                                                        </div>
                                                    </li>
                                                    <li onMouseEnter={() => setHoverTab(9)}
                                                        onClick={() => setactiveTab(9)}
                                                        onMouseLeave={() => setHoverTab(null)}
                                                        className={`p-2 rounded-xl sidebar-item cursor-pointer`}>
                                                        <div className="grid grid-cols-2 items-center gap-3">
                                                            <div className={`ml-auto icon-bg flex justify-center ${hoverTab === 9 || activeTab === 9 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                                <span className={`fa-solid fa-star text-[0.8rem] xxl:text-[1rem] ${hoverTab === 9 || activeTab === 9 ? "text-white " : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                            </div>
                                                            <p className={`${hoverTab === 9 || activeTab === 9 ? "text-white font-bold" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem] uppercase`}>PALLADIUM</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(2)}
                                                onClick={() => {
                                                    setactiveTab(2)
                                                    setSubcategory(false)
                                                }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 2 || activeTab === 2 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 2 || activeTab === 2 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-th text-[0.8rem] xxl:text-[1rem] ${hoverTab === 2 || activeTab === 2 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 2 || activeTab === 2 ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Product Overview</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(3)}
                                                onClick={() => {
                                                    setactiveTab(3)
                                                    setSubcategory(false)
                                                }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 3 || activeTab === 3 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 3 || activeTab === 3 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-list text-[0.8rem] xxl:text-[1rem] ${hoverTab === 3 || activeTab === 3 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 3 || activeTab === 3 ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Product Details</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(4)}
                                                onClick={() => {
                                                    setactiveTab(4)
                                                    setSubcategory(false)
                                                }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 4 || activeTab === 4 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 4 || activeTab === 4 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-bullhorn text-[0.8rem] xxl:text-[1rem] ${hoverTab === 4 || activeTab === 4 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 4 || activeTab === 4 ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Global News</p>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <ul className="px-4 mb-3 xxl:mb-12"><li className="text-[rgb(190,190,190)]/60 pl-3">Account Pages</li>
                                    <li onMouseEnter={() => setHoverTab(5)}
                                        onClick={() => {
                                            setactiveTab(5)
                                            setSubcategory(false)
                                        }}
                                        onMouseLeave={() => setHoverTab(null)}
                                        className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 5 || activeTab === 5 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`icon-bg flex justify-center ${hoverTab === 5 || activeTab === 5 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                <span className={`fa-solid fa-user text-[0.8rem] xxl:text-[1rem] ${hoverTab === 5 || activeTab === 5 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                            </div>
                                            <p className={`${hoverTab === 5 || activeTab === 5 ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Profile</p>
                                        </div>
                                    </li></ul>
                                <div className="px-4">
                                    <div className={`p-3 rounded-xl border ${theme === "dark" ? "border-yellow sidebaar-end-section" : "border-blue sidebaar-end-section-blue"}`}>
                                        <div className="icon-bg flex justify-center bg-white w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl">
                                            <span className={`fa-solid fa-circle-question ${theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                        </div>
                                        <h3 className="text-white font-bold mt-3">Need help?</h3>
                                        <p className="text-white/70">Please check out docs</p>
                                        <div className="mt-3 flex justify-center">
                                            <button className={`rounded-xl text-white bg-dark w-full font-medium py-1 ${theme === "blue" ? "hover:bg-blue" : ""}`}>DOCUMENTATION</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Sidebar for small screens */}
                    <div className={`sidebar ${theme === "dark" ? "bg-dark" : "bg-custom-gradient-two"} rounded-xl flex flex-col justify-between transition-all duration-300 ease-in-out fixed top-0 left-0 h-screen overflow-y-auto rounded-tl-none rounded-bl-none z-50 lg:hidden ${isSidebarOpen ? "w-[17rem]" : "w-0 overflow-hidden"}`}>
                        <div className={`${isSidebarOpen ? "block" : "hidden"} h-[90%]`}>
                            <img src={logo} alt="" className="mx-auto mt-3" />
                            <p className="text-center text-white uppercase">We hate to be late</p>
                            <div className="w-[88%] mt-3 rounded mx-auto h-[0.1rem] bg-white/50"></div>
                            <div className="flex flex-col h-full">
                                <div className="px-2 mb-auto">
                                    <div>
                                        <ul className="mt-7">
                                            <li onMouseEnter={() => setHoverTab(0)}
                                                onClick={() => { setactiveTab(0); setSubcategory(false); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl cursor-pointer sidebar-item ${hoverTab === 0 || activeTab === 0 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 0 || activeTab === 0 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-chart-simple ${hoverTab === 0 || activeTab === 0 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 0 || activeTab === 0 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Commodities Overview</p>
                                                </div>
                                            </li>
                                            <li
                                                onClick={() => { setSubcategory(true) }}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${subcatergory ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${subcatergory ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-boxes ${subcatergory ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${subcatergory ? "text-white" : "text-[rgb(190,190,190)]"}`}>Commodity Details</p>
                                                </div>
                                            </li>
                                            <li>
                                                <ul className={`${subcatergory ? "max-h-96" : "max-h-0"} overflow-hidden transition-all ease-in-out duration-700  translate-x-[-2.5rem]`}>
                                                    <li onMouseEnter={() => setHoverTab(6)}
                                                        onClick={() => { setactiveTab(6); setIsSidebarOpen(false); }}
                                                        onMouseLeave={() => setHoverTab(null)}
                                                        className={`p-2 rounded-xl sidebar-item cursor-pointer`}>
                                                        <div className="grid grid-cols-2 items-center gap-3">
                                                            <div className={`ml-auto icon-bg flex justify-center ${hoverTab === 6 || activeTab === 6 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                                <span className={`fa-solid fa-star ${hoverTab === 6 || activeTab === 6 ? "text-white " : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                            </div>
                                                            <p className={`${hoverTab === 6 || activeTab === 6 ? "text-white font-bold" : "text-[rgb(190,190,190)]"} uppercase`}>Gold</p>
                                                        </div>
                                                    </li>
                                                    <li onMouseEnter={() => setHoverTab(7)}
                                                        onClick={() => { setactiveTab(7); setIsSidebarOpen(false); }}
                                                        onMouseLeave={() => setHoverTab(null)}
                                                        className={`p-2 rounded-xl sidebar-item cursor-pointer`}>
                                                        <div className="grid grid-cols-2 items-center gap-3">
                                                            <div className={`ml-auto icon-bg flex justify-center ${hoverTab === 7 || activeTab === 7 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                                <span className={`fa-solid fa-star ${hoverTab === 7 || activeTab === 7 ? "text-white " : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                            </div>
                                                            <p className={`${hoverTab === 7 || activeTab === 7 ? "text-white font-bold" : "text-[rgb(190,190,190)]"} uppercase`}>Silver</p>
                                                        </div>
                                                    </li>
                                                    <li onMouseEnter={() => setHoverTab(8)}
                                                        onClick={() => { setactiveTab(8); setIsSidebarOpen(false); }}
                                                        onMouseLeave={() => setHoverTab(null)}
                                                        className={`p-2 rounded-xl sidebar-item cursor-pointer`}>
                                                        <div className="grid grid-cols-2 items-center gap-3">
                                                            <div className={`ml-auto icon-bg flex justify-center ${hoverTab === 8 || activeTab === 8 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                                <span className={`fa-solid fa-star ${hoverTab === 8 || activeTab === 8 ? "text-white " : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                            </div>
                                                            <p className={`${hoverTab === 8 || activeTab === 8 ? "text-white font-bold" : "text-[rgb(190,190,190)]"} uppercase`}>Wheat</p>
                                                        </div>
                                                    </li>
                                                    <li onMouseEnter={() => setHoverTab(9)}
                                                        onClick={() => { setactiveTab(9); setIsSidebarOpen(false); }}
                                                        onMouseLeave={() => setHoverTab(null)}
                                                        className={`p-2 rounded-xl sidebar-item cursor-pointer`}>
                                                        <div className="grid grid-cols-2 items-center gap-3">
                                                            <div className={`ml-auto icon-bg flex justify-center ${hoverTab === 9 || activeTab === 9 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                                <span className={`fa-solid fa-star ${hoverTab === 9 || activeTab === 9 ? "text-white " : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                            </div>
                                                            <p className={`${hoverTab === 9 || activeTab === 9 ? "text-white font-bold" : "text-[rgb(190,190,190)]"} uppercase`}>PALLADIUM</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(2)}
                                                onClick={() => { setactiveTab(2); setSubcategory(false); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 2 || activeTab === 2 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 2 || activeTab === 2 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-th ${hoverTab === 2 || activeTab === 2 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 2 || activeTab === 2 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Product Overview</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(3)}
                                                onClick={() => { setactiveTab(3); setSubcategory(false); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 3 || activeTab === 3 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 3 || activeTab === 3 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-list ${hoverTab === 3 || activeTab === 3 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 3 || activeTab === 3 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Product Details</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(4)}
                                                onClick={() => { setactiveTab(4); setSubcategory(false); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 4 || activeTab === 4 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 4 || activeTab === 4 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-bullhorn ${hoverTab === 4 || activeTab === 4 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 4 || activeTab === 4 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Global News</p>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <ul className="mb-2 xxl:mb-5 px-2"><li className="text-[rgb(190,190,190)]/60 pl-3">Account Pages</li>
                                        <li onMouseEnter={() => setHoverTab(5)}
                                            onClick={() => { setactiveTab(5); setSubcategory(false); setIsSidebarOpen(false); }}
                                            onMouseLeave={() => setHoverTab(null)}
                                            className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 5 || activeTab === 5 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                            <div className="flex items-center gap-3">
                                                <div className={`icon-bg flex justify-center ${hoverTab === 5 || activeTab === 5 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                    <span className={`fa-solid fa-user ${hoverTab === 5 || activeTab === 5 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                </div>
                                                <p className={`${hoverTab === 5 || activeTab === 5 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Profile</p>
                                            </div>
                                        </li></ul>
                                    <div className="px-4">
                                        <div className={`p-3 rounded-xl border ${theme === "dark" ? "border-yellow sidebaar-end-section" : "border-blue sidebaar-end-section-blue"}`}>
                                            <div className="icon-bg flex justify-center bg-white w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl">
                                                <span className={`fa-solid fa-circle-question ${theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                            </div>
                                            <h3 className="text-white font-bold mt-3">Need help?</h3>
                                            <p className="text-white/70">Please check out docs</p>
                                            <div className="mt-3 flex justify-center">
                                                <button className={`rounded-xl text-white bg-dark hover:bg-${theme === "dark" ? "yellow" : "blue"} w-full font-medium py-1 `}>DOCUMENTATION</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="fa-solid fa-bars text-white text-xl cursor-pointer absolute top-2 left-3 z-50 lg:hidden mt-[0.6rem]"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBaar;
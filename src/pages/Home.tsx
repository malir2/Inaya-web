import { useState } from "react";
import logo from "../assets/INAYA-icon.svg";
import Overview from "../components/Overview";

function Home() {
    const [hoverTab, setHoverTab] = useState<number | null>(null);
    const [activeTab, setactiveTab] = useState<number | null>(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

    return (
        <>
            <div className="flex justify-center lg:justify-between lg:gap-4 w-full bg-light h-auto py-3 px-5">
                <div className="relative">
                    <div className="sticky top-0">
                        {/* Sidebar for big screens */}
                        <div className="sticky top-0">
                            <div className="w-[17rem] h-[98vh] hidden sidebar bg-dark rounded-xl lg:flex flex-col justify-between sticky top-0">
                                <div>
                                    <img src={logo} alt="" className="mx-auto mt-3" />
                                    <p className="text-center text-white uppercase">We hate to be late</p>
                                    <div className="px-2">
                                        <div>
                                            <ul className="mt-7">
                                                <li onMouseEnter={() => setHoverTab(0)}
                                                    onClick={() => setactiveTab(0)}
                                                    onMouseLeave={() => setHoverTab(null)}
                                                    className={`p-2 rounded-xl cursor-pointer sidebar-item ${hoverTab === 0 || activeTab === 0 ? "bg-yellow/50" : ""}`}>
                                                    <div className="flex items-center gap-3">
                                                        <div className={`icon-bg flex justify-center ${hoverTab === 0 || activeTab === 0 ? "bg-yellow" : "bg-light"} w-[2.5rem] h-[2.5rem] items-center rounded-xl`}>
                                                            <span className={`fa-solid fa-chart-simple ${hoverTab === 0 || activeTab === 0 ? "text-white" : "text-yellow"} icon`}></span>
                                                        </div>
                                                        <p className={`${hoverTab === 0 || activeTab === 0 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Commodotive Overview</p>
                                                    </div>
                                                </li>
                                                <li onMouseEnter={() => setHoverTab(1)}
                                                    onClick={() => setactiveTab(1)}
                                                    onMouseLeave={() => setHoverTab(null)}
                                                    className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 1 || activeTab === 1 ? "bg-yellow/50" : ""}`}>
                                                    <div className="flex items-center gap-3">
                                                        <div className={`icon-bg flex justify-center ${hoverTab === 1 || activeTab === 1 ? "bg-yellow" : "bg-light"} w-[2.5rem] h-[2.5rem] items-center rounded-xl`}>
                                                            <span className={`fa-solid fa-briefcase ${hoverTab === 1 || activeTab === 1 ? "text-white" : "text-yellow"} icon`}></span>
                                                        </div>
                                                        <p className={`${hoverTab === 1 || activeTab === 1 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Commodotity Details</p>
                                                    </div>
                                                </li>
                                                <li onMouseEnter={() => setHoverTab(2)}
                                                    onClick={() => setactiveTab(2)}
                                                    onMouseLeave={() => setHoverTab(null)}
                                                    className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 2 || activeTab === 2 ? "bg-yellow/50" : ""}`}>
                                                    <div className="flex items-center gap-3">
                                                        <div className={`icon-bg flex justify-center ${hoverTab === 2 || activeTab === 2 ? "bg-yellow" : "bg-light"} w-[2.5rem] h-[2.5rem] items-center rounded-xl`}>
                                                            <span className={`fa-solid fa-briefcase ${hoverTab === 2 || activeTab === 2 ? "text-white" : "text-yellow"} icon`}></span>
                                                        </div>
                                                        <p className={`${hoverTab === 2 || activeTab === 2 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Product Overview</p>
                                                    </div>
                                                </li>
                                                <li onMouseEnter={() => setHoverTab(3)}
                                                    onClick={() => setactiveTab(3)}
                                                    onMouseLeave={() => setHoverTab(null)}
                                                    className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 3 || activeTab === 3 ? "bg-yellow/50" : ""}`}>
                                                    <div className="flex items-center gap-3">
                                                        <div className={`icon-bg flex justify-center ${hoverTab === 3 || activeTab === 3 ? "bg-yellow" : "bg-light"} w-[2.5rem] h-[2.5rem] items-center rounded-xl`}>
                                                            <span className={`fa-solid fa-briefcase ${hoverTab === 3 || activeTab === 3 ? "text-white" : "text-yellow"} icon`}></span>
                                                        </div>
                                                        <p className={`${hoverTab === 3 || activeTab === 3 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Product Details</p>
                                                    </div>
                                                </li>
                                                <li className="text-[rgb(190,190,190)]/60 pl-3">Account Pages</li>
                                                <li onMouseEnter={() => setHoverTab(4)}
                                                    onClick={() => setactiveTab(4)}
                                                    onMouseLeave={() => setHoverTab(null)}
                                                    className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 4 || activeTab === 4 ? "bg-yellow/50" : ""}`}>
                                                    <div className="flex items-center gap-3">
                                                        <div className={`icon-bg flex justify-center ${hoverTab === 4 || activeTab === 4 ? "bg-yellow" : "bg-light"} w-[2.5rem] h-[2.5rem] items-center rounded-xl`}>
                                                            <span className={`fa-solid fa-user ${hoverTab === 4 || activeTab === 4 ? "text-white" : "text-yellow"} icon`}></span>
                                                        </div>
                                                        <p className={`${hoverTab === 4 || activeTab === 4 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Profile</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 mb-6">
                                    <div className="p-3 rounded-xl border border-yellow sidebaar-end-section">
                                        <div className="icon-bg flex justify-center bg-white w-[2.5rem] h-[2.5rem] items-center rounded-xl">
                                            <span className="fa-solid fa-circle-question text-yellow icon"></span>
                                        </div>
                                        <h3 className="text-white font-bold mt-3">Need help?</h3>
                                        <p className="text-white/70">Please check out docs</p>
                                        <div className="mt-3 flex justify-center">
                                            <button className="rounded-xl text-white hover:bg-yellow transition-all bg-dark w-full font-medium py-1">DOCUMENTATION</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar for small screens */}
                        <div className={`sidebar bg-dark rounded-xl flex flex-col justify-between transition-all duration-300 ease-in-out fixed top-0 left-0 h-screen overflow-y-auto rounded-tl-none rounded-bl-none z-50 lg:hidden ${isSidebarOpen ? "w-[17rem]" : "w-0 overflow-hidden"}`}>
                            <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
                                <img src={logo} alt="" className="mx-auto mt-3" />
                                <p className="text-center text-white uppercase">We hate to be late</p>
                                <div className="px-2">
                                    <div>
                                        <ul className="mt-7">
                                            <li onMouseEnter={() => setHoverTab(0)}
                                                onClick={() => { setactiveTab(0); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl cursor-pointer sidebar-item ${hoverTab === 0 || activeTab === 0 ? "bg-yellow/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 0 || activeTab === 0 ? "bg-yellow" : "bg-light"} w-[2.5rem] h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-chart-simple ${hoverTab === 0 || activeTab === 0 ? "text-white" : "text-yellow"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 0 || activeTab === 0 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Commodotive Overview</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(1)}
                                                onClick={() => { setactiveTab(1); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 1 || activeTab === 1 ? "bg-yellow/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 1 || activeTab === 1 ? "bg-yellow" : "bg-light"} w-[2.5rem] h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-briefcase ${hoverTab === 1 || activeTab === 1 ? "text-white" : "text-yellow"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 1 || activeTab === 1 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Commodotity Details</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(2)}
                                                onClick={() => { setactiveTab(2); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 2 || activeTab === 2 ? "bg-yellow/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 2 || activeTab === 2 ? "bg-yellow" : "bg-light"} w-[2.5rem] h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-briefcase ${hoverTab === 2 || activeTab === 2 ? "text-white" : "text-yellow"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 2 || activeTab === 2 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Product Overview</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(3)}
                                                onClick={() => { setactiveTab(3); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 3 || activeTab === 3 ? "bg-yellow/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 3 || activeTab === 3 ? "bg-yellow" : "bg-light"} w-[2.5rem] h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-briefcase ${hoverTab === 3 || activeTab === 3 ? "text-white" : "text-yellow"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 3 || activeTab === 3 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Product Details</p>
                                                </div>
                                            </li>
                                            <li className="text-[rgb(190,190,190)]/60 pl-3">Account Pages</li>
                                            <li onMouseEnter={() => setHoverTab(4)}
                                                onClick={() => { setactiveTab(4); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 4 || activeTab === 4 ? "bg-yellow/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 4 || activeTab === 4 ? "bg-yellow" : "bg-light"} w-[2.5rem] h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-user ${hoverTab === 4 || activeTab === 4 ? "text-white" : "text-yellow"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 4 || activeTab === 4 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Profile</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="mt-[6rem] px-4 mb-6">
                                    <div className="p-3 rounded-xl border border-yellow sidebaar-end-section">
                                        <div className="icon-bg flex justify-center bg-white w-[2.5rem] h-[2.5rem] items-center rounded-xl">
                                            <span className="fa-solid fa-circle-question text-yellow icon"></span>
                                        </div>
                                        <h3 className="text-white font-bold mt-3">Need help?</h3>
                                        <p className="text-white/70">Please check out docs</p>
                                        <div className="mt-3 flex justify-center">
                                            <button className="rounded-xl text-white bg-dark w-full font-medium py-1">DOCUMENTATION</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:hidden">
                            <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="fa-solid fa-bars text-white text-xl cursor-pointer fixed top-3 left-3 z-50 lg:hidden mt-[0.6rem]"></span>
                        </div>
                    </div>
                </div>
                <div className="w-[100%]">
                    <Overview />
                </div>
            </div>
        </>
    )
}

export default Home
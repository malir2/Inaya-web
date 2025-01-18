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

    // Get the current theme from the ThemeChanger context
    const { theme } = useTheme();

    return (
        <>
            <div className="lg:relative">
                <div className="lg:sticky top-2">
                    {/* Sidebar for big screens */}
                    <div className="sticky top-0">
                        <div className={`w-[17rem] h-[100vh] xl:h-[99vh] hidden sidebar ${theme === "dark" ? "bg-dark" : "bg-custom-gradient-two"} rounded-xl lg:flex flex-col justify-between sticky top-0`}>
                            <div>
                                <img src={logo} alt="" className="mx-auto mt-3" />
                                <p className="text-center text-white uppercase">We hate to be late</p>
                                <div className="w-[88%] mt-3 rounded mx-auto h-[0.1rem] bg-white/50"></div>
                                <div className="px-2">
                                    <div>
                                        <ul className="mt-7">
                                            <li onMouseEnter={() => setHoverTab(0)}
                                                onClick={() => setactiveTab(0)}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl cursor-pointer sidebar-item ${hoverTab === 0 || activeTab === 0 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 0 || activeTab === 0 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-chart-simple text-[0.8rem] xxl:text-[1rem] ${hoverTab === 0 || activeTab === 0 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 0 || activeTab === 0 ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Commodotive Overview</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(1)}
                                                onClick={() => setactiveTab(1)}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 1 || activeTab === 1 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 1 || activeTab === 1 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-briefcase text-[0.8rem] xxl:text-[1rem] ${hoverTab === 1 || activeTab === 1 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 1 || activeTab === 1 ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Commodotity Details</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(2)}
                                                onClick={() => setactiveTab(2)}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 2 || activeTab === 2 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 2 || activeTab === 2 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-briefcase text-[0.8rem] xxl:text-[1rem] ${hoverTab === 2 || activeTab === 2 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 2 || activeTab === 2 ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Product Overview</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(3)}
                                                onClick={() => setactiveTab(3)}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 3 || activeTab === 3 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 3 || activeTab === 3 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-briefcase text-[0.8rem] xxl:text-[1rem] ${hoverTab === 3 || activeTab === 3 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 3 || activeTab === 3 ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Product Details</p>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6">
                                <ul className="px-2 mb-5"><li className="text-[rgb(190,190,190)]/60 pl-3">Account Pages</li>
                                    <li onMouseEnter={() => setHoverTab(4)}
                                        onClick={() => setactiveTab(4)}
                                        onMouseLeave={() => setHoverTab(null)}
                                        className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 4 || activeTab === 4 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                        <div className="flex items-center gap-3">
                                            <div className={`icon-bg flex justify-center ${hoverTab === 4 || activeTab === 4 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                <span className={`fa-solid fa-user text-[0.8rem] xxl:text-[1rem] ${hoverTab === 4 || activeTab === 4 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                            </div>
                                            <p className={`${hoverTab === 4 || activeTab === 4 ? "text-white" : "text-[rgb(190,190,190)]"} text-[0.8rem] xxl:text-[1rem]`}>Profile</p>
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
                                                onClick={() => { setactiveTab(0); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl cursor-pointer sidebar-item ${hoverTab === 0 || activeTab === 0 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 0 || activeTab === 0 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-chart-simple ${hoverTab === 0 || activeTab === 0 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 0 || activeTab === 0 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Commodotive Overview</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(1)}
                                                onClick={() => { setactiveTab(1); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 1 || activeTab === 1 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 1 || activeTab === 1 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-briefcase ${hoverTab === 1 || activeTab === 1 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 1 || activeTab === 1 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Commodotity Details</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(2)}
                                                onClick={() => { setactiveTab(2); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 2 || activeTab === 2 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 2 || activeTab === 2 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-briefcase ${hoverTab === 2 || activeTab === 2 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 2 || activeTab === 2 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Product Overview</p>
                                                </div>
                                            </li>
                                            <li onMouseEnter={() => setHoverTab(3)}
                                                onClick={() => { setactiveTab(3); setIsSidebarOpen(false); }}
                                                onMouseLeave={() => setHoverTab(null)}
                                                className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 3 || activeTab === 3 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`icon-bg flex justify-center ${hoverTab === 3 || activeTab === 3 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                        <span className={`fa-solid fa-briefcase ${hoverTab === 3 || activeTab === 3 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                    </div>
                                                    <p className={`${hoverTab === 3 || activeTab === 3 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Product Details</p>
                                                </div>
                                            </li>

                                        </ul>
                                    </div>
                                </div>
                                <div className="mb-6">
                                    <ul className="mb-5 px-2"><li className="text-[rgb(190,190,190)]/60 pl-3">Account Pages</li>
                                        <li onMouseEnter={() => setHoverTab(4)}
                                            onClick={() => { setactiveTab(4); setIsSidebarOpen(false); }}
                                            onMouseLeave={() => setHoverTab(null)}
                                            className={`p-2 rounded-xl sidebar-item cursor-pointer ${hoverTab === 4 || activeTab === 4 ? theme === "dark" ? "bg-yellow/50" : "bg-blue/50" : ""}`}>
                                            <div className="flex items-center gap-3">
                                                <div className={`icon-bg flex justify-center ${hoverTab === 4 || activeTab === 4 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-light" : "bg-blueLighter"} w-[2rem] h-[2rem] xxl:w-[2.5rem] xxl:h-[2.5rem] items-center rounded-xl`}>
                                                    <span className={`fa-solid fa-user ${hoverTab === 4 || activeTab === 4 ? "text-white" : theme === "dark" ? "text-yellow" : "text-blue"} icon`}></span>
                                                </div>
                                                <p className={`${hoverTab === 4 || activeTab === 4 ? "text-white" : "text-[rgb(190,190,190)]"}`}>Profile</p>
                                            </div>
                                        </li></ul>
                                    <div className="px-4">                                <div className={`p-3 rounded-xl border ${theme === "dark" ? "border-yellow sidebaar-end-section" : "border-blue sidebaar-end-section-blue"}`}>
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
                        <span onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="fa-solid fa-bars text-white text-xl cursor-pointer fixed top-2 left-3 z-50 lg:hidden mt-[0.6rem]"></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideBaar;
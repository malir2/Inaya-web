import { useTheme } from "../context/ThemeChanger";
import Profile from "../assets/profile.png";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Chatbot() {
    // Get current path
    const pathName = useLocation();

    // Theme context
    const { theme } = useTheme();

    // State for chat visibility
    const [chatShow, setChatShow] = useState(false);

    // Reference for chat container
    const chatRef = useRef<HTMLDivElement>(null);

    // Handle click outside chat to close it
    const handleClickOutside = (event: MouseEvent) => {
        if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
            setChatShow(false);
        }
    };

    // Add event listener for clicks outside chat
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        !pathName?.pathname?.includes("sign") &&
        <div className="fixed bottom-[2rem] right-[2rem] flex flex-col items-end z-50">
            {chatShow && (
                <div ref={chatRef} className={`rounded-xl shadow-2xl overflow-hidden mb-[-1.5rem] mr-[1.5rem] sm:w-[30rem] lg:w-[50rem] ${theme === "dark" ? "bg-dark" : "bg-white"} chat-screen`}>
                    <div className={`${theme === "dark" ? "bg-light" : "bg-blue"} px-5 py-3 flex justify-between`}>
                        <div className="flex items-center gap-3">
                            <div className="w-[2.5rem] h-[2.5rem]">
                                <img src={Profile} alt="Profile" />
                            </div>
                            <div>
                                <h1 className="text-white">INAYA - AI</h1>
                                <p className="text-white text-sm">Agent</p>
                            </div>
                        </div>
                        <div onClick={() => setChatShow(!chatShow)} className="w-[2.5rem] h-[2.5rem] bg-white rounded-full flex justify-center items-center cursor-pointer">
                            <span className="fa-solid fa-xmark text-dark text-xl"></span>
                        </div>
                    </div>
                    <div className="px-5 h-[15rem] sm:h-[10rem] lg:h-[20rem] overflow-auto scrollbar">
                        {/* Chat messages */}
                        {[...Array(4)].map((_, index) => (
                            <div key={index} className="mt-5">
                                <div className={`flex ${index % 2 === 0 ? "" : "flex-row-reverse"} gap-3`}>
                                    <img src={Profile} alt="Profile" className="w-[2rem] h-[2rem] rounded-full object-cover" />
                                    <div className="w-[80%] sm:w-[40%]">
                                        <div className={`flex justify-between ${index % 2 === 0 ? "" : "flex-row-reverse"} ${theme === "dark" ? "text-white" : "text-dark"} text-[0.8rem]`}>
                                            <h1>Agent</h1>
                                            <p>1:02PM</p>
                                        </div>
                                        <div className={`mt-3 text-white p-3 ${theme === "dark" ? "bg-black/30" : "bg-black/70"} rounded text-sm`}>
                                            <p>Hello! How can I help you today.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-5">
                        <div className={`w-[50%] h-[1px] ${theme === "dark" ? "bg-white" : "bg-gray-500"}`}></div>
                        <div>
                            <input type="text" className={`w-full bg-transparent p-5 ${theme === "dark" ? "text-white caret-yellow" : "text-black caret-blue"} border-0 outline-0`} placeholder="Type message..." />
                        </div>
                    </div>
                </div>
            )}
            <div onClick={() => setChatShow(!chatShow)} className={`${theme === "dark" ? "bg-yellow" : "bg-blue"} w-[4rem] h-[4rem] shadow-2xl cursor-pointer rounded-full flex justify-center items-center`}>
                <span className={`fa-regular fa-comment ${theme === "dark" ? "text-dark" : "text-white"} text-3xl`}></span>
            </div>
        </div>
    );
}

export default Chatbot;
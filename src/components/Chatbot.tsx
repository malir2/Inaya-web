import { useTheme } from "../context/ThemeChanger";
import Profile from "../assets/profile.png";
import { useState, useEffect, useRef } from "react";

function Chatbot() {
    const { theme } = useTheme();
    const [chatShow, setChatShow] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
            setChatShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="fixed bottom-[2rem] right-[2rem] flex flex-col items-end z-50">
            {chatShow && <div ref={chatRef} className={`rounded-xl shadow-2xl overflow-hidden mb-[-1.5rem] mr-[1.5rem] sm:w-[30rem] lg:w-[50rem] ${theme === "dark" ? "bg-dark" : "bg-white"} chat-screen`}>
                <div className={`${theme === "dark" ? "bg-light" : "bg-blue"} px-5 py-3 flex justify-between`}>
                    <div className="flex items-center gap-3">
                        <div className="w-[2.5rem] h-[2.5rem]">
                            <img src={Profile} alt="" />
                        </div>
                        <div>
                            <h1 className="text-white">INAYA - AI</h1>
                            <p className="text-white text-sm">Agent</p>
                        </div>
                    </div>
                    <div onClick={() => {
                        setChatShow(!chatShow)
                    }} className="w-[2.5rem] h-[2.5rem] bg-white rounded-full flex justify-center items-center cursor-pointer">
                        <span className="fa-solid fa-xmark text-dark text-xl"></span>
                    </div>
                </div>
                <div className="">
                    <div className="px-5 h-[15rem] sm:h-[10rem] lg:h-[20rem] overflow-auto scrollbar">
                        <div className="mt-5">
                            <div className="flex gap-3">
                                <img src={Profile} alt="" className="w-[2rem] h-[2rem] rounded-full object-cover" />
                                <div className="w-[80%] sm:w-[40%]">
                                    <div className={`flex justify-between ${theme === "dark" ? "text-white" : "text-dark"} text-[0.8rem]`}>
                                        <h1>Agent</h1>
                                        <p>1:02PM</p>
                                    </div>
                                    <div className={`mt-3 text-white p-3 ${theme === "dakr" ? "bg-black/30" : "bg-black/70"} rounded text-sm`}>
                                        <p>Hello! How can i help you today.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="flex flex-row-reverse gap-3">
                                <img src={Profile} alt="" className="w-[2rem] h-[2rem] rounded-full object-cover" />
                                <div className="w-[80%] sm:w-[40%]">
                                    <div className={`flex justify-between flex-row-reverse ${theme === "dark" ? "text-white" : "text-dark"} text-[0.8rem]`}>
                                        <h1>Agent</h1>
                                        <p>1:02PM</p>
                                    </div>
                                    <div className={`mt-3 text-white p-3 ${theme === "dakr" ? "bg-black/30" : "bg-black/70"} rounded text-sm`}>
                                        <p>Hello! How can i help you today.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="flex gap-3">
                                <img src={Profile} alt="" className="w-[2rem] h-[2rem] rounded-full object-cover" />
                                <div className="w-[80%] sm:w-[40%]">
                                    <div className={`flex justify-between ${theme === "dark" ? "text-white" : "text-dark"} text-[0.8rem]`}>
                                        <h1>Agent</h1>
                                        <p>1:02PM</p>
                                    </div>
                                    <div className={`mt-3 text-white p-3 ${theme === "dakr" ? "bg-black/30" : "bg-black/70"} rounded text-sm`}>
                                        <p>Hello! How can i help you today.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <div className="flex flex-row-reverse gap-3">
                                <img src={Profile} alt="" className="w-[2rem] h-[2rem] rounded-full object-cover" />
                                <div className="w-[80%] sm:w-[40%]">
                                    <div className={`flex justify-between flex-row-reverse ${theme === "dark" ? "text-white" : "text-dark"} text-[0.8rem]`}>
                                        <h1>Agent</h1>
                                        <p>1:02PM</p>
                                    </div>
                                    <div className={`mt-3 text-white p-3 ${theme === "dakr" ? "bg-black/30" : "bg-black/70"} rounded text-sm`}>
                                        <p>Hello! How can i help you today.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className={`w-[50%] h-[1px] ${theme === "dark" ? "bg-white" : "bg-gray-500"}`}></div>
                        <div>
                            <input type="text" className={`w-full bg-transparent p-5 ${theme === "dark" ? "text-white caret-yellow" : "text-black caret-blue"}  border-0 outline-0
                        `} placeholder="Type message..." />
                        </div>
                    </div>
                </div>
            </div>}

            <div onClick={() => {
                setChatShow(!chatShow)
            }} className={`${theme === "dark" ? "bg-yellow" : "bg-blue"} w-[4rem] h-[4rem] shadow-2xl cursor-pointer rounded-full flex justify-center items-center`}>
                <span className={`fa-regular fa-comment ${theme === "dark" ? "text-dark" : "text-white"} text-3xl`}></span>
            </div>
        </div>
    )
}

export default Chatbot
import { useState } from "react";
import { useTheme } from "../context/ThemeChanger";

interface ConfigurationProps {
    setShowTab: (show: boolean) => void;
}

const Configuration: React.FC<ConfigurationProps> = ({ setShowTab }) => {
    const { theme } = useTheme();
    const [tab, setTab] = useState<number>(1);
    const [rawMaterials, setRawMaterials] = useState<{ name: string; percentage: string }[]>([
        { name: "", percentage: "" },
        { name: "", percentage: "" },
        { name: "", percentage: "" },
    ]);

    const addRawMaterial = () => {
        setRawMaterials([...rawMaterials, { name: "", percentage: "" }]);
    };

    const removeRawMaterial = (index: number) => {
        const newRawMaterials = rawMaterials.filter((_, i) => i !== index);
        setRawMaterials(newRawMaterials);
    };

    return (
        <div className="absolute top-[13rem] sm:top-[10.2rem] xl:top-[7.5rem] left-[50%] translate-x-[-50%] lg:translate-x-0 lg:left-[40%] xl:left-[43%] flex flex-col items-end z-50">
            <div className={`rounded-2xl shadow-2xl overflow-hidden mb-[0rem] sm:mb-[-1rem] w-[22rem] sm:w-[28rem] lg:w-[35rem] ${theme === "dark" ? "bg-light" : "bg-white"} chat-screen`}>
                <div className={`${theme === "dark" ? "bg-yellow" : "bg-blue"} px-5 py-2 flex justify-between`}>
                    <div className="flex items-center gap-3">
                        <div>
                            <h1 className="text-white text-xl font-semibold">Product Configuration</h1>
                        </div>
                    </div>
                    <div onClick={() => setShowTab(false)} className="w-[1.8rem] h-[1.8rem] bg-white rounded-full flex justify-center items-center cursor-pointer">
                        <span className="fa-solid fa-xmark text-dark"></span>
                    </div>
                </div>
                <div className="px-5 scrollbar">
                    {tab !== 4 && <div className="my-3 flex justify-between items-center">
                        <p className={`${theme === "dark" ? "text-white" : "text-black"} text-lg font-semibold`}>{tab === 1 && "Product Information"} {tab === 2 && "Analysis Areas of Interest"} {tab === 3 && "Product Information"}</p>
                        <div className="flex gap-1">
                            <div className={`${tab === 1 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-white" : "bg-[#E0E0E0]"} w-[2rem] h-[1rem] rounded-2xl`}></div>
                            <div className={`${tab === 2 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-white" : "bg-[#E0E0E0]"} w-[2rem] h-[1rem] rounded-2xl`}></div>
                            <div className={`${tab === 3 ? theme === "dark" ? "bg-yellow" : "bg-blue" : theme === "dark" ? "bg-white" : "bg-[#E0E0E0]"} w-[2rem] h-[1rem] rounded-2xl`}></div>
                        </div>
                    </div>}
                    {/* Form 1 */}
                    {tab === 1 && <div className="form">
                        <div className="flex flex-col">
                            <label htmlFor="" className={`${theme === "dark" ? "text-white" : "text-black"}`}>Insert your product</label>
                            <input type="text" placeholder="Product name" className={`px-4 py-3 mt-1 rounded-lg ${theme === "dark" ? "config-input" : "config-input-light"}`} />
                        </div>
                        <div className="flex flex-col mt-4">
                            <label htmlFor="" className={`${theme === "dark" ? "text-white" : "text-black"}`}>Main Suppliers</label>
                            <input type="text" placeholder="Insert one or more suppliers" className={`px-4 py-3 mt-1 rounded-lg ${theme === "dark" ? "config-input" : "config-input-light"}`} />
                        </div>
                    </div>}
                    {/* Form 2 */}
                    {tab === 2 && <div className="form">
                        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
                            <div className="flex flex-col">
                                <label htmlFor="" className={`${theme === "dark" ? "text-white" : "text-black"}`}>Geographic Areas of Supply</label>
                                <select className={`px-4 py-3 mt-1 rounded-lg ${theme === "dark" ? "config-input" : "config-input-light"}`} >
                                    <option disabled selected>Select Area</option>
                                    <option value="">Value</option>
                                    <option value="">Value</option>
                                    <option value="">Value</option>
                                </select>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="" className={`${theme === "dark" ? "text-white" : "text-black"}`}>Geographic Areas of Sales</label>
                                <select className={`px-4 py-3 mt-1 rounded-lg ${theme === "dark" ? "config-input" : "config-input-light"}`} >
                                    <option disabled selected>Select Area</option>
                                    <option value="">Value</option>
                                    <option value="">Value</option>
                                    <option value="">Value</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label htmlFor="" className={`${theme === "dark" ? "text-white" : "text-black"}`}>Geographic Areas of Production</label>
                            <select className={`px-4 py-3 mt-1 rounded ${theme === "dark" ? "config-input" : "config-input-light"}`} >
                                <option disabled selected>Select Area</option>
                                <option value="">Value</option>
                                <option value="">Value</option>
                                <option value="">Value</option>
                            </select>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label htmlFor="" className={`${theme === "dark" ? "text-white" : "text-black"}`}>Geographic Areas for Regulatory and Geopolitical Interests</label>
                            <select className={`px-4 py-3 mt-1 rounded ${theme === "dark" ? "config-input" : "config-input-light"}`} >
                                <option disabled selected>Select Area</option>
                                <option value="">Value</option>
                                <option value="">Value</option>
                                <option value="">Value</option>
                            </select>
                        </div>
                    </div>}

                    {/* Form 3 */}
                    {tab === 3 && <div className="form">
                        {rawMaterials.map((_, index) => (
                            <div key={index} className="flex items-center gap-6 mt-3">
                                <div className="grid grid-cols-2 gap-8 w-[100%]">
                                    <div className="flex flex-col">
                                        <label htmlFor="" className={`${theme === "dark" ? "text-white" : "text-black"}`}>Raw Material #{index + 1}</label>
                                        <input type="text" placeholder="Palm Oil" className={`px-4 py-3 mt-1 rounded-lg ${theme === "dark" ? "config-input" : "config-input-light"}`} />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor="" className={`${theme === "dark" ? "text-white" : "text-black"}`}>Percentage</label>
                                        <input type="text" placeholder="50%" className={`px-4 py-3 mt-1 rounded-lg ${theme === "dark" ? "config-input" : "config-input-light"}`} />
                                    </div>
                                </div>
                                <span onClick={() => removeRawMaterial(index)} className={`fa-solid fa-trash-can mt-5 cursor-pointer ${theme === "dark" ? "text-white" : "text-black"}`}></span>
                            </div>
                        ))}

                    </div>}

                    {/* Form 4 */}
                    {tab === 4 &&
                        <div className="my-4">
                            <p className={`${theme === "dark" ? "text-white" : "text-[rgba(0,0,0,0.8)]"} text-xl font-semibold text-center`}>Analysis in Progress</p>
                            <div className="flex justify-center mt-1">
                                <img src={theme === "dark" ? "https://s3-alpha-sig.figma.com/img/58ec/8f64/2f163ed425521fde66646ab2a6802a24?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bFGgZpZTuYn0VQ~0q6L0YAxUUAUI6wonq75qIu41HyCp2G6hScdKcWVayeTRy15wJDNlcEqmu3tyRDSSQ0i0GpZ4nps~mu~mlfPGoSGpS0S0AsbPzj4WH7FU3qiVFpmkf62usXNzMwSQVs9vrgPqoM9r4XPtYPTb6cqIWHx98yuQr19LtCr7GCbZi6xT-iEqdNMlv5FuoNvRJylTvtl37LRYr7yuh2Dj059wRkkDRv~02tA3iC~fFKfaArNmDIdtfKhl8nKm-KYrKi0R07S7d61RFoNk86GsFSS3l8d5r9wGk2xjkHjrcBCZ7y37Ve9FxHHjBa2uQkC46eg9dUo4mQ__" : "https://s3-alpha-sig.figma.com/img/172c/ef8f/ac8db9c3ff648f248a806b33457606ce?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Sh-uxgI1msZ4~vA-eFuTSoqlEiE-ZObjJwbAUWA-~pV7Lkq70iBzv8p1UGYD1nliQ97QP8vSjloXbdTmbRRZiSnS-5WrsmblraiTCp878LsUFR2uO980XGlwmm0FnvA-ixCb1qJZFYHZL9mHmFnJSf4J9zy-gGWu7f1lKl-KHuuHeRZOT1RyvTG7~TJz4H7cJK8LMlDPHqel8NkKhOvMZRfQix867qkMf0LkJTEfLDkW-HKY7pEb930buY4O9JLD9P3YgF3IUmJmAvqGX46DkVnSmRvG61Bnl-s71EY7cMdzlaA0xNWsYQS41JwBHALN9wXxQYGynNhSpgDu5aJdkQ__"} className="w-[30%]" />
                            </div>
                        </div>
                    }

                    {tab === 1 && <div className="flex justify-end mt-7 mb-5">
                        <button onClick={() => {
                            setTab((prev) => prev + 1)
                        }} className={`rounded-md text-white ${theme === "dark" ? "bg-yellow" : "bg-blue"} px-10 py-2`}>Next</button>
                    </div>}
                    {tab === 2 && <div className="flex justify-end mt-7 mb-5">
                        <button onClick={() => {
                            setTab((prev) => prev + 1)
                        }} className={`rounded-md text-white ${theme === "dark" ? "bg-yellow" : "bg-blue"} px-10 py-2`}>Next</button>
                    </div>}
                    {tab === 3 && <div className="flex justify-between items-center mt-7 mb-5">
                        <div className="flex items-center gap-2 cursor-pointer" onClick={addRawMaterial}>
                            <span className={`fa-solid fa-plus ${theme === "dark" ? "text-white" : "text-[#264570]"}`}></span>
                            <p className={`${theme === "dark" ? "text-white" : "text-[#264570]"} underline`}>Add raw material</p>
                        </div>
                        <button onClick={() => {
                            setTab(4)
                        }} className={`rounded-md text-white ${theme === "dark" ? "bg-yellow" : "bg-blue"} px-7 py-2`}>Analyze</button>
                    </div>}
                </div>
            </div>
        </div >
    );
};

export default Configuration;
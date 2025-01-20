import { useTheme } from "../context/ThemeChanger";
import profileImage from "../assets/profile.png";
import "../css/profile.css";
import Header from "./Header";
import { useEffect } from "react";

function Profile() {
    const { theme } = useTheme();

    // Function to check if any select is empty and apply placeholder color
    const checkSelects = () => {
        const selects = document.querySelectorAll("select");
        selects.forEach(select => {
            if (!select.value) {
                select.classList.add("text-gray-500");
            } else {
                select.classList.remove("text-gray-500");
            }
        });
    };

    useEffect(() => {
        checkSelects();
    }, []);

    return (
        <div className="w-full">
            <Header />
            <div className={`${theme === "dark" ? "bg-dark" : "profile-blue"} flex rounded-xl overflow-hidden mt-10 p-0`}>
                <div className="w-[100%] md:w-[82%] px-6 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-[4rem] h-[4rem] sm:w-[7rem] sm:h-[7rem] rounded-full overflow-hidden">
                                <img src={profileImage} alt="" />
                            </div>
                            <div>
                                <h4 className="text-white font-medium sm:text-xl">Gianluca</h4>
                                <p className="text-gray-400 mt-0 sm:mt-2 text-[0.7rem] sm:text-base">gianluca@inaya.ai</p>
                            </div>
                        </div>
                        <button className={`text-white ${theme === "blue" ? "bg-blue" : "bg-yellow"} py-2 px-7 rounded-lg`}>Edit</button>
                    </div>
                    <div className="mt-7 gap-4 md:gap-7 grid grid-cols-1 md:grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <label htmlFor="fullName" className="text-gray-300">Full Name</label>
                            <input id="fullName" type="text" placeholder="Full Name" className="bg-white rounded-md py-3 px-3" />
                        </div>
                        <div className="flex flex-col gap-3">
                            <label htmlFor="nickName" className="text-gray-300">Nick Name</label>
                            <input id="nickName" type="text" placeholder="Nick Name" className="bg-white rounded-md py-3 px-3" />
                        </div>
                        <div className="flex flex-col gap-3 relative">
                            <label htmlFor="gender" className="text-gray-300">Gender</label>
                            <select id="gender" className="bg-white rounded-md py-3 px-3 w-full" onChange={checkSelects}>
                                <option value="" disabled selected hidden>Select Gender</option>
                                <option value="male" className="text-black">Male</option>
                                <option value="female" className="text-black">Female</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3 relative">
                            <label htmlFor="country" className="text-gray-300">Country</label>
                            <select id="country" className="bg-white rounded-md py-3 px-3 w-full" onChange={checkSelects}>
                                <option value="" disabled selected hidden>Country</option>
                                <option value="usa" className="text-black">USA</option>
                                <option value="canada" className="text-black">Canada</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3 relative">
                            <label htmlFor="language" className="text-gray-300">Language</label>
                            <select id="language" className="bg-white rounded-md py-3 px-3 w-full" onChange={checkSelects}>
                                <option value="" disabled selected hidden>Language</option>
                                <option value="english" className="text-black">English</option>
                                <option value="arabic" className="text-black">Arabic</option>
                                <option value="urdu" className="text-black">Urdu</option>
                                <option value="italian" className="text-black">Italian</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-3 relative">
                            <label htmlFor="timeZone" className="text-gray-300">Time Zone</label>
                            <select id="timeZone" className="bg-white rounded-md py-3 px-3 w-full" onChange={checkSelects}>
                                <option value="" disabled selected hidden>Time Zone</option>
                                <option value="gmt+1" className="text-black">+1:00 GMT</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-white font-medium text-xl font-poppins">My email Address</h3>
                        <div className="mt-5">
                            <div className="flex gap-4 items-center">
                                <div className="w-[3rem] h-[3rem] bg-[#4182F9]/20 flex items-center justify-center rounded-full">
                                    <span className={`fa-solid fa-envelope ${theme === "dark" ? "text-yellow" : "text-blue"}`}></span>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">gianluca@inaya.ai</h4>
                                    <p className="text-gray-400 mt-0 text-[0.7rem] sm:text-base">1 month ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-7">
                            <button className="text-white bg-[#404040]/10 px-6 py-3 rounded-md">+Add Email Address</button>
                        </div>
                    </div>
                </div>
                <div className={`w-0 md:w-[18%] ${theme === "dark" ? "bg-[#181818]" : "bg-[#060B28]"}`}></div>
            </div>
        </div>
    )
}

export default Profile;
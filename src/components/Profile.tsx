// import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeChanger";
import profileImage from "../assets/profile.png";
import "../css/profile.css";
import Header from "./Header";

function Profile() {
    const { theme } = useTheme();
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
                            <select id="gender" className="bg-white rounded-md py-3 px-3 w-full appearance-none text-black">
                                <option value="" disabled selected>Select Gender</option>
                                <option value="male" className="text-black">Male</option>
                                <option value="female" className="text-black">Female</option>
                            </select>
                            <span className="absolute right-3 top-[50%] translate-y-[50%] fa-solid fa-chevron-down text-gray-500"></span>
                        </div>
                        <div className="flex flex-col gap-3 relative">
                            <label htmlFor="country" className="text-gray-300">Country</label>
                            <select id="country" className="bg-white rounded-md py-3 px-3 w-full appearance-none text-black">
                                <option value="" disabled selected>Country</option>
                                <option value="male" className="text-black">USA</option>
                                <option value="female" className="text-black">Canada</option>
                            </select>
                            <span className="absolute right-3 top-[50%] translate-y-[50%] fa-solid fa-chevron-down text-gray-500"></span>
                        </div>
                        <div className="flex flex-col gap-3 relative">
                            <label htmlFor="country" className="text-gray-300">Language</label>
                            <select id="country" className="bg-white rounded-md py-3 px-3 w-full appearance-none text-black">
                                <option value="" disabled selected>Language</option>
                                <option value="male" className="text-black">English</option>
                                <option value="female" className="text-black">Arabic</option>
                                <option value="female" className="text-black">Urdu</option>
                                <option value="female" className="text-black">Italian</option>
                            </select>
                            <span className="absolute right-3 top-[50%] translate-y-[50%] fa-solid fa-chevron-down text-gray-500"></span>
                        </div>
                        <div className="flex flex-col gap-3 relative">
                            <label htmlFor="timeZone" className="text-gray-300">Time Zone</label>
                            <select id="timeZone" className="bg-white rounded-md py-3 px-3 w-full appearance-none text-black">
                                <option value="" disabled selected>Time Zone</option>
                                <option value="male" className="text-black">+1:00 GMT</option>
                            </select>
                            <span className="absolute right-3 top-[50%] translate-y-[50%] fa-solid fa-chevron-down text-gray-500"></span>
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
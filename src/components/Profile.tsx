import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeChanger";
import "../css/profile.css";

function Profile() {
    const { theme, toggleTheme } = useTheme();
    return (
        <div className="w-full">
            {/* Header Section */}
            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
                <h4 className="text-white font-semibold ms-6 lg:ms-0">Profile</h4>
                <div className="flex items-center justify-end gap-2 md:gap-5">
                    {/* Search Input */}
                    <div className={`${theme === "dark" ? "bg-[#868686]" : "bg-blueLighter"} px-2 py-1 rounded-xl`}>
                        <span className={`fa-solid fa-magnifying-glass ${theme === "dark" ? "text-yellow" : "text-blue"} mr-3`}></span>
                        <input type="text" placeholder="Type here..." className={`${theme === "dark" ? "bg-[#868686] caret-yellow" : "bg-blueLighter caret-blue"} w-[8rem] md:w-[12rem] focus-visible:outline-0 text-white focus-visible::border-none`} />
                    </div>
                    {/* User Icon */}
                    <Link to="/sign-in">
                        <div>
                            <span className={`fa-solid fa-user ${theme === "dark" ? "text-yellow" : "text-white"}`}></span>
                            <span className="text-white ml-3">Sign In</span>
                        </div>
                    </Link>
                    {/* Settings Icon */}
                    <div>
                        <span onClick={toggleTheme} className={`fa-solid fa-gear ${theme === "dark" ? "text-yellow" : "text-white"} cursor-pointer`}></span>
                    </div>
                    {/* Notifications Icon */}
                    <div>
                        <span className={`fa-solid fa-bell ${theme === "dark" ? "text-yellow" : "text-white"}`}></span>
                    </div>
                </div>
            </div>
            {/* First Row Component */}
            <div className={`${theme === "dark" ? "bg-dark" : "profile-blue"} flex rounded-lg overflow-hidden mt-10 p-0`}>
                <div className="w-[80%] p-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus facere consectetur culpa numquam, odit reiciendis temporibus unde sapiente, obcaecati illum laborum aspernatur, quod quas corporis ratione nisi rem id officia perferendis alias blanditiis ea dolorum. Reiciendis deleniti vitae neque accusamus vero est, delectus corporis, voluptatem pariatur, unde soluta placeat mollitia voluptas quis in quasi. Debitis velit nesciunt consectetur adipisci quasi. Voluptas ratione consectetur aut cupiditate neque corporis molestiae soluta est architecto fugit, id sequi blanditiis asperiores quod ducimus. Eius laudantium architecto obcaecati ipsa possimus, nemo blanditiis explicabo ad dicta illo voluptates quas dolore? Animi eius ullam non ipsam asperiores nesciunt et quidem quisquam fugiat velit natus fugit quibusdam facilis, expedita laborum nisi blanditiis similique molestiae, pariatur unde? Adipisci, fugit ex. Recusandae, eaque itaque eum repudiandae laborum ipsa suscipit alias nesciunt, nisi voluptatibus ullam et distinctio inventore voluptas ipsam amet architecto debitis dolorem temporibus velit provident. Voluptates mollitia, eligendi cum omnis consequuntur ex, natus sapiente alias inventore assumenda sit culpa, doloribus eveniet architecto laudantium error! Dolore, culpa modi eos sunt atque ut fuga explicabo tempore obcaecati libero inventore harum, veritatis quod maiores voluptates sit ea ex rerum aut commodi? Doloremque architecto autem obcaecati? Sint, harum esse dignissimos eos architecto facere modi?
                </div>
                <div className={`w-[20%] ${theme === "dark" ? "bg-[#181818]" : "bg-[#060B28]"}`}></div>
            </div>
        </div>
    )
}

export default Profile
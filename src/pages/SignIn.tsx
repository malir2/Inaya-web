import { useTheme } from "../context/ThemeChanger";
import signIn from "../assets/signIn.png";
import logo from "../assets/INAYA-icon.svg";
import "../css/signIn.css";

function SignIn() {
    const { theme } = useTheme();
    return (
        <div className={`w-screen h-screen flex gap-6 justify-center items-center ${theme === 'dark' ? "bg-light" : "blue-background-image"}`}>
            <div className="h-[90%] w-[40%] xl:w-[32%] hidden md:block rounded-lg overflow-hidden">
                <img src={signIn} alt="sign-in" className={`object-cover w-full h-full ${theme === "blue" ? "opacity-100" : "opacity-60"}`} />
            </div>
            <div className="w-[90%] md:w-[40%] xl:w-[25%]">
                <img src={logo} alt="" className="mx-auto object-cover" />
                <h1 className="text-[1.8rem] mt-5 text-white font-bold">Hello there.</h1>
                <div className={`w-full h-[0.3rem] my-2 ${theme === "blue" ? "bg-custom-gradient" : "bg-custom-gradient-yellow"}`}>
                </div>
                <p className="text-white text-[0.9rem]">Sign in to continue</p>
                <div className="mt-10">
                    <div className="relative">
                        <span className={`${theme === "dark" ? "bg-white " : "bg-[#AFAFAF]"} px-2 text-[0.8rem] absolute top-[-20%] left-[5%]`}>E-mail</span>
                        <input type="text" className={`${theme === "blue" ? "bg-white" : "bg-[#AFAFAF]"} h-[3rem] w-full rounded`} />
                    </div>
                    <div className="relative mt-7">
                        <span className={`${theme === "dark" ? "bg-white " : "bg-[#AFAFAF]"} px-2 text-[0.8rem] absolute top-[-10%] left-[5%]`}>Password</span>
                        <input type="text" className={`${theme === "blue" ? "bg-white" : "bg-[#AFAFAF]"} h-[3rem] w-full rounded`} />
                        <p className="mt-3 text-end font-medium text-white">Forgot Password?</p>
                    </div>
                    <div className="mt-7">
                        <button className={`${theme === "dark" ? "bg-custom-gradient-yellow" : "bg-custom-gradient"} w-100 text-white py-3 rounded w-full font-medium`}>Sign In</button>
                        <div className="my-3 flex items-center gap-3">
                            <div className="w-[45%] h-[0.01rem] rounded-xl bg-white "></div>
                            <span className="text-white">or</span>
                            <div className="w-[45%] h-[0.01rem] rounded-xl bg-white "></div>
                        </div>
                        <button className={`bg-[#AFAFAF] w-100 text-white py-3 rounded w-full font-medium`}>Do you need help?</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
import FirstRow from "./FirstRow";
import SecondRow from "./SecondRow";

export default function Overview() {
    return (
        <div>
            <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between">
                <h4 className="text-white font-semibold ms-6 lg:ms-0">Commodities Overview</h4>
                <div className="flex items-center justify-end gap-2 md:gap-5">
                    <div className="bg-[#868686] px-2 py-1 rounded-xl">
                        <span className="fa-solid fa-magnifying-glass text-yellow mr-3"></span>
                        <input type="text" placeholder="Type here..." className="bg-[#868686] w-[8rem] md:w-[12rem] focus-visible:outline-0 caret-yellow text-white focus-visible::border-none" />
                    </div>
                    <div>
                        <span className="fa-solid fa-user text-yellow"></span>
                        <span className="text-white ml-3">Sign In</span>
                    </div>
                    <div>
                        <span className="fa-solid fa-gear text-yellow"></span>
                    </div>
                    <div>
                        <span className="fa-solid fa-bell text-yellow"></span>
                    </div>
                </div>
            </div>
            <div className="relative flex w-auto mt-10">
                <h1 className="text-white font-bold text-[2rem]">Welcome Jhon 👋</h1>
                <div className="absolute bottom-[-1rem] left-[-10px] right-[-10px] w-[100%] md:w-[40%] rounded-xl h-[0.3rem] bg-yellow"></div>
            </div>
            <div className="mt-10">

                <FirstRow />
            </div>
            <div className="mt-10">

                <SecondRow />
            </div>
        </div>
    )
}

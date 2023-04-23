import { AiOutlineSearch, AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function Search() {
    return (
        <div className="grid gap-10 bg-secondary p-12 rounded-[10px]">
            <form>
                <div className="flex items-center justify-between rounded-lg gap-2.5 bg-white p-5 shadow-md">
                    <section className="flex gap-2 items-center">
                        <AiOutlineSearch className="text-2xl cursor-pointer" />
                        <input
                            type="text"
                            className="bg-transparent text-blue-500 focus:outline-none w-full"
                            placeholder="Search Jobs Here..."
                        />
                        <AiOutlineCloseCircle className="text-2xl text-[#a5a6a6] hover:text-accent cursor-pointer" />
                    </section>
                    <section className="flex gap-2 items-center">
                        <BsHouseDoor className="text-2xl cursor-pointer" />
                        <input
                            type="text"
                            className="bg-transparent text-blue-500 focus:outline-none w-full"
                            placeholder="Search by company..."
                        />
                        <AiOutlineCloseCircle className="text-2xl text-[#a5a6a6] hover:text-accent cursor-pointer" />
                    </section>
                    <section className="flex gap-2 items-center">
                        <CiLocationOn className="text-2xl cursor-pointer" />
                        <input
                            type="text"
                            className="bg-transparent text-blue-500 focus:outline-none w-full"
                            placeholder="Search by location..."
                        />
                        <AiOutlineCloseCircle className="text-2xl text-[#a5a6a6] hover:text-accent cursor-pointer" />
                    </section>
                    <button className="bg-primary p-5 px-10 rounded-[10px] text-white hover:bg-blue-500">
                        Search
                    </button>
                </div>
            </form>
            <div className="flex gap-10 items-center justify-center">
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="relevance"
                        className="text-[#808080] font-semibold"
                    >
                        Sort by:
                    </label>
                    <select
                        id="relevance"
                        className="bg-white rounded-sm px-4 py-1"
                    >
                        <option value="">Relevance</option>
                        <option value="">Inclusive</option>
                        <option value="">Starts With</option>
                        <option value="">Contains</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="type"
                        className="text-[#808080] font-semibold"
                    >
                        Type:
                    </label>
                    <select id="type" className="bg-white rounded-sm px-4 py-1">
                        <option value="">Full-Time</option>
                        <option value="">Remote</option>
                        <option value="">Contract</option>
                        <option value="">Part-Time</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <label
                        htmlFor="level"
                        className="text-[#808080] font-semibold"
                    >
                        Level:
                    </label>
                    <select
                        id="level"
                        className="bg-white rounded-sm px-4 py-1"
                    >
                        <option value="">Senior</option>
                        <option value="">Beginner</option>
                        <option value="">Intermediate</option>
                        <option value="">Advocate</option>
                    </select>
                </div>
                <span className="text-[#a1a1a1] cursor-pointer">Clear all</span>
            </div>
        </div>
    );
}

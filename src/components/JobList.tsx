import { BiTimeFive } from "react-icons/bi";
import logo from "../assets/logo-2.png";

export default function JobList() {
    const items = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            <div className="flex gap-10 items-center justify-center flex-wrap py-10">
                {items.map((item) => (
                    <div
                        key={item}
                        className="group group/item p-5 w-[250px] bg-white rounded-md shadow-md hover:bg-primary"
                    >
                        <span className="flex justify-between items-center gap-4">
                            <h1 className="text-[16px] text-accent font-semibold group-hover:text-white">
                                Web Developer
                            </h1>
                            <span className="flex items-center gap-1 text-[#ccc]">
                                <BiTimeFive />
                                Now
                            </span>
                        </span>
                        <h6 className="text-[#ccc]">Canada</h6>
                        <p className="text-[13px] text-[#959595] border-t-2 pt-2 mt-3 group-hover:text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Animi iure, repellendus tempore reiciendis in
                            fuga eos ullam voluptate.
                        </p>
                        <div className="flex items-center gap-2">
                            <img src={logo} className="w-[10%]" />
                            <span className="text-sm py-4 block group-hover:text-white">
                                Raise co.
                            </span>
                        </div>
                        <button className="border-2 rounded-lg block p-2.5 text-sm w-full font-semibold text-accent hover:bg-white group-hover/item:text-accent group-hover:text-white">
                            Apply now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

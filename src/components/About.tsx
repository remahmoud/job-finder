import photo from "../assets/photo.png";

export default function About() {
    return (
        <div className="mb-16 mt-4">
            <h1 className="text-accent font-bold text-2xl pt-8 pb-12">
                The value that holds us true and to account
            </h1>
            <div className="grid grid-cols-3 gap-10 items-center">
                <div className="rounded-md hover:bg-[#eeedf7] p-6">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl h-10 w-10 flex items-center justify-center bg-[#dedef8]">
                            <img src={photo} className="w-[70%]" />
                        </div>
                        <span className="text-lg text-accent font-semibold">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-sm text-accent text-opacity-70 py-4 font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="rounded-md hover:bg-[#f7edf5] p-6">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl h-10 w-10 flex items-center justify-center bg-[#f7d1e1]">
                            <img src={photo} className="w-[70%]" />
                        </div>
                        <span className="text-lg text-accent font-semibold">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-sm text-accent text-opacity-70 py-4 font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="rounded-md hover:bg-[#fcfae3] p-6">
                    <div className="flex items-center gap-3">
                        <div className="rounded-xl h-10 w-10 flex items-center justify-center bg-[#f3f2ad]">
                            <img src={photo} className="w-[70%]" />
                        </div>
                        <span className="text-lg text-accent font-semibold">
                            Simplicity
                        </span>
                    </div>
                    <p className="text-sm text-accent text-opacity-70 py-4 font-semibold">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
            </div>
        </div>
    );
}

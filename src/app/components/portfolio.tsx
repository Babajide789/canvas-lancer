import Image from "next/image";


export default function Portfolio () {
    return (
        <>       
            {/* PORTFOLIO SECTION */}
            <div className="mt-20 text-center">
                <p className="text-red-600 font-semibold uppercase tracking-wide">
                    Our Portfolio
                </p>
        
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
                    <span className="text-red-500">Projects</span> We Have Completed
                </h3>
        
                {/* FILTER BUTTONS */}
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    {["All", "UI/UX", "Development", "Mobile Development", "SEO"].map(
                    (item) => (
                        <button
                        key={item}
                        className="px-6 py-2 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-medium transition-all duration-300"
                        >
                        {item}
                        </button>
                    )
                    )}
                </div>
                
                {/* PORTFOLIO IMAGES GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-6 md:px-20">
                    {/* Replace with your images */}
                    <Image
                        src="/frame-1.png"
                        alt="Frame 1"
                        width={250}
                        height={150}
                        className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                    />

                    <Image
                        src="/frame-2.png"
                        alt="Project 2"
                        width={250}
                        height={150}
                        className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                    />

                    <Image
                        src="/frame-3.png"
                        alt="Project 3"
                        width={250}
                        height={150}
                        className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>
        </>
    )
}
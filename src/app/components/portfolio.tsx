import Image from "next/image";

export default function Portfolio() {
  return (
    <>       
      {/* PORTFOLIO SECTION */}
      <div className="mt-20 text-center pb-16" id="portfolio"> {/* Added pb-16 for spacing below */}
        
        {/* Section Title */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-[80px] h-[1px] bg-gray-300"></div>
          <p className="text-gray-500 font-semibold tracking-wide text-sm sm:text-base whitespace-nowrap">
            OUR PORTFOLIO
          </p>
          <div className="w-[80px] h-[1px] bg-gray-300"></div>
        </div>
        
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[6px] sm:gap-[10px] md:gap-[5px] mt-12 px-2 sm:px-6 md:px-16">
          
          <Image
            src="/frame-1.png"
            alt="Frame 1"
            width={300}
            height={180}
            className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 w-[90%] mx-auto"
          />

          <Image
            src="/frame-2.png"
            alt="Project 2"
            width={300}
            height={180}
            className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 w-[90%] mx-auto"
          />

          <Image
            src="/frame-3.png"
            alt="Project 3"
            width={300}
            height={180}
            className="rounded-md shadow-sm hover:scale-105 transition-transform duration-300 w-[90%] mx-auto"
          />
        </div>
      </div>
    </>
  )
}

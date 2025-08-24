


// src/app/components/Hero.tsx
export default function Hero() {
  return (
          <section className="relative h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background-img.png')" }}>

            <div className="h-full flex flex-col items-center justify-center text-center bg-black/50 text-white px-4">

              <div className="welcome-text space-y-6 max-w-2xl">
                <h5 className="flex justify-center items-center gap-2 text-lg font-medium">
                  Welcome To <span className="text-red-500 font-bold">Canvas Lancer</span>
                </h5>

                <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                  Designing the Future with <span className="text-red-500">Canvas Lancer</span>
                </h2>

                <div className="w-full flex justify-end">
                  <div className="h-0.5 w-110 bg-red-500 my-4 rounded-full"></div>
                </div>

                <p className="text-lg md:text-xl text-gray-200">
                  At Canvas Lancer, we blend creativity and innovation to design impactful digital experiences.
                   Our mission is to shape the future with bold ideas and stunning visuals.
                </p>

      <div className="flex justify-center gap-6 mt-8">
  <button className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">
    Hire Us
  </button>

  <button className="px-8 py-3 rounded-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">
    View Portfolio
  </button>
</div>


              </div>

            </div>
            
          </section>

  );
}

import Image from "next/image";



export default function About() {
  return (
    <section className="relative py-20 bg-gray-50">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE IMAGE */}
            
            <div className="relative w-fit">
  {/* First Image - base image */}
  <div className="relative w-[320px] h-[350px]">
    <Image
      src="/about-img-2.png"
      alt="About Image 1"
      fill
      className="rounded-2xl shadow-xl object-cover"
    />
    {/* Decorative overlay */}
    <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-100 rounded-3xl -z-10"></div>
  </div>

  {/* Second Image - overlapping & shifted */}
  <div className="absolute top-40 left-48 w-[260px] h-[240px]">
    <Image
      src="/about-img-1.png"
      alt="About Image 2"
      fill
      className="rounded-2xl shadow-lg object-cover"
    />
    {/* Decorative overlay */}
    <div className="absolute bottom-6 -right-6 w-20 h-20 bg-red-200 rounded-full -z-10"></div>
  </div>
</div>





            {/* RIGHT SIDE TEXT */}
        <div className="space-y-6 text-center md:text-left">
          <p className="text-red-600 font-semibold uppercase tracking-wide">
            About Canvas Lancer
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-800">
            Introduction To The Best <br className="hidden sm:block" /> Digital
            Agency
          </h2>

          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            At Canvas Lancer, we blend creativity and strategy to craft impactful
            digital experiences. From UI/UX to mobile apps, web development, and
            SEO, we help brands stand out with solutions that inspire, engage,
            and drive results. We believe in design with purpose — where every
            detail enhances user experience and every solution fuels growth. With
            a passionate team and a forward-thinking approach, we partner with
            you to turn bold ideas into lasting success.
          </p>

          <button className="px-8 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            Hire Us
          </button>
        </div>
        </div>

      
    </section>
  );
}

import Image from "next/image";

export default function Feedback() {
  return (
    <section className="py-20 bg-[#202020]" id="testimonies">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-12">
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-4 mb-2 w-full">
              {/* Line only 15% of container width */}
              <div className="w-[15%] h-[1px] bg-gray-600"></div>

              {/* Text */}
              <p className="text-gray-200 font-semibold tracking-wide uppercase text-sm sm:text-base whitespace-nowrap">
                Customer <span className="text-red-500">Feedback</span>
              </p>
            </div>

            <h2 className="text-left text-3xl md:text-4xl font-bold text-white mt-2">
              What Our <span className="text-red-500">Customers</span> <br /> 
              Say About Us
            </h2>
          </div>
        </div>

        {/* Feedback Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
            <p className="text-gray-600 italic mb-6">
              “Canvas Lancer completely transformed our website. We’ve seen a huge
              boost in engagement since the redesign.”
            </p>

            {/* Rating Image */}
            <Image
              src="/rating.png"
              alt="rating"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />

            {/* Avatar + Name */}
            <div className="flex items-center gap-3 mt-4">
              <Image
                src="/alexander-hipp.jpg"
                alt="alexander-hipp"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="text-left">
                <h5 className="font-semibold text-lg text-gray-900">Alexander Hipp</h5>
                <span className="text-sm text-gray-500">CEO, BrightTech</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
            <p className="text-gray-600 italic mb-6">
              “The team delivered exactly what we envisioned—clean, modern, and 
              user-friendly. Couldn’t be happier!”
            </p>

            {/* Rating Image */}
            <Image
              src="/rating.png"
              alt="rating"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />

            {/* Avatar + Name */}
            <div className="flex items-center gap-3 mt-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/michael-dam.jpg"
                  alt="Jane Smith"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h5 className="font-semibold text-lg text-gray-900">Jane Smith</h5>
                <span className="text-sm text-gray-500">CTO, NovaLabs</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center">
            <p className="text-gray-600 italic mb-6">
              “Working with them was seamless. They understood our needs and delivered
              beyond expectations.”
            </p>

            {/* Rating Image */}
            <Image
              src="/rating.png"
              alt="rating"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />

            {/* Avatar + Name */}
            <div className="flex items-center gap-3 mt-4">
              <Image
                src="/emily-johnson.jpg"
                alt="Emily Johnson"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="text-left">
                <h5 className="font-semibold text-lg text-gray-900">Emily Johnson</h5>
                <span className="text-sm text-gray-500">CMO, Visionary Co.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image";



export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-6">
        <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
                {/* Top Text */}
                <p className="text-blue-600 font-semibold tracking-wide uppercase">
                    Contact Us
                </p>

                {/* Heading */}
                <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    Contact Us & We Can Work Together
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Have a project in mind or just want to say hello? Fill in the form
                    below and we’ll get back to you as soon as possible.
                </p>
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Form */}
                <form className="flex-1 flex flex-col gap-4 text-left w-full">
                    <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                    placeholder="Your Message"
                    className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                    ></textarea>
                    <button
                    type="submit"
                    className="bg-red-500 px-6 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition"
                    >
                    Submit Message
                    </button>
                </form>

                {/* Image */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <Image
                    src="/contact-frame.png"
                    alt="Contact illustration"
                    width={400}
                    height={400}
                    className="max-w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    </section>
  );
}

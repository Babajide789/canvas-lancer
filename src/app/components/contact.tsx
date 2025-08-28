import Image from "next/image";



export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4 sm:px-6 lg:px-12" id="contact">
        <div className="bg-gray-200 rounded-2xl shadow-lg p-6 sm:p-10">
            {/* HEADER */}
            <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                    {/* Line only 15% of container width */}
                    <div className="w-[15%] h-[1px] bg-gray-300"></div>

                    {/* Text */}
                    <p className="text-red-500 font-semibold tracking-wide uppercase text-sm sm:text-base whitespace-nowrap">
                        Contact Us
                    </p>
                </div>



                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                    <span className="text-red-500">Contact</span> Us &amp; We Can
                    <br />
                    <span>Work Together</span>
                </h4>


                <p className="text-gray-600 leading-relaxed max-w-2xl text-left text-sm sm:text-base">
                    Have a project in mind or just want to say hello? <br /> 
                    Fill in the form below and we’ll get back to you as soon as possible.
                </p>

            </div>

            {/* CONTENT WRAPPER */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-12">
                {/* FORM */}
                <form className="flex-1 flex flex-col gap-4 w-full">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-white"
                    />

                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-white"
                    />

                    <textarea
                        placeholder="Your Message"
                        className="w-full p-3 sm:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px] text-sm sm:text-base bg-white"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-red-500 px-6 py-3 rounded-xl text-white font-semibold hover:bg-red-600 transition text-sm sm:text-base"
                    >
                        Submit Message
                    </button>
                </form>

                {/* IMAGE */}
               <div className="flex-1 flex justify-center md:justify-end">
                    <Image
                        src="/contact-frame.png"
                        alt="Contact illustration"
                        width={400}
                        height={400}
                        className="
                            max-w-[250px] 
                            sm:max-w-[320px] 
                            md:max-w-[400px] 
                            lg:max-w-[450px] 
                            h-auto object-contain
                            mt-0 sm:mt-[-50px] md:mt-[-100px] lg:mt-[-200px]
                        "
                    />
                </div>

            </div>
      </div>
    </section>
  );
}

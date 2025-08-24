import Image from "next/image";



export default function Offers() {
  return (
    <section className="py-16 px-6 lg:px-20 bg-gray-50">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
            {/* Left Side - Text */}
            <div className="space-y-6">
                <p className="text-red-500 font-semibold uppercase tracking-wide">
                    What We Are Offering
                </p>

                <h3 className="text-3xl lg:text-4xl font-bold leading-snug">
                    <span className="text-red-500">Services</span> We Can Offer You!
                </h3>

                <p className="text-gray-600">
                    At Canvas Lancer, we provide creative and strategic solutions to
                    elevate your brand. From user-focused design to seamless development
                    and digital marketing, our services are tailored to deliver impact.
                </p>

                <button className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition">
                    Hire Us
                </button>
            
            </div>

            {/* Right Side - Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
                <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                    {/* Add your icon/image here */}
                    
                             
                    <Image
                        src="/wireframing.png"
                        alt="/UX/UI Image"
                        width={50}
                        height={50}
                    />

                    <h4 className="text-xl font-semibold mb-2">UI/UX</h4>

                    <p className="text-gray-600 text-sm">
                        Crafting user-friendly and engaging interfaces that enhance experience.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                    <Image
                        src="/mob-dev.png"
                        alt="/development Image"
                        width={50}
                        height={50}
                    />

                    <h4 className="text-xl font-semibold mb-2">Web Development</h4>

                    <p className="text-gray-600 text-sm">
                        Building fast, responsive, and scalable websites tailored for your brand.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                    <Image
                        src="/ux-ui.png"
                        alt="/UX-UI Image"
                        width={50}
                        height={50}
                    />

                    <h4 className="text-xl font-semibold mb-2">Mobile Apps</h4>

                    <p className="text-gray-600 text-sm">
                        Developing powerful mobile solutions that keep your audience connected.
                    </p>
                </div>

                <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
                    
                    <Image
                        src="/speed.png"
                        alt="/UX/UI Image"
                        width={50}
                        height={50}
                    />

                    <h4 className="text-xl font-semibold mb-2">SEO & Marketing</h4>
                    
                    <p className="text-gray-600 text-sm">
                        Helping your brand get discovered online with smart SEO strategies.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

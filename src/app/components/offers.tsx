import Image from "next/image";

export default function Offers() {
  return (
    <section className="py-16 px-6 sm:px-10 lg:px-20 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
        <div className="space-y-6 text-center lg:text-left">
          <p className="text-red-500 font-semibold uppercase tracking-wide text-sm sm:text-base">
            What We Are Offering
          </p>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
            <span className="text-red-500">Services</span> We Can Offer You!
          </h3>

          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-lg mx-auto lg:mx-0">
            At Canvas Lancer, we provide creative and strategic solutions to
            elevate your brand. From user-focused design to seamless development
            and digital marketing, our services are tailored to deliver impact.
          </p>

          <button className="px-6 py-3 bg-red-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition text-sm sm:text-base">
            Hire Us
          </button>
        </div>

        {/* Right Side - Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center sm:text-left">
            <Image
              src="/wireframing.png"
              alt="UX/UI Image"
              width={50}
              height={50}
              className="mx-auto sm:mx-0"
            />
            <h4 className="text-lg sm:text-xl font-semibold mb-2 mt-4">UI/UX</h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Crafting user-friendly and engaging interfaces that enhance
              experience.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center sm:text-left">
            <Image
              src="/mob-dev.png"
              alt="Web Development Image"
              width={50}
              height={50}
              className="mx-auto sm:mx-0"
            />
            <h4 className="text-lg sm:text-xl font-semibold mb-2 mt-4">
              Web Development
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Building fast, responsive, and scalable websites tailored for your
              brand.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center sm:text-left">
            <Image
              src="/ux-ui.png"
              alt="Mobile Apps Image"
              width={50}
              height={50}
              className="mx-auto sm:mx-0"
            />
            <h4 className="text-lg sm:text-xl font-semibold mb-2 mt-4">
              Mobile Apps
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Developing powerful mobile solutions that keep your audience
              connected.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition text-center sm:text-left">
            <Image
              src="/speed.png"
              alt="SEO & Marketing Image"
              width={50}
              height={50}
              className="mx-auto sm:mx-0"
            />
            <h4 className="text-lg sm:text-xl font-semibold mb-2 mt-4">
              SEO & Marketing
            </h4>
            <p className="text-gray-600 text-sm sm:text-base">
              Helping your brand get discovered online with smart SEO
              strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

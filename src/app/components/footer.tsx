import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { Mail, Phone, MapPin } from "lucide-react";


export default function Footer() {
  return (
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
            {/* Logo + Description */}
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center justify-center md:justify-start gap-2">
                <Image
                src="/LOGO.png"
                alt="Site Logo"
                width={40}
                height={40}
                className="rounded-full"
                />
                Canvas Lancer
              </h3>

              <p className="text-sm text-gray-400">
                  Creative solutions for modern brands. We design and build with passion.
              </p>


              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-4 mt-4">
                  <a
                  href="#"
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition"
                  >
                  <Facebook size={18} />
                  </a>
                  <a
                  href="#"
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition"
                  >
                  <Instagram size={18} />
                  </a>
                  <a
                  href="#"
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition"
                  >
                  <Twitter size={18} />
                  </a>
                  <a
                  href="#"
                  className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition"
                  >
                  <Linkedin size={18} />
                  </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Services</h4>
              <ul className="space-y-2">
                  <li>UI/UX</li>
                  <li>Website Dev</li>
                  <li>Mobile Dev</li>
                  <li>SEO</li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Resources</h4>
              <ul className="space-y-2">
                <li>Compliance</li>
                <li>Case Studies</li>
                <li>Webinars</li>
                <li>Developers</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-primary" />
                    canvaslancer@gmail.com
                </li>
                
                <li className="flex items-center gap-2">
                  <Phone size={16} className="text-primary" />
                    +123 456 7890
                </li>

                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-primary" />
                    123 Street, City, Country
                </li>
              </ul>
            </div>
          </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          {/* Left: Logo + Copyright */}
          <div className="flex items-center gap-2">
            <Image
              src="/LOGO.png"
              alt="Site Logo"
              width={28}
              height={28}
              className="rounded-full"
            />
            <p>
              © Canvas Lancer {new Date().getFullYear()} . All rights reserved.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">
              Website Terms
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies Policy
            </a>
          </div>
        </div>
      </footer>
  );
}

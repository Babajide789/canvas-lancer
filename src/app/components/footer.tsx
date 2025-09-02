"use client";
import Image from "next/image";
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300); // Show button after scrolling 300px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-gray-800 bg-gray-900 py-10 text-gray-400">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-6 text-center md:text-left">
        
        {/* Logo + About */}
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
          <p className="text-sm">
            We bring your ideas to life with clean design and modern code.
          </p>

          {/* ✅ Social Media Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-primary rounded-full p-1 bg-red-500 text-white">
              <Facebook size={18} />
            </a>
            <a href="#" className="hover:text-primary rounded-full p-1 bg-red-500 text-white">
              <Instagram size={18} />
            </a>
            <a href="#" className="hover:text-primary rounded-full p-1 bg-red-500 text-white">
              <Twitter size={18} />
            </a>
            <a href="#" className="hover:text-primary rounded-full p-1 bg-red-500 text-white">
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
          <ul className="space-y-2">
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Mail size={16} className="text-primary" /> canvaslancer@gmail.com
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <Phone size={16} className="text-primary" /> +123 456 7890
            </li>
            <li className="flex justify-center md:justify-start items-center gap-2">
              <MapPin size={16} className="text-primary" /> 123 Street, City, Country
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-800 pt-6 px-6 text-xs text-gray-500">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} Canvas Lancer. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Website Terms</a>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Cookies Policy</a>
          </div>
        </div>
      </div>

      {/* 🔝 Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition duration-300"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  );
}

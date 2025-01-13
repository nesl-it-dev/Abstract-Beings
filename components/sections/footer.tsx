import Image from "next/image";
import { BsDiscord, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative w-full h-screen flex flex-col items-center justify-center text-center py-10 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer.png" // Replace with actual background image path
          layout="fill"
          alt="Abstract Background"
          className="w-full h-full object-cover object-bottom"
          loading="eager"
        />
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col items-center space-y-6 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Abstract Being
        </h2>
        <p className="text-black uppercase tracking-wide text-sm md:text-lg max-w-2xl">
          IMAGINATION FUELS THE ABSTRACT. STEP INTO THE UNKNOWN.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-black font-semibold uppercase text-sm md:text-base">
          <a href="#" className="hover:text-peach transition">
            About
          </a>
          <span>|</span>
          <a href="#" className="hover:text-peach transition">
            Lore
          </a>
          <span>|</span>
          <a href="#" className="hover:text-peach transition">
            Utilities
          </a>
          <span>|</span>
          <a href="#" className="hover:text-peach transition">
            FAQ
          </a>
          <span>|</span>
          <a href="#" className="hover:text-peach transition">
            Community
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-6 mt-4">
          <a
            href="#"
            className="hover:scale-110 transition transform duration-300"
          >
            <BsTwitter className="w-10 h-10 text-black" />
          </a>
          <a
            href="#"
            className="hover:scale-110 transition transform duration-300"
          >
            <BsDiscord className="w-10 h-10 text-black" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-xs md:text-sm text-gray-400 mt-6">
          ©2025 Copyright Reserved by Abstract Being
        </p>
      </div>
    </footer>
  );
};

export default Footer;

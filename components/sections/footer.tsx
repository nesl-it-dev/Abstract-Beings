import Image from "next/image";
import { BsDiscord, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="relative w-full min-h-[400px] flex flex-col items-center justify-center text-center py-10 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/footer.png" // Replace with actual background image path
          layout="fill"
          alt="Abstract Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Main Footer Content */}
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-2xl font-bold text-black">Abstract Being</h2>
        <p className="text-black uppercase tracking-wide text-sm max-w-lg">
          IMAGINATION FUELS THE ABSTRACT. STEP INTO THE UNKNOWN
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-4 text-black font-semibold uppercase text-sm">
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
        <div className="flex space-x-6 mt-2">
          <BsTwitter className="w-11 h-9 text-black" />
          <BsDiscord className="w-11 h-9 text-black" />
        </div>

        {/* Copyright Text */}
        <p className="text-xs text-gray-400 mt-4">
          ©2025 Copyright Reserved by Abstract Being
        </p>
      </div>
    </footer>
  );
};

export default Footer;

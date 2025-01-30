import { MYSTICAL_CONTENT } from "@/utils/constants";
import Image from "next/image";

const Mystical = () => {
  return (
    <div
      id="section_4"
      className="relative w-full min-h-screen flex justify-center items-center text-white text-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/abstract_new.png"
          alt="Mystical Image"
          fill
          quality={100}
          className="object-cover object-bottom"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-10   max-w-3xl space-y-4 lg:space-y-6 pb-10 lg:pb-20 mt-10">
        <h1 className="text-lightGreen text-lg sm:text-xl lg:text-2xl">
          The Lore Of Abstract Beings:
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
          A New Dimension Of Mystical Minimalism
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white">
          {MYSTICAL_CONTENT.content1}
        </p>
        <p className="text-sm sm:text-base md:text-lg text-white">
          {MYSTICAL_CONTENT.content2}
        </p>
      </div>
    </div>
  );
};

export default Mystical;

import Image from "next/image";
import Button from "@/components/button/button";

const Mystical = () => {
  return (
    <div className="relative w-full min-h-screen flex justify-center items-center text-white text-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/abstract_new.png"
          alt="Mystical Image"
          fill
          quality={100}
          className="object-cover object-bottom"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-6 lg:space-y-8 pb-10 lg:pb-20">
        <h1 className="text-green-400 text-lg sm:text-xl lg:text-2xl">
          The Lore Of Abstract Beings:
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
          A New Dimension Of Mystical Minimalism
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-300">
          In the infinite expanse beyond reality, where form and formlessness
          intertwine, there exists a plane unlike any other—a dimension born
          from the boundless depths of thought and emotion. This realm, known
          only in whispers as the Abstract, is not governed by time, matter, or
          logic. It is a canvas where imagination paints, and dreams take shape.
        </p>
        <p className="text-sm sm:text-base md:text-lg text-gray-300">
          At the heart of this mysterious expanse lies the Abstract Portal, a
          radiant, shifting gateway pulsating with energy from countless
          dimensions. It is said that the portal holds the essence of all
          creation—a nexus where the unreal becomes real, and the unseen becomes
          known. From this portal emerge the Abstract Beings, enigmatic entities
          forged from fragments of creativity, fear, ambition, and wonder.
        </p>
        {/* Button Container */}
        <div className="flex justify-center">
          <div className="max-w-xs w-full">
            <Button text="Read More" iconSrc="/right_arrow.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mystical;

import Image from "next/image";
import Button from "../button/button";

const Mystical = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center text-white text-center px-6 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/dimension.png"
          alt="Mystical Image"
          layout="fill"
          className="w-full h-full object-cover"
          quality={100}
        />
      </div>
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-green-400 text-lg">The Lore Of Abstract Beings:</h1>
        <h2 className="text-4xl font-bold mb-4">
          A New Dimension Of Mystical Minimalism
        </h2>
        <p className="text-sm text-gray-300 mb-6">
          In the infinite expanse beyond reality, where form and formlessness
          intertwine, there exists a plane unlike any other—a dimension born
          from the boundless depths of thought and emotion. This realm, known
          only in whispers as the Abstract, is not governed by time, matter, or
          logic. It is a canvas where imagination paints, and dreams take shape.
        </p>
        <p className="text-sm text-gray-300 mb-6">
          At the heart of this mysterious expanse lies the Abstract Portal, a
          radiant, shifting gateway pulsating with energy from countless
          dimensions. It is said that the portal holds the essence of all
          creation—a nexus where the unreal becomes real, and the unseen becomes
          known. From this portal emerge the Abstract Beings, enigmatic entities
          forged from fragments of creativity, fear, ambition, and wonder.
        </p>
        <Button text="Read More" iconSrc="/right_arrow.png" />
      </div>
    </div>
  );
};

export default Mystical;

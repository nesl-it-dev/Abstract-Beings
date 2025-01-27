import Image from "next/image";

const CallToMortals = () => {
  return (
    <div
      id="section_6"
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 lg:px-20 text-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/mortals.png"
          layout="fill"
          objectFit="cover"
          alt="Abstract Background"
          className="w-full h-full object-bottom"
          loading="eager"
        />
      </div>

      {/* Content Box */}
      <div className="relative md:absolute md:right-[15%] lg:right-[1%] xl:right-[15%] md:top-[5%] lg:max-w-[70%] xl:max-w-screen-md w-full p-6 sm:p-8 md:p-10 !pt-0 max-h-[70%] overflow-hidden flex flex-col gap-6 text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-black">
          Discover the Abstract Beings – One Stage at a Time
        </h1>
        <div className="flex-1 overflow-y-auto scroll-container">
          <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed">
            At <strong>Abstract Beings</strong>, we believe the journey is just
            as exciting as the destination. That’s why we’ve designed a
            multi-stage reveal experience to immerse our community in the
            mystery and magic of the Abstract Realm.
          </p>
          <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed mt-4">
            After minting, your Abstract Being will not be fully revealed right
            away. Instead, it will go through progressive stages of emergence,
            each unveiling new layers of its unique traits and story.
          </p>
          <h2 className="text-2xl font-semibold text-black mt-6 mb-4">
            How It Works:
          </h2>
          <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed">
            🌀 Here’s what to expect:
          </p>
          <ul className="text-black text-sm sm:text-lg md:text-xl leading-relaxed mt-2 list-disc pl-6">
            <li>
              <strong>Stage 1:</strong> Placeholder - A glowing animated Portal
              from which your Being will emerge
            </li>
            <li>
              <strong>Stage 2:</strong> Background - The environment of your
              Being is revealed.
            </li>
            <li>
              <strong>Stage 3:</strong> Traits - Core elements like body and
              emissions emerge.
            </li>
            <li>
              <strong>Stage 4:</strong> Full Reveal - Accessories and details
              complete your Abstract Being.
            </li>
          </ul>
          <h2 className="text-2xl font-semibold text-black mt-6 mb-4">
            Why Multi-Stage Reveal?
          </h2>
          <ul className="text-black text-sm sm:text-lg md:text-xl leading-relaxed mt-2 list-disc pl-6">
            <li>
              <strong>Mystery and Anticipation:</strong> Each stage builds
              excitement and keeps you engaged in the journey.
            </li>
            <li>
              <strong>Community Interaction:</strong> Some stages may be tied to
              community milestones or events, making the experience
              collaborative.
            </li>
            <li>
              <strong>Unique Lore Integration:</strong> Each reveal is a step
              deeper into the Abstract Realm, tied to the evolving story of your
              Being.
            </li>
          </ul>
          <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed mt-4">
            Will you uncover the full story of your Abstract Being?
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToMortals;

import Image from "next/image";

const CallToMortals = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 lg:px-20 text-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/mortals.png"
          layout="fill"
          objectFit="cover"
          alt="Abstract Background"
          className="w-full h-full object-bottom"
        />
      </div>

      {/* Content Box - Adjusted for responsiveness */}
      <div className="relative md:absolute md:right-[15%] lg:right-[1%] xl:right-[15%] md:top-[10%] lg:max-w-[70%] xl:max-w-screen-md w-full  p-6 sm:p-8 md:p-10 max-h-[60%] overflow-y-auto scroll-container">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
          The Call To <span className="text-black text-4xl">Mortals</span>
        </h1>
        <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed">
          With the portal weakened and chaos spreading, the Abstract Beings
          turned to an unexpected source of salvation: humanity. Mortals, with
          their boundless creativity and emotional depth, became the key to
          restoring balance. The portal began whispering to dreamers, artists,
          and thinkers—those whose imaginations burned brightest. Through these
          whispers, it called them to step forward, to form a bond with the
          Abstract Beings.
        </p>
        <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed mt-4">
          When a human bonds with an Abstract Being, a profound transformation
          occurs. The being takes on traits of its human partner, reflecting
          their inner self—their dreams, fears, and ambitions. This bond is not
          mere companionship; it is a fusion of worlds, where imagination shapes
          reality.
        </p>
        <p className="text-gray-700 text-sm sm:text-lg md:text-xl leading-relaxed mt-4">
          But this bond comes with a challenge. The Abstract Portal&apos;s
          energy is finite, and only by restoring its core can the realms be
          saved. Those who answer the portal&apos;s call are tasked with
          navigating its mysteries, unraveling its secrets, and helping the
          Abstract Beings regain their purpose.
        </p>
      </div>
    </div>
  );
};

export default CallToMortals;

import Image from "next/image";

const CallToMortals = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/mortals.png"
          layout="fill"
          alt="Abstract Background"
          className="w-full h-full object-top"
        />
      </div>

      {/* Content Box */}

      <div className="flex">
        <div className="w-[30%]"></div>

        <div className="max-w-5xl  w-full p-10  text-center pt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            The Call To <span className="text-black text-4xl">Mortals</span>
          </h1>
          <p className="text-black leading-relaxed">
            With the portal weakened and chaos spreading, the Abstract Beings
            turned to an unexpected source of salvation: humanity. Mortals, with
            their boundless creativity and emotional depth, became the key to
            restoring balance. The portal began whispering to dreamers, artists,
            and thinkers—those whose imaginations burned brightest. Through
            these whispers, it called them to step forward, to form a bond with
            the Abstract Beings.
          </p>
          <br />
          <p className="text-black leading-relaxed">
            When a human bonds with an Abstract Being, a profound transformation
            occurs. The being takes on traits of its human partner, reflecting
            their inner self—their dreams, fears, and ambitions. This bond is
            not mere companionship; it is a fusion of worlds, where imagination
            shapes reality.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
            But this bond comes with a challenge. The Abstract Portal’s energy
            is finite, and only by restoring its core can the realms be saved.
            Those who answer the portal’s call are tasked with navigating its
            mysteries, unraveling its secrets, and helping the Abstract Beings
            regain their purpose.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToMortals;

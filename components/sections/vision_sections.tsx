import Image from "next/image";

export default function VisionSection() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 md:px-16 py-20 min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Vision.png"
          fill
          alt="Jungle Background"
          className="w-full h-full object-cover object-bottom"
          loading="eager"
        />
      </div>

      <div className="relative flex flex-col lg:flex-row items-center w-full max-w-6xl z-10">
        {/* Image on the left */}
        <div className="relative w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
          <Image
            src="/ghost_2.png"
            alt="Abstract Character"
            width={500}
            height={500}
            className="w-3/4 sm:w-1/2 lg:w-full"
            loading="eager"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-[55%] p-6 text-center lg:text-left">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Vision Of <span className="text-black text-5xl">Abstract</span>{" "}
            Being
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed font-medium">
            Abstract Shadows isn&apos;t just another project—it&apos;s a
            movement aiming to take over the Abstract Chain through our
            minimalistic PFPs. Focused on empowering its holders through
            intellectual property (IP) development, brand support, and
            revenue-sharing opportunities, Abstract Shadows promises a unique
            blend of creativity and community growth.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mt-4 font-medium">
            With its mystical minimalistic design and rich lore, Abstract
            Shadows invites you to join a closed-knit community that will thrive
            within the Abstract ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}

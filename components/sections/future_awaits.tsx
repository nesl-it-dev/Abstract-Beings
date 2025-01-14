import Button from "@/components/button/button";

const FutureAwaits = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 text-center">
      {/* Content Box */}
      <div className="max-w-3xl  p-6 sm:p-8 md:p-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
          The{" "}
          <span className="text-black">
            <span className="text-4xl sm:text-5xl">Future</span> Awaits
          </span>
        </h1>
        <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed">
          The Abstract Beings are no longer confined to their realm. They walk
          among us now, drawn to those who dare to imagine the impossible.
          Together, they forge a new path, one where the mortal and the Abstract
          unite to heal the shattered portal and restore balance to creation.
        </p>
        <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed mt-4">
          But the journey is far from over. The portal still flickers, and its
          energy wanes. Whispers of an ancient prophecy speak of a convergence—a
          moment when the Abstract Portal will reveal its true nature and its
          ultimate purpose. Until then, the Abstract Beings and their human
          partners must tread carefully, for the balance is delicate, and the
          forces of chaos are always watching.
        </p>
        <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed mt-4">
          Will you answer the portal’s call? Will you become a part of the
          Abstract, shaping its story and discovering its secrets? The portal is
          open, and the Abstract Beings await.
        </p>

        {/* Styled Button */}
        <div className="mt-6">
          <Button text="The journey begins now" width={320} />
        </div>
      </div>
    </div>
  );
};

export default FutureAwaits;

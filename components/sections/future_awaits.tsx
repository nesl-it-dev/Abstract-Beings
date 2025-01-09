import Button from "../button/button";

const FutureAwaits = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6">
      {/* Content Box */}
      <div className="max-w-3xl  p-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          The{" "}
          <span className="text-black">
            <span className="text-4xl">Future</span> Awaits
          </span>
        </h1>
        <p className="text-black leading-relaxed">
          The Abstract Beings are no longer confined to their realm. They walk
          among us now, drawn to those who dare to imagine the impossible.
          Together, they forge a new path, one where the mortal and the Abstract
          unite to heal the shattered portal and restore balance to creation.
        </p>
        <br />
        <p className="text-black leading-relaxed">
          But the journey is far from over. The portal still flickers, and its
          energy wanes. Whispers of an ancient prophecy speak of a convergence—a
          moment when the Abstract Portal will reveal its true nature and its
          ultimate purpose. Until then, the Abstract Beings and their human
          partners must tread carefully, for the balance is delicate, and the
          forces of chaos are always watching.
        </p>
        <br />
        <p className="text-black leading-relaxed">
          Will you answer the portal’s call? Will you become a part of the
          Abstract, shaping its story and discovering its secrets? The portal is
          open, and the Abstract Beings await.
        </p>

        {/* Styled Button */}
        <div className="mt-6">
          <Button text="The journey begins now" />
        </div>
      </div>
    </div>
  );
};

export default FutureAwaits;

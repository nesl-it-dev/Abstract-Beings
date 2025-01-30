import { FUTURE_AWAITS } from "@/utils/constants";
import Image from "next/image";
const FutureAwaits = () => {
  return (
    <div className="relative z-20 flex flex-row w-full">
      {/* Content Section (60%) */}
      <div className="w-3/5 flex items-start justify-center p-4 pt-20 pl-20 ">
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            The{" "}
            <span className="text-black">
              <span className="text-4xl sm:text-5xl">Future</span> Awaits
            </span>
          </h1>
          <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed">
            {FUTURE_AWAITS.content1}
          </p>
          <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed mt-4">
            {FUTURE_AWAITS.content2}
          </p>
          <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed mt-4">
            {FUTURE_AWAITS.content3}
          </p>
        </div>
      </div>

      {/* Image Section (40%) */}
      <div className="w-2/5 flex items-center justify-center p-4">
        {/* Placeholder Image (for layout) */}
        <div className="w-full h-full flex items-center justify-center transform translate-y-[110px]">
          <Image
            src="/future_awaits.png" // Replace this with your image path
            alt="Abstract Image"
            width={600}
            height={600}
            className="w-full h-auto max-w-[500px] object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default FutureAwaits;

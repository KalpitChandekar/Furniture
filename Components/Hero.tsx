import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 flex py-24 md:flex-row items-center justify-center gap-20 flex-col">
      <div className="space-y-28">
        <h1 className="text-5xl text-white font-semibold">
          Modern Interior <br /> Design Studio
        </h1>
        <div className="flex gap-4">
          <button className="bg-yellow text-black px-6 py-2 rounded-full">
            Shop Now
          </button>
          <button className="bg-transparent text-white px-6 py-2 rounded-full border-2 border-gray">
            Explore
          </button>
        </div>
      </div>
      <div className="relative flex">
        <Image
          src="/couch.png"
          alt="hero"
          width={3240}
          height={1637}
          className="max-w-2xl w-full z-10"
        />
        <Image
          src="/dottes.png"
          alt="hero"
          width={1040}
          height={702}
          className="max-w-64 w-full absolute -top-6 -right-2"
        />
      </div>
    </div>
  );
};
export default Hero;

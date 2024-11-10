import Image from "next/image";

const Design = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 my-40 flex md:flex-row flex-col items-center justify-center gap-64">
      <div className="relative">
        <Image
          src="/design-1.png"
          width={1612}
          height={2056}
          alt="design"
          className="w-full max-w-xs"
        />
        <Image
          src="/design-2.png"
          width={748}
          height={748}
          alt="design"
          className="w-full max-w-44 absolute top-0 -right-48"
        />
        <Image
          src="/design-3.png"
          width={1164}
          height={1396}
          alt="design"
          className="w-full max-w-64 absolute -bottom-24 -right-48"
        />
        <Image
          src="/green-dottes.png"
          width={262}
          height={156}
          alt="dotes"
          className="absolute -top-12 -left-20 w-full max-w-56 -z-10"
        />
      </div>
      <div className="space-y-16 max-w-md">
        <div className="space-y-4">
          <h1 className="text-black text-3xl font-semibold">
            We help you make Modern Interior Design{" "}
          </h1>
          <p className="text-sm text-paragraph">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
            vivethe as it was for us to know what was to be done. the this is a
            long post for the text.`This small text has to be place here, since
            this is a place holder. You can also chane it.
          </p>
        </div>
        <ul className="grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-14 text-paragraph text-sm">
          <p>Donec mattis porta eros,let aliquet finibus ri</p>
          <p>Donec mattis porta eros,let aliquet finibus ri</p>
          <p>Donec mattis porta eros,let aliquet finibus ri</p>
          <p>Donec mattis porta eros,let aliquet finibus ri</p>
        </ul>
        <button className="text-white px-6 py-2 rounded-full bg-black">
          Explore
        </button>
      </div>
    </div>
  );
};
export default Design;

import { Plus } from "lucide-react";
import Image from "next/image";

const Product = () => {
  return (
    <div
      className="max-w-6xl mx-auto my-28 flex md:flex-row flex-col justify-between px-4
    "
    >
      <div className="space-y-8 max-w-60">
        <h1 className="text-3xl font-semibold text-black">
          Crafted with excellent material
        </h1>
        <p className="text-paragraph text-sm">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done.
        </p>
        <button className="text-white px-6 py-2 rounded-full bg-black">
          Explore
        </button>
      </div>

      <div className="relative flex flex-col items-center justify-center text-black px-14 text-sm">
        <Image
          src="/product-1.png"
          alt="product"
          width={754}
          height={1044}
          className="max-w-40 w-full"
        />
        <p className="font-medium mt-10">Nordic CHAIR</p>
        <p className="font-bold mb-4">$50.00</p>
        <div className="bg-black text-white p-1 rounded-full">
          <Plus size={14} />
        </div>
        <div className="bg-bg w-64 h-64 bg-cover absolute top-20 rounded-2xl -z-10"></div>
      </div>

      <div className="relative flex flex-col items-center justify-center text-black text-sm">
        <Image
          src="/product-2.png"
          alt="product"
          width={948}
          height={1040}
          className="max-w-60 w-full"
        />
        <p className="font-medium mt-10">Kruzo Aero CHAIR</p>
        <p className="font-bold mb-6">$78.00</p>
      </div>

      <div className="relative flex flex-col items-center justify-center text-black text-sm">
        <Image
          src="/product-3.png"
          alt="product"
          width={625}
          height={940}
          className="max-w-40 w-full"
        />
        <p className="font-medium mt-10">Ergonomic CHAIR</p>
        <p className="font-bold mb-6">$43.00</p>
      </div>
    </div>
  );
};
export default Product;

import { ShoppingBag, Timer, Truck, Undo2 } from "lucide-react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 my-20 flex md:flex-row flex-col items-center justify-center gap-32">
      <div className="space-y-16">
        <div className="space-y-4">
          <h1 className="text-black text-3xl font-semibold">Why Choose Us</h1>
          <p className="text-sm text-paragraph">
            Donec mattis porta eros, aliquet finibus risus interdum at. Nulla{" "}
            <br />
            vivethe as it was for us to know what was to be done. the
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-20 gap-y-14">
          <div className="space-y-2 max-w-60">
            <div className="relative">
              <Truck size={24} className="" />
              <div className="h-6 w-6 rounded-full bg-bg absolute top-2 left-2"></div>
            </div>
            <h1 className="text-black text-lg font-semibold">
              Fast & Free Shipping
            </h1>
            <p className="text-sm text-paragraph">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was
            </p>
          </div>

          <div className="space-y-2 max-w-60">
            <div className="relative">
              <ShoppingBag size={24} className="" />
              <div className="h-6 w-6 rounded-full bg-bg absolute top-2 left-2"></div>
            </div>
            <h1 className="text-black text-lg font-semibold">Easy to Shop</h1>
            <p className="text-sm text-paragraph">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was
            </p>
          </div>

          <div className="space-y-2 max-w-60">
            <div className="relative">
              <Timer size={24} className="" />
              <div className="h-6 w-6 rounded-full bg-bg absolute top-2 left-2"></div>
            </div>
            <h1 className="text-black text-lg font-semibold">
              24/7 Customer Support
            </h1>
            <p className="text-sm text-paragraph">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was
            </p>
          </div>

          <div className="space-y-2 max-w-60">
            <div className="relative">
              <Undo2 size={24} className="" />
              <div className="h-6 w-6 rounded-full bg-bg absolute top-2 left-2"></div>
            </div>
            <h1 className="text-black text-lg font-semibold">
              Fast & Free Shipping
            </h1>
            <p className="text-sm text-paragraph">
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was
            </p>
          </div>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/why-choose-us.png"
          width={512}
          height={630}
          alt="Why Choose Us"
          className="w-96"
        />
        <Image
          src="/yellow-dottes.png"
          width={1048}
          height={704}
          alt="dotes"
          className="absolute -top-12 -left-20 w-full max-w-56 -z-10"
        />
      </div>
    </div>
  );
};
export default WhyChooseUs;

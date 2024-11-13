import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 my-28 space-y-20">
      <div className="space-y-10 flex flex-col items-center">
        <h1 className="text-black text-3xl font-semibold">Testimonials</h1>
        <div className="w-full flex justify-between items-center">
          <ChevronLeft className="p-3 rounded-full bg-[#C4C4C4]" size={60} />
          <p className="font-medium text-black mx-auto max-w-3xl text-center">
            ‘‘Donec nibh magna, interdum quis massa sed, rhoncus laoreet quam.
            Mauris accumsan felis fermentum euismod egestas. Mauris ante augue,
            cursus sit amet arcu a, maximus suscipit nibh. Integer vel nibh
            tellus. Pellentesque in risus non dui venenatis sollicitudin sed
            vitae diam. Fusce tincidunt nisl mi, at molestie odio accumsan non.
            Pellentesque ma’’
          </p>
          <ChevronRight
            className="p-3 rounded-full bg-[#385D50] text-white"
            size={60}
          />
        </div>
        <div className="flex flex-col gap-1 items-center justify-center">
          <Image
            src="/person-1.png"
            alt="person"
            width={308}
            height={308}
            className="max-w-20 w-full rounded-full mb-3"
          />
          <h1 className="text-black font-bold">Michelle Anna</h1>
          <p className="text-paragraph text-sm">CEO, Co-Founder,XYZ Company</p>
        </div>
        <Image
          src="/progress-dottes.png"
          alt="person"
          width={588}
          height={28}
          className="max-w-36 w-full pt-28"
        />
      </div>
    </div>
  );
};
export default Testimonial;

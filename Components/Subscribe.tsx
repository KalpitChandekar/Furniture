import { Mail, Send } from "lucide-react";
import Image from "next/image";

const Subscribe = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20 relative">
      <div className="text-xl flex items-center gap-2 font-semibold text-black">
        <Mail size={22} className="text-paragraph" />
        <h1>Subscribe to our newsletter</h1>
      </div>
      <div className="flex items-center mt-6 gap-6">
        <input
          type="text"
          placeholder="Enter your name"
          className="px-4 py-2 w-80 border border-slate-300 rounded-lg"
        />
        <input
          type="text"
          placeholder="Enter your e-mail"
          className="px-4 py-2 w-80 border border-slate-300 rounded-lg"
        />
        <Send className="bg-[#35736E] text-white p-2 rounded-lg" size={40} />
      </div>
      <Image
        src="/sofa.png"
        alt="sofa"
        width={1840}
        height={1590}
        className="max-w-sm w-full absolute -top-16 right-0"
      />
    </div>
  );
};
export default Subscribe;

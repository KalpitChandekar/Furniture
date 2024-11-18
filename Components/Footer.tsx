import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 space-y-6">
      <h1 className="text-3xl text-black font-semibold">Furni.</h1>
      <div className="flex text-paragraph text-sm gap-20">
        <p className="max-w-sm">
          Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
          vivethe as it was for us to know what was to be done. the this is a
          long post for the text.`This small text has to be place here, since
          this is{" "}
        </p>
        <div className="flex justify-between w-full">
          <div className="space-y-2 flex flex-col">
            <a href="">About us</a>
            <a href="">Services</a>
            <a href="">Blog us</a>
            <a href="">Contact us</a>
          </div>
          <div className="space-y-2 flex flex-col">
            <a href="">Support</a>
            <a href="">Knowledge base</a>
            <a href="">Live chat</a>
          </div>
          <div className="space-y-2 flex flex-col">
            <a href="">Jobs</a>
            <a href="">Out team</a>
            <a href="">Leadership</a>
            <a href="">Privacy Policy</a>
          </div>
          <div className="space-y-2 flex flex-col">
            <a href="">Nordic Char</a>
            <a href="">Kruzo Aero</a>
            <a href="">Ergonomic</a>
          </div>
        </div>
      </div>
      <div className="flex gap-1 pt-4">
        <Facebook className="p-2 rounded-full bg-slate-200" size={38} />
        <Instagram className="p-2 rounded-full bg-slate-200" size={38} />
        <Twitter className="p-2 rounded-full bg-slate-200" size={38} />
        <Linkedin className="p-2 rounded-full bg-slate-200" size={38} />
      </div>
      <div className="flex justify-between text-paragraph text-sm pt-8">
        <p>Copyright 2022 degraft87@gmail.com. All Rights Reserved.</p>
        <div className="flex gap-20">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

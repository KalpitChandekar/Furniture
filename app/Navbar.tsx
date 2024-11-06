import { ShoppingCart, User } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 flex justify-between items-center">
      <Image
        src="/logo.png"
        alt="logo"
        width={322}
        height={99}
        className="w-20"
      />
      <div className="flex gap-20">
        <ul className="flex gap-14 text-gray">
          <li className="border-b-4 border-yellow text-white font-medium">
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
        <div className="flex gap-4 text-white">
          <User />
          <ShoppingCart />
        </div>
      </div>
    </div>
  );
};
export default Navbar;

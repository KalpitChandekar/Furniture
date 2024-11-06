import Hero from "@/Components/Hero";
import Navbar from "../Components/Navbar";
import Product from "@/Components/Product";

const page = () => {
  return (
    <div>
      <div className="bg-hero">
        <Navbar />
        <Hero />
      </div>
      <Product />
    </div>
  );
};
export default page;

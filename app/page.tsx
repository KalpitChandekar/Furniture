import Hero from "@/Components/Hero";
import Navbar from "../Components/Navbar";
import Product from "@/Components/Product";
import WhyChooseUs from "@/Components/WhyChooseUs";

const page = () => {
  return (
    <div>
      <div className="bg-hero">
        <Navbar />
        <Hero />
      </div>
      <Product />
      <WhyChooseUs />
    </div>
  );
};
export default page;

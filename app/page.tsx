import Hero from "@/Components/Hero";
import Navbar from "../Components/Navbar";
import Product from "@/Components/Product";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Design from "@/Components/Design";

const page = () => {
  return (
    <div>
      <div className="bg-hero">
        <Navbar />
        <Hero />
      </div>
      <Product />
      <WhyChooseUs />
      <Design/>
    </div>
  );
};
export default page;

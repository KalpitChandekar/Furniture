import Hero from "@/Components/Hero";
import Navbar from "../Components/Navbar";
import Product from "@/Components/Product";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Design from "@/Components/Design";
import Testimonial from "@/Components/Testimonial";

const page = () => {
  return (
    <div>
      <div className="bg-hero">
        <Navbar />
        <Hero />
      </div>
      <Product />
      <WhyChooseUs />
      <Design />
      <Testimonial />
    </div>
  );
};
export default page;

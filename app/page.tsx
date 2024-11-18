import Hero from "@/Components/Hero";
import Navbar from "../Components/Navbar";
import Product from "@/Components/Product";
import WhyChooseUs from "@/Components/WhyChooseUs";
import Design from "@/Components/Design";
import Testimonial from "@/Components/Testimonial";
import Blog from "@/Components/Blog";
import Subscribe from "@/Components/Subscribe";
import Footer from "@/Components/Footer";

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
      <Blog />
      <div className="bg-white">
        <Subscribe />
        <Footer />
      </div>
    </div>
  );
};
export default page;

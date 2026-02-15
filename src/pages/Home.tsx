import Hero from "../components/hero/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Products from "../components/sections/Products";
import CaseStudies from "../components/sections/CaseStudies";
import Industries from "../components/sections/Industries";
import Insights from "../components/sections/Insights";
// import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <main>
      <div className="relative">
        <Hero />
      </div>
      <About />
      <Services />
      <Products />
      <Industries />
      <CaseStudies />
      <Insights />
      {/* <div id="contact">
        <Footer />
      </div> */}
    </main>
  );
};

export default Home;

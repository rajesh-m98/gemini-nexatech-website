import { useParams, Link } from "react-router-dom";
import { products } from "../data/websiteData";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaChartLine,
  FaCheckCircle,
  FaCheck,
} from "react-icons/fa";
import Container from "../components/common/Container";
import { useEffect } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000510]">
        <h1 className="text-white text-2xl">Product not found</h1>
        <Link to="/" className="text-gemini-orange ml-4">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#000510] min-h-screen pt-32 pb-20">
      <Container>
        <div className="flex items-center justify-between mb-12">
          <Link
            to="/"
            className="group flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full transition-all backdrop-blur-md"
          >
            <FaArrowLeft className="text-gemini-orange group-hover:-translate-x-1 transition-transform" />
            <span className="text-white text-xs font-black uppercase tracking-[0.2em]">
              Return <span className="text-gray-500">Home</span>
            </span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 xl:gap-8 mb-24 items-start">
          {/* Column 1: Title & Description (5 cols) */}
          <div className="lg:col-span-4 flex flex-col pt-4 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9] break-words">
                {product.title}
              </h1>
              <p className="text-lg lg:text-xl text-gemini-orange font-black mb-8 uppercase tracking-widest leading-tight">
                {product.subtitle}
              </p>
              <p className="text-base lg:text-lg text-gray-400 leading-relaxed font-medium max-w-lg">
                {product.description}
              </p>
            </motion.div>
          </div>

          {/* Column 2: Benefits List (4 cols) */}
          <div className="lg:col-span-4 bg-[#050B16] border border-white/5 p-6 xl:p-10 rounded-[40px] shadow-2xl space-y-8 min-w-0">
            <h3 className="text-white font-black text-xl xl:text-2xl mb-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gemini-orange/10 flex items-center justify-center border border-gemini-orange/20 flex-shrink-0">
                <FaCheckCircle className="text-gemini-orange" />
              </div>
              <span className="uppercase tracking-widest">KEY BENEFITS</span>
            </h3>
            <div className="space-y-8">
              {product.benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="group flex items-start gap-4 xl:gap-5 cursor-default"
                >
                  <div className="w-7 h-7 xl:w-8 xl:h-8 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-yellow-400 group-hover:bg-yellow-400/10 transition-all duration-300">
                    <FaCheck className="text-[10px] xl:text-[12px] text-white/20 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <span className="text-gray-400 font-bold uppercase text-[11px] xl:text-[13px] tracking-[0.15em] group-hover:text-white transition-colors duration-300 text-left leading-relaxed">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 3: Solutions (3 cols) */}
          <div className="lg:col-span-4 bg-[#00152F] border border-white/5 p-6 xl:p-10 rounded-[40px] shadow-2xl h-full min-w-0">
            <h3 className="text-white font-black text-xl xl:text-2xl mb-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gemini-blue/10 flex items-center justify-center border border-gemini-blue/20 flex-shrink-0">
                <FaChartLine className="text-gemini-blue" />
              </div>
              <span className="uppercase tracking-widest">SOLUTIONS</span>
            </h3>
            <ul className="space-y-8">
              {product.majorProducts.map((p, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="group flex items-start gap-4 xl:gap-5 cursor-default"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gemini-blue/40 flex-shrink-0 mt-2 group-hover:bg-yellow-400 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.6)] transition-all duration-300" />
                  <span className="font-bold text-[12px] xl:text-[14px] text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors duration-300 text-left leading-relaxed">
                    {p}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Showcase Section */}
        <div className="relative rounded-[40px] overflow-hidden bg-white/5 border border-white/10 p-12 text-center group">
          <div className="absolute inset-0 bg-gradient-to-r from-gemini-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-3xl font-black text-white mb-6 relative z-10 uppercase tracking-widest">
            Ready to Optimize?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            Discover how {product.title} can revolutionize your operations and
            provide the visibility you've been missing.
          </p>
          <Link
            to="/contact"
            className="inline-block relative z-10 bg-white text-gemini-blue hover:bg-gemini-orange hover:text-white font-black py-4 px-12 rounded-xl transition-all shadow-xl"
          >
            CONSULT OUR EXPERTS
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;

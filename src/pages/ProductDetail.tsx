import { useParams, Link } from "react-router-dom";
import { products } from "../data/websiteData";
import { motion } from "framer-motion";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaChartLine,
  FaCheckCircle,
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

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
              {product.title}
            </h1>
            <p className="text-2xl text-gemini-orange font-bold mb-8 uppercase tracking-widest">
              {product.subtitle}
            </p>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              {product.description}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {/* Benefits Section */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            <h3 className="col-span-full text-white font-black text-2xl mb-4 flex items-center gap-3">
              <FaShieldAlt className="text-gemini-blue" /> KEY BENEFITS
            </h3>
            {product.benefits.map((benefit, idx) => (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={idx}
                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-4 hover:bg-gemini-blue/10 transition-colors"
              >
                <FaCheckCircle className="text-gemini-orange mt-1 flex-shrink-0" />
                <span className="text-gray-300 font-bold uppercase text-sm tracking-wide">
                  {benefit}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Major Products Sidebar */}
          <div className="bg-[#00152F] border border-white/10 p-8 rounded-[32px] shadow-2xl h-fit">
            <h3 className="text-white font-black text-xl mb-6 flex items-center gap-3">
              <FaChartLine className="text-gemini-orange" /> SOLUTIONS
            </h3>
            <ul className="space-y-4">
              {product.majorProducts.map((p, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors cursor-default group"
                >
                  <div className="w-1.5 h-1.5 bg-gemini-blue rounded-full group-hover:scale-150 transition-transform" />
                  <span className="font-semibold text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Technical Showcase Placeholder */}
        <div className="relative rounded-[40px] overflow-hidden bg-white/5 border border-white/10 p-12 text-center group">
          <div className="absolute inset-0 bg-gradient-to-r from-gemini-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <h2 className="text-3xl font-black text-white mb-6 relative z-10 uppercase tracking-widest">
            Ready to Optimize?
          </h2>
          <p className="text-gray-400 mb-10 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">
            Discover how {product.title} can revolutionize your operations and
            provide the visibility you've been missing.
          </p>
          <button className="relative z-10 bg-white text-gemini-blue hover:bg-gemini-orange hover:text-white font-black py-4 px-12 rounded-xl transition-all shadow-xl">
            CONSULT OUR EXPERTS
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;

import { useParams, Link } from "react-router-dom";
import { industries } from "../data/websiteData";
import { motion } from "framer-motion";
import { FaArrowLeft, FaIndustry, FaLightbulb, FaCheck } from "react-icons/fa";
import Container from "../components/common/Container";
import { useEffect } from "react";

const IndustryDetail = () => {
  const { id } = useParams();
  const industry = industries.find((i) => i.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000510]">
        <h1 className="text-white text-2xl">Industry not found</h1>
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

        <div className="mb-20 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
              {industry.title}
            </h1>
            <h3 className="text-xl text-gemini-orange font-bold mb-8 uppercase tracking-[0.2em] leading-relaxed">
              {industry.subtitle}
            </h3>
            <p className="text-xl text-gray-400 leading-relaxed font-medium">
              {industry.description}
            </p>
          </motion.div>

          {/* Industry Visual Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[40px] border border-white/10 overflow-hidden shadow-2xl bg-[#00152F] p-2"
          >
            <div className="bg-tech-blueprint w-full h-80 rounded-[34px] flex items-center justify-center">
              <FaIndustry className="text-gemini-blue text-[120px] opacity-20" />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Support Section */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-[32px]">
            <h3 className="text-white font-black text-2xl mb-8 flex items-center gap-3">
              <FaLightbulb className="text-gemini-orange" /> HOW WE SUPPORT YOU
            </h3>
            <div className="space-y-4">
              {industry.support.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-full bg-gemini-blue/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gemini-blue transition-colors">
                    <FaCheck className="text-gemini-blue text-[10px] group-hover:text-white" />
                  </div>
                  <span className="text-gray-300 font-bold uppercase text-xs tracking-wider">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Section */}
          <div className="bg-gemini-blue/10 border border-gemini-blue/20 p-10 rounded-[32px]">
            <h3 className="text-white font-black text-2xl mb-8">
              BUSINESS IMPACT
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {industry.impact.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx}
                  className="bg-white/5 p-4 rounded-xl border border-white/5 hover:border-gemini-orange/50 transition-colors shadow-lg"
                >
                  <span className="text-white font-black uppercase text-sm tracking-widest flex items-center gap-2">
                    <span className="text-gemini-orange">✔</span> {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 font-black uppercase tracking-[0.3em] mb-4">
            Transforming the Future of {industry.title}
          </p>
          <button className="bg-gradient-to-r from-gemini-blue to-blue-600 text-white font-black py-5 px-12 rounded-2xl shadow-xl hover:scale-105 transition-all">
            EXPLORE CASE STUDIES
          </button>
        </div>
      </Container>
    </div>
  );
};

export default IndustryDetail;

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

        <div className="grid lg:grid-cols-12 gap-6 xl:gap-10 mb-6 items-start">
          {/* Column 1: Industry Title & Description (4 cols) */}
          <div className="lg:col-span-4 flex flex-col pt-4 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl lg:text-4xl xl:text-5xl text-left font-black text-white mb-6 uppercase tracking-tighter leading-[0.9]">
                {industry.title}
              </h1>
              <p className="text-lg lg:text-2xl text-gemini-orange font-black mb-8 uppercase text-left tracking-[0.2em] leading-tight">
                {industry.subtitle}
              </p>
              <p className="text-base lg:text-lg text-gray-400 text-left leading-relaxed font-medium">
                {industry.description}
              </p>
            </motion.div>
          </div>

          {/* Column 3: Support Section (3 cols) */}
          <div className="lg:col-span-4 bg-[#050B16] border border-white/5 p-8 rounded-[40px] shadow-2xl space-y-8">
            <h3 className="text-white font-black text-xl mb-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gemini-orange/10 flex items-center justify-center border border-gemini-orange/20">
                <FaLightbulb className="text-gemini-orange" />
              </div>
              <span className="uppercase tracking-widest">KEY SUPPORT</span>
            </h3>
            <div className="space-y-6">
              {industry.support.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="group flex items-start gap-4 cursor-default"
                >
                  <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:border-yellow-400 group-hover:bg-yellow-400/10 transition-all duration-300">
                    <FaCheck className="text-[10px] text-white/20 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <span className="text-gray-400 font-bold uppercase text-[11px] xl:text-[12px] tracking-[0.15em] group-hover:text-white transition-colors duration-300 text-left leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 4: Impact Section (3 cols) */}
          <div className="lg:col-span-4 bg-gemini-blue/5 border border-white/5 p-8 rounded-[40px] shadow-2xl">
            <h3 className="text-white font-black text-xl mb-10 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gemini-blue/10 flex items-center justify-center border border-gemini-blue/20">
                <FaIndustry className="text-gemini-blue" />
              </div>
              <span className="uppercase tracking-widest">IMPACT</span>
            </h3>
            <div className="space-y-6">
              {industry.impact.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="group flex items-start gap-4 cursor-default"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-gemini-blue/40 flex-shrink-0 mt-2 group-hover:bg-yellow-400 group-hover:shadow-[0_0_15px_rgba(250,204,21,0.6)] transition-all duration-300" />
                  <span className="font-bold text-[12px] xl:text-[13px] text-gray-500 uppercase tracking-widest group-hover:text-white transition-colors duration-300 text-left leading-relaxed">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IndustryDetail;

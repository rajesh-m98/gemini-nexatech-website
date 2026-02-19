import { useParams, Link } from "react-router-dom";
import { services } from "../data/websiteData";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheck, FaCheckCircle } from "react-icons/fa";
import Container from "../components/common/Container";
import { useEffect } from "react";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#000510]">
        <h1 className="text-white text-2xl">Service not found</h1>
        <Link to="/" className="text-gemini-orange ml-4">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#000510] min-h-screen pt-32 pb-20 relative overflow-hidden">
      {/* Absolute Background Image (Transparent) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000510] via-transparent to-[#000510]" />
      </div>

      <Container className="relative z-10">
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

        <div className="grid lg:grid-cols-12 gap-12 items-stretch">
          {/* Column 1: Title & Description (6 cols) */}
          <div className="lg:col-span-6 flex flex-col pt-4 min-w-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex flex-col"
            >
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-10 uppercase tracking-tighter leading-[0.9]">
                {service.title}
              </h1>
              <p className="text-lg lg:text-xl text-gray-400 text-left leading-relaxed font-medium mb-12">
                {service.description}
              </p>

              <div className="">
                <Link
                  to="/contact"
                  className="inline-block bg-white text-gemini-blue hover:bg-gemini-orange hover:text-white font-black py-4 px-12 rounded-xl transition-all shadow-xl uppercase tracking-[0.2em] text-sm"
                >
                  CONSULT OUR EXPERTS
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Key Features (6 cols) */}
          <div className="lg:col-span-6 bg-[#050B16]/60 backdrop-blur-xl border border-white/5 p-8 xl:p-12 rounded-[48px] shadow-2xl flex flex-col">
            <h3 className="text-white font-black text-xl xl:text-2xl mb-8 flex items-center gap-5">
              <div className="w-12 h-12 rounded-2xl bg-gemini-blue/10 flex items-center justify-center border border-gemini-blue/20">
                <FaCheckCircle className="text-gemini-blue text-xl" />
              </div>
              <span className="uppercase tracking-[0.2em]">KEY FEATURES</span>
            </h3>

            <div className="space-y-4">
              {service.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  className="group flex items-center text-left gap-4 cursor-default"
                >
                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-yellow-400 group-hover:bg-yellow-400/10 transition-all duration-300">
                    <FaCheck className="text-[14px] text-white/20 group-hover:text-yellow-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <span className="text-gray-400 font-bold uppercase text-[13px] xl:text-[14px] tracking-[0.15em] group-hover:text-white transition-colors duration-300 text-left leading-relaxed">
                    {feature}
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

export default ServiceDetail;

import { useParams, Link } from "react-router-dom";
import { services } from "../data/websiteData";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheck } from "react-icons/fa";
import Container from "../components/common/Container";
import { useEffect, useState } from "react";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find((s) => s.id === id);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  const isMobile = windowWidth < 768;

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
    <div className="bg-[#000510] min-h-screen pt-24 pb-8 relative overflow-hidden font-inter flex flex-col justify-center">
      {/* Dynamic Aura Background */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gemini-blue/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gemini-orange/5 blur-[120px] rounded-full pointer-events-none" />

      <Container className="relative z-10 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 lg:mb-8">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="group flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-full transition-all backdrop-blur-md"
            >
              <FaArrowLeft className="text-gemini-orange text-sm group-hover:-translate-x-1 transition-transform" />
              <span className="text-white text-[11px] font-black uppercase tracking-[0.2em]">
                Return <span className="text-gray-500 text-[11px]">Home</span>
              </span>
            </Link>
          </div>
          <div className="md:text-left w-full lg:max-w-5xl ml-auto">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl xl:text-5xl font-black uppercase tracking-tight leading-tight bg-gradient-to-r from-white via-white to-gemini-orange bg-clip-text text-transparent"
            >
              {service.title}
            </motion.h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Column 1: Content (Description -> Points -> CTA) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-3 lg:space-y-5 flex flex-col items-start"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base md:text-lg text-gray-400 leading-relaxed font-medium max-w-xl text-left"
            >
              {service.description}
            </motion.p>

            {/* Key Features */}
            <div className="space-y-3 w-full">
              <h3 className="text-white font-black text-sm md:text-base uppercase tracking-[0.15em] flex items-center gap-3 text-left">
                <span className="w-6 h-1 bg-gemini-orange rounded-full flex-shrink-0" />
                Key Features
              </h3>
              <div className="grid gap-2 md:gap-3 items-start justify-start">
                {service.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.05 }}
                    className="flex items-center gap-3 group text-left"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gemini-blue group-hover:border-gemini-blue transition-all duration-300">
                      <FaCheck className="text-[10px] text-gemini-orange group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-gray-400 font-bold uppercase text-[10px] md:text-[11px] tracking-wider group-hover:text-white transition-colors text-left">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-2"
            >
              <Link
                to="/contact"
                className="inline-block bg-white text-gemini-blue hover:bg-gemini-orange hover:text-white font-black py-3 px-10 rounded-xl transition-all shadow-xl uppercase tracking-[0.2em] text-[10px] transform hover:scale-105 active:scale-95"
              >
                CONSULT OUR EXPERTS
              </Link>
            </motion.div>
          </motion.div>

          {/* Column 2: Rummy Cards Animation (Optimized for 2 cards) */}
          <div className="relative h-[280px] md:h-[350px] lg:h-[450px] flex items-center justify-center mt-4 lg:mt-0">
            <div className="relative w-full max-w-[320px] aspect-[4/5] flex items-center justify-center group/container">
              {service.images?.slice(0, 2).map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: idx === 0 ? -8 : 8,
                    x: idx === 0 ? (isMobile ? -25 : -40) : isMobile ? 25 : 40,
                    zIndex: 10 - idx,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    x: 0,
                    zIndex: 50,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="absolute w-[85%] h-[85%] rounded-[1.5rem] overflow-hidden border-2 border-white/10 shadow-2xl cursor-pointer backdrop-blur-sm"
                  style={{ transformOrigin: "bottom center" }}
                >
                  <img
                    src={img}
                    alt={`${service.title} view ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>

            {/* Background Decorative Circles */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
              <div className="w-[100%] aspect-square border border-white/5 rounded-full animate-pulse opacity-10" />
              <div className="absolute w-[70%] aspect-square border border-white/5 rounded-full animate-pulse delay-700 opacity-10" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetail;

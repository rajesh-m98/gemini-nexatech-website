import { useParams, Link } from "react-router-dom";
import { services } from "../data/websiteData";
import { motion } from "framer-motion";
import { FaArrowLeft, FaCheckCircle } from "react-icons/fa";
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

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-gemini-blue/20 border border-gemini-blue/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Expert Solutions
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed uppercase font-medium">
              {service.description}
            </p>

            <div className="space-y-6 mb-12">
              <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-4 border-l-4 border-gemini-orange pl-4">
                Key Features
              </h3>
              {service.features.map((feature, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  key={idx}
                  className="flex items-start space-x-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:border-gemini-blue/50 transition-colors group"
                >
                  <div className="mt-1 bg-gemini-blue/20 p-2 rounded-lg group-hover:bg-gemini-blue group-hover:text-white transition-colors">
                    <FaCheckCircle className="text-gemini-blue group-hover:text-white" />
                  </div>
                  <p className="text-gray-300 font-medium">{feature}</p>
                </motion.div>
              ))}
            </div>

            {/* <button className="bg-gemini-orange hover:bg-orange-600 text-white font-black py-5 px-10 rounded-2xl transition-all transform active:scale-[0.98] shadow-xl shadow-orange-900/20 flex items-center gap-3">
              GET STARTED <FaRocket />
            </button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gemini-blue/30 blur-[100px] rounded-full -z-10" />
            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200`}
                alt={service.title}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="absolute -bottom-10 -right-10 bg-[#00152F] border border-white/10 p-8 rounded-[32px] shadow-2xl max-w-[280px] hidden lg:block">
              <p className="text-white font-bold mb-2">Tailored Excellence</p>
              <p className="text-gray-400 text-sm italic">
                "Our custom approach ensures your business needs are met with
                precision and innovation."
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetail;

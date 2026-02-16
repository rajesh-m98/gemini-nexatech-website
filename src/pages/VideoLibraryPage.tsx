import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { FaPlay } from "react-icons/fa";
import { useEffect } from "react";

const VideoLibraryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      id: 1,
      title: "AI Strategy Workshop",
      category: "Tech Strategy",
      duration: "12:45",
    },
    {
      id: 2,
      title: "Zero Trust Implementation",
      category: "Cybersecurity",
      duration: "18:20",
    },
    {
      id: 3,
      title: "Edge Computing Demo",
      category: "Cloud Computing",
      duration: "10:15",
    },
    {
      id: 4,
      title: "Digital Twin Overview",
      category: "Industrial Tech",
      duration: "15:30",
    },
    {
      id: 5,
      title: "Supply Chain Blockchain",
      category: "Logistics",
      duration: "14:10",
    },
    {
      id: 6,
      title: "Adaptive UI Components",
      category: "Design",
      duration: "11:50",
    },
  ];

  return (
    <div className="bg-[#000510] min-h-screen pt-32 pb-24 font-inter">
      <Container>
        <div className="mb-16 lg:mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none"
          >
            VIDEO <span className="text-gemini-orange">LIBRARY</span>
          </motion.h1>
          <div className="flex justify-center items-center gap-3">
            <div className="w-20 h-1 bg-gemini-blue" />
            <p className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-[0.4em]">
              Our Visual Roadmap of Innovation
            </p>
            <div className="w-20 h-1 bg-gemini-blue" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="aspect-video rounded-[2.5rem] overflow-hidden bg-[#001D3D] border border-white/5 group-hover:border-gemini-blue/50 transition-all duration-500 shadow-2xl relative">
                <div className="absolute inset-0 bg-tech-blueprint opacity-10 group-hover:opacity-30 transition-opacity" />

                {/* Overlay with Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-gemini-blue/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-gemini-orange transition-all duration-500 shadow-[0_0_30px_rgba(0,38,115,0.5)]">
                    <FaPlay className="text-white text-xl ml-1" />
                  </div>
                </div>

                {/* Video Info */}
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 rounded text-[8px] font-black bg-gemini-orange text-white uppercase tracking-widest">
                      {video.category}
                    </span>
                    <span className="text-[10px] text-gray-400 font-bold tracking-widest">
                      {video.duration}
                    </span>
                  </div>
                  <h3 className="text-white font-black text-xl lg:text-2xl uppercase tracking-tighter">
                    {video.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default VideoLibraryPage;

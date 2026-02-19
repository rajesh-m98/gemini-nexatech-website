import { motion, AnimatePresence } from "framer-motion";
import Container from "../components/common/Container";
import { FaPlay } from "react-icons/fa";
import { useEffect, useState } from "react";

const VideoLibraryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedVideo, setSelectedVideo] = useState<null | {
    id: number;
    title: string;
    description: string;
    url: string;
  }>(null);

  const videos = [
    {
      id: 1,
      title:
        "Why Gemini Nexatech is a Leading AI & Software Development Company",
      description:
        "Discover our approach to building cutting-edge technical solutions that empower businesses worldwide.",
      category: "Company Profile",
      thumbnail:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Placeholder
    },
    {
      id: 2,
      title: "AI in 2026: Opportunity or Chaos for Enterprises?",
      description:
        "A deep dive into the evolving AI landscape and how organizations can stay ahead of the curve.",
      category: "Tech Strategy",
      thumbnail:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2070",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "How to Build & Launch an AI-Powered App in 2026",
      description:
        "The complete roadmap from ideation to deployment for next-gen intelligent applications.",
      category: "Development",
      thumbnail:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 4,
      title: "RTLS Solutions for Smart Warehousing",
      description:
        "How precision tracking is revolutionizing logistics and inventory management efficiency.",
      category: "Logistics",
      thumbnail:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 5,
      title: "Industrial Safety Standards for 2026",
      description:
        "Ensuring compliance and worker protection in hazardous high-risk industrial environments.",
      category: "Safety",
      thumbnail:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&q=80&w=2069",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 6,
      title: "Custom ERP Integration Success Stories",
      description:
        "Real-world cases of how integrated enterprise systems transform operational productivity.",
      category: "Case Study",
      thumbnail:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=2070",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  return (
    <div className="bg-[#000510] min-h-screen pt-32 pb-24 font-inter">
      <Container>
        <div className="mb-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="typo-heading text-4xl md:text-6xl mb-6"
          >
            Latest <span className="text-gemini-orange">Videos</span>
          </motion.h1>
          <div className="w-16 h-1 bg-gemini-blue mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              onClick={() =>
                setSelectedVideo({
                  id: video.id,
                  title: video.title,
                  description: video.description,
                  url: video.videoUrl,
                })
              }
              className="group cursor-pointer"
            >
              {/* White Container UI from Image */}
              <div className="bg-white rounded-[2.5rem] p-4 h-full flex flex-col shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-gemini-blue/20 transition-all duration-500 hover:-translate-y-2">
                {/* Image at Top */}
                <div className="aspect-video rounded-[2rem] overflow-hidden mb-6 relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>

                {/* Content */}
                <div className="px-2 flex-1 flex flex-col">
                  <h3 className="typo-subsection text-[#001D3D] leading-snug mb-4 line-clamp-2">
                    {video.title}
                  </h3>

                  {/* Watch Now Button UI from Image */}
                  <div className="mt-auto pb-4">
                    <div className="inline-flex items-center gap-4 bg-[#0047AB] text-white pl-2 pr-6 py-2 rounded-full hover:bg-gemini-orange transition-all duration-300 group/btn">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0047AB] group-hover/btn:text-gemini-orange transition-colors">
                        <FaPlay className="text-[10px] ml-0.5" />
                      </div>
                      <span className="text-[11px] font-black tracking-wider uppercase">
                        Watch Now &gt;
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
              onClick={() => setSelectedVideo(null)}
            />

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-[90vw] md:w-[80vw] lg:w-[75vw] max-w-5xl max-h-[95vh] bg-[#000510] border border-white/10 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_0_150px_rgba(0,71,171,0.4)] z-10 flex flex-col"
            >
              {/* Scrollable Container for Video + Text */}
              <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="aspect-video w-full bg-black">
                  <iframe
                    src={selectedVideo.url} // Use embed URL
                    className="w-full h-full"
                    allowFullScreen
                    title={selectedVideo.title}
                  />
                </div>

                {/* <div className="py-8 md:py-12 px-6 md:px-12 text-center border-t border-white/10">
                  <h2 className="text-xl sm:text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                    {selectedVideo.title}
                  </h2>
                  <p className="typo-body text-gray-400 font-medium max-w-4xl mx-auto text-xs sm:text-sm md:text-base">
                    {selectedVideo.description}
                  </p>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VideoLibraryPage;

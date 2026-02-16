import { useState, useEffect } from "react";
import { usePDF } from "@react-pdf/renderer";
import { BrochurePDF } from "./BrochurePDF";
import { motion, AnimatePresence } from "framer-motion";
import { FaFilePdf, FaSpinner } from "react-icons/fa";

const BrochureFAB = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Explicitly generate the PDF instance
  const [instance, updateInstance] = usePDF({
    document: <BrochurePDF />,
  });

  // Debug Logging for PDF System
  useEffect(() => {
    if (instance.loading) {
      console.log("📄 [PDF Engine]: Building document...");
    } else if (instance.error) {
      console.error("❌ [PDF Engine] Error:", instance.error);
    } else if (instance.url) {
      console.log("✅ [PDF Engine]: Ready for download!");
      console.log("🔗 Preview Link:", instance.url);
      console.group("📂 Brochure Content Mapping:");
      console.log("- Brand: Gemini Nexatech");
      console.log("- Target: Official Corporate Brochure");
      console.log("- Format: A4 (Helvetica-Standard)");
      console.groupEnd();
    }
  }, [instance.loading, instance.error, instance.url]);

  // Refresh PDF if data changes (though it shouldn't often)
  useEffect(() => {
    updateInstance(<BrochurePDF />);
  }, [updateInstance]);

  const handleDownload = () => {
    if (instance.loading || !instance.url) {
      console.log("PDF not ready yet...");
      return;
    }

    try {
      const link = document.createElement("a");
      link.href = instance.url;
      link.download = "Gemini_Nexatech_Brochure.pdf";
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
      // Fallback: Open in new tab
      if (instance.url) window.open(instance.url, "_blank");
    }
  };

  return (
    <div className="fixed right-4 bottom-24 sm:right-8 sm:bottom-32 z-[100]">
      <div
        className="relative flex items-center group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover Text Label - Hidden on mobile for cleaner UI */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-full mr-4 px-4 py-2 bg-[#013299] text-white text-[10px] sm:text-xs font-black uppercase tracking-widest rounded-lg shadow-xl whitespace-nowrap hidden md:block pointer-events-none"
            >
              Download Brochure
              <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-[#013299] rotate-45" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB Circle */}
        <motion.button
          onClick={handleDownload}
          disabled={instance.loading}
          whileHover={!instance.loading ? { scale: 1.1 } : {}}
          whileTap={!instance.loading ? { scale: 0.95 } : {}}
          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-all duration-300 relative overflow-hidden ${
            instance.loading
              ? "bg-gray-800 border-gray-700 cursor-wait"
              : "bg-[#fd8e18] hover:bg-[#013299] border border-white/20"
          }`}
        >
          {/* Background Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

          {instance.loading ? (
            <div className="flex flex-col items-center">
              <FaSpinner className="text-xl text-white animate-spin" />
              <span className="text-[8px] text-white mt-1 font-bold">...</span>
            </div>
          ) : (
            <FaFilePdf className="text-xl sm:text-2xl text-white group-hover:scale-110 transition-transform" />
          )}

          {/* Mobile Label Badge (Visible only on mobile) */}
          <div className="absolute -bottom-1 left-0 right-0 bg-black/40 py-0.5 md:hidden">
            <span className="text-[6px] text-white font-bold block text-center">
              PDF
            </span>
          </div>

          {/* Pulsing Ring Effect */}
          {!instance.loading && (
            <div className="absolute inset-0 rounded-2xl border-2 border-[#fd8e18] animate-ping opacity-20 pointer-events-none" />
          )}
        </motion.button>
      </div>
    </div>
  );
};

export default BrochureFAB;

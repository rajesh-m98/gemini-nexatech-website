import { FaWhatsapp, FaPhone, FaPlay } from "react-icons/fa";
import AnimatedServices from "./AnimatedServices";
import heroImage from "../../assets/hero_section_image.jpg";
import { useHeroManager } from "./HeroManager";
import { useHeroAnimations } from "./HeroAnimations";

import { useNavigate } from "react-router-dom";

interface HeroProps {
  onScheduleCall?: () => void;
}

const Hero = ({ onScheduleCall }: HeroProps) => {
  const navigate = useNavigate();
  const {
    heading,
    ctas,
    trustedByLabel,
    logos,
    openWhatsApp,
    scrollToSection,
  } = useHeroManager();

  const { containerRef, backgroundRef, contentRef } = useHeroAnimations();

  return (
    <>
      <section
        id="hero"
        ref={containerRef}
        className="relative min-h-[80vh] sm:min-h-[85vh] w-full flex items-center justify-center overflow-hidden pt-14 sm:pt-20"
      >
        <div
          ref={backgroundRef}
          className="absolute inset-0 z-0 w-full h-full"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        <button
          onClick={openWhatsApp}
          className="absolute sm:fixed bottom-3 left-3 sm:bottom-6 sm:left-6 cursor-pointer z-50 bg-[#25D366] text-white p-2 sm:p-3 rounded-full hover:scale-110 transition-transform duration-300 animate-ripple-green shadow-lg"
          aria-label="WhatsApp"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />
        </button>

        <div
          ref={contentRef}
          className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-3 sm:py-8"
        >
          <div className="text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-white mb-2 lg:mb-6 leading-tight font-inter tracking-widest uppercase opacity-80 drop-shadow-md">
              {heading}
            </h1>

            <div className="mb-2 lg:mb-8">
              <AnimatedServices />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
              {ctas.map((cta, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (cta.type === "primary" && onScheduleCall) {
                      onScheduleCall();
                    } else if (cta.href.startsWith("/")) {
                      navigate(cta.href);
                    } else {
                      scrollToSection(cta.href);
                    }
                  }}
                  className={`group relative w-full sm:w-auto h-12 sm:h-14 px-8 sm:px-10 rounded-xl font-bold text-xs sm:text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 cursor-pointer border-2 ${
                    cta.type === "primary"
                      ? "bg-gradient-to-r from-gemini-blue via-blue-600 to-blue-700 text-white border-transparent"
                      : "bg-transparent border-white text-white hover:bg-white hover:text-[#013299]"
                  }`}
                >
                  <span>{cta.label}</span>
                  {cta.type === "primary" ? (
                    <FaPhone className="group-hover:animate-ring transition-all rotate-90 duration-300 text-xs sm:text-sm" />
                  ) : (
                    <FaPlay className="group-hover:animate-play-pulse transition-all duration-300 text-[10px] sm:text-xs" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-gradient-to-b from-[#011C3D] to-[#000A16] py-6 sm:py-8 border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-shrink-0 relative overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0047AB] via-[#0066CC] to-[#0047AB] animate-gradient-xy"></div>
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <h3 className="relative z-10 text-xs sm:text-sm lg:text-base font-black text-white px-6 py-2 whitespace-nowrap drop-shadow-md uppercase tracking-[0.2em]">
                {trustedByLabel}
              </h3>
            </div>

            <div className="flex-1 overflow-hidden relative w-full">
              <div className="flex animate-scroll-left">
                {[...logos, ...logos].map((logo, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-xl p-3 sm:p-4 flex-shrink-0 flex items-center justify-center border border-white/10 hover:shadow-[0_0_20px_rgba(253,142,24,0.3)] transition-all duration-500 w-28 h-16 sm:w-36 sm:h-20 lg:w-48 lg:h-24 mx-4 sm:mx-8 lg:mx-10"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

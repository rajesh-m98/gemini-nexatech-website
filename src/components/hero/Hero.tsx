import { FaWhatsapp, FaImage, FaPhone, FaPlay } from "react-icons/fa";
import AnimatedServices from "./AnimatedServices";
import heroImage from "../../assets/hero_section_image.jpg";
import { useHeroManager } from "./HeroManager";
import { useHeroAnimations } from "./HeroAnimations";

const Hero = () => {
  const {
    heading,
    ctas,
    trustedByLabel,
    companySlots,
    openWhatsApp,
    scrollToSection,
  } = useHeroManager();

  const { containerRef, backgroundRef, contentRef } = useHeroAnimations();

  return (
    <>
      <section
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-2 lg:mb-6 leading-tight font-inter drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              {heading}
            </h1>

            <div className="mb-2 lg:mb-8">
              <AnimatedServices />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center">
              {ctas.map((cta, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(cta.href)}
                  className={`group relative w-full sm:w-auto px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-3 active:scale-95 cursor-pointer ${
                    cta.type === "primary"
                      ? "bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 text-white"
                      : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0047AB]"
                  }`}
                >
                  <span>{cta.label}</span>
                  {cta.type === "primary" ? (
                    <FaPhone className="group-hover:animate-ring transition-all rotate-90 duration-300" />
                  ) : (
                    <FaPlay className="group-hover:animate-play-pulse transition-all duration-300" />
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

              <h3 className="relative z-10 text-lg sm:text-xl lg:text-2xl font-bold text-white px-6 py-2 whitespace-nowrap drop-shadow-md">
                {trustedByLabel}
              </h3>
            </div>

            <div className="flex-1 overflow-hidden relative w-full">
              <div className="flex animate-scroll-left">
                {companySlots.map((_, index) => (
                  <div
                    key={`first-${index}`}
                    className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-5 flex-shrink-0 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-4 sm:mx-6 lg:mx-8 shadow-lg hover:shadow-xl"
                  >
                    <div className="text-center opacity-40 group-hover:opacity-60 transition-opacity">
                      <FaImage className="text-lg sm:text-xl lg:text-2xl text-white mx-auto mb-1" />
                      <p className="text-[10px] sm:text-xs text-gray-300 font-medium">
                        Logo {index + 1}
                      </p>
                    </div>
                  </div>
                ))}

                {companySlots.map((_, index) => (
                  <div
                    key={`second-${index}`}
                    className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-5 flex-shrink-0 flex items-center justify-center border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 mx-4 sm:mx-6 lg:mx-8 shadow-lg hover:shadow-xl"
                  >
                    <div className="text-center opacity-40 group-hover:opacity-60 transition-opacity">
                      <FaImage className="text-lg sm:text-xl lg:text-2xl text-white mx-auto mb-1" />
                      <p className="text-[10px] sm:text-xs text-gray-300 font-medium">
                        Logo {index + 1}
                      </p>
                    </div>
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

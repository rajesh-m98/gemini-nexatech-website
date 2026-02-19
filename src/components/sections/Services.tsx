import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import Container from "../common/Container";
import { servicesData } from "./services/servicesData";
import { useServicesAnimations } from "./services/ServicesAnimations";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const oldContentRef = useRef<HTMLDivElement>(null);
  const newContentRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const onTabChange = (index: number) => {
    setPreviousIndex(activeIndex);
    setActiveIndex(index);
  };

  const [scrollDir, setScrollDir] = useState(1); // 1 = down, -1 = up

  const handleSkip = () => {
    const targetId = scrollDir === 1 ? "products" : "hero";
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { containerRef, tabsRef, syncScrollToTab } = useServicesAnimations(
    activeIndex,
    previousIndex,
    servicesData.length,
    onTabChange,
    headerRef,
    cardRef,
    oldContentRef,
    newContentRef,
    scanlineRef,
    (_, direction) => setScrollDir(direction),
  );

  const activeService = servicesData[activeIndex];

  const [isPaused, setIsPaused] = useState(false);

  // --- MOBILE AUTO-SLIDER LOGIC ---
  useEffect(() => {
    if (!isMobile || isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesData.length);
    }, 6000); // 6 Seconds per slide for better readability
    return () => clearInterval(interval);
  }, [isMobile, isPaused]);

  if (isMobile) {
    return (
      <section
        id="services-section"
        className="bg-[#000510] py-16 px-4 overflow-hidden"
      >
        <Container>
          <div className="text-center mb-10">
            <span className="text-[#FF8C00] font-bold text-xs tracking-[0.3em] uppercase mb-2 block">
              Our Expertise
            </span>
            <h2 className="text-3xl font-black text-white">Our Services</h2>
          </div>

          <div
            className="relative"
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  const swipeThreshold = 50;
                  if (info.offset.x < -swipeThreshold) {
                    // Swiped Left -> Next
                    setActiveIndex((prev) => (prev + 1) % servicesData.length);
                  } else if (info.offset.x > swipeThreshold) {
                    // Swiped Right -> Prev
                    setActiveIndex(
                      (prev) =>
                        (prev - 1 + servicesData.length) % servicesData.length,
                    );
                  }
                }}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-[#00152F]/60 backdrop-blur-xl rounded-[32px] border border-white/10 p-6 flex flex-col items-center text-center shadow-2xl min-h-[480px] cursor-grab active:cursor-grabbing touch-none"
              >
                <div className="w-14 h-14 bg-[#FF8C00]/10 rounded-2xl flex items-center justify-center mb-5 border border-[#FF8C00]/20 pointer-events-none">
                  <activeService.icon className="text-2xl text-[#FF8C00]" />
                </div>

                <h3 className="text-xl font-black text-white mb-3 uppercase tracking-tight pointer-events-none">
                  {activeService.title}
                </h3>

                <p className="text-gray-400 text-xs leading-relaxed mb-5 px-2 pointer-events-none">
                  {activeService.desc}
                </p>

                <div className="space-y-2.5 mb-6 w-full max-w-[280px] pointer-events-none">
                  {activeService.points.slice(0, 3).map((point, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-3 text-left"
                    >
                      <FaCheckCircle className="text-[#FF8C00] text-xs flex-shrink-0" />
                      <span className="text-white/80 text-[10px] sm:text-xs font-medium uppercase tracking-wider leading-tight">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pointer-events-auto flex flex-col items-center gap-3">
                  <Link
                    to={`/services/${activeService.id}`}
                    className="px-8 py-3 bg-white text-[#0047AB] text-sm font-bold rounded-xl hover:bg-[#FF8C00] hover:text-white transition-all transform active:scale-95 shadow-lg relative z-20 block w-fit mx-auto"
                  >
                    LEARN MORE
                  </Link>
                  <button
                    onClick={() => {
                      document
                        .getElementById("products")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-[#FF8C00] text-[10px] font-black uppercase tracking-widest opacity-60 hover:opacity-100 transition-opacity"
                  >
                    Skip Section ↓
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {servicesData.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === idx ? "w-8 bg-[#FF8C00]" : "w-2 bg-white/20"}`}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // --- DESKTOP VERSION ---
  return (
    <section
      id="services-section"
      ref={containerRef}
      className="bg-[#000510] relative overflow-hidden flex flex-col items-center justify-start lg:justify-center min-h-[100dvh] pt-24 lg:pt-0"
    >
      <div
        ref={headerRef}
        className="px-4 mt-8 lg:mt-12 mb-8 lg:mb-12 relative z-10 text-center w-full"
      >
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="text-[#FF8C00] font-bold text-xs tracking-[0.2em] uppercase">
                Future-Ready Solutions
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              Smart Tech{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-orange-400">
                Solutions
              </span>
            </h2>
          </div>
        </Container>
      </div>

      <Container>
        <div
          ref={cardRef}
          className="relative z-10 bg-[#00152F]/40 backdrop-blur-md rounded-[24px] lg:rounded-[40px] border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_40px_rgba(0,71,171,0.2)] will-change-transform"
        >
          {/* Tab Header with Notch */}
          <div className="bg-[#000510]/90 border-b border-white/10 p-2 lg:p-3 relative overflow-hidden">
            <div
              className="flex lg:grid lg:grid-cols-12 gap-1 relative overflow-x-auto lg:overflow-x-visible no-scrollbar snap-x snap-mandatory"
              ref={tabsRef}
            >
              <div
                className="active-tab-pill absolute bg-gradient-to-br from-[#0047AB] to-[#002152] rounded-xl shadow-[0_0_20px_rgba(0,71,171,0.6)] border border-white/20 pointer-events-none z-0"
                style={{ width: 0, height: 0, opacity: 0 }}
              >
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#0047AB]" />
              </div>

              {servicesData.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => syncScrollToTab(index)}
                  className={`relative flex-shrink-0 min-w-[100px] lg:min-w-0 flex flex-col items-center cursor-pointer justify-center py-2.5 lg:py-3.5 px-3 rounded-xl transition-all duration-300 group snap-center tab-btn-${index} ${
                    activeIndex === index ? "z-10" : "hover:bg-white/5"
                  }`}
                >
                  <div
                    className={`tab-content-${index} flex flex-col items-center pointer-events-none`}
                  >
                    <service.icon
                      className={`text-base lg:text-xl mb-1.5 transition-colors duration-300 ${
                        activeIndex === index
                          ? "text-[#FF8C00]"
                          : "text-white/50 group-hover:text-white/100"
                      }`}
                    />
                    <span
                      className={`text-[9px] lg:text-[11px] font-bold uppercase tracking-tight text-center leading-[1.2] transition-colors duration-300 px-1 line-clamp-2 min-h-[2.4em] flex items-center justify-center ${
                        activeIndex === index
                          ? "text-white"
                          : "text-white/50 group-hover:text-white/100"
                      }`}
                    >
                      {service.title.split(" ")[0]}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 lg:p-10 min-h-[380px] lg:min-h-[460px] max-h-[75vh] relative overflow-hidden">
            <div
              ref={scanlineRef}
              className="absolute left-0 w-full h-8 bg-gradient-to-b from-transparent via-[#FF8C00]/40 to-transparent z-20 pointer-events-none hidden"
              style={{ boxShadow: "0 0 40px rgba(255, 140, 0, 0.4)" }}
            />

            <div
              key={`old-${previousIndex}`}
              className="absolute inset-0 p-5 lg:p-10"
              ref={oldContentRef}
            >
              <div className="w-full h-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12 opacity-0">
                {/* Placeholder content for transition sizing */}
              </div>
            </div>

            <div
              key={`new-${activeIndex}`}
              className="relative z-10 w-full h-full"
              ref={newContentRef}
            >
              <div className="w-full h-full flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <div className="flex-1 text-left relative z-10 w-full">
                  <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-md rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 border border-white/20 shadow-xl">
                    <activeService.icon className="text-2xl lg:text-3xl text-[#FF8C00]" />
                  </div>

                  <h2 className="text-2xl lg:text-3xl xl:text-4xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                    {activeService.title}
                  </h2>

                  <p className="text-gray-300 text-sm lg:text-base mb-4 leading-relaxed max-w-xl opacity-90">
                    {activeService.desc}
                  </p>

                  <div className="grid grid-cols-1 gap-3 mb-8">
                    {activeService.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 group/point"
                      >
                        <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-[#FF8C00]/20 flex items-center justify-center border border-[#FF8C00]/30 group-hover/point:bg-[#FF8C00] transition-colors duration-300">
                          <FaCheckCircle className="text-[12px] text-[#FF8C00] group-hover/point:text-white" />
                        </div>
                        <span className="text-white/90 text-[13px] lg:text-[15px] font-medium tracking-wide">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 lg:gap-6">
                    <Link
                      to={`/services/${activeService.id}`}
                      className="group/btn relative px-6 py-3 lg:px-8 lg:py-3.5 bg-white text-[#0047AB] font-bold rounded-xl lg:rounded-2xl hover:bg-[#FF8C00] hover:text-white transition-all duration-300 transform active:scale-95 shadow-lg block w-fit"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Learn More <span className="text-xl">→</span>
                      </span>
                    </Link>

                    <button
                      onClick={handleSkip}
                      className="px-6 py-3 lg:px-8 lg:py-3.5 bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] font-black text-[10px] lg:text-xs rounded-xl lg:rounded-2xl hover:bg-[#FF8C00] hover:text-white transition-all uppercase tracking-[0.2em] shadow-xl group/skip"
                    >
                      {scrollDir === 1 ? "Skip to Products" : "Skip to Top"}
                      <span className="ml-2 inline-block transition-transform group-hover/skip:translate-y-[-2px]">
                        {scrollDir === 1 ? "↓" : "↑"}
                      </span>
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full max-w-[440px] relative">
                  <div
                    className={`rounded-[24px] lg:rounded-[32px] overflow-hidden border-4 border-white/10 shadow-2xl bg-gradient-to-br ${activeService.gradient} max-h-[320px] lg:max-h-[380px]`}
                  >
                    <img
                      src={activeService.image}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Services;

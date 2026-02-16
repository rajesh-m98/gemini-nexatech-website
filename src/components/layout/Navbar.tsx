import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/GN.png";
import { FaChevronDown } from "react-icons/fa";
import { useNavbarAnimations } from "./Navbar/NavbarAnimations";
import { useNavbarManager } from "./Navbar/NavbarManager";

const Navbar = () => {
  const {
    isMobileMenuOpen,
    activeDropdown,
    services,
    industries,
    navLinks,
    scrollToSection,
    toggleMobileMenu,
    toggleDropdown,
    scrollToTop,
  } = useNavbarManager();

  const { navRef, logoRef, pillRef } = useNavbarAnimations(isMobileMenuOpen);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <button
            ref={logoRef}
            onClick={scrollToTop}
            className="flex-shrink-0 flex items-center cursor-pointer hover:opacity-90 transition-opacity preserve-3d"
          >
            <img
              src={logo}
              alt="Gemini Nexatech Logo"
              className="h-10 sm:h-11 lg:h-12 w-auto"
            />
            <div className="flex flex-col items-start justify-center ml-2">
              <span className="text-sm sm:text-base lg:text-lg font-bold leading-tight">
                <span className="text-gemini-blue">GEMINI </span>
                <span className="text-gemini-orange">NEXATECH</span>
              </span>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600 tracking-wide uppercase font-medium leading-tight">
                Where Ideas Meet Innovation
              </span>
            </div>
          </button>

          <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-8 nav-links-wrapper relative">
            {/* Liquid Pill Indicator */}
            <div className="filter-gooey absolute inset-0 pointer-events-none z-0">
              <div
                ref={pillRef}
                className="absolute h-10 top-1/2 -translate-y-1/2 bg-[#FD8E18]/20 rounded-full opacity-0 blur-[1px]"
                style={{ minWidth: "40px" }}
              />
            </div>

            <div className="nav-link-container px-2 py-2 relative z-10">
              <div className="nav-link-inner">
                <button
                  data-section="about"
                  onClick={() => scrollToSection(navLinks[0].href)}
                  className="text-[#013299] hover:text-[#FD8E18] cursor-pointer font-semibold transition-colors"
                >
                  {navLinks[0].label}
                </button>
              </div>
            </div>

            <div className="nav-link-container px-2 py-2 relative z-10 group">
              <div className="nav-link-inner">
                <button
                  data-section="services"
                  className="flex items-center text-[#013299] group-hover:text-[#FD8E18] cursor-pointer font-semibold transition-colors py-4"
                >
                  Services{" "}
                  <FaChevronDown className="ml-1 text-xs group-hover:rotate-180 transition-transform duration-300" />
                </button>
              </div>
              <div className="absolute left-2/3 -translate-x-3/5 xl:left-7/8 xl:-translate-x-2/3 top-full w-[95vw] lg:w-[1050px] xl:w-[1240px] bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform group-hover:translate-y-0 translate-y-4 p-3 lg:p-6 z-50 overflow-hidden text-center">
                <div className="grid grid-cols-3 xl:grid-cols-2 gap-x-4 xl:gap-x-6 gap-y-2 xl:gap-y-3">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(service.href)}
                      className="group/card cursor-pointer relative flex items-start space-x-4 bg-[#0047AB] p-3 rounded-xl transition-all duration-500 text-left overflow-hidden hover:bg-white hover:shadow-[0_10px_30px_rgba(0,71,171,0.15)] hover:-translate-y-1 active:scale-[0.98]"
                    >
                      <div className="relative flex-shrink-0 mt-0.5 p-1.5 bg-white/10 rounded-lg group-hover/card:bg-[#FD8E18]/10 transition-all duration-500 shadow-inner">
                        <service.icon className="text-lg text-white group-hover/card:text-[#FD8E18] transition-colors duration-500" />
                      </div>
                      <div className="relative flex flex-col items-start justify-start text-left min-w-0 flex-1">
                        <h4 className="text-[13px] lg:text-[14px] font-bold text-white group-hover/card:text-[#013299] transition-colors duration-500 leading-tight w-full whitespace-nowrap overflow-hidden text-ellipsis">
                          {service.title}
                        </h4>
                        <p className="text-[10px] lg:text-[11px] text-white/80 group-hover/card:text-gray-600 mt-0.5 leading-snug w-full transition-colors duration-500 whitespace-nowrap overflow-hidden text-ellipsis">
                          {service.desc}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FD8E18] group-hover/card:w-full transition-all duration-500 rounded-full"></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="nav-link-container px-2 py-2 relative z-10">
              <div className="nav-link-inner">
                <button
                  data-section="products"
                  onClick={() => scrollToSection(navLinks[1].href)}
                  className="text-[#013299] hover:text-[#FD8E18] cursor-pointer font-semibold transition-colors"
                >
                  {navLinks[1].label}
                </button>
              </div>
            </div>

            <div className="nav-link-container px-2 py-2 relative z-10 group">
              <div className="nav-link-inner">
                <button
                  data-section="industries"
                  className="flex items-center text-[#013299] group-hover:text-[#FD8E18] cursor-pointer font-semibold transition-colors py-4"
                >
                  Industries{" "}
                  <FaChevronDown className="ml-1 text-xs group-hover:rotate-180 transition-transform duration-300" />
                </button>
              </div>
              <div className="absolute left-1/2 -translate-x-1/4 lg:left-1/2 lg:-translate-x-3/4 xl:left-1/2 xl:-translate-x-3/4 top-full w-[95vw] lg:w-[900px] xl:w-[1000px] bg-white/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-white/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform group-hover:translate-y-0 translate-y-4 p-4 lg:p-8 z-50 overflow-hidden text-center">
                <div className="grid grid-cols-2 gap-x-10 gap-y-3">
                  {industries.map((ind, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(ind.href)}
                      className="group/card cursor-pointer relative flex items-start space-x-3 bg-[#0047AB] p-4 rounded-xl transition-all duration-500 text-left overflow-hidden hover:bg-white hover:shadow-[0_10px_30px_rgba(0,71,171,0.15)] hover:-translate-y-1 active:scale-[0.98]"
                    >
                      <div className="relative flex-shrink-0 mt-1 p-2 bg-white/10 rounded-lg group-hover/card:bg-[#FD8E18]/10 transition-all duration-500 shadow-inner">
                        <ind.icon className="text-xl text-white group-hover/card:text-[#FD8E18] transition-colors duration-500" />
                      </div>
                      <div className="relative min-w-0 flex-1">
                        <h4 className="text-[15px] font-bold text-white group-hover/card:text-[#013299] transition-colors duration-500 leading-tight w-full whitespace-nowrap overflow-hidden text-ellipsis">
                          {ind.title}
                        </h4>
                        <p className="text-[12px] text-white/80 group-hover/card:text-gray-600 mt-1 leading-relaxed w-full whitespace-nowrap overflow-hidden text-ellipsis transition-colors duration-500">
                          {ind.desc}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#FD8E18] group-hover/card:w-full transition-all duration-500 rounded-full"></div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="nav-link-container px-2 py-2 relative z-10">
              <div className="nav-link-inner">
                <button
                  data-section="insights"
                  onClick={() => scrollToSection(navLinks[2].href)}
                  className="text-[#013299] hover:text-[#FD8E18] cursor-pointer font-semibold transition-colors"
                >
                  {navLinks[2].label}
                </button>
              </div>
            </div>
            <div className="nav-link-container px-2 py-2 relative z-10">
              <div className="nav-link-inner">
                <button
                  data-section="contact"
                  onClick={() => scrollToSection(navLinks[3].href)}
                  className="text-[#013299] hover:text-[#FD8E18] cursor-pointer font-semibold transition-colors"
                >
                  {navLinks[3].label}
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md text-[#013299] hover:bg-gray-100 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-gray-100 bg-white overflow-hidden shadow-2xl rounded-b-[24px]"
            >
              <div className="flex flex-col p-4 space-y-1">
                <button
                  onClick={() => scrollToSection(navLinks[0].href)}
                  className="w-full text-left px-4 py-3 text-[#013299] hover:bg-blue-50/50 font-bold transition-all rounded-xl"
                >
                  {navLinks[0].label}
                </button>

                <div className="w-full">
                  <button
                    onClick={() => toggleDropdown("services")}
                    className={`w-full flex items-center justify-between px-4 py-3 text-[#013299] font-bold transition-all rounded-xl ${
                      activeDropdown === "services"
                        ? "bg-blue-50/50"
                        : "hover:bg-blue-50/50"
                    }`}
                  >
                    <span>Services</span>
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        activeDropdown === "services" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "services" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-gray-50/50 mt-1 rounded-xl"
                      >
                        <div className="px-2 py-3 space-y-1">
                          {services.map((service, index) => (
                            <button
                              key={index}
                              onClick={() => scrollToSection(service.href)}
                              className="w-full flex items-center space-x-3 px-4 py-2.5 hover:bg-white rounded-lg transition-all group"
                            >
                              <service.icon className="text-base text-[#FD8E18] group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-semibold text-gray-700">
                                {service.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => scrollToSection(navLinks[1].href)}
                  className="w-full text-left px-4 py-3 text-[#013299] hover:bg-blue-50/50 font-bold transition-all rounded-xl"
                >
                  {navLinks[1].label}
                </button>

                <div className="w-full">
                  <button
                    onClick={() => toggleDropdown("industries")}
                    className={`w-full flex items-center justify-between px-4 py-3 text-[#013299] font-bold transition-all rounded-xl ${
                      activeDropdown === "industries"
                        ? "bg-blue-50/50"
                        : "hover:bg-blue-50/50"
                    }`}
                  >
                    <span>Industries</span>
                    <FaChevronDown
                      className={`text-xs transition-transform duration-300 ${
                        activeDropdown === "industries" ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === "industries" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-gray-50/50 mt-1 rounded-xl"
                      >
                        <div className="px-2 py-3 space-y-1">
                          {industries.map((ind, index) => (
                            <button
                              key={index}
                              onClick={() => scrollToSection(ind.href)}
                              className="w-full flex items-center space-x-3 px-4 py-2.5 hover:bg-white rounded-lg transition-all group"
                            >
                              <ind.icon className="text-base text-[#FD8E18] group-hover:scale-110 transition-transform" />
                              <span className="text-sm font-semibold text-gray-700">
                                {ind.title}
                              </span>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button
                  onClick={() => scrollToSection(navLinks[2].href)}
                  className="w-full text-left px-4 py-3 text-[#013299] hover:bg-blue-50/50 font-bold transition-all rounded-xl"
                >
                  {navLinks[2].label}
                </button>
                <button
                  onClick={() => scrollToSection(navLinks[3].href)}
                  className="w-full text-left px-4 py-3 text-[#013299] hover:bg-blue-50/50 font-bold transition-all rounded-xl"
                >
                  {navLinks[3].label}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Gooey SVG Filter Definition */}
      <svg className="svg-filters">
        <defs>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </defs>
      </svg>
    </nav>
  );
};

export default Navbar;

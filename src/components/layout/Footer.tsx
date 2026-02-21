import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Container from "../common/Container";
import { useFooterManager } from "./Footer/FooterManager";
import { useFooterAnimations } from "./Footer/FooterAnimations";
import { useCallback } from "react";

const Footer = () => {
  const { sections, socials } = useFooterManager();
  const { footerRef } = useFooterAnimations();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = useCallback(
    (href: string) => {
      if (href.startsWith("#")) {
        const targetId = href.replace("#", "");
        if (location.pathname !== "/") {
          navigate("/#" + targetId);
        } else {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else {
        navigate(href);
      }
    },
    [location.pathname, navigate],
  );

  return (
    <footer
      ref={footerRef as any}
      id="contact"
      className="relative bg-[#000510] pt-20 overflow-hidden border-t border-white/5"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-tech-blueprint opacity-[0.03]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] footer-aura opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-0 opacity-10">
        <span className="watermark-text font-black uppercase">NEXATECH</span>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 lg:gap-10 items-start mb-8">
          {/* Column 1: CTA (col-span-4) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6 text-left"
          >
            <div className="flex flex-col items-start">
              <span className="text-2xl font-black tracking-tight leading-none uppercase">
                <span className="text-gemini-blue">GEMINI </span>
                <span className="text-gemini-orange">NEXATECH</span>
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.165em] font-bold mt-2">
                WHERE IDEAS MEETS INNOVATION
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight tracking-tighter">
              Ready to build the <br />
              <span className="text-gemini-orange uppercase">
                Next Big Thing?
              </span>
            </h2>

            <div className="flex justify-start">
              <Link
                to="/contact"
                className="px-8 py-3 text-md bg-white text-gemini-blue font-black rounded-xl hover:bg-gemini-orange hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl uppercase tracking-wider"
              >
                LET'S WORK TOGETHER
              </Link>
            </div>
          </motion.div>

          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`${
                section.title === "Our Softwares"
                  ? "lg:col-span-3"
                  : section.title === "Quick Links"
                    ? "lg:col-span-2"
                    : "lg:col-span-4"
              } space-y-2 items-start text-left`}
            >
              <h4 className="text-white font-black uppercase tracking-widest text-sm border-l-4 border-gemini-orange pl-4 w-full">
                {section.title}
              </h4>
              <div className="space-y-2 pt-2">
                {section.links?.map((link, lIdx) => (
                  <li key={lIdx} className="list-none">
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-white flex items-center group transition-colors text-sm sm:text-base pl-4 cursor-pointer outline-none"
                    >
                      <div className="relative flex items-center">
                        <span className="absolute -left-4 w-0 group-hover:w-3 h-[2px] bg-[#FF8C00] transition-all duration-300"></span>
                        <span className="text-xl">{link.label}</span>
                      </div>
                    </button>
                  </li>
                ))}

                {section.contact?.map((item, cIdx) => (
                  <li key={cIdx} className="list-none">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-start gap-2.5 transition-all group pl-4 ${
                        item.highlight
                          ? "text-green-400 font-bold hover:text-green-300"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <item.icon
                        className={`text-xl flex-shrink-0 mt-[3px] ${item.highlight ? "text-green-400" : ""}`}
                      />
                      <span className="text-lg leading-snug">{item.label}</span>
                    </a>
                  </li>
                ))}

                {section.title === "Contact Info" && (
                  <div className="flex flex-wrap gap-2 pl-2 mt-4">
                    {socials.map((social, idx) => (
                      <a
                        key={idx}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        style={{ "--hover-color": social.color } as any}
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-[var(--hover-color)] hover:bg-white/10 hover:border-[var(--hover-color)]/30 transition-all group"
                      >
                        <social.icon className="text-xl group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

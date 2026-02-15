import { motion } from "framer-motion";
import Container from "../common/Container";
import { useFooterManager } from "./Footer/FooterManager";
import { useFooterAnimations } from "./Footer/FooterAnimations";

const Footer = () => {
  const { about, sections, socials, currentYear } = useFooterManager();
  const { footerRef } = useFooterAnimations();

  return (
    <footer
      ref={footerRef as any}
      id="contact"
      className="relative bg-[#000510] pt-24 pb-12 overflow-hidden border-t border-white/5"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-tech-blueprint opacity-[0.03]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] footer-aura opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Massive Watermark */}
      <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-0 opacity-10">
        <span className="watermark-text font-black uppercase">NEXATECH</span>
      </div>

      <Container className="relative z-10">
        {/* Top Section: CTA & Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl text-left w-full lg:w-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight text-center lg:text-left">
              Ready to build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-orange-400">
                Next Big Thing?
              </span>
            </h2>
            <div className="flex justify-center lg:justify-start">
              <button className="px-8 py-4 bg-white text-[#0047AB] font-black rounded-2xl hover:bg-[#FF8C00] hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-2xl">
                LET'S WORK TOGETHER
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.label}
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-[#FF8C00] hover:bg-white/10 hover:border-[#FF8C00]/30 transition-all group"
              >
                <social.icon className="text-2xl group-hover:scale-110 transition-transform" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20"
        >
          {/* Brand Column */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="space-y-6 text-left"
          >
            <div className="flex flex-col items-start">
              <span className="text-2xl font-black tracking-tight leading-none">
                <span className="text-[#0047AB]">GEMINI </span>
                <span className="text-[#FF8C00]">NEXATECH</span>
              </span>
              <span className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-bold mt-1">
                Innovation Redefined
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-sm">
              {about.desc}
            </p>
          </motion.div>

          {/* Links Columns */}
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="space-y-6 flex flex-col items-start text-left"
            >
              <h4 className="text-white font-black uppercase tracking-widest text-sm border-l-2 border-[#FF8C00] pl-4 w-full text-left">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links?.map((link, lIdx) => (
                  <li key={lIdx}>
                    <a
                      href={`#${link.href}`}
                      className="text-gray-400 hover:text-white flex items-center group transition-colors text-sm sm:text-base pl-4"
                    >
                      <div className="relative flex items-center">
                        <span className="absolute -left-4 w-0 group-hover:w-3 h-[2px] bg-[#FF8C00] transition-all duration-300"></span>
                        {link.label}
                      </div>
                    </a>
                  </li>
                ))}
                {section.contact?.map((item, cIdx) => (
                  <li key={cIdx} className="pl-4">
                    <a
                      href={item.href}
                      className={`flex items-center space-x-3 transition-all ${
                        item.highlight
                          ? "text-[#FF8C00] font-bold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <item.icon className="text-lg flex-shrink-0" />
                      <span className="text-sm sm:text-base leading-tight">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-gray-500 text-[11px] sm:text-[13px] font-medium tracking-wide">
          <p>© {currentYear} GEMINI NEXATECH. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="hover:text-white transition-colors uppercase"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors uppercase"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors uppercase"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

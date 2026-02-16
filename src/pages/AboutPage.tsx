import { motion } from "framer-motion";
import Container from "../components/common/Container";
import { roadmap, coreValues } from "../data/websiteData";
import { FaRocket, FaEye, FaGem } from "react-icons/fa";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useAboutManager } from "../components/sections/about/AboutManager";

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({
  numericValue,
  suffix,
  label,
}: {
  numericValue: number;
  suffix: string;
  label: string;
}) => (
  <div className="relative group">
    <div className="bg-gradient-to-b from-[#0047AB] to-[#002861] p-8 rounded-[2rem] border border-white/10 group-hover:border-gemini-blue/50 transition-all duration-500 transform group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(0,71,171,0.5)] shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[160px]">
      {/* Dynamic Glow Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-500 rounded-full" />

      <div className="text-4xl lg:text-5xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-500 flex items-baseline gap-1">
        <span className="stat-number" data-target={numericValue}>
          0
        </span>
        <span className="text-gemini-orange">{suffix}</span>
      </div>
      <div className="text-blue-100/70 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em] text-center leading-tight">
        {label}
      </div>
    </div>
  </div>
);

const AboutPage = () => {
  const { stats } = useAboutManager();
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Numerical Stats Counter
      const counts = gsap.utils.toArray<HTMLElement>(".stat-number");
      counts.forEach((count) => {
        const target = parseInt(count.getAttribute("data-target") || "0", 10);
        gsap.to(count, {
          innerText: target,
          duration: 2.5,
          snap: { innerText: 1 },
          ease: "power4.out",
          scrollTrigger: {
            trigger: count,
            start: "top 90%",
          },
        });
      });

      // Horizontal Scroll for Roadmap
      const track = document.querySelector("#roadmap-track");
      if (track) {
        const trackWidth = track.scrollWidth;
        const viewportWidth = window.innerWidth;
        const scrollAmount = trackWidth - viewportWidth;

        if (scrollAmount > 0) {
          gsap.to(track, {
            x: () => -scrollAmount,
            ease: "none",
            scrollTrigger: {
              trigger: "#roadmap-container",
              start: "top 20%",
              end: () => `+=${scrollAmount}`,
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                gsap.to("#scroll-progress", {
                  width: `${self.progress * 100}%`,
                  duration: 0.1,
                  ease: "none",
                });
              },
            },
          });
        }
      }
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="bg-[#000510] min-h-screen pt-24 pb-20 overflow-hidden font-inter"
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-gemini-blue/10 to-transparent -z-10" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-gemini-orange font-black text-xs tracking-[0.4em] uppercase mb-4 block"
            >
              Our Legacy
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter leading-tight"
            >
              WE ARE <span className="text-gemini-blue uppercase">GEMINI</span>{" "}
              <span className="text-gemini-orange uppercase">NEXATECH</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-400 font-medium leading-relaxed uppercase tracking-wide"
            >
              Empowering businesses with innovative technology solutions that
              drive efficiency, safety, and growth across industries worldwide.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Stats Section Integrated */}
      <section className="pb-32">
        <Container>
          <div className="w-full bg-[#001D3D]/30 backdrop-blur-xl rounded-[4rem] p-10 sm:p-16 border border-white/5 shadow-2xl relative overflow-hidden">
            {/* Background Flair for the box */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-gemini-blue/10 blur-[100px] rounded-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {stats.slice(0, 4).map((stat, idx) => (
                <StatCard
                  key={idx}
                  numericValue={stat.numericValue}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#000510] relative overflow-hidden">
        {/* Decorative Light Blurs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gemini-blue/5 blur-[120px] rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gemini-orange/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2" />

        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-12 rounded-[3.5rem] bg-gradient-to-br from-[#001D3D]/50 to-transparent border border-white/5 hover:border-gemini-blue/30 transition-all duration-700 shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 p-12 text-gemini-blue/30 text-[12rem] transition-all duration-1000 group-hover:text-gemini-blue/50 group-hover:scale-110 group-hover:-rotate-12 pointer-events-none">
                <FaRocket />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-1.5 bg-gemini-blue rounded-full" />
                  <h3 className="text-white font-black text-4xl tracking-tighter uppercase">
                    MISSION
                  </h3>
                </div>
                <p className="text-gray-300 text-xl leading-relaxed font-semibold italic tracking-tight">
                  "Empowering businesses with innovative technology solutions
                  that drive efficiency, safety, and growth across industries
                  worldwide."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative p-12 rounded-[3.5rem] bg-gradient-to-br from-[#001D3D]/30 to-transparent border border-white/5 hover:border-gemini-orange/30 transition-all duration-700 shadow-2xl overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 p-12 text-gemini-orange/30 text-[12rem] transition-all duration-1000 group-hover:text-gemini-orange/50 group-hover:scale-110 group-hover:rotate-12 pointer-events-none">
                <FaEye />
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-1.5 bg-gemini-orange rounded-full" />
                  <h3 className="text-white font-black text-4xl tracking-tighter uppercase">
                    VISION
                  </h3>
                </div>
                <p className="text-gray-300 text-xl leading-relaxed font-semibold italic tracking-tight">
                  "To be a global leader in smart, integrated, and sustainable
                  tech solutions that transform operations and create lasting
                  value for our clients and communities."
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 uppercase tracking-tighter">
              Our Core <span className="text-gemini-orange">Values</span>
            </h2>
            <div className="w-24 h-2 bg-gemini-blue mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: idx * 0.1,
                }}
                key={idx}
                className="relative p-10 rounded-[2.5rem] bg-[#001D3D]/40 backdrop-blur-xl border border-white/5 hover:border-gemini-blue/50 transition-all duration-700 group overflow-hidden"
              >
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gemini-blue/5 blur-3xl rounded-full group-hover:bg-gemini-blue/20 transition-colors" />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gemini-blue/20 to-gemini-blue/5 flex items-center justify-center mb-8 border border-white/5 group-hover:bg-gemini-blue transition-all duration-500 shadow-xl group-hover:rotate-[360deg]">
                    <FaGem className="text-gemini-blue text-2xl group-hover:text-white transition-colors" />
                  </div>
                  <h4 className="text-white font-black text-2xl mb-4 tracking-tight group-hover:text-gemini-orange transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed font-medium text-sm tracking-wide">
                    {value.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-gemini-blue to-gemini-orange group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* GSAP Horizontal Scroll Roadmap */}
      <section className="py-20 lg:py-32 bg-transparent select-none">
        <div className="container mx-auto px-4 mb-20 text-center">
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-4 tracking-tighter inline-block">
            COMPANY <span className="text-gemini-blue">JOURNEY</span>
          </h2>
          <p className="text-gray-500 font-black text-xs lg:text-sm uppercase tracking-[0.5em] block mt-4">
            Our 10-Year Roadmap of Innovation
          </p>
        </div>

        <div className="overflow-hidden relative" id="roadmap-container">
          <div
            className="flex gap-8 px-4 lg:px-[15vw] relative pb-20 items-stretch"
            id="roadmap-track"
          >
            {/* Horizontal Timeline Line */}
            <div className="absolute top-[40%] left-0 w-[500%] h-px bg-white/10 z-0" />

            {roadmap.map((milestone, idx) => (
              <div
                key={idx}
                className="roadmap-card min-w-[320px] lg:min-w-[450px] relative z-10 flex flex-col items-center"
              >
                {/* Year Bubble */}
                <div className="mb-12 relative">
                  <div className="absolute inset-0 bg-gemini-orange/20 blur-2xl rounded-full" />
                  <span className="relative text-gemini-orange font-black text-6xl lg:text-8xl tracking-tighter">
                    {milestone.year}
                  </span>
                </div>

                {/* Content Card */}
                <div className="bg-[#001D3D]/60 backdrop-blur-xl border border-white/5 p-10 rounded-[3rem] hover:border-gemini-orange/40 transition-all group w-full h-full shadow-2xl relative overflow-hidden">
                  {/* Glowing dot on top of card connected to timeline */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gemini-blue rounded-full shadow-[0_0_15px_rgba(0,71,171,0.8)]" />

                  <h4 className="text-white font-black text-2xl mb-4 uppercase tracking-tight group-hover:text-gemini-orange transition-colors">
                    {milestone.title}
                  </h4>
                  <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-medium">
                    {milestone.description}
                  </p>

                  <div className="absolute bottom-6 right-8 text-white/5 font-black text-6xl select-none group-hover:text-white/10 transition-colors">
                    {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Scroll Bar Hint */}
          <div className="container mx-auto px-4 mt-12 mb-8 flex items-center gap-4 justify-center">
            <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
              <div id="scroll-progress" className="w-0 h-full bg-gemini-blue" />
            </div>
            <span className="text-gray-500 font-black text-[10px] uppercase tracking-widest">
              Scroll to Explore
            </span>
          </div>
        </div>
      </section>

      {/* CTA Section
      <section className="py-32">
        <Container>
          <div className="bg-gradient-to-br from-gemini-blue to-blue-900 rounded-[50px] p-12 lg:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-tech-blueprint opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl lg:text-7xl font-black text-white mb-8 tracking-tighter">
                READY TO BUILD THE FUTURE?
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-white text-gemini-blue font-black py-5 px-12 rounded-2xl hover:bg-gemini-orange hover:text-white transition-all transform active:scale-95 shadow-xl">
                  CONTACT US TODAY
                </button>
                <button className="bg-transparent border-2 border-white/30 text-white font-black py-5 px-12 rounded-2xl hover:bg-white/10 transition-all transform active:scale-95">
                  VIEW SOLUTIONS
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section> */}
    </div>
  );
};

export default AboutPage;

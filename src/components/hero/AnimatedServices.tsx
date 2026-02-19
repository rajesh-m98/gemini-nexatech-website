import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "UX/UI Design",
  "AI Development",
  "IT & Software Consulting",
  "Cloud & DevOps",
  "API Development & System Integration",
  "Enterprise Application Development",
  "IoT & Smart Monitoring Solutions",
  "Data Analytics & Business Intelligence",
  "Application Maintenance & Support",
] as const;

const AnimatedServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentService = services[currentIndex];
  const words = currentService.split(" ");

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
      },
    },
  };
  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -10,
      scale: 0.8,
    },
  };

  return (
    <div className="h-12 sm:h-16 md:h-20 lg:h-24 flex items-center justify-center overflow-hidden px-3">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white text-center flex flex-wrap justify-center leading-[1] tracking-normal font-inter"
        >
          {words.map((word, wordIndex) => (
            <span key={wordIndex} className="whitespace-nowrap flex">
              {word.split("").map((letter, charIndex) => (
                <motion.span
                  key={`${currentIndex}-${wordIndex}-${charIndex}`}
                  variants={letterVariants}
                  className="inline-block mx-[0.01em]"
                >
                  {letter}
                </motion.span>
              ))}
              {/* Add a space after the word unless it's the last word */}
              {wordIndex !== words.length - 1 && (
                <motion.span
                  key={`${currentIndex}-space-${wordIndex}`}
                  variants={letterVariants}
                  className="inline-block"
                >
                  &nbsp;
                </motion.span>
              )}
            </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedServices;

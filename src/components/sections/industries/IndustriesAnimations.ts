import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const useIndustriesAnimations = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const pillars = containerRef.current.querySelectorAll(".industry-pillar");
        const pillarsArray = Array.from(pillars);
        const mm = gsap.matchMedia();

        // 1. Desktop Accordion Hover Logic (Above 1024px)
        mm.add("(min-width: 1024px)", () => {
            const resetAll = () => {
                gsap.to(pillarsArray, {
                    flexGrow: 1,
                    duration: 0.8,
                    ease: "power3.inOut",
                    overwrite: true
                });
                pillarsArray.forEach(p => {
                    const t = p.querySelector(".pillar-title");
                    const d = p.querySelector(".pillar-details");
                    const img = p.querySelector(".pillar-image");
                    gsap.to(t, { opacity: 1, y: 0, duration: 0.4, overwrite: true });
                    gsap.to(d, { opacity: 0, x: -30, duration: 0.4, overwrite: true });
                    gsap.to(img, { scale: 1.2, filter: "grayscale(100%)", duration: 0.8, overwrite: true });
                });
            };

            pillarsArray.forEach((pillar) => {
                const title = pillar.querySelector(".pillar-title") as HTMLElement;
                const details = pillar.querySelector(".pillar-details") as HTMLElement;
                const image = pillar.querySelector(".pillar-image") as HTMLElement;

                pillar.addEventListener("mouseenter", () => {
                    gsap.killTweensOf(pillarsArray);
                    gsap.to(pillarsArray, { flexGrow: 0.7, duration: 0.8, ease: "power3.inOut", overwrite: "auto" });
                    gsap.to(pillar, { flexGrow: 2.8, duration: 0.8, ease: "power3.inOut", overwrite: "auto" });
                    gsap.to(details, { opacity: 1, x: 0, duration: 0.6, delay: 0.1, ease: "power2.out" });
                    gsap.to(title, { opacity: 0, y: -30, duration: 0.3 });
                    gsap.to(image, { scale: 1.1, filter: "grayscale(0%)", opacity: 0.7, duration: 1.2 });
                });
            });

            containerRef.current?.addEventListener("mouseleave", resetAll);
        });

        // 2. Mobile Clean Viewport Focus (Adaptive Height)
        mm.add("(max-width: 1023px)", () => {
            pillarsArray.forEach((pillar) => {
                const details = pillar.querySelector(".pillar-details") as HTMLElement;
                const image = pillar.querySelector(".pillar-image") as HTMLElement;

                ScrollTrigger.create({
                    trigger: pillar,
                    start: "top 60%", // Earlier trigger for better mobile feel
                    end: "bottom 40%",
                    onEnter: () => {
                        // We use a flexible height approach for mobile
                        gsap.to(pillar, { flexGrow: 1.5, minHeight: "350px", duration: 0.5, ease: "power2.out" });
                        gsap.to(details, { opacity: 1, y: 0, duration: 0.5 });
                        gsap.to(image, { filter: "grayscale(0%)", scale: 1.05, opacity: 0.6 });
                    },
                    onLeave: () => {
                        gsap.to(pillar, { flexGrow: 1, minHeight: "150px", duration: 0.5, ease: "power2.in" });
                        gsap.to(details, { opacity: 0, y: 15, duration: 0.3 });
                        gsap.to(image, { filter: "grayscale(100%)", scale: 1.1, opacity: 0.3 });
                    },
                    onEnterBack: () => {
                        gsap.to(pillar, { flexGrow: 1.5, minHeight: "350px", duration: 0.5 });
                        gsap.to(details, { opacity: 1, y: 0, duration: 0.5 });
                    },
                    onLeaveBack: () => {
                        gsap.to(pillar, { flexGrow: 1, minHeight: "150px", duration: 0.5 });
                        gsap.to(details, { opacity: 0, y: 15, duration: 0.3 });
                    }
                });
            });
        });

        // 3. Entrance Animation
        gsap.from(pillarsArray, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            clearProps: "opacity,transform"
        });

    }, { scope: containerRef });

    return { containerRef };
};

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const useNavbarAnimations = (isMobileMenuOpen: boolean) => {
    const navRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLButtonElement>(null);
    const pillRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!navRef.current || isMobileMenuOpen) return;

        const links = Array.from(navRef.current.querySelectorAll(".nav-link-container"));
        const logo = logoRef.current;
        const pill = pillRef.current;

        // 1. Holographic Logo Logic (Full Header Tracking)
        const handleLogoTracking = (e: MouseEvent) => {
            if (!logo) return;
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;
            const xPos = (clientX / innerWidth - 0.5) * 25;
            const yPos = (clientY / innerHeight - 0.5) * 25;

            gsap.to(logo, {
                rotateY: xPos,
                rotateX: -yPos,
                duration: 1.2,
                ease: "power2.out",
                force3D: true
            });
        };
        window.addEventListener("mousemove", handleLogoTracking);

        // 2. Liquid Magnet Pill & Scroll-Sync "Living Anchor"
        const movePill = (target: HTMLElement, isInstant = false) => {
            if (!pill) return;
            const rect = target.getBoundingClientRect();
            const navRect = navRef.current?.getBoundingClientRect();
            if (!navRect) return;

            const targetLeft = rect.left - navRect.left;
            const targetWidth = rect.width;

            gsap.to(pill, {
                left: targetLeft,
                width: targetWidth,
                opacity: 1,
                scaleY: isInstant ? 1 : 1.2,
                duration: isInstant ? 0 : 0.6,
                ease: "elastic.out(1, 0.75)",
                overwrite: "auto",
                onComplete: () => {
                    gsap.to(pill, { scaleY: 1, duration: 0.2 });
                }
            });
        };

        // Scroll Tracking for Sections (Safely filtered)
        const sections = ["about", "services", "products", "industries", "insights"];
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                ScrollTrigger.create({
                    trigger: element,
                    start: "top center+=100",
                    end: "bottom center",
                    onEnter: () => updateActiveLink(id),
                    onEnterBack: () => updateActiveLink(id),
                });
            }
        });

        const updateActiveLink = (id: string) => {
            const targetLink = navRef.current?.querySelector(`[data-section="${id}"]`) as HTMLElement;
            if (targetLink) {
                links.forEach(l => {
                    l.classList.remove("is-active");
                    const inner = l.querySelector(".nav-link-inner") as HTMLElement;
                    gsap.to(inner, { color: "#0047AB", scale: 1, duration: 0.4 });
                });

                const container = targetLink.closest(".nav-link-container") as HTMLElement;
                if (container) {
                    container.classList.add("is-active");
                    const inner = container.querySelector(".nav-link-inner") as HTMLElement;
                    movePill(container);
                    gsap.to(inner, { color: "#FF8C00", scale: 1.05, duration: 0.4 });
                }
            }
        };

        // 3. Manual Hover Logic
        links.forEach((link) => {
            link.addEventListener("mouseenter", () => {
                movePill(link as HTMLElement);
            });
        });

        const navLinksWrapper = navRef.current.querySelector(".nav-links-wrapper");
        navLinksWrapper?.addEventListener("mouseleave", () => {
            const activeLink = navRef.current?.querySelector(".nav-link-container.is-active") as HTMLElement;
            if (activeLink) movePill(activeLink);
            else gsap.to(pill, { opacity: 0, duration: 0.4 });
        });

        // 4. Proximity Magnetic Links
        links.forEach((link) => {
            const inner = link.querySelector(".nav-link-inner") as HTMLElement;
            link.addEventListener("mousemove", (e: any) => {
                const rect = link.getBoundingClientRect();
                const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
                gsap.to(inner, { x, y: 0, duration: 0.5, ease: "power3.out", force3D: true });
            });
            link.addEventListener("mouseleave", () => {
                gsap.to(inner, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1.2, 0.7)", force3D: true });
            });
        });

        return () => {
            window.removeEventListener("mousemove", handleLogoTracking);
        };
    }, { scope: navRef, dependencies: [isMobileMenuOpen] });

    return {
        navRef,
        logoRef,
        pillRef
    };
};

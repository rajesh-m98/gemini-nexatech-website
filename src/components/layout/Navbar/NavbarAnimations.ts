import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const useNavbarAnimations = (isMobileMenuOpen: boolean, pathname: string) => {
    const navRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLButtonElement>(null);
    const pillRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!navRef.current) return;

        const links = Array.from(navRef.current.querySelectorAll(".nav-link-container"));

        // Reset all links to default color initially on path change
        links.forEach(l => {
            const inner = l.querySelector(".nav-link-inner") as HTMLElement;
            if (inner) gsap.set(inner, { color: "#013299" });
            l.classList.remove("is-active");
        });

        if (isMobileMenuOpen) return;

        // Scroll Tracking for Sections - Only on Home Page
        if (pathname === "/") {
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
        }

        function updateActiveLink(id: string) {
            const targetLink = navRef.current?.querySelector(`[data-section="${id}"]`) as HTMLElement;
            if (targetLink) {
                links.forEach(l => {
                    l.classList.remove("is-active");
                    const inner = l.querySelector(".nav-link-inner") as HTMLElement;
                    gsap.to(inner, { color: "#013299", duration: 0.4 });
                });

                const container = targetLink.closest(".nav-link-container") as HTMLElement;
                if (container) {
                    container.classList.add("is-active");
                    const inner = container.querySelector(".nav-link-inner") as HTMLElement;
                    gsap.to(inner, { color: "#FD8E18", duration: 0.4 });
                }
            }
        }

        // Standards useGSAP cleanup is handled automatically
    }, { scope: navRef, dependencies: [isMobileMenuOpen, pathname] });

    return {
        navRef,
        logoRef,
        pillRef
    };
};

import { useState, useCallback } from "react";
import { SERVICES_MENU, INDUSTRIES_MENU, NAV_LINKS } from "./navbarData";

export const useNavbarManager = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const scrollToSection = useCallback((id: string) => {
        // Close menu immediately for feedback
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);

        // Standard target resolution
        const targetId = id.replace("#", "");
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) setActiveDropdown(null);
        else setActiveDropdown(name);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    return {
        isMobileMenuOpen,
        activeDropdown,
        services: SERVICES_MENU,
        industries: INDUSTRIES_MENU,
        navLinks: NAV_LINKS,
        scrollToSection,
        toggleMobileMenu,
        toggleDropdown,
        scrollToTop,
    };
};

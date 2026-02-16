import { useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SERVICES_MENU, INDUSTRIES_MENU, NAV_LINKS } from "./navbarData";

export const useNavbarManager = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = useCallback((id: string) => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);

        const targetId = id.replace("#", "");

        if (location.pathname !== "/") {
            navigate("/#" + targetId);
            // Scrolling will be handled by a listener or effect in Home/App
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location.pathname, navigate]);

    const handleNavClick = (href: string) => {
        if (href.startsWith("#")) {
            scrollToSection(href);
        } else {
            navigate(href);
            setIsMobileMenuOpen(false);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const toggleDropdown = (name: string) => {
        if (activeDropdown === name) setActiveDropdown(null);
        else setActiveDropdown(name);
    };

    const scrollToTop = () => {
        if (location.pathname !== "/") navigate("/");
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    return {
        isMobileMenuOpen,
        activeDropdown,
        isModalOpen,
        setIsModalOpen,
        services: SERVICES_MENU,
        industries: INDUSTRIES_MENU,
        navLinks: NAV_LINKS,
        scrollToSection: handleNavClick,
        toggleMobileMenu,
        toggleDropdown,
        scrollToTop,
    };
};

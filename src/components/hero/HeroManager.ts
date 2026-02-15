import { HERO_DATA } from "./heroData";

export const useHeroManager = () => {
    const companySlots = Array(HERO_DATA.trustedBy.logoCount).fill(null);

    const openWhatsApp = () => {
        window.open(
            HERO_DATA.whatsapp.link,
            "_blank",
            "noopener,noreferrer"
        );
    };

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id.replace('#', ''));
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return {
        heading: HERO_DATA.heading,
        ctas: HERO_DATA.ctas,
        trustedByLabel: HERO_DATA.trustedBy.label,
        companySlots,
        openWhatsApp,
        scrollToSection
    };
};

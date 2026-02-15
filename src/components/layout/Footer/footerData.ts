import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const FOOTER_DATA = {
    about: {
        title: "Gemini Nexatech",
        desc: "Where Ideas Meet Innovation. We specialize in transforming complex business challenges into seamless digital reality through high-end engineering and strategic design."
    },
    sections: [
        {
            title: "Our Services",
            links: [
                { label: "Custom Software", href: "services-section" },
                { label: "AI & Automation", href: "services-section" },
                { label: "Cloud Systems", href: "services-section" },
                { label: "Smart Monitoring", href: "services-section" }
            ]
        },
        {
            title: "Quick Links",
            links: [
                { label: "About Us", href: "about" },
                { label: "Our Products", href: "products" },
                { label: "Latest Insights", href: "insights" },
                { label: "Case Studies", href: "case-studies" }
            ]
        },
        {
            title: "Contact Info",
            contact: [
                { icon: FaPhone, label: "+1 (555) 000-0000", href: "tel:+15550000000" },
                { icon: FaEnvelope, label: "hello@gemininexatech.com", href: "mailto:hello@gemininexatech.com" },
                { icon: FaMapMarkerAlt, label: "Tech Hub, Silicon Valley, CA", href: "#" },
                { icon: FaWhatsapp, label: "Chat on WhatsApp", href: "https://wa.me/something", highlight: true }
            ]
        }
    ],
    socials: [
        { icon: FaLinkedin, href: "#", label: "LinkedIn" },
        { icon: FaTwitter, href: "#", label: "Twitter" },
        { icon: FaGithub, href: "#", label: "GitHub" },
        { icon: FaFacebook, href: "#", label: "Facebook" },
        { icon: FaInstagram, href: "#", label: "Instagram" }
    ]
};

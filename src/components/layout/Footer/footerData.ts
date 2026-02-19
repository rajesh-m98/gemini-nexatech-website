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
                { label: "Custom Software", href: "/services/custom-software" },
                { label: "AI & Automation", href: "/services/ai-dev" },
                { label: "Cloud Systems", href: "/services/cloud-devops" },
                { label: "Smart Monitoring", href: "/services/iot-monitoring" }
            ]
        },
        {
            title: "Quick Links",
            links: [
                { label: "About Us", href: "/about" },
                { label: "Our Products", href: "/#products" },
                { label: "Latest Insights", href: "/video-library" },
                { label: "Case Studies", href: "/#cases" }
            ]
        },
        {
            title: "Contact Info",
            contact: [
                { icon: FaPhone, label: "+91 9003275271", href: "tel:+919003275271" },
                { icon: FaEnvelope, label: "sales@gemininexatech.com", href: "mailto:sales@gemininexatech.com" },
                { icon: FaMapMarkerAlt, label: "Campus-1a, MILLENIA BUSINESS PARK-I, Perungudi, Chennai, Tamil Nadu 600096", href: "https://www.google.com/maps/search/?api=1&query=Campus-1a,+MILLENIA+BUSINESS+PARK-I,+Perungudi,+Chennai,+Tamil+Nadu+600096" },
                { icon: FaWhatsapp, label: "Chat on WhatsApp", href: "https://wa.me/919003275271", highlight: true }
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

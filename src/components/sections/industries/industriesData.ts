import {
    FaOilCan,
    FaIndustry,
    FaLightbulb,
    FaHardHat,
    FaTruck,
    FaPlane,
} from "react-icons/fa";

export const INDUSTRIES_DATA = [
    {
        id: "oil-gas",
        title: "Oil & Gas",
        shortTitle: "Oil & Gas",
        desc: "Ensure safety, monitoring, and operational continuity in critical environments.",
        icon: FaOilCan,
        color: "#FF8C00",
        image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=1500", // Representative image for construction/oil
    },
    {
        id: "manufacturing",
        title: "Manufacturing & Industrial",
        shortTitle: "Mfg & Industrial",
        desc: "Optimize processes, protect assets, and monitor industrial operations.",
        icon: FaIndustry,
        color: "#0047AB",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1500", // High-tech factory
    },
    {
        id: "energy-utilities",
        title: "Energy & Utilities",
        shortTitle: "Energy",
        desc: "Safeguard infrastructure, automate operations, and enhance energy efficiency.",
        icon: FaLightbulb,
        color: "#00C2FF",
        image: "https://images.unsplash.com/photo-1466611653911-95282ee3656b?auto=format&fit=crop&q=80&w=1500", // Modern energy infrastructure
    },
    {
        id: "construction",
        title: "Construction & Infrastructure",
        shortTitle: "Construction",
        desc: "Protect worksites, equipment, and personnel with advanced monitoring.",
        icon: FaHardHat,
        color: "#FFBD00",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1500", // Construction site at night/sunset
    },
    {
        id: "logistics",
        title: "Transportation & Logistics",
        shortTitle: "Logistics",
        desc: "Track fleets, assets, and cargo for safety and efficiency.",
        icon: FaTruck,
        color: "#00FFC2",
        image: "https://images.unsplash.com/photo-1519003722824-192d992a7de3?auto=format&fit=crop&q=80&w=1500", // Freight/Logistic center
    },
    {
        id: "aviation",
        title: "Aviation & Aerospace",
        shortTitle: "Aviation",
        desc: "Secure airports, fleets, and aerospace facilities with intelligent solutions.",
        icon: FaPlane,
        color: "#FF3E00",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a1082e12?auto=format&fit=crop&q=80&w=1500", // Airport/Aircraft hangar
    },
];

import {
    FaLaptopCode,
    FaGlobe,
    FaMobileAlt,
    FaPaintBrush,
    FaBrain,
    FaLightbulb,
    FaCloud,
    FaNetworkWired,
    FaBuilding,
    FaMicrochip,
    FaChartBar,
    FaTools,
} from "react-icons/fa";

export interface ServiceItem {
    id: string;
    icon: any;
    title: string;
    desc: string;
    points: string[];
    image: string;
    gradient: string;
}

export const servicesData: ServiceItem[] = [
    {
        id: "custom-software",
        icon: FaLaptopCode,
        title: "Custom Software Development",
        desc: "We design and develop tailored software solutions that align perfectly with your business processes, ensuring scalability and value.",
        points: [
            "Built for B2B & B2C businesses",
            "Scalable & future-ready architecture",
            "Secure, high-performance solutions",
        ],
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#0047AB] to-[#002152]",
    },
    {
        id: "web-app",
        icon: FaGlobe,
        title: "Web Application Development",
        desc: "We create responsive, secure, and high-performing web applications that streamline operations and deliver seamless user experiences.",
        points: [
            "Modern frameworks & technologies",
            "Cross-browser compatibility",
            "Optimized performance & security",
        ],
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#00152F] to-[#0047AB]",
    },
    {
        id: "mobile-app",
        icon: FaMobileAlt,
        title: "Mobile Application Development",
        desc: "We develop powerful Android and iOS mobile applications that enhance mobility, productivity, and customer engagement.",
        points: [
            "Native & cross-platform development",
            "User-centric mobile experiences",
            "Scalable backend integration",
        ],
        image:
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#1a1a1a] to-[#FF8C00]/30",
    },
    {
        id: "ui-ux",
        icon: FaPaintBrush,
        title: "UX/UI Design Services",
        desc: "We craft intuitive and visually compelling digital experiences that enhance usability, engagement, and brand perception.",
        points: [
            "User-centered design approach",
            "Interactive prototypes & wireframes",
            "Modern, clean visual aesthetics",
        ],
        image:
            "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#0047AB] via-[#000510] to-[#FF8C00]/20",
    },
    {
        id: "ai-dev",
        icon: FaBrain,
        title: "AI Development Services",
        desc: "We deliver AI-powered solutions that automate processes, enhance decision-making, and unlock predictive business insights.",
        points: [
            "Machine learning & automation",
            "Predictive analytics",
            "Intelligent dashboards & insights",
        ],
        image:
            "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#000000] via-[#00152F] to-[#0047AB]",
    },
    {
        id: "consulting",
        icon: FaLightbulb,
        title: "IT & Software Consulting",
        desc: "We provide strategic technology consulting to help organizations choose, design, and implement the right digital solutions.",
        points: [
            "Technology roadmap planning",
            "System architecture advisory",
            "Process optimization strategies",
        ],
        image:
            "https://images.unsplash.com/photo-1454165833762-02ac1f40b9c7?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#FF8C00]/20 to-[#00152F]",
    },
    {
        id: "cloud-devops",
        icon: FaCloud,
        title: "Cloud & DevOps Services",
        desc: "We enable businesses to leverage cloud infrastructure and DevOps practices for faster deployment, scalability, and operational efficiency.",
        points: [
            "Cloud migration & deployment",
            "CI/CD implementation",
            "Infrastructure management",
        ],
        image:
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#0047AB]/60 to-[#00152F]",
    },
    {
        id: "api-integration",
        icon: FaNetworkWired,
        title: "API & System Integration",
        desc: "We build secure APIs and integrate enterprise systems to ensure seamless communication between platforms and devices.",
        points: [
            "Third-party integrations",
            "ERP & enterprise connectivity",
            "Secure data exchange",
        ],
        image:
            "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#1a1a1a] via-[#00152F] to-[#0047AB]/40",
    },
    {
        id: "enterprise-app",
        icon: FaBuilding,
        title: "Enterprise App Development",
        desc: "We develop robust enterprise-grade applications that automate workflows, improve collaboration, and support large-scale operations.",
        points: [
            "High scalability & performance",
            "Workflow automation",
            "Enterprise-level security",
        ],
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#002861] to-[#1a1a1a]",
    },
    {
        id: "iot-monitoring",
        icon: FaMicrochip,
        title: "IoT & Smart Monitoring",
        desc: "We design intelligent IoT-enabled systems that provide real-time monitoring, asset visibility, and operational control.",
        points: [
            "Real-time device connectivity",
            "Asset & fleet monitoring",
            "Data-driven alerts & reporting",
        ],
        image:
            "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#FF8C00]/10 via-[#000510] to-[#0047AB]",
    },
    {
        id: "data-analytics",
        icon: FaChartBar,
        title: "Data Analytics & BI",
        desc: "We transform raw data into actionable insights through advanced analytics, dashboards, and reporting solutions.",
        points: [
            "Interactive dashboards",
            "Performance analytics",
            "Business decision insights",
        ],
        image:
            "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#00152F] via-[#0047AB]/30 to-[#000A16]",
    },
    {
        id: "maintenance",
        icon: FaTools,
        title: "Application Support",
        desc: "We provide continuous monitoring, upgrades, and technical support to ensure your systems operate smoothly and efficiently.",
        points: [
            "SLA-based support",
            "Performance optimization",
            "Version upgrades & enhancements",
        ],
        image:
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
        gradient: "from-[#0a0a0a] to-[#0047AB]/40",
    },
];

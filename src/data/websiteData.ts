import customSoftwareImg from "../assets/services/Custom-Software-Development.jpg";
import webAppImg from "../assets/services/web_application_development.jpg";
import mobileAppImg from "../assets/services/mobile-app-development.png";
import uiUxImg from "../assets/services/ui_ux.webp";
import aiDevImg from "../assets/services/ai-development.webp";
import consultingImg from "../assets/services/Software-Consulting.webp";
import cloudDevOpsImg from "../assets/services/cloud_devops.png";
import apiIntegrationImg from "../assets/services/api_integration.jpg";
import enterpriseAppImg from "../assets/services/enterprise-application-development.webp";
import iotImg from "../assets/services/iot.webp";
import dataAnalyticsImg from "../assets/services/data-analytics-techniques.avif";
import maintenanceImg from "../assets/services/application-support.jpg";

export const services = [
    {
        id: "custom-software",
        title: "Custom Software Development Services",
        description: "We build fully customized software solutions tailored to your exact business needs. From concept to deployment, our solutions are designed to improve efficiency, automate processes, and support long-term growth.",
        features: [
            "End-to-end development lifecycle",
            "Business-specific workflow automation",
            "Scalable architecture for future expansion",
            "Secure, high-performance coding standards",
            "Seamless third-party integrations"
        ],
        icon: "software",
        image: customSoftwareImg
    },
    {
        id: "web-app",
        title: "Web Application Development Services",
        description: "We develop secure, fast, and responsive web applications that enhance operational efficiency and deliver exceptional user experiences across devices.",
        features: [
            "Progressive and responsive web apps",
            "Modern frameworks (React, Angular, Node, etc.)",
            "Cross-browser & cross-device compatibility",
            "High-speed performance optimization",
            "Enterprise-grade security implementation"
        ],
        icon: "globe",
        image: webAppImg
    },
    {
        id: "mobile-app",
        title: "Mobile Application Development Services",
        description: "We create feature-rich Android and iOS applications that boost customer engagement and improve business mobility.",
        features: [
            "Native (Android & iOS) development",
            "Cross-platform apps (Flutter / React Native)",
            "API & backend integration",
            "App Store & Play Store deployment support",
            "Ongoing updates & feature enhancements"
        ],
        icon: "mobile",
        image: mobileAppImg
    },
    {
        id: "ui-ux",
        title: "UX/UI Design Services",
        description: "We design intuitive and visually engaging digital experiences that convert users and strengthen brand identity.",
        features: [
            "User research & behavior analysis",
            "Wireframing & interactive prototypes",
            "Clean, modern interface design",
            "Conversion-focused layouts",
            "Design system & brand consistency"
        ],
        icon: "palette",
        image: uiUxImg
    },
    {
        id: "ai-dev",
        title: "AI Development Services",
        description: "We implement AI-driven solutions that automate operations, improve decision-making, and unlock intelligent insights.",
        features: [
            "Machine learning model development",
            "Predictive analytics & forecasting",
            "AI-powered chatbots & automation",
            "Intelligent dashboards & reporting",
            "Custom AI integrations for business tools"
        ],
        icon: "brain",
        image: aiDevImg
    },
    {
        id: "consulting",
        title: "IT & Software Consulting Services",
        description: "We provide expert technology consulting to align your digital strategy with business objectives.",
        features: [
            "Digital transformation strategy",
            "Technology stack selection",
            "Software architecture planning",
            "Process optimization & automation advisory",
            "Risk assessment & scalability planning"
        ],
        icon: "users",
        image: consultingImg
    },
    {
        id: "cloud-devops",
        title: "Cloud & DevOps Services",
        description: "We help businesses adopt cloud infrastructure and DevOps practices for agility, scalability, and operational excellence.",
        features: [
            "AWS, Azure & Google Cloud deployment",
            "Cloud migration & modernization",
            "CI/CD pipeline implementation",
            "Infrastructure automation",
            "Monitoring & performance management"
        ],
        icon: "cloud",
        image: cloudDevOpsImg
    },
    {
        id: "api-integration",
        title: "API Development & System Integration Services",
        description: "We develop secure APIs and integrate systems to ensure smooth communication between platforms, devices, and enterprise software.",
        features: [
            "RESTful & secure API development",
            "Third-party software integrations",
            "ERP & CRM system connectivity",
            "Payment gateway integration",
            "Secure data exchange protocols"
        ],
        icon: "link",
        image: apiIntegrationImg
    },
    {
        id: "enterprise-app",
        title: "Enterprise Application Development Services",
        description: "We create enterprise-grade applications that streamline workflows, enhance collaboration, and support large-scale operations.",
        features: [
            "Workflow & process automation",
            "Multi-user role management",
            "Large-scale database management",
            "High availability & scalability",
            "Advanced security & compliance standards"
        ],
        icon: "briefcase",
        image: enterpriseAppImg
    },
    {
        id: "iot-monitoring",
        title: "IoT & Smart Monitoring Solutions",
        description: "We design smart IoT systems that provide real-time visibility, monitoring, and operational control.",
        features: [
            "IoT device integration & connectivity",
            "Asset tracking & fleet management",
            "Sensor-based monitoring systems",
            "Real-time alerts & notifications",
            "Data analytics for operational insights"
        ],
        icon: "cpu",
        image: iotImg
    },
    {
        id: "data-analytics",
        title: "Data Analytics & Business Intelligence Services",
        description: "We turn complex data into actionable insights through intelligent dashboards and reporting systems.",
        features: [
            "Custom BI dashboards",
            "Real-time performance tracking",
            "Data visualization & reporting",
            "KPI monitoring & forecasting",
            "Decision-support analytics tools"
        ],
        icon: "bar-chart",
        image: dataAnalyticsImg
    },
    {
        id: "maintenance",
        title: "Application Maintenance & Support Services",
        description: "We ensure your applications remain secure, optimized, and up to date with proactive support and enhancements.",
        features: [
            "SLA-based technical support",
            "Performance monitoring & optimization",
            "Security updates & patches",
            "Version upgrades & feature improvements",
            "24/7 issue resolution assistance"
        ],
        icon: "shield",
        image: maintenanceImg
    }
];

export const products = [
    {
        id: "ai-analytics",
        title: "AI & Analytics",
        subtitle: "Smarter Decisions. Faster Insights. Greater Control.",
        description: "We deliver AI-powered intelligence systems that transform raw data into actionable business insights. Our solutions enable predictive monitoring, automated alerts, and real-time operational visibility.",
        benefits: [
            "Predictive & preventive intelligence",
            "Real-time anomaly detection",
            "Automated surveillance & monitoring",
            "Operational risk reduction",
            "Data-driven decision support"
        ],
        majorProducts: [
            "AI Video Analytics",
            "Predictive Maintenance Platforms",
            "Anomaly Detection Systems",
            "Data Intelligence Dashboards",
            "Behavioral Analytics Tools"
        ],
        icon: "brain-circuit"
    },
    {
        id: "tracking-rtls",
        title: "Tracking & RTLS",
        subtitle: "Precision Location Intelligence in Real Time.",
        description: "Our advanced real-time tracking systems provide accurate positioning of assets, equipment, and personnel — enhancing efficiency, compliance, and workplace safety.",
        benefits: [
            "Centimeter-level positioning accuracy",
            "Improved asset utilization",
            "Workforce safety monitoring",
            "Reduced asset loss & downtime",
            "Smart geofencing alerts"
        ],
        majorProducts: [
            "Real-Time Location Systems (RTLS)",
            "UWB Trackers",
            "BLE Beacons & Gateways",
            "Asset Tracking Tags",
            "Geofencing Solutions",
            "Location Monitoring Software"
        ],
        icon: "map-pin"
    },
    {
        id: "rfid-smartid",
        title: "RFID & Smart ID",
        subtitle: "Automated Identification. Intelligent Asset Control.",
        description: "Our RFID and smart identification technologies streamline inventory, access control, and asset tracking across industrial and enterprise environments.",
        benefits: [
            "Faster inventory management",
            "Contactless identification",
            "Reduced human error",
            "Automated stock visibility",
            "Seamless system integration"
        ],
        majorProducts: [
            "RFID Tags (Passive & Active)",
            "UHF/HF RFID Readers (Fixed & Handheld)",
            "RFID Printers & Encoders",
            "NFC Solutions",
            "Smart ID Cards",
            "Industrial RFID Tablets",
            "RFID Portals & Antennas"
        ],
        icon: "qr-code"
    },
    {
        id: "gps-fleet",
        title: "GPS & Fleet Management",
        subtitle: "Complete Fleet Visibility & Operational Intelligence.",
        description: "We provide advanced GPS and telematics solutions that improve route planning, enhance driver safety, and optimize fleet performance.",
        benefits: [
            "Real-time vehicle tracking",
            "Route optimization & fuel savings",
            "Driver behavior analysis",
            "Fleet cost reduction",
            "Centralized fleet monitoring"
        ],
        majorProducts: [
            "GPS Vehicle Trackers",
            "Fleet Telematics Systems",
            "OBD Tracking Devices",
            "Driver Behavior Monitoring Systems",
            "Fuel Monitoring Sensors",
            "Fleet Management Software",
            "Dashcams with GPS Integration"
        ],
        icon: "truck"
    },
    {
        id: "iot-devices",
        title: "IoT Devices",
        subtitle: "Connected Intelligence for Smart Operations.",
        description: "Our IoT-enabled devices and sensors provide continuous monitoring, automated control, and intelligent data collection for smarter operations.",
        benefits: [
            "Real-time environmental monitoring",
            "Automated alerts & reporting",
            "Remote device management",
            "Energy & efficiency optimization",
            "Scalable IoT architecture"
        ],
        majorProducts: [
            "IoT Gateways",
            "Environmental Sensors (Temperature, Humidity, Gas)",
            "Smart Wearables",
            "Edge Computing Devices",
            "Smart Controllers",
            "Industrial IoT Sensors",
            "Wireless Sensor Networks"
        ],
        icon: "network"
    },
    {
        id: "industrial-safety",
        title: "Industrial Safety",
        subtitle: "Technology That Protects What Matters Most.",
        description: "We deliver certified industrial safety solutions designed for hazardous, high-risk, and compliance-driven environments.",
        benefits: [
            "ATEX-compliant safety devices",
            "Worker safety monitoring",
            "Hazard detection & alerts",
            "Compliance with international standards",
            "Rugged & explosion-proof equipment"
        ],
        majorProducts: [
            "Intrinsically Safe Tablets & Mobile Devices",
            "ATEX-Certified RFID Readers",
            "Wearable Gas Detectors",
            "Lone Worker Monitoring Systems",
            "Explosion-Proof Cameras",
            "Environmental Monitoring Devices"
        ],
        icon: "hard-hat"
    }
];

export const industries = [
    {
        id: "oil-gas",
        title: "Oil & Gas",
        subtitle: "Ensuring Safety, Compliance & Operational Continuity in Critical Environments.",
        description: "We provide intelligent monitoring and certified safety solutions designed for hazardous and high-risk oil & gas operations — from upstream exploration to downstream facilities.",
        support: [
            "ATEX-certified industrial safety devices",
            "Real-time asset & personnel tracking",
            "Predictive maintenance with AI analytics",
            "Environmental & gas monitoring sensors",
            "Intrinsically safe tablets & RFID systems",
            "Remote monitoring dashboards"
        ],
        impact: [
            "Improved worker safety",
            "Reduced downtime",
            "Regulatory compliance assurance",
            "Real-time operational visibility"
        ],
        icon: "droplet"
    },
    {
        id: "manufacturing",
        title: "Manufacturing & Industrial",
        subtitle: "Optimizing Production. Protecting Assets. Improving Efficiency.",
        description: "Our smart industrial technologies help manufacturers automate workflows, track assets, and enhance operational performance.",
        support: [
            "RFID-based inventory management",
            "IoT-enabled machine monitoring",
            "Predictive maintenance platforms",
            "Workforce tracking systems",
            "Industrial automation integration",
            "AI-driven performance analytics"
        ],
        impact: [
            "Reduced equipment failures",
            "Increased productivity",
            "Minimized asset loss",
            "Real-time production insights"
        ],
        icon: "factory"
    },
    {
        id: "energy-utilities",
        title: "Energy & Utilities",
        subtitle: "Smart Infrastructure Monitoring & Operational Intelligence.",
        description: "We enable energy providers and utility operators to safeguard infrastructure while improving efficiency and sustainability.",
        support: [
            "Smart grid monitoring solutions",
            "Environmental & sensor-based monitoring",
            "Remote asset tracking",
            "IoT-powered control systems",
            "AI-based energy analytics",
            "Industrial-grade safety devices"
        ],
        impact: [
            "Infrastructure protection",
            "Energy optimization",
            "Reduced operational risk",
            "Improved service reliability"
        ],
        icon: "bolt"
    },
    {
        id: "construction",
        title: "Construction & Infrastructure",
        subtitle: "Advanced Monitoring for Safer, Smarter Worksites.",
        description: "Our intelligent systems provide real-time visibility into construction sites, heavy equipment, and workforce safety.",
        support: [
            "Equipment & machinery tracking",
            "Worker safety wearables",
            "Geofencing & zone alerts",
            "Site surveillance with AI analytics",
            "Environmental hazard monitoring",
            "Asset utilization dashboards"
        ],
        impact: [
            "Enhanced site safety",
            "Reduced equipment theft",
            "Improved project monitoring",
            "Better resource management"
        ],
        icon: "building"
    },
    {
        id: "logistics",
        title: "Transportation & Logistics",
        subtitle: "Complete Visibility Across Fleet, Cargo & Operations.",
        description: "We deliver advanced tracking and fleet intelligence solutions to optimize logistics operations and improve delivery performance.",
        support: [
            "GPS fleet tracking systems",
            "Real-time cargo monitoring",
            "Driver behavior analytics",
            "Route optimization solutions",
            "Fuel monitoring systems",
            "Centralized fleet management software"
        ],
        impact: [
            "Lower operational costs",
            "Improved delivery timelines",
            "Enhanced fleet safety",
            "Real-time shipment visibility"
        ],
        icon: "truck"
    },
    {
        id: "aviation",
        title: "Aviation & Aerospace",
        subtitle: "Intelligent Security & Asset Protection for Critical Infrastructure.",
        description: "We provide secure, high-performance monitoring and tracking systems designed for airports, aerospace facilities, and aviation fleets.",
        support: [
            "AI-based surveillance systems",
            "Asset & ground equipment tracking",
            "Access control & smart ID solutions",
            "Environmental & safety monitoring",
            "Predictive maintenance analytics",
            "Secure data integration platforms"
        ],
        impact: [
            "Enhanced security compliance",
            "Improved operational coordination",
            "Reduced asset misplacement",
            "Increased infrastructure reliability"
        ],
        icon: "plane"
    }
];

export const coreValues = [
    {
        title: "Innovation & Excellence",
        description: "We constantly innovate to deliver cutting-edge solutions with uncompromising quality.",
        icon: "lightbulb"
    },
    {
        title: "Customer-Centricity",
        description: "Our clients’ success is our mission; we tailor solutions to meet their evolving needs.",
        icon: "heart"
    },
    {
        title: "Integrity & Transparency",
        description: "We operate with honesty, accountability, and ethical business practices.",
        icon: "shield-check"
    },
    {
        title: "Collaboration & Teamwork",
        description: "We believe in the power of collaboration—within our team and with our clients.",
        icon: "users"
    },
    {
        title: "Sustainability & Responsibility",
        description: "We create solutions that are environmentally conscious and socially responsible.",
        icon: "leaf"
    },
    {
        title: "Agility & Adaptability",
        description: "We embrace change and respond proactively to industry and technological shifts.",
        icon: "zap"
    }
];

export const roadmap = [
    { year: "2013", title: "Foundation", description: "Gemini Nexatech was founded with a vision to transform industrial operations through technology." },
    { year: "2014", title: "First Major Project", description: "Successfully delivered our first enterprise-grade tracking solution for a regional logistics lead." },
    { year: "2015", title: "R&D Expansion", description: "Established a dedicated R&D center for IoT and sensor-based technologies." },
    { year: "2016", title: "Global Reach", description: "Started international operations with projects in Europe and South East Asia." },
    { year: "2017", title: "AI Integration", description: "Integrated AI and predictive analytics into our core product offerings." },
    { year: "2018", title: "Industry Recognition", description: "Named 'Most Innovative Tech Partner' by industry leaders in Oil & Gas." },
    { year: "2019", title: "Sustainability Focus", description: "Launched green-tech initiatives and eco-friendly monitoring solutions." },
    { year: "2020", title: "Remote Excellence", description: "Enabled remote operational continuity for clients during global shifts." },
    { year: "2021", title: "Next-Gen RTLS", description: "Released our ultra-accurate centimeter-level RTLS platform." },
    { year: "2022", title: "Strategic Partnerships", description: "Formed alliances with global cloud providers for enhanced scalability." },
    { year: "2023", title: "Dubai Expansion", description: "We opened a new office in Dubai's bustling center to meet the growing tech market demands in the Middle East." },
    { year: "2024", title: "Aviation Entry", description: "Successfully deployed integrated security systems for major international airports." },
    { year: "2025", title: "Vision 2030", description: "Leading the charge in smart, integrated, and sustainable tech solutions for the next decade." }
];

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaChevronDown,
  FaWhatsapp,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import Container from "../components/common/Container";
import { Link } from "react-router-dom";

const countries = [
  { name: "United Arab Emirates", code: "+971", iso: "ae", digits: 9 },
  { name: "India", code: "+91", iso: "in", digits: 10 },
  { name: "United States", code: "+1", iso: "us", digits: 10 },
  { name: "United Kingdom", code: "+44", iso: "gb", digits: 10 },
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name || !/^[a-zA-Z\s.]+$/.test(formData.name))
      newErrors.name = "Valid name is required";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Valid email is required";
    if (
      !formData.phone ||
      !/^\d+$/.test(formData.phone) ||
      formData.phone.length !== selectedCountry.digits
    )
      newErrors.phone = `Must be ${selectedCountry.digits} digits`;
    if (!formData.requirements)
      newErrors.requirements = "Please enter your requirements";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) setIsSubmitted(true);
  };

  return (
    <div className="bg-[#000510] font-inter min-h-screen flex flex-col justify-center pt-28 lg:pt-32 pb-12 overflow-x-hidden">
      <Container>
        <div className="mb-8 lg:mb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="typo-heading mb-2"
          >
            LET'S <span className="text-gemini-orange">CONNECT</span>
          </motion.h1>
          <div className="flex justify-center items-center gap-3">
            <div className="w-12 md:w-16 h-0.5 bg-gemini-blue/50" />
            <p className="typo-tab-heading text-gray-400 text-[10px] md:text-xs">
              Innovation starts with a conversation.
            </p>
            <div className="w-12 md:w-16 h-0.5 bg-gemini-blue/50" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-6 lg:mb-10">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gemini-orange to-transparent opacity-50" />
              <h3 className="typo-section mb-6 text-white">
                Get in <span className="text-gemini-blue">Touch</span>
              </h3>

              <div className="p-6 lg:p-8 rounded-[2rem] bg-[#001229]/80 backdrop-blur-xl border border-white/10 space-y-6">
                <Link
                  to="https://www.google.com/maps/search/?api=1&query=Campus-1a,+MILLENIA+BUSINESS+PARK-I,+Perungudi,+Chennai,+Tamil+Nadu+600096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-4 cursor-pointer"
                >
                  <div className="icon-box-sm mt-1 text-gemini-blue group-hover:bg-gemini-blue group-hover:text-white transition-all">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="typo-body-bold text-xs md:text-sm leading-relaxed group-hover:text-gemini-blue transition-colors">
                      Campus-1a, MILLENIA BUSINESS PARK-I, Perungudi, Chennai,
                      <br />
                      Tamil Nadu 600096
                    </p>
                  </div>
                </Link>

                <div className="h-px bg-white/5" />

                <Link
                  to="https://wa.me/919003275271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 cursor-pointer"
                >
                  <div className="icon-box-sm text-green-500 group-hover:bg-green-500 group-hover:text-white transition-all">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-green-500 font-extrabold text-sm md:text-base group-hover:scale-105 transition-transform origin-left">
                      +91 9003275271
                    </p>
                  </div>
                </Link>

                <div className="h-px bg-white/5" />

                <Link
                  to="mailto:sales@gemininexatech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 cursor-pointer"
                >
                  <div className="icon-box-sm text-gemini-orange group-hover:bg-gemini-orange group-hover:text-white transition-all">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm md:text-base group-hover:text-gemini-orange transition-colors">
                      sales@gemininexatech.com
                    </p>
                  </div>
                </Link>

                <div className="h-px bg-white/10" />

                <div className="flex gap-4">
                  <Link
                    to="#"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gemini-blue hover:scale-110 transition-all duration-300"
                  >
                    <FaLinkedin size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative bg-[#001229]/80 backdrop-blur-xl border border-white/10 p-6 lg:p-8 rounded-[2rem] shadow-2xl overflow-hidden group">
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gemini-blue/20 blur-[100px] rounded-full group-hover:bg-gemini-orange/20 transition-colors duration-1000" />

              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-5"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="typo-label text-white font-bold ml-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gemini-orange  text-sm" />
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={`w-full bg-white/[0.03] border ${errors.name ? "border-red-500" : "border-white/10"} rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gemini-blue transition-all placeholder:text-gray-500`}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="typo-label text-gray-300 ml-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gemini-orange  text-sm" />
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={`w-full bg-white/[0.03] border ${errors.email ? "border-red-500" : "border-white/10"} rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gemini-blue transition-all placeholder:text-gray-500`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="typo-label text-gray-300 ml-1">
                      Phone Number
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative shrink-0">
                        <div
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="bg-white/[0.03] border border-white/10 rounded-lg px-3 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-white/[0.08] transition-all"
                        >
                          <div className="w-4 h-3 overflow-hidden rounded-sm bg-white/10">
                            <img
                              src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                              alt={selectedCountry.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-white font-bold text-sm">
                            {selectedCountry.code}
                          </span>
                          <FaChevronDown
                            size={8}
                            className="text-gemini-orange"
                          />
                        </div>
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 bg-[#001D3D] border border-white/10 rounded-lg overflow-hidden shadow-2xl z-50 min-w-[180px]">
                            {countries.map((c) => (
                              <div
                                key={c.code}
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsDropdownOpen(false);
                                }}
                                className="px-3 py-2 hover:bg-gemini-blue/30 cursor-pointer flex items-center justify-between border-b border-white/5 last:border-0 text-white/80 text-[11px] font-bold"
                              >
                                {c.name} ({c.code})
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="relative flex-1">
                        <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gemini-orange rotate-90 text-sm" />
                        <input
                          type="tel"
                          placeholder="Enter Mobile Number"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value.replace(/\D/g, ""),
                            })
                          }
                          className={`w-full bg-white/[0.03] border ${errors.phone ? "border-red-500" : "border-white/10"} rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gemini-blue transition-all placeholder:text-gray-500`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="typo-label text-gray-300 ml-1">
                      Project Details
                    </label>
                    <div className="relative">
                      <FaMessage className="absolute left-4 top-3 text-gemini-orange text-sm" />
                      <textarea
                        rows={4}
                        placeholder="Tell us about your requirements..."
                        value={formData.requirements}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            requirements: e.target.value,
                          })
                        }
                        className={`w-full bg-white/[0.03] border ${errors.requirements ? "border-red-500" : "border-white/10"} rounded-lg py-2.5 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-gemini-blue transition-all placeholder:text-gray-500 resize-none`}
                      />
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r cursor-pointer from-gemini-blue to-blue-600 py-3 rounded-lg text-white/80 font-bold uppercase tracking-[0.2em] text-[11px] shadow-lg hover:scale-[1.01] transition-all active:scale-[0.98]">
                    Send Request Today
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gemini-blue/20 blur-2xl rounded-full" />
                      <h2 className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 leading-none tracking-tighter">
                        DONE
                      </h2>
                    </div>
                  </div>
                  <h3 className="typo-subsection mb-3">
                    Message <span className="text-gemini-orange">Received</span>
                  </h3>
                  <p className="typo-label mb-8 max-w-sm mx-auto text-white">
                    Our team will analyze your request and get back to you in{" "}
                    <span className="text-white font-black">5 minutes</span>{" "}
                    flat.
                  </p>
                  <div className="bg-gemini-blue/10 border border-gemini-blue/20 p-6 rounded-[2rem] relative overflow-hidden">
                    <p className="typo-label text-[10px] text-blue-400">
                      Stay tuned to your phone and email.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;

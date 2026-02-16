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
    <div className="bg-[#000510] min-h-screen pt-32 pb-20 font-inter">
      <Container>
        <div className="mb-16 lg:mb-24 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tighter leading-none"
          >
            LET'S <span className="text-gemini-orange">CONNECT</span>
          </motion.h1>
          <div className="flex justify-center items-center gap-3">
            <div className="w-20 h-1 bg-gemini-blue" />
            <p className="text-sm md:text-base text-gray-400 font-bold uppercase tracking-[0.4em]">
              Innovation starts with a conversation.
            </p>
            <div className="w-20 h-1 bg-gemini-blue" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-12">
            <div className="relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gemini-orange to-transparent opacity-50" />
              <h3 className="text-white font-black text-3xl mb-10 tracking-tight uppercase">
                Get in <span className="text-gemini-blue">Touch</span>
              </h3>

              <div className="space-y-6">
                <div className="group flex items-center gap-6 p-7 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-gemini-blue/30 transition-all duration-500 hover:bg-white/[0.06]">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gemini-blue/10 flex items-center justify-center text-gemini-blue text-2xl group-hover:bg-gemini-blue group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-1 opacity-60">
                      Location
                    </h4>
                    <p className="text-gray-300 font-bold text-sm leading-tight">
                      Dubai Silicon Oasis, SIT Tower, Dubai, UAE
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-6 p-7 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-green-500/30 transition-all duration-500 hover:bg-white/[0.06]">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-500 text-3xl group-hover:bg-green-500 group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-1 opacity-60">
                      WhatsApp
                    </h4>
                    <p className="text-green-500 font-extrabold text-lg">
                      +971 52 252 2842
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-6 p-7 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-gemini-orange/30 transition-all duration-500 hover:bg-white/[0.06]">
                  <div className="w-16 h-16 shrink-0 rounded-2xl bg-gemini-orange/10 flex items-center justify-center text-gemini-orange text-2xl group-hover:bg-gemini-orange group-hover:text-white group-hover:scale-110 transition-all duration-500">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-1 opacity-60">
                      Email
                    </h4>
                    <p className="text-white font-bold text-lg">
                      info@gemininexatech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-[2rem] bg-gradient-to-br from-gemini-blue/20 to-transparent border border-white/10">
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-4">
                Social Presence
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-gemini-blue hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="relative bg-[#001229]/80 backdrop-blur-xl border border-white/10 p-8 lg:p-12 rounded-[2.5rem] shadow-2xl overflow-hidden group">
              {/* Decorative background element */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-gemini-blue/20 blur-[100px] rounded-full group-hover:bg-gemini-orange/20 transition-colors duration-1000" />

              {!isSubmitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="relative z-10 space-y-8"
                >
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 ml-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <FaUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gemini-blue" />
                        <input
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className={`w-full bg-white/[0.03] border ${errors.name ? "border-red-500" : "border-white/10"} rounded-2xl py-4.5 pl-14 pr-4 text-white focus:outline-none focus:border-gemini-blue transition-all placeholder:text-gray-500`}
                        />
                      </div>
                      {errors.name && (
                        <p className="text-red-500 text-[10px] font-bold uppercase ml-1 italic">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 ml-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <FaEnvelope className="absolute left-5 top-1/2 -translate-y-1/2 text-gemini-blue" />
                        <input
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={`w-full bg-white/[0.03] border ${errors.email ? "border-red-500" : "border-white/10"} rounded-2xl py-4.5 pl-14 pr-4 text-white focus:outline-none focus:border-gemini-blue transition-all placeholder:text-gray-500`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-red-500 text-[10px] font-bold uppercase ml-1 italic">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 ml-1">
                      Phone Number
                    </label>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="relative shrink-0">
                        <div
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                          className="bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4.5 flex items-center gap-3 cursor-pointer hover:bg-white/[0.08] transition-all"
                        >
                          <div className="w-6 h-4 overflow-hidden rounded-sm bg-white/10">
                            <img
                              src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
                              alt={selectedCountry.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-white font-bold">
                            {selectedCountry.code}
                          </span>
                          <FaChevronDown
                            size={10}
                            className="text-gemini-orange"
                          />
                        </div>

                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 mt-2 bg-[#001D3D] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-50 min-w-[240px]">
                            {countries.map((c) => (
                              <div
                                key={c.code}
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsDropdownOpen(false);
                                }}
                                className="px-5 py-4 hover:bg-gemini-blue/30 cursor-pointer flex items-center justify-between border-b border-white/5 last:border-0"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-6 h-4 overflow-hidden rounded-sm bg-white/10 shrink-0">
                                    <img
                                      src={`https://flagcdn.com/w40/${c.iso}.png`}
                                      alt={c.name}
                                      className="w-full h-full object-cover"
                                    />
                                  </div>
                                  <span className="text-white font-bold text-xs">
                                    {c.name}
                                  </span>
                                </div>
                                <span className="text-gemini-orange font-black text-[10px]">
                                  {c.code}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="relative flex-1">
                        <FaPhone className="absolute left-5 top-1/2 -translate-y-1/2 text-gemini-blue" />
                        <input
                          type="tel"
                          placeholder="Numbers only"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value.replace(/\D/g, ""),
                            })
                          }
                          className={`w-full bg-white/[0.03] border ${errors.phone ? "border-red-500" : "border-white/10"} rounded-2xl py-4.5 pl-14 pr-4 text-white focus:outline-none focus:border-gemini-blue transition-all placeholder:text-gray-500`}
                        />
                      </div>
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-[10px] font-bold uppercase ml-1 italic">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-300 ml-1">
                      Project Details
                    </label>
                    <div className="relative">
                      <div className="absolute left-5 top-6">
                        <FaMessage className="text-gemini-blue" />
                      </div>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your requirements..."
                        value={formData.requirements}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            requirements: e.target.value,
                          })
                        }
                        className={`w-full bg-white/[0.03] border ${errors.requirements ? "border-red-500" : "border-white/10"} rounded-2xl py-5 pl-14 pr-4 text-white focus:outline-none focus:border-gemini-blue transition-all placeholder:text-gray-500 resize-none`}
                      />
                    </div>
                    {errors.requirements && (
                      <p className="text-red-500 text-[10px] font-bold uppercase ml-1 italic">
                        {errors.requirements}
                      </p>
                    )}
                  </div>

                  <button className="w-full bg-gradient-to-r from-gemini-blue to-blue-600 py-6 rounded-2xl text-white font-black uppercase tracking-[0.3em] text-xs shadow-2xl shadow-blue-900/40 hover:scale-[1.01] hover:shadow-blue-600/50 transition-all active:scale-[0.98]">
                    Send Request Today
                  </button>
                </form>
              ) : (
                <div className="text-center py-16 relative z-10">
                  <div className="mb-8 flex justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gemini-blue/20 blur-2xl rounded-full" />
                      <h2 className="text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-500 leading-none tracking-tighter">
                        DONE
                      </h2>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-widest">
                    Message <span className="text-gemini-orange">Received</span>
                  </h3>
                  <p className="text-gray-400 font-medium mb-10 max-w-sm mx-auto uppercase text-xs tracking-[0.2em] leading-relaxed">
                    Our team will analyze your request and get back to you in{" "}
                    <span className="text-white font-black">5 minutes</span>{" "}
                    flat.
                  </p>
                  <div className="bg-gemini-blue/10 border border-gemini-blue/20 p-8 rounded-[2rem] relative overflow-hidden group/success">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gemini-blue group-hover/success:w-full transition-all duration-700 ease-in-out -z-10 opacity-20" />
                    <p className="text-blue-400 font-bold uppercase tracking-[0.2em] text-[10px]">
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

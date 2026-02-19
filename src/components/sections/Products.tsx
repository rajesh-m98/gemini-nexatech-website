import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { useProductsManager } from "./products/ProductsManager";
import { useProductsAnimations } from "./products/ProductsAnimations";

const Products = () => {
  const { products } = useProductsManager();
  const { containerRef } = useProductsAnimations();

  return (
    <section
      id="products"
      ref={containerRef}
      className="pt-8 lg:pt-12 pb-24 lg:pb-32 bg-[#000510] relative overflow-hidden"
    >
      {/* Background Tech Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF8C00] to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0047AB] to-transparent animate-pulse" />
      </div>

      <Container>
        <div className="text-center mb-16 lg:mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="text-[#FF8C00] font-bold text-xs tracking-[0.2em] uppercase">
              Technology Solutions
            </span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Advanced Smart{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8C00] to-orange-400">
              Technology
            </span>
          </h2>
          <p className="text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Cutting-edge intelligent technologies designed to enhance
            visibility, automation and operational efficiency across industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="product-card group relative min-h-[480px] h-auto mb-4"
              style={{ perspective: "1000px" }}
            >
              <div className="card-inner w-full h-full relative transition-transform duration-500">
                {/* Main Card Face - Overflow hidden added back to clip the tech bar to rounded corners */}
                <div className="relative w-full h-full bg-[#00152F]/40 backdrop-blur-xl rounded-[32px] border border-white/10 p-8 pb-16 flex flex-col items-start shadow-2xl overflow-hidden">
                  {/* Digital Blueprint Overlay */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-tech-blueprint opacity-50" />
                  </div>

                  {/* Mouse Glow */}
                  <div className="card-glow absolute w-[100px] h-[100px] bg-white/20 blur-[60px] rounded-full opacity-0 pointer-events-none" />

                  {/* Icon & Title Area */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#FF8C00]/50 transition-colors duration-500">
                      <product.icon className="text-3xl text-[#FF8C00]" />
                    </div>
                    {/* Decorative Corner Line */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#FF8C00]/30" />
                  </div>

                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-[#FF8C00] transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                    {product.desc}
                  </p>

                  {/* Product Chip List (The "Scrutiny" Reveal) */}
                  <div className="w-full space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {product.products.map((sub: any, i: number) => (
                        <div
                          key={i}
                          className="px-3 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2 group/chip hover:bg-[#FF8C00]/10 hover:border-[#FF8C00]/30 transition-all cursor-default"
                        >
                          <sub.icon className="text-xs flex-shrink-0 text-[#FF8C00]" />
                          <span className="text-[11px] font-bold text-white/70 group-hover/chip:text-white uppercase tracking-wider whitespace-normal leading-tight text-left">
                            {sub.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Tech Bar */}
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-[#FF8C00]/10 overflow-hidden">
                    <div className="w-1/3 h-full bg-[#FF8C00] translate-x-[-100%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out shadow-[0_0_10px_#FF8C00]" />
                  </div>

                  {/* Learn More Overlay Link */}
                  <Link
                    to={`/products/${product.id}`}
                    className="absolute inset-0 z-20 flex items-center justify-center bg-[#00152F]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm rounded-[32px]"
                  >
                    <span className="bg-white text-gemini-blue font-black py-3 px-8 rounded-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl flex items-center gap-2 whitespace-nowrap">
                      EXPLORE {product.title} <span className="text-xl">→</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;

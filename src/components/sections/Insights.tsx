import Container from "../common/Container";
import { FaCalendar, FaUser, FaArrowRight } from "react-icons/fa";
import { useInsightsAnimations } from "./insights/InsightsAnimations";
import { useInsightsManager } from "./insights/InsightsManager";

const Insights = () => {
  const { insights } = useInsightsManager();
  const { containerRef } = useInsightsAnimations();

  return (
    <section
      id="insights"
      ref={containerRef}
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#000A16] to-[#011C3D] border-t border-white/10"
    >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Latest <span className="text-[#FF8C00]">Insights</span>
          </h2>
          <p className="text-gray-200 text-base sm:text-lg max-w-3xl mx-auto">
            Stay updated with our latest thoughts and industry trends
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-[#FF8C00]/50 transition-all duration-300 overflow-hidden transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
            >
              <div className="p-6">
                <div className="text-[#FF8C00] text-sm font-semibold mb-3">
                  {insight.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FF8C00] transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-300 mb-4">{insight.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center">
                    <FaUser className="mr-2" />
                    {insight.author}
                  </div>
                  <div className="flex items-center">
                    <FaCalendar className="mr-2" />
                    {insight.date}
                  </div>
                </div>
                <button className="inline-flex items-center text-[#FF8C00] hover:text-white transition-colors font-semibold cursor-pointer">
                  Read More
                  <FaArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Insights;

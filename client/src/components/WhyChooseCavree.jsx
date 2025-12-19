import React from "react";
import { FiCheck, FiUser, FiGlobe } from "react-icons/fi";

const WhyChooseCavree = () => {
  return (
    <section id="why-choose-cavree" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden bg-gradient-to-br from-[#f4fbfc] via-[#eef7fa] to-[#d9eef4] py-20 sm:py-24">

      {/* Top Badge */}
      <div className="flex justify-center mb-8">
        <div className="px-6 py-2 rounded-full bg-white/70 backdrop-blur shadow text-xs tracking-widest text-[#2b7fa1] font-semibold">
          WHY CHOOSE CAVREE
        </div>
      </div>

      {/* Heading */}
      <div className="text-center px-6">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide">
          <span className="text-[#4cc3d9]">Unparalleled</span>{" "}
          <span className="text-[#1f3b4d]">Excellence</span>
        </h2>

        {/* Decorative Divider */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-[2px] w-14 bg-gradient-to-r from-transparent to-[#4cc3d9]" />
          <span className="h-2 w-2 rounded-full bg-[#2a7fa3]" />
          <span className="h-[2px] w-14 bg-gradient-to-l from-transparent to-[#4cc3d9]" />
        </div>

        <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-[#2f5870]">
          Experience luxury redefined through exclusivity and craftsmanship
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* Card 1 */}
          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-10 text-left">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#4cc3d9] to-[#2a7fa3] text-white text-2xl shadow mb-6">
              <FiCheck />
            </div>
            <h3 className="text-xl font-serif text-[#1f3b4d] mb-4">
              Priority Access
            </h3>
            <p className="text-[#2f5870] leading-relaxed">
              First access to exclusive collections before they reach the public
              eye
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-10 text-left">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#4cc3d9] to-[#2a7fa3] text-white text-2xl shadow mb-6">
              <FiUser />
            </div>
            <h3 className="text-xl font-serif text-[#1f3b4d] mb-4">
              Personal Concierge
            </h3>
            <p className="text-[#2f5870] leading-relaxed">
              Dedicated style advisor to curate your perfect wardrobe
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/80 backdrop-blur rounded-3xl shadow-xl p-10 text-left">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#4cc3d9] to-[#2a7fa3] text-white text-2xl shadow mb-6">
              <FiGlobe />
            </div>
            <h3 className="text-xl font-serif text-[#1f3b4d] mb-4">
              Global Delivery
            </h3>
            <p className="text-[#2f5870] leading-relaxed">
              Complimentary worldwide shipping to your doorstep
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseCavree;

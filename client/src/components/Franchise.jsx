import React from "react";

const SectionTitle = ({ title, subtitle }) => (
  <div className="text-center space-y-3">
    <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow text-xs tracking-[0.25em] text-[#2a7fa3] font-semibold">
      {subtitle}
    </div>
    <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-[#122333]">
      {title}
    </h2>
    <div className="flex items-center justify-center gap-3">
      <span className="h-px w-16 bg-[#4cc3d9]/50" />
      <span className="h-2 w-2 rounded-full bg-[#4cc3d9]" />
      <span className="h-px w-16 bg-[#4cc3d9]/50" />
    </div>
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#e8f5f9] text-[#1f3b4d] text-xs font-semibold mr-2 mb-2">
    {children}
  </span>
);

const FeatureTile = ({ title, desc }) => (
  <div className="bg-white/90 border border-white/60 rounded-3xl p-6 shadow-[0_18px_50px_rgba(18,35,51,0.08)] h-full flex flex-col gap-3">
    <h4 className="text-lg font-semibold text-[#1f3b4d]">{title}</h4>
    <p className="text-sm text-[#4a6678] leading-relaxed">{desc}</p>
  </div>
);

const StatCard = ({ title, items }) => (
  <div className="bg-white/90 border border-white/70 rounded-3xl p-6 shadow-[0_18px_50px_rgba(18,35,51,0.08)] h-full flex flex-col gap-3">
    <h4 className="text-lg font-semibold text-[#1f3b4d]">{title}</h4>
    <ul className="text-[#1f3b4d] space-y-2">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  </div>
);

const Franchise = () => {
  return (
    <section
      id="franchise"
      className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden bg-gradient-to-br from-[#fbfefe] via-[#f1fbfd] to-[#e4f5f9]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(76,195,217,0.18),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(42,127,163,0.15),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-10 py-24 space-y-14 text-[#0f2130]">
        <SectionTitle
          subtitle="CAVREE FRANCHISE"
          title={"A Smart Entry into India’s Growing Fashion Market"}
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <div className="bg-gradient-to-br from-white to-[#f3fbff] rounded-3xl p-8 shadow-[0_25px_70px_rgba(18,35,51,0.08)] border border-white/60">
            <p className="text-[#4a6678] leading-relaxed">
              Next-gen fashion retail for entrepreneurs who want strong margins, operational ease, and a premium-yet-scalable model across Tier-1 to Tier-3 cities.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>Apparel</Pill>
              <Pill>Footwear</Pill>
              <Pill>Ethnic Wear</Pill>
              <Pill>Lifestyle</Pill>
              <Pill>Value-driven</Pill>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-[0_25px_70px_rgba(18,35,51,0.08)] border border-white/60 space-y-3">
            <div className="text-sm font-semibold text-[#2a7fa3]">Brand Overview</div>
            <h3 className="font-serif text-2xl text-[#0f2130]">Everyday Fashion with a Premium Feel</h3>
            <p className="text-[#4a6678] leading-relaxed">
              Cavree serves families, young professionals, and style-conscious consumers with curated collections tuned to Indian preferences—driving consistent footfall, repeat customers, and strong seasonal sales.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm text-[#1f3b4d]">
              <div className="bg-[#f4fbfc] rounded-2xl p-3 shadow-sm">Zero franchise deposit</div>
              <div className="bg-[#f4fbfc] rounded-2xl p-3 shadow-sm">Physical site approval</div>
              <div className="bg-[#f4fbfc] rounded-2xl p-3 shadow-sm">Premium yet scalable</div>
              <div className="bg-[#f4fbfc] rounded-2xl p-3 shadow-sm">Repeatable formats</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureTile
            title="₹0 Deposit & Physical Approval"
            desc="Capital goes into setup and inventory. Cavree approves locations after on-ground review—market potential, visibility, layout, and long-term viability."
          />
          <StatCard
            title="Investment Range"
            items={[
              "Fashion & Lifestyle: ₹85L – ₹3 Cr",
              "Large-format: up to ₹1 Cr+ (stock & interiors)",
              "Includes interiors, fixtures, inventory, POS setup",
              "No franchise fee involved",
            ]}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureTile
            title="Expected Returns"
            desc="ROI potential 20%–60% (typical 30%–40%), supported by pricing that drives steady walk-ins and repeat purchases."
          />
          <StatCard
            title="Store Size Options"
            items={[
              "Compact: 1,000 – 2,000 sq. ft.",
              "Mid-size: 2,500 – 4,000 sq. ft.",
              "Flagship: 8,000 – 25,000 sq. ft.",
            ]}
          />
          <StatCard
            title="Franchise Support"
            items={[
              "POS & inventory systems",
              "Centralized supply chain",
              "Visual merchandising & design",
              "Marketing (online/offline)",
              "Staff recruitment & training",
            ]}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureTile
            title="Footwear & Apparel Franchise"
            desc="Investment ₹20–₹40 Lakhs | ROI avg. 25%–30% | Ground floor, 1,000–1,500 sq. ft., 15–20 ft frontage. Fast-moving, trend-aligned collections with premium presentation."
          />
          <FeatureTile
            title="Ethnic & Value Wear (Low-Barrier)"
            desc="Investment ₹15–₹25 Lakhs | No royalty/revenue share | Inventory credit flexibility. Brand supports layout, inventory planning, training, and launch marketing."
          />
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[0_22px_60px_rgba(18,35,51,0.08)] border border-white/70">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h4 className="text-lg font-semibold text-[#1f3b4d]">Why Choose Cavree?</h4>
            <a
              href="mailto:franchise@cavree.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#4cc3d9] to-[#2a7fa3] text-white text-sm font-semibold shadow hover:scale-105 transition"
            >
              Apply Now
            </a>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 text-[#0f2130]">
            {[
              "₹0 franchise deposit",
              "Physically verified locations",
              "Lower entry cost, scalable growth",
              "Faster setup & quicker breakeven",
              "Multiple formats: Apparel, Footwear, Ethnic, Lifestyle",
              "Centralized support without heavy royalty",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 bg-[#f4fbfc] rounded-2xl p-3 shadow-sm">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#4cc3d9]" />
                <p className="text-sm leading-relaxed text-[#1f3b4d]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[0_22px_60px_rgba(18,35,51,0.08)] border border-white/70">
          <div className="flex items-center justify-between gap-3 flex-wrap text-[#0f2130]">
            <div>
              <div className="text-sm uppercase tracking-[0.2em] text-[#2a7fa3]">Path to launch</div>
              <h4 className="text-2xl font-semibold mt-1">How to Get a Cavree Franchise</h4>
            </div>
            <a
              href="mailto:franchise@cavree.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#4cc3d9] to-[#2a7fa3] text-white text-sm font-semibold shadow hover:translate-y-[-1px] transition"
            >
              Talk to Cavree
            </a>
          </div>
          <div className="grid md:grid-cols-5 gap-4 mt-6">
            {[
              { title: "Choose Format", desc: "Apparel | Footwear | Ethnic | Lifestyle" },
              { title: "Submit Interest", desc: "Apply via official Cavree channels" },
              { title: "Location Evaluation", desc: "Market analysis & physical site visit" },
              { title: "Training & Setup", desc: "End-to-end support from design to launch" },
              { title: "Grand Opening", desc: "Launch marketing with ongoing backend support" },
            ].map((step, idx) => (
              <div key={step.title} className="bg-[#f8fcfd] border border-[#eaf4f9] rounded-2xl p-4 text-[#0f2130] shadow-sm">
                <div className="text-sm font-semibold text-[#4cc3d9]">Step {idx + 1}</div>
                <div className="mt-1 font-semibold">{step.title}</div>
                <p className="mt-2 text-sm text-[#4a6678] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Franchise;

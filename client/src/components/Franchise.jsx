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

const FeatureTile = ({ title, desc, children }) => (
  <div className="bg-white/90 border border-white/60 rounded-3xl p-6 shadow-[0_18px_50px_rgba(18,35,51,0.08)] h-full flex flex-col gap-3">
    <h4 className="text-lg font-semibold text-[#1f3b4d]">{title}</h4>
    {desc ? <p className="text-sm text-[#4a6678] leading-relaxed">{desc}</p> : null}
    {children ? (
      <div className="space-y-3 text-sm text-[#4a6678] leading-relaxed">{children}</div>
    ) : null}
  </div>
);

const StatCard = ({ title, items, desc, footer }) => (
  <div className="bg-white/90 border border-white/70 rounded-3xl p-6 shadow-[0_18px_50px_rgba(18,35,51,0.08)] h-full flex flex-col gap-3">
    <h4 className="text-lg font-semibold text-[#1f3b4d]">{title}</h4>
    {desc ? <p className="text-sm text-[#4a6678] leading-relaxed">{desc}</p> : null}
    <ul className="text-[#1f3b4d] space-y-2 text-sm">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    {footer ? <p className="text-sm text-[#4a6678] leading-relaxed">{footer}</p> : null}
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
          title={"Cavree Franchise – A Smart Entry into India’s Growing Fashion Market"}
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          <div className="bg-gradient-to-br from-white to-[#f3fbff] rounded-3xl p-8 shadow-[0_25px_70px_rgba(18,35,51,0.08)] border border-white/60">
            <p className="text-[#4a6678] leading-relaxed">
              A Cavree Franchise represents a next-generation fashion retail opportunity designed for entrepreneurs who seek strong margins, brand credibility, and operational simplicity. Cavree is built on a value-driven approach that blends quality apparel, footwear, ethnic wear, and lifestyle products with a scalable and flexible franchise model.
            </p>
            <p className="text-[#4a6678] leading-relaxed mt-4">
              With India’s fashion retail market expanding rapidly across Tier-1, Tier-2, and Tier-3 cities, Cavree offers a timely opportunity for both first-time investors and experienced retailers to enter a growing segment with confidence. Unlike traditional high-cost fashion franchises, Cavree balances affordability with a premium retail experience, ensuring faster scalability and sustainable growth.
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
            <div className="text-sm font-semibold text-[#2a7fa3]">Cavree Fashion & Lifestyle Franchise</div>
            <h3 className="font-serif text-2xl text-[#0f2130]">Brand Overview</h3>
            <p className="text-[#4a6678] leading-relaxed">
              Cavree is an emerging Indian fashion and lifestyle brand positioned around the philosophy of “Everyday Fashion with a Premium Feel.” The brand caters to families, young professionals, and style-conscious consumers who value design, durability, and fair pricing.
            </p>
            <p className="text-[#4a6678] leading-relaxed">
              Cavree’s collections are curated to match Indian consumer preferences, ensuring consistent footfall, repeat customers, and strong seasonal sales.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureTile
            title="Zero Franchise Deposit & Physical Approval Model"
          >
            <p>
              One of Cavree’s strongest differentiators is its ₹0 franchise deposit policy. Franchise partners are not required to pay any franchise or licensing fee, allowing them to invest capital directly into store setup and inventory.
            </p>
            <p>
              To maintain brand consistency and long-term success, all franchise stores are approved only by the Cavree team, following a physical inspection of the proposed location. This on-ground evaluation ensures:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#1f3b4d]">
              <li>Proper market potential</li>
              <li>High visibility and accessibility</li>
              <li>Suitable store size and layout</li>
              <li>Long-term viability for the franchise partner</li>
            </ul>
            <p>This partner-first approach protects both the brand and the investor.</p>
          </FeatureTile>
          <FeatureTile
            title="Investment Range"
          >
            <p>Cavree offers multiple formats with flexible investment options:</p>
            <ul className="list-disc list-inside space-y-2 text-[#1f3b4d]">
              <li>Fashion & Lifestyle Stores: 85L to 3 Cr</li>
              <li>Large-format expansions: Up to ₹1 Crore+ (including stock & interiors)</li>
              <li>
                <span className="font-semibold text-[#1f3b4d]">Investment primarily includes:</span>
                <ul className="mt-2 ml-4 list-disc list-inside space-y-1 text-[#4a6678]">
                  <li>Store interiors & branding</li>
                  <li>Fixtures and displays</li>
                  <li>Initial inventory (apparel, footwear, lifestyle products)</li>
                  <li>POS and operational setup</li>
                </ul>
              </li>
            </ul>
            <p>Investment covers stock and setup only. No franchise fee involved.</p>
          </FeatureTile>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <StatCard
            title="Expected Returns"
            items={[
              "ROI potential ranging from 20% to 60%, depending on format and location",
              "Average expected ROI for most formats: 30% – 40%",
              "Optimized pricing strategy ensures steady walk-ins and repeat purchases",
            ]}
          />
          <StatCard
            title="Store Size Options"
            desc="Cavree supports flexible store formats:"
            items={[
              "Compact stores: 1,000 – 2,000 sq. ft.",
              "Mid-size lifestyle stores: 2,500 – 4,000 sq. ft.",
              "Large format flagship stores: Up to 8,000 – 25,000 sq. ft.",
            ]}
            footer="This flexibility allows Cavree to adapt to malls, high streets, and emerging commercial hubs."
          />
          <StatCard
            title="Comprehensive Franchise Support"
            desc="Cavree provides end-to-end support to ensure franchise success:"
            items={[
              "POS & inventory management systems",
              "Centralized supply chain & logistics",
              "Visual merchandising & store design guidance",
              "Online and offline marketing campaigns",
              "Staff recruitment training and operational handholding",
            ]}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <FeatureTile title="Cavree Footwear & Apparel Franchise">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-[#1f3b4d]">Investment</div>
              <p>Entry-friendly range: ₹20 – ₹40 Lakhs</p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-[#1f3b4d]">Returns</div>
              <p>Average ROI of 25% – 30%, supported by high-turnover SKUs</p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-[#1f3b4d]">Location Requirements</div>
              <ul className="list-disc list-inside space-y-1 text-[#1f3b4d]">
                <li>Ground floor preferred</li>
                <li>1,000 – 1,500 sq. ft.</li>
                <li>15 – 20 ft high-visibility frontage</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-[#1f3b4d]">Why Cavree Footwear Works</div>
              <ul className="list-disc list-inside space-y-1 text-[#1f3b4d]">
                <li>Fast-moving, trend-aligned collections</li>
                <li>Strong seasonal demand</li>
                <li>Competitive pricing with premium presentation</li>
              </ul>
            </div>
          </FeatureTile>
          <FeatureTile title="Cavree Ethnic & Value Wear Franchise (Low-Barrier Model)">
            <div className="space-y-2">
              <div className="text-sm font-semibold text-[#1f3b4d]">Investment</div>
              <p>₹15 – ₹25 Lakhs</p>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-[#1f3b4d]">Unique Franchise Advantage</div>
              <ul className="list-disc list-inside space-y-1 text-[#1f3b4d]">
                <li>No royalty or revenue-sharing model</li>
                <li>Inventory support with flexible credit terms</li>
                <li>Franchisee focuses mainly on store infrastructure and daily operations</li>
              </ul>
            </div>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-[#1f3b4d]">Brand Support Includes</div>
              <ul className="list-disc list-inside space-y-1 text-[#1f3b4d]">
                <li>Store layout & branding</li>
                <li>Initial inventory planning</li>
                <li>Staff training</li>
                <li>Local launch and promotional marketing</li>
              </ul>
            </div>
            <p>This model is ideal for small-town entrepreneurs and family-run retail businesses.</p>
          </FeatureTile>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[0_22px_60px_rgba(18,35,51,0.08)] border border-white/70">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h4 className="text-lg font-semibold text-[#1f3b4d]">Why Choose Cavree Over Traditional Fashion Franchises?</h4>
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
              "Physically verified & approved locations",
              "Lower entry cost with scalable growth",
              "Faster store setup and quicker breakeven",
              "Multiple formats: Apparel, Footwear, Ethnic, Lifestyle",
              "Strong focus on Indian consumer behavior",
              "Centralized support without heavy royalty burden",
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
              { title: "Choose Your Store Format", desc: "Apparel | Footwear | Ethnic Wear | Lifestyle Store" },
              { title: "Submit Franchise Interest", desc: "Apply through official Cavree franchise channels" },
              { title: "Location & Investment Evaluation", desc: "Market analysis and physical site visit by Cavree team" },
              { title: "Training & Store Setup", desc: "Complete support from design to launch" },
              { title: "Grand Opening & Growth", desc: "Launch marketing with continuous backend support" },
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

import React from "react";

const CavreeStory = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden bg-gradient-to-br from-[#fbfefe] via-[#f1fbfd] to-[#e4f5f9]">

      {/* soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(76,195,217,0.25),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-6 py-2 rounded-full bg-white shadow text-xs tracking-[0.25em] text-[#2a7fa3] font-semibold">
            THE CAVREE STORY
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-10 text-center font-serif text-5xl md:text-6xl leading-tight">
          <span className="text-[#4cc3d9]">Legacy Planning,</span>
          <br />
          <span className="text-[#1f2937]">Redefined for the Elite</span>
        </h2>

        {/* Divider */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <span className="h-px w-20 bg-[#4cc3d9]/40" />
          <span className="h-2 w-2 rounded-full bg-[#4cc3d9]" />
          <span className="h-px w-20 bg-[#4cc3d9]/40" />
        </div>

        {/* Main content */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <div>
            <h3 className="font-serif text-3xl text-[#1f3b4d]">
              More Than Planning.
              <br />
              A Statement of Legacy.
            </h3>

            <p className="mt-6 text-[#5c7486] leading-relaxed">
              In a world saturated with generic solutions and one-size-fits-all approaches,
              Cavree stands as a beacon of true legacy planning. We don't just create
              documents — we craft enduring legacies for the discerning few who
              understand that exclusivity is the ultimate luxury.
            </p>

            <p className="mt-6 text-[#5c7486] leading-relaxed">
              Every legacy plan begins with{" "}
              <span className="text-[#4cc3d9] font-semibold">
                comprehensive asset analysis, strategic wealth preservation,
              </span>{" "}
              and personalized family governance. Our expert planners — each with decades
              of experience — transform these insights into strategies that become
              part of your enduring legacy.
            </p>

            <p className="mt-6 text-[#5c7486] leading-relaxed">
              With only{" "}
              <span className="text-[#4cc3d9] font-semibold">
                3,339 members per nation,
              </span>{" "}
              your membership isn’t just exclusive — it’s extraordinary.
            </p>
          </div>

          {/* Right image card */}
          <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)]">
            <img
              src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&h=600&fit=crop&crop=center&auto=format"
              alt="Legacy planning consultation"
              className="w-full h-[420px] object-cover"
            />

            {/* Overlay text */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <h4 className="font-serif text-white text-2xl">
                Strategic Legacy Planning
              </h4>
              <p className="mt-2 text-white/80">
                Every strategy, every detail — perfected.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          {[
            { value: "50+", label: "PLANNING OPTIONS" },
            { value: "15+", label: "EXPERT PLANNERS" },
            { value: "30", label: "ASSET CATEGORIES" },
            { value: "72hrs", label: "PLAN DELIVERY" },
          ].map((item, index) => (
            <div key={index}>
              <div className="font-serif text-4xl text-[#4cc3d9]">
                {item.value}
              </div>
              <p className="mt-2 text-sm tracking-widest text-[#5c7486]">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CavreeStory;

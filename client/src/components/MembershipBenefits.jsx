import React from "react";

const benefits = [
  {
    title: "Exclusive Fabrics",
    desc:
      "Access to rare Italian silks, Scottish cashmere, and limited-edition textiles unavailable to the public",
    icon: "✨",
  },
  {
    title: "Lifetime Guarantee",
    desc:
      "Free alterations, repairs, and maintenance for life. Your investment is protected forever",
    icon: "🛡️",
  },
  {
    title: "Personal Stylist",
    desc:
      "Dedicated fashion consultant to curate your wardrobe and advise on style choices",
    icon: "👤",
  },
  {
    title: "Priority Service",
    desc:
      "Skip the queue with expedited tailoring—your garments completed in 72 hours or less",
    icon: "⏱️",
  },
  {
    title: "Flexible Payment",
    desc:
      "Interest-free installments and exclusive member-only pricing on all collections",
    icon: "💳",
  },
  {
    title: "VIP Events",
    desc:
      "Invitations to exclusive fashion showcases, private fittings, and member gatherings",
    icon: "💎",
  },
];

const MembershipBenefits = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden bg-gradient-to-br from-[#2f6f9e] via-[#3e8db7] to-[#4fc3d9]">

      {/* soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.25),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28 text-center text-white">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-6 py-2 rounded-full bg-white/80 text-[#2f6f9e] text-xs tracking-[0.3em] font-semibold shadow">
            MEMBERSHIP BENEFITS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-10 font-serif text-5xl md:text-6xl">
          Join the{" "}
          <span className="text-[#ffe2a6]">Cavree Circle</span>
        </h2>

        {/* Divider */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <span className="h-px w-20 bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white" />
          <span className="h-px w-20 bg-white/40" />
        </div>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-white/90">
          Exclusive privileges reserved for the select few
        </p>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-left">
          {benefits.map((item, i) => (
            <div
              key={i}
              className="bg-white/90 text-[#1f3b4d] rounded-3xl p-10 shadow-[0_25px_60px_rgba(0,0,0,0.25)]"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#4fc3d9] to-[#2f6f9e] flex items-center justify-center text-xl text-white shadow-lg">
                {item.icon}
              </div>

              <h3 className="mt-6 font-serif text-2xl">
                {item.title}
              </h3>

              <p className="mt-4 text-[#5c7486] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20">
          <button className="px-12 py-5 rounded-full bg-gradient-to-r from-[#63e3ea] to-[#3aa8c1] text-white font-semibold tracking-wide shadow-[0_15px_40px_rgba(0,0,0,0.35)] hover:scale-105 transition">
            CLAIM YOUR MEMBERSHIP NOW
          </button>
        </div>

      </div>
    </section>
  );
};

export default MembershipBenefits;

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

/* =========================
   Counter Component
========================= */
const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <span>{count}</span>;
};

/* =========================
   Hero Component
========================= */
const Hero = () => {
  return (
    <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden bg-gradient-to-br from-[#f4fbfc] via-[#eef7fa] to-[#d9eef4]">

      {/* ================= Top Badge ================= */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 sm:mt-20 md:mt-24 flex justify-center"
      >
        <div className="flex items-center gap-3 px-6 py-2 rounded-full bg-white/70 backdrop-blur shadow text-xs tracking-widest text-[#2b7fa1] font-semibold">

          {/* Left blinking dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4cc3d9] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4cc3d9]" />
          </span>

          EXCLUSIVE BESPOKE TAILORING

          {/* Right blinking dot */}
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2a7fa3] opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2a7fa3]" />
          </span>
        </div>
      </motion.div>

      {/* ================= Hero Content ================= */}
      <section className="text-center mt-12 px-6">

        {/* Shine Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-wide text-shine"
        >
          CAVREE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg sm:text-xl italic text-[#2f5870]"
        >
          Where Rarity Defines Luxury Fashion
        </motion.p>

        {/* Decorative Divider */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-[2px] w-16 bg-gradient-to-r from-transparent to-[#4cc3d9]" />
          <span className="h-2 w-2 rounded-full bg-[#2a7fa3]" />
          <span className="h-[2px] w-16 bg-gradient-to-l from-transparent to-[#4cc3d9]" />
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[#1f3b4d] leading-relaxed"
        >
          Join an exclusive circle of only{" "}
          <span className="text-[#4cc3d9] font-semibold">
            <Counter end={3339} />
          </span>{" "}
          members per nation.
          <br className="hidden sm:block" />
          Experience bespoke garments crafted with unparalleled precision and
          luxury fabrics.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex justify-center gap-6 flex-wrap"
        >
         <button
  onClick={() => {
    document
      .getElementById("begin-your-legacy")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-10 py-4 rounded-full bg-gradient-to-r from-[#4cc3d9] to-[#2a7fa3] text-white font-semibold shadow-lg hover:scale-105 transition"
>
  APPLY FOR MEMBERSHIP
</button>


          <button
  onClick={() => {
    document
      .getElementById("why-choose-cavree")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-10 py-4 rounded-full border border-[#4cc3d9] text-[#2a7fa3] font-semibold bg-white/60 backdrop-blur shadow hover:scale-105 transition"
>
  EXPLORE COLLECTIONS
</button>

        </motion.div>
      </section>

      {/* ================= Stats ================= */}
      <section className="mt-20 px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {[
            { value: <Counter end={3339} />, label: "MEMBERS PER COUNTRY" },
            { value: "12", label: "GARMENTS PER YEAR" },
            { value: "100%", label: "BESPOKE TAILORED" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur rounded-2xl shadow-xl p-10 text-center"
            >
              <div className="text-5xl font-serif text-[#4cc3d9]">
                {item.value}
              </div>

              <div className="mt-4 h-1 w-10 mx-auto bg-gradient-to-r from-[#4cc3d9] to-[#2a7fa3] rounded" />

              <p className="mt-4 text-sm tracking-widest text-[#2f5870]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;

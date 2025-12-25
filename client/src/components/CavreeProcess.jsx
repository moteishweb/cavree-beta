import React from "react";

const steps = [
  {
    step: "1",
    title: "Personal Consultation",
    desc:
      "Meet with your legacy planning specialist to discuss your vision, values, and goals. We'll guide you through our comprehensive estate planning options and wealth preservation strategies.",
    img: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop&crop=center&auto=format",
    align: "left",
  },
  {
    step: "2",
    title: "Precision Measurements",
    desc:
      "Comprehensive assessment of your assets, family structure, and legacy goals. Every detail, every preference—captured to ensure your legacy is preserved exactly as you envision.",
    img: "https://images.unsplash.com/photo-1659890080812-176a804498a4?w=800&h=600&fit=crop&crop=center&auto=format",
    align: "right",
  },
  {
    step: "3",
    title: "Expert Craftsmanship",
    desc:
      "Our expert estate planners—with decades of experience—craft your legacy plan. Every document prepared with precision, every strategy tailored to perfection.",
    img: "https://images.unsplash.com/photo-1580418835996-7783da1c3c6c?w=800&h=600&fit=crop&crop=center&auto=format",
    align: "left",
  },
  {
    step: "4",
    title: "White Glove Delivery",
    desc:
      "Your comprehensive legacy plan arrives in premium documentation, ready to secure your family's future. Complimentary secure delivery, legally validated and tracked.",
    img: "https://images.unsplash.com/photo-1555529669-26f9d103abdd?w=800&h=600&fit=crop&crop=center&auto=format",
    align: "right",
  },
];

const CavreeProcess = () => {
  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden bg-gradient-to-br from-[#fbfefe] via-[#f2fbfd] to-[#e6f6fa]">

      {/* soft glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(76,195,217,0.25),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        {/* Badge */}
        <div className="flex justify-center">
          <span className="px-6 py-2 rounded-full bg-white shadow text-xs tracking-[0.3em] text-[#2a7fa3] font-semibold">
            THE PROCESS
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-10 text-center font-serif text-5xl md:text-6xl">
          <span className="text-[#4cc3d9]">From Vision</span>
          <br />
          <span className="text-[#1f2937]">To Perfection</span>
        </h2>

        {/* Divider */}
        <div className="mt-6 flex justify-center items-center gap-4">
          <span className="h-px w-20 bg-[#4cc3d9]/40" />
          <span className="h-2 w-2 rounded-full bg-[#4cc3d9]" />
          <span className="h-px w-20 bg-[#4cc3d9]/40" />
        </div>

        {/* Steps */}
        <div className="mt-24 space-y-28">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                item.align === "right" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`${
                  item.align === "right" ? "lg:order-2" : ""
                }`}
              >
                <div className="rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.25)]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[300px] object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <div className="flex items-center gap-4">
                  <span className="h-10 w-10 rounded-full bg-gradient-to-br from-[#4cc3d9] to-[#2a7fa3] text-white flex items-center justify-center font-semibold shadow">
                    {item.step}
                  </span>
                  <h3 className="font-serif text-2xl text-[#1f3b4d]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-6 text-[#5c7486] leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CavreeProcess;

import React, { useState } from "react";

const BeginYourLegacy = () => {
  const [gender, setGender] = useState("male");

  return (
    <section  id="begin-your-legacy" className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden bg-[#fffdf9]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-24 text-center">

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-6xl leading-tight">
          <span className="text-[#4cc3d9]">Begin Your</span>{" "}
          <span className="text-[#1f2937]">Legacy</span>
        </h2>

        {/* Divider */}
        <div className="mt-4 flex justify-center items-center gap-3">
          <span className="h-px w-12 sm:w-20 bg-[#4cc3d9]/40" />
          <span className="h-2 w-2 rounded-full bg-[#4cc3d9]" />
          <span className="h-px w-12 sm:w-20 bg-[#4cc3d9]/40" />
        </div>

        {/* Subtitle */}
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[#6b7280] max-w-xl mx-auto">
          Secure your exclusive membership today
        </p>

        {/* Form Card */}
        <div className="mt-14 sm:mt-16 max-w-xl mx-auto bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.15)] text-left">

          {/* Full Name */}
          <label className="block text-xs tracking-widest text-[#2a7fa3] font-semibold">
            FULL NAME
          </label>
          <input
            type="text"
            placeholder="Enter your distinguished name"
            className="mt-3 w-full rounded-xl border border-[#cfeaf1] px-4 sm:px-5 py-3.5 sm:py-4 text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4cc3d9]"
          />

          {/* Gender */}
          <div className="mt-7">
            <label className="block text-xs tracking-widest text-[#2a7fa3] font-semibold">
              GENDER
            </label>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4">
              {["male", "female"].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  className={`py-3.5 sm:py-4 rounded-xl border font-semibold transition ${
                    gender === g
                      ? "bg-[#4cc3d9]/10 border-[#4cc3d9] text-[#1f3b4d]"
                      : "border-[#cfeaf1] text-[#6b7280]"
                  }`}
                >
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Number */}
<div className="mt-7">
  <label className="block text-xs tracking-widest text-[#2a7fa3] font-semibold">
    MOBILE NUMBER
  </label>

  <div className="mt-3 flex flex-col sm:flex-row gap-3">
    <select className="w-full sm:w-28 rounded-xl border border-[#cfeaf1] px-4 py-3.5 sm:py-4 text-[#1f2937] bg-white focus:outline-none focus:ring-2 focus:ring-[#4cc3d9]">
      <option>IN +91</option>
    </select>

    <input
      type="tel"
      placeholder="Enter mobile number"
      className="w-full flex-1 rounded-xl border border-[#cfeaf1] px-4 sm:px-5 py-3.5 sm:py-4 text-[#1f2937] placeholder-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#4cc3d9]"
    />
  </div>
</div>


          {/* CTA */}
          <button className="mt-9 sm:mt-10 w-full py-4 sm:py-5 rounded-xl bg-gradient-to-r from-[#5fd1dc] to-[#3ea6c1] text-white text-sm sm:text-base font-semibold tracking-wide shadow-[0_15px_40px_rgba(76,195,217,0.6)] hover:scale-[1.02] transition">
            SEND VERIFICATION CODE
          </button>

          {/* Terms */}
          <p className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-[#9ca3af]">
            By joining, you agree to our{" "}
            <span className="text-[#4cc3d9] underline cursor-pointer">
              Terms & Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeginYourLegacy;

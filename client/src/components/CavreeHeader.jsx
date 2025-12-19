import React, { useState } from "react";

const CavreeHeader = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 md:px-12">
      <div className="relative max-w-7xl mx-auto bg-white/80 backdrop-blur-xl rounded-full shadow-lg px-6 md:px-10 py-3 md:py-4">


        {/* Main Row */}
        <div className="flex items-center justify-between">

          {/* Logo (LEFT) */}
          <div className="flex items-center">
            <span className="text-2xl font-serif text-[#2a7fa3]">C</span>
          </div>

          {/* RIGHT SIDE: Nav + Login */}
          <div className="flex items-center gap-6">

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-[#1f3b4d]">
              <a href="#" className="hover:text-[#4cc3d9] transition">
                Home
              </a>
              <a href="#" className="hover:text-[#4cc3d9] transition">
                About
              </a>
              <a href="#" className="hover:text-[#4cc3d9] transition">
                Contact
              </a>
            </nav>

            {/* Login Button */}
            <button className="hidden sm:block px-6 py-2 rounded-full bg-gradient-to-r from-[#4cc3d9] to-[#2a7fa3] text-white text-sm font-medium shadow hover:scale-105 transition">
              Login
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
            >
              <span
                className={`absolute h-0.5 w-5 bg-[#2a7fa3] transition-all duration-300 ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-[#2a7fa3] transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 bg-[#2a7fa3] transition-all duration-300 ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full mt-4 mx-4 rounded-2xl bg-white/95 backdrop-blur-xl shadow-lg overflow-hidden transition-all duration-300 ${
            open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col text-sm font-medium text-[#1f3b4d]">
            <a onClick={() => setOpen(false)} className="px-6 py-4 hover:bg-[#f1fbfd]">
              Home
            </a>
            <a onClick={() => setOpen(false)} className="px-6 py-4 hover:bg-[#f1fbfd]">
              About
            </a>
            <a onClick={() => setOpen(false)} className="px-6 py-4 hover:bg-[#f1fbfd]">
              Contact
            </a>

            <button className="m-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#4cc3d9] to-[#2a7fa3] text-white shadow">
              Login
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default CavreeHeader;

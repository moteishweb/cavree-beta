import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const CavreeFooter = () => {
  return (
    <footer className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white">

      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">

          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl text-[#2a7fa3]">
              CAVREE
            </h3>

            <p className="mt-4 text-[#5c7486]">
              Where Rarity Defines Luxury
            </p>

            <p className="mt-4 text-sm italic text-[#7b8a9a] leading-relaxed">
              Exclusive membership limited to{" "}
              <span className="font-semibold text-[#4cc3d9]">
                3,339 members
              </span>{" "}
              per country.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm tracking-widest text-[#2a7fa3] font-semibold">
              NAVIGATION
            </h4>

            <ul className="mt-6 space-y-3 text-[#5c7486]">
              <li className="hover:text-[#2a7fa3] cursor-pointer">Home</li>
              <li className="hover:text-[#2a7fa3] cursor-pointer">About</li>
              <li className="hover:text-[#2a7fa3] cursor-pointer">Catalog</li>
              <li className="hover:text-[#2a7fa3] cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="text-sm tracking-widest text-[#2a7fa3] font-semibold">
              POLICIES
            </h4>

            <ul className="mt-6 space-y-3 text-[#5c7486]">
              <li className="hover:text-[#2a7fa3] cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-[#2a7fa3] cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-[#2a7fa3] cursor-pointer">
                Shipping & Delivery
              </li>
              <li className="hover:text-[#2a7fa3] cursor-pointer">
                Cancellation & Refund
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm tracking-widest text-[#2a7fa3] font-semibold">
              CONTACT
            </h4>

            <p className="mt-6 flex items-center gap-3 text-[#5c7486]">
  <span className="h-10 w-10 rounded-full bg-[#e8f5f9] flex items-center justify-center text-[#2a7fa3] shadow">
    <FaEnvelope />
  </span>
  support@cavree.com
</p>


            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              {[
                { icon: <FaFacebookF />, label: "Facebook" },
                { icon: <FaInstagram />, label: "Instagram" },
                { icon: <FaTwitter />, label: "Twitter" },
              ].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={item.label}
                  className="h-11 w-11 rounded-full bg-[#e8f5f9] flex items-center justify-center text-[#2a7fa3] shadow hover:scale-110 hover:bg-[#4cc3d9] hover:text-white transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-[#edf2f6]" />

        {/* Bottom */}
        <div className="mt-10 text-center text-sm text-[#7b8a9a]">
          <p>© 2025 Cavree. All rights reserved.</p>
          <p className="mt-2">
            Designed with precision for luxury excellence.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default CavreeFooter;

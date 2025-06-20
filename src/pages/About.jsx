import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import FullscreenSection from "../components/FullscreenSection";

import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import product from "../assets/product.jpg";

const images = [pic4, pic5, product];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800">
      <Navbar />
      <FullscreenSection images={images} align="left">
        <div className="max-w-xl text-right text-white">
          <h2 className="text-5xl md:text-6xl font-bold text-red-500 mb-6">
            About Us
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-right">
            <p>
              Get to know who we are, what we believe in, and how we operate.
            </p>
          </div>
        </div>
      </FullscreenSection>
      <section className="max-w-6xl mx-auto px-4 pt-24 pb-16 space-y-24">
        {/* Introduction */}
        <div className="grid md:grid-cols-2 gap-10 items-center animate-fade-in">
          <img
            src="/images/introduction.jpg"
            alt="Introduction"
            className="rounded-2xl shadow-lg w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
          <div>
            <h3 className="text-3xl font-semibold text-green-700 mb-4">
              Introduction
            </h3>
            <p className="text-justify leading-relaxed mb-4">
              <strong>JLU Mineral Ore Trader Exporter (JLU MOTEC)</strong> is a
              mining exporter dedicated to delivering high-quality minerals to
              global markets. We specialize in the extraction, processing, and
              export of minerals such as coal, iron ore, copper, and chromite.
            </p>
            <p className="text-justify leading-relaxed mb-4">
              We adhere to the highest environmental and safety standards. With
              a strong supply chain and local partnerships, we ensure efficient
              delivery and sustainable practices.
            </p>
            <p className="text-justify leading-relaxed">
              In partnership with{" "}
              <strong>Siennalyn Gold Mining Corporation</strong> (MPSA
              076-97-IX), we are committed to responsible growth and community
              development.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-10 items-center animate-fade-in-delay">
          <div>
            <h3 className="text-3xl font-semibold text-green-700 mb-4">
              Mission & Vision
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-gray-700">Mission</h4>
                <p className="text-justify leading-relaxed">
                  To responsibly extract and export high-quality minerals while
                  upholding the highest environmental, ethical, and safety
                  standards. We deliver value, promote sustainability, and
                  support the global supply chain.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-700">Vision</h4>
                <p className="text-justify leading-relaxed">
                  To be a globally recognized leader in sustainable mining and
                  exports, driving economic growth while promoting innovation,
                  environmental care, and community development.
                </p>
              </div>
            </div>
          </div>
          <img
            src="/images/mission-vision.jpg"
            alt="Mission and Vision"
            className="rounded-2xl shadow-lg w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Company Profile */}
        <div className="grid md:grid-cols-2 gap-10 items-center animate-fade-in-late">
          <img
            src="/images/company-profile.jpg"
            alt="Company Profile"
            className="rounded-2xl shadow-lg w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
          <div>
            <h3 className="text-3xl font-semibold text-green-700 mb-4">
              Company Profile
            </h3>
            <p className="text-justify leading-relaxed mb-4">
              <strong>JLU Mineral Ore Trader Exporter Corporation</strong> is a
              registered Philippine corporation engaged in wholesale trading and
              exportation of metal ores. Registered with SEC under{" "}
              <strong>CS201509538</strong>, we follow Batas Pambansa Blg. 68.
            </p>
            <p className="text-justify leading-relaxed mb-4">
              Recognized by the BIR for wholesale of metals and ores (PSIC
              46620), we comply with all tax obligations including VAT and
              corporate income tax.
            </p>
            <p className="text-justify leading-relaxed mb-4">
              We submit all SEC-required reports and maintain regulatory
              compliance with professionalism.
            </p>
            <p className="text-justify leading-relaxed">
              Based in Taguig City, Metro Manila, we stand as a trusted, ethical
              partner in the mineral and ore trading industry.
            </p>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

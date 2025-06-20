import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import FullscreenSection from "../components/FullscreenSection";

import pic4 from "../assets/pic4.jpg";
import pic5 from "../assets/pic5.jpg";
import product from "../assets/product.jpg";

const images = [pic4, pic5, product];

export default function Products() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800">
      <Navbar />
      <FullscreenSection images={images} align="left">
        <div className="max-w-xl text-right text-white">
          <h2 className="text-5xl md:text-6xl font-bold text-red-500 mb-6">
            Our Products
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-right">
            <p>
              JLU MOTEC specializes in the extraction and export of high-quality
              mineral products that meet international standards. Our primary
              products include coal, iron ore, copper, and chromite, all sourced
              through sustainable and ethical mining practices.
            </p>
          </div>
        </div>
      </FullscreenSection>

      <section className="max-w-4xl mx-auto mb-12 px-4 pt-24">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-3">Coal</h3>
              <p className="text-gray-700">
                High-grade coal suitable for various industrial applications.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Iron Ore
              </h3>
              <p className="text-gray-700">
                Premium iron ore with high iron content for steel production.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-3">Copper</h3>
              <p className="text-gray-700">
                High-purity copper ore for electrical and construction
                industries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-green-700 mb-3">
                Chromite
              </h3>
              <p className="text-gray-700">
                Quality chromite ore for metallurgical and chemical
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}

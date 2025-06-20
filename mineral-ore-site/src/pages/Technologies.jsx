import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import FullscreenSection from "../components/FullscreenSection";

const images = [
  "src/assets/pic4.jpg",
  "src/assets/pic5.jpg",
  "src/assets/product.jpg",
];

export default function Technologies() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Navbar />

      {/* Only the section with dark background gets text-white */}
      <FullscreenSection images={images} align="right">
        <div className="max-w-xl text-right text-white">
          <h2 className="text-5xl md:text-6xl font-bold text-red-500 mb-6">
            Our Technologies
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-right">
            <p>
              At JLU MOTEC, we employ cutting-edge mining technologies to ensure
              efficient, safe, and environmentally responsible mineral extraction.
              Our advanced equipment and methodologies enable us to maximize
              resource recovery while minimizing environmental impact.
            </p>
            <p>
              Our technology portfolio includes state-of-the-art drilling equipment,
              automated processing systems, and real-time monitoring solutions that
              ensure optimal safety and productivity in all our operations.
            </p>
          </div>
        </div>
      </FullscreenSection>

      <Contact />
      <Footer />
    </main>
  );
}

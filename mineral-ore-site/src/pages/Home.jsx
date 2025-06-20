import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-white text-gray-800">
      <Navbar />

      {/* Hero Section with Gallery */}
      <section className="relative h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 pt-34 bg-[url('src/assets/hero-bg.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black opacity-10 z-0"></div>
        <div className="w-full md:w-1/2 text-center md:text-left z-10">
          <img
            src="src/assets/logo.png"
            alt="JLU MOTEC Logo"
            className="mx-auto md:mx-0 mb-4 w-32"
          />
          <h1 className="text-xl md:text-6xl font-bold text-gray-900">
            JLU Mineral Ore Trader Exporter Corporation
          </h1>
          <p className="text-lg mt-2 text-gray-700">
            Unearthing Excellence, Delivering Prosperity
          </p>
        </div>
        <div className="w-full md:w-1/2 h-full grid grid-cols-2 gap-2 mt-8 md:mt-0 animate-fade-in content-between">
          <div className="grid gap-2">
            <img
              src="src/assets/image2.png"
              alt="Gallery Image 1"
              className="rounded-lg shadow-md object-cover h-full w-full aspect-auto"
            />
            <img
              src="src/assets/image3.png"
              alt="Gallery Image 3"
              className="rounded-lg shadow-md object-cover h-full w-full aspect-auto"
            />
          </div>

          <img
            src="src/assets/image1.png"
            alt="Gallery Image 2"
            className="rounded-lg shadow-md object-cover h-2/3 w-full row-span-2 aspect-auto"
          />
        </div>
      </section>

      {/* Image Gallery with Navigation */}
       <section
  className="relative w-full bg-fixed bg-[url('/src/assets/gallery-bg.jpg')] bg-cover bg-center bg-no-repeat text-white"
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60 z-0"></div>

  {/* Content Container */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
    <div className="text-center mb-12">
      <h2 className="text-5xl md:text-6xl font-bold text-red-500 mb-4">
        Introduction
      </h2>
      <p className="text-lg leading-relaxed text-justify">
        <b>JLU Mineral Ore Trader Exporter (JLU MOTEC)</b> is a global supplier
        of high-quality minerals such as coal, iron ore, copper, and chromite.
        In partnership with Siennalyn Gold Mining Corporation (MPSA 076-97-IX),
        we are committed to ethical sourcing, environmental safety, and
        community development. With a strong focus on sustainability and
        reliable delivery, we support industrial growth worldwide while
        fostering local progress.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Link to="/about" className="relative group">
        <img
          src="/src/assets/pic4.jpg"
          alt="About Us"
          className="rounded-lg shadow-lg w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl rounded-lg group-hover:bg-black/50 group-hover:scale-105 transition duration-300">
          About Us
        </div>
      </Link>

      <Link to="/technologies" className="relative group">
        <img
          src="/src/assets/pic5.jpg"
          alt="Our Technologies"
          className="rounded-lg shadow-lg w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl rounded-lg group-hover:bg-black/50 group-hover:scale-105 transition duration-300">
          Our Technologies
        </div>
      </Link>

      <Link to="/products" className="relative group">
        <img
          src="/src/assets/product.jpg"
          alt="Our Products"
          className="rounded-lg shadow-lg w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl rounded-lg group-hover:bg-black/50 group-hover:scale-105 transition duration-300">
          Our Products
        </div>
      </Link>
    </div>
  </div>
</section>


      <Contact />
      <Footer />
    </main>
  );
}

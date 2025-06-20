import React from 'react';

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-12 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-2">Mineral Extraction</h3>
          <p className="text-sm text-gray-600">We extract minerals like coal, iron, and copper with strict environmental compliance.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-2">Processing & Quality Control</h3>
          <p className="text-sm text-gray-600">Our advanced facilities ensure consistent quality and premium-grade outputs.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-2">Global Export</h3>
          <p className="text-sm text-gray-600">We export minerals to industries worldwide with efficient logistics and supply chain support.</p>
        </div>
      </div>
    </section>
  );
}

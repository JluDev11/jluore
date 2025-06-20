import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-6 text-center mt-16">
      <p className="text-sm">
        © {new Date().getFullYear()} JLU Mineral Ore Trader Exporter Corporation. All rights reserved.
      </p>
    </footer>
  );
}

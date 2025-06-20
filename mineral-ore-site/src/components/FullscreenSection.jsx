import React, { useEffect, useState } from "react";

const FullscreenSection = ({
  images = [],
  children,
  overlay = "bg-black/60",
  align = "right", // default alignment
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 5000); // Change every 5 seconds
      return () => clearInterval(interval);
    }
  }, [images]);

  // Determine justification based on align prop
  const justifyMap = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };
  const justifyClass = justifyMap[align] || "justify-end";

  return (
    <section className="relative h-140 w-full overflow-hidden">
      {/* Background Image */}
      {images.length > 0 && (
        <img
          src={images[currentIndex]}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
        />
      )}

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Content */}
      <div
        className={`relative z-10 h-full flex items-center ${justifyClass} px-6 md:px-20 text-white`}
      >
        {children}
      </div>
    </section>
  );
};

export default FullscreenSection;

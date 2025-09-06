import React, { useEffect, useState, useRef } from "react";
import Background from "../assets/dark-mountain-4k-3vxidfa2y5t5uk4m.jpg";

function Browse() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after animation triggers
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full min-h-screen transition-all ease-in-out duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img
        src={Background}
        alt="Background"
        className="w-full h-auto object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white px-3 py-1 rounded">
        <p className="text-large text-white">
          You are <span className="border-white border-2 rounded p-2">10 miles</span>{" "}
          from the nearest storm
        </p>
      </div>
      <div className="absolute top-3/4 left-1/2 transform -translate-x-3/4 -translate-y-1/2 text-white px-3 py-1 rounded">
        <button className="py-3 mt-6 px-7 rounded border-green text-black bg-green-300 cursor-pointer hover:bg-green-500 hover:text-white with-side-lines">
          Browse Storms
        </button>
      </div>
    </div>
  );
}

export default Browse;

import React, { useEffect, useState, useRef } from "react";
import World from "../assets/favpng_4ce3a9ff67cfb9d6386afdc0d911c7dc.png";

function Explore() {
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
      className={`pt-4 bg-gray-900 transition-all ease-in-out duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <p className="text-green pt-5">EXPLORE THE EYE OF THE STORM</p>
      <p className="text-5xl pt-3">See all stormy locations</p>
      <img src={World} className="w-50 mx-auto pt-5" />
      <div className="pt-16"></div>
    </div>
  );
}

export default Explore;

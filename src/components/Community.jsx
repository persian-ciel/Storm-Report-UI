import React, { useEffect, useState, useRef } from "react";
import mountain from "../assets/dark-mountain.jpg";
import ReportCard from "./ReportCard";

function Community() {
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
      className={`relative transition-all ease-in-out duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <img src={mountain} className="w-full rounded-lg" />
      <p className="absolute top-28 left-1/2 bg-opacity-60 text-emerald-500 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-lg 2xl:top-48">
        A PART OF STORMSEEK COMMUNITY
      </p>
      <p className="absolute top-44 left-1/2 bg-opacity-60 text-white transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-lg text-4xl 2xl:top-60">
        Report a storm you encounter
      </p>
      <div className="absolute top-72 left-2/5 transform -translate-x-1/2 -translate-y-1/3 2xl:top-96 2xl:left-5/12 2xl:ml-3">
        <ReportCard />
      </div>
      <p className="absolute top-4/5 left-1/2 bg-opacity-60 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 rounded-lg mt-5 text-xs 2xl:top-7/11 2xl:z-40">
        every report gives you 10 points
      </p>
    </div>
  );
}

export default Community;

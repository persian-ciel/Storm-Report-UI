import React, { useEffect, useState, useRef } from "react";



function Seek() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`bg-neutral-800 transition-all ease-in-out duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } py-16`}
    >
      <div className="flex flex-row md:flex-row items-center justify-between w-10/12 mx-auto gap-10">
        {/* Text and Button */}
        <div className="w-3/4 md:w-1/2 text-center md:text-left mx-auto">
          <p className="text-emerald-500 text-lg">DOWNLOAD STORMSEEK APP</p>
          <p className="text-4xl font-bold">A Storm in your hand</p>
          <p className="text-neutral-400  mx-auto md:mx-0 pt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
          <p className="pt-5 pb-2">Get the app on Play Store</p>
          <a
            className="playstore-button inline-flex items-center gap-2 px-4 py-2"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-8 h-8"
              viewBox="0 0 512 512"
            >
              <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
            </svg>
            <span>
              <span className="block text-sm">GET IT ON</span>
              <span className="block font-semibold">Google Play</span>
            </span>
          </a>
        </div>

        {/* GLB Model */}
        <div className="w-1/4 md:w-1/2 flex justify-center">
          
        </div>
      </div>
    </div>
  );
}

export default Seek;

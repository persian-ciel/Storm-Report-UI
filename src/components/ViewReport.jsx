import React, { useEffect, useState, useRef } from "react";
import ViewReportCard from "./ViewReportCard";

function ViewReport() {
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

  const props = [
    { id: 1, title: "STORMS REPORTED IN 60 LAST MINUTES", text: "5" },
    { id: 2, title: "ACTIVE USERS TODAY", text: "2365" },
    { id: 3, title: "APP DOWNLOAD ALL TIME", text: "10987" },
  ];

  const notes = props.map((note) => (
    <ViewReportCard key={note.id} title={note.title} text={note.text} />
  ));

  return (
    <div
      ref={ref}
      className={`pt-12 grid-cols-3 flex w-3/4 mx-auto pb-12 transition-all ease-in-out duration-700 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {notes}
    </div>
  );
}

export default ViewReport;
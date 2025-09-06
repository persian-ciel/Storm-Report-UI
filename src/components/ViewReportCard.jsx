import React from "react";

function ViewReportCard(props) {
  return (
    <>
      <div className="w-1/3 ">
        <h2 className="text-emerald-500">{props.title}</h2>
        <p className="text-6xl mt-6">{props.text}</p>
      </div>
    </>
  );
}

export default ViewReportCard;

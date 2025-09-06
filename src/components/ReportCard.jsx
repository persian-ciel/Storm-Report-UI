import React from "react";

function ReportCard() {
  return (
    <>
      <div className="absolute w-2xs bg-neutral-800 rounded p-3 shadow-2xs">
        <p className="pb-3.5">Report a storm</p>
        <select
          name="country"
          id="country"
          className="bg-neutral-900 rounded px-2.5 py-2 w-3/4"
        >
          <option value="finland">Finland</option>
          <option value="island">Island</option>
          <option value="greenland">Greenland</option>
          <option value="veniz">Veniz</option>
        </select>
        <select
          name="name"
          id="name"
          className="bg-neutral-900 rounded px-2.5 py-2 w-3/4 mt-3 "
        >
          <option value="helsinki">Helsinki</option>
          <option value="island">Island</option>
          <option value="greenland">Greenland</option>
          <option value="veniz">Veniz</option>
        </select>
        <div className="flex justify-center items-center space-x-4 w-full">
          <input className="input1 mr-10" type="radio" name="radio" />
          <input className="input1 mx-5" type="radio" name="radio" />
          <input className="input1 ml-10" type="radio" name="radio" />
        </div>
        <div className="flex justify-center items-center space-x-4 w-full mt-2">
          <span className="text-xs mr-7">Small</span><span className="text-xs mx-5">Medium</span><span className="text-xs ml-7">Large</span>
        </div>

        <button className="py-2 px-6 rounded border-green text-black bg-green-300 cursor-pointer hover:text-white mt-7 w-3/4 mb-5">
            Report Strom
          </button>
      </div>
    </>
  );
}

export default ReportCard;

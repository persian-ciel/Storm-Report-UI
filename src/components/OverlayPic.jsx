import React from "react";
import Phone from "../assets/iphone_16_-_free.glb";

function OverlayPic() {
  return (
    <div className="absolute top-4/12 left-3/4 -translate-x-3/5 z-10 pointer-events-none 2xl:top-4/12">
      <div className="w-[300px] md:w-[400px]">
        <model-viewer
          src={Phone}
          alt="iPhone 16 3D Model"
          style={{ width: "100%", height: "500px" }}
          className="scale-125 2xl:scale-110"
        ></model-viewer>
      </div>
    </div>
  );
}

export default OverlayPic;

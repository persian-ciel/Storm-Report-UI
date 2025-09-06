import { useState } from "react";
import Header from "./components/Header";
import Browse from "./components/Browse";
import Explore from "./components/Explore";
import Seek from "./components/Seek";
import Community from "./components/Community";
import ViewReport from "./components/ViewReport";
import OverlayPic from "./components/OverlayPic";

function App() {
  return (
    <>

      <Header />
      <Browse />
      <div className="relative">
        <OverlayPic />
        <Explore />
        <Seek />
        <Community />
      </div>
      <ViewReport />
    </>
  );
}

export default App;

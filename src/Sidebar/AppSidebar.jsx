import React from "react";
import MenuSection from "./MenuSection";
import SwitchMode from "./SwitchMode";

//Style && images
import "./styles/AppSidebar.css";

function AppSidebar() {
  return (
    <div className="app-sidebar">

      <div className="sidebar-content">
        <div className="app-logo">Logo</div>
        <MenuSection />
      </div>

        <SwitchMode />
    </div>
  );
}

export default AppSidebar;

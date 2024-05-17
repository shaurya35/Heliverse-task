import React from "react";
import "./Navbar.css";
import img from "../assets/MotionArtEffect-logo.png";

export default function Navbar() {
  return (
    <>
      <div className="navbar_outer">
        <div className="navbar">
          <div className="navbar_logo">
            <img src={img} alt="Motion Art " className="navbar_logo_img"/>
          </div>
          <div className="navbar_button">
            <a href="#" className="navbar_button_link">
              Purchase Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

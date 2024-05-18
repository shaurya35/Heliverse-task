import React from "react";
import "./Cards.css";
import img1 from "../assets/motionarteffect-img9.png"
import img2 from "../assets/motionarteffect-img6.png"
import img3 from "../assets/motionarteffect-img7.png"

export default function Cards() {
  return (
    <>
      <footer className="footer1_outer">
        <div className="footer1">
          <div className="footer1_text">
            An All-Round Plugin With <br />
            Powerful Features
          </div>
          <div className="footer1_detail">
            Whether you're seasoned web developer or just starting out, Motion
            Art for <br /> Elementor seamlessly integrates with the Elementor
            platform, providing you <br />
            with a seamless and intuitive experiences.
          </div>
        </div>
      </footer>

      <footer className="footer2_outer">
        <div className="footer2">
          <div className="footer2_card1">
            <div className="footer2_card1_inner">
              <div className="footer2_card1_image">
                <img src={img1} alt="" />
              </div>
              <div className="footer2_card1_title">Light Weight</div>
              <div className="footer2_card1_content">Motion Art for Elementor is designed to be <br />Lightweight.</div>
            </div>
          </div>
          <div className="footer2_card2">
            <div className="footer2_card2_inner">
              <div className="footer2_card2_image">
                <img src={img2} alt="" />
              </div>
              <div className="footer2_card2_title">100% Responsive</div>
              <div className="footer2_card2_content">Create a consistent visual experience <br /> across all devices.</div>
            </div>
          </div>
          <div className="footer2_card3">
            <div className="footer2_card3_inner">
              <div className="footer2_card3_image">
                <img src={img3} alt="" />
              </div>
              <div className="footer2_card3_title">User Friendly Interface</div>
              <div className="footer2_card3_content">Ensure a smooth experience for both <br />applicants and administrators.</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

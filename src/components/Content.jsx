import React from "react";
import "./Content.css";
import img from "../assets/motionarteffect-img5.png";

export default function Content() {
  return (
    <>
      <article className="article_outer">
        <div className="article">
          <div className="article_box1">
            <div className="box1_b1">
              Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm Your
              Visitors
            </div>
            <div className="box1_b2">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse <br /> your website with visually stunning
              motion art elements.
            </div>
            <div className="box1_b3">
              <a href="#" className="b3_link">
                Purchase From Envato&nbsp;{" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L10.59 3.41L17.17 10H2V12H17.17L10.59 18.59L12 20L22 10L12 2Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="article_box2">
            <img src={img} alt="img" />
          </div>
        </div>
      </article>
    </>
  );
}

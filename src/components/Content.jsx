import React from "react";
import "./Content.css";
import img from "../assets/motionarteffect-img5.png";
import card2 from "../assets/motionarteffect-img10.png";
import card1 from "../assets/motionarteffect-img11.png";

export default function Content() {
  return (
    <>
      <article className="article_outer">
        <div className="article">
          <div className="article_box1">
            <div className="article_box1_b1">
              Turn Your Cursor Into A Colorful <br /> Magic Wand & Charm Your
              Visitors
            </div>
            <div className="article_box1_b2">
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse <br /> your website with visually
              stunning motion art elements.
            </div>
            <div className="article_box1_b3">
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
      <article className="article2_outer">
        <div className="article2">
          <div className="article2_heading">
            Apply On Any Section Or Enable <br /> For Whole Page
          </div>
          <div className="article2_bigcard">
            <div className="bigcard_card1">
              <div className="card1__render">
                <div className="card1__heading">Apply On Section</div>
                <div className="card1__content">
                  Apply on section is a game-changer, offering an unparalleled
                  way to <br />
                  manage applications directly from your website.
                </div>
                <div className="card1__display">
                  <img src={card1} alt="card" />
                </div>
              </div>
            </div>
            <div className="bigcard_card2">
              <div className="card2__render">
                <div className="card2__heading">Apply On Page</div>
                <div className="card2__content">
                  Take your website to new heights with Motion Art for Elementor.<br />
                  Embrace the power of motion and animation.
                </div>
                <div className="card2__display">
                  <img src={card2} alt="card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

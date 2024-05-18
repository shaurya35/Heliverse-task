import React, {useEffect} from 'react'
import "./Hero.css";
import img1 from "../assets/motionarteffect-img2.png";
import img2 from "../assets/motionarteffect-img1.png";
import img3 from "../assets/motionarteffect-img3.png";
import stars from "../assets/motionarteffect-img4.png";
import { gsap } from 'gsap'

export default function Hero() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.from('.box2_b1_text1', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
      });

      gsap.from('.box1_b1_text1', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
      });

      gsap.from('.box1_b1_text2', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        delay: 0.5,
      });

      gsap.from('.box2_b1_text2', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        delay: 1,
      });

      gsap.from('.box2_b2', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 1.5,
      });

      gsap.from('.prop1_text1', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 2,
      });

      gsap.from('.prop2_b1', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 2.5,
      });

      gsap.from('.prop2_b2', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 2.7,
      });

      gsap.from('.prop2_b3', {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 2.9,
      });

    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <section className="section_outer">
        <div className="section">
          <div className="section_box1">
            <div className="box1_b1">
              <div className="box1_b1_text1">
                Transform <br /> Your Website
              </div>
              <div className="box1_b1_text2">With Motion Art <br />Effect</div>
            </div>
            <div className="box1_b2"></div>
          </div>

          <div className="section_box2">
            <div className="box2_b1">
              <div className="box2_b1_text1">
                Attract Your <br /> Visitors Attention <br /> With Colorful
              </div>
              <div className="box2_b1_text2">Motion Art Effect</div>
            </div>
            <div className="box2_b2">
              Unleash the power of creativity with Motion Art for Elementor -
              your <br /> ultimate solution for seamlessly integrating
              captivating animations into <br /> your website
            </div>
          </div>
        </div>
      </section>
      <section className="section2_outer">
        <div className="section2">
          <div className="section2_prop1">
            <div className="prop1_text1">
              Trusted by thousand of users around the world
            </div>
          </div>
          <div className="section2_prop2 ">
            <div className="prop2_b1 width-30">
              <div className="b1_img width-according">
                <img src={img1} alt="img" />
              </div>
              <div className="b1_content flex-column">
                <div className="b1_content_stars height-stars">
                  <img src={stars} alt="" />
                </div>
                <div className="b1_content_rating height-rating">
                  <span className="rating_number">
                    4.5&nbsp;
                  </span>
                  Score, 9 Reviews
                </div>
              </div>
            </div>
            <div className="prop2_b2 width-30">
              <div className="b2_img width-according">
                <img src={img2} alt="img" />
              </div>
              <div className="b2_content flex-column">
                <div className="b2_content_stars height-stars">
                  <img src={stars} alt="img" />
                </div>
                <div className="b2_content_rating height-rating">
                <span className="rating_number ">
                    4.5&nbsp;
                  </span>
                  Score, 9 Reviews
                </div>
              </div>
            </div>
            <div className="prop2_b3 width-30">
              <div className="b3_img width-according">
                <img src={img3} alt="img" />
              </div>
              <div className="b3_content flex-column">
                <div className="b3_content_stars height-stars">
                  <img src={stars} alt="img" />
                </div>
                <div className="b3_content_rating height-rating">
                <span className="rating_number">
                    4.5&nbsp;
                  </span>
                  Score, 9 Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

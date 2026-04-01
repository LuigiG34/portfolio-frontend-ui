import Social from "../social/social";
import { Leaf } from "../svg";
import { Link } from "react-router-dom";

export default function AboutMeHero() {
  return (
    <div className="ab-2-hero-area ab-2-hero-ptb  p-relative">
      <div className="ab-2-hero-social-wrap d-none d-lg-block">
        <div className="ab-2-hero-social">
          <Social />
        </div>
        <div className="ab-2-hero-social-text">
          <span>Follow us</span>
        </div>
      </div>
      <div className="container">
        <div className="ab-2-hero-main">
          <div className="row">
            <div className="col-xl-7">
              <div className="ab-2-hero-title-box p-relative">
                <span
                  className="ab-2-hero-subtitle"
                  data-stagger="0.05"
                  data-on-scroll="0"
                  data-delay="0.6"
                >
                  What's up
                </span>
                <h4
                  className="ab-2-hero-title tp-char-animation"
                  data-stagger="0.05"
                  data-on-scroll="0"
                  data-delay="0.6"
                >
                  Get to know me
                </h4>
                <Link className="tp-btn-white background-black" to="#">
                  Download CV
                  <span>
                    <Leaf />
                  </span>
                </Link>
                <div className="ab-2-hero-shape-1">
                  <img
                    src="/assets/img/inner-about/hero/hero-2-shape-1.jpg"
                    alt="shape"
                  />
                </div>
                <div className="ab-2-hero-shape-2">
                  <img
                    className="tp-zoom-in-out"
                    src="/assets/img/inner-about/hero/hero-2-shape-2.jpg"
                    alt="shape"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-10 offset-xl-2">
              <div className="ab-2-hero-thumb-wrap p-relative">
                <img
                  src="/assets/img/inner-about/hero/hero-2-1.jpg"
                  alt="shape"
                  data-speed="0.9"
                  style={{ height: "auto" }}
                />
                <h4
                  className="ab-2-hero-title tp-char-animation"
                  data-stagger="0.05"
                  data-on-scroll="0"
                  data-delay="0.6"
                >
                  — a little <br /> better
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

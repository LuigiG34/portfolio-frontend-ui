import { UpArrow } from "../svg";
import { Link } from "react-router-dom";

// brand images
const brand_images = [
  "/assets/img/inner-brand/brand-1.jpg",
  "/assets/img/inner-brand/brand-2.jpg",
  "/assets/img/inner-brand/brand-3.jpg",
  "/assets/img/inner-brand/brand-4.jpg",
  "/assets/img/inner-brand/brand-5.jpg",
  "/assets/img/inner-brand/brand-6.jpg",
  "/assets/img/inner-brand/brand-7.jpg",
  "/assets/img/inner-brand/brand-8.jpg",
  "/assets/img/inner-brand/brand-9.jpg",
  "/assets/img/inner-brand/brand-10.jpg",
  "/assets/img/inner-brand/brand-11.jpg",
  "/assets/img/inner-brand/brand-12.jpg",
  "/assets/img/inner-brand/brand-13.jpg",
  "/assets/img/inner-brand/brand-14.jpg",
  "/assets/img/inner-brand/brand-15.jpg",
];

export default function BrandMainArea() {
  return (
    <div className="bd-brand-area">
      <div className="container">
        <div className="row gx-80 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
          {brand_images.map((b, i) => (
            <div className="col" key={i}>
              <div className="bd-brand-item mb-80">
                <img src={b} alt="brand-img" style={{ height: "auto" }} />
              </div>
            </div>
          ))}
        </div>
        <div className="row justify-content-center">
          <div className="bd-brand-btn-box mb-100 d-flex justify-content-center">
            <div className="tp-hover-btn-wrapper">
              <Link
                className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                to="#"
              >
                <span className="tp-btn-circle-text">
                  More <br /> Browser
                </span>
                <span className="tp-btn-circle-icon">
                  <UpArrow />
                </span>
                <i className="tp-btn-circle-dot"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

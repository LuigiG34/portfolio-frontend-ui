import { Link } from "react-router-dom";

const insta_images = [
  "/assets/img/inner-shop/instagram/insta-1.jpg",
  "/assets/img/inner-shop/instagram/insta-2.jpg",
  "/assets/img/inner-shop/instagram/insta-3.jpg",
  "/assets/img/inner-shop/instagram/insta-4.jpg",
  "/assets/img/inner-shop/instagram/insta-5.jpg",
  "/assets/img/inner-shop/instagram/insta-6.jpg",
];
export default function InstagramTwo() {
  return (
    <div className="tp-shop-insta-area pb-90">
      <div className="container container-1300">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="tp-shop-insta-title-box mb-70 text-center">
              <span>Follow Us</span>
              <h4 className="tp-shop-insta-title">
                <Link to="mailto:@liko.shoes">@liko.shoes</Link>
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          {insta_images.map((src, i) => (
            <div key={i} className="col-md-2 col-4">
              <div className="tp-shop-insta-thumb mb-30">
                <Link to="#">
                  <img
                    data-speed={i % 2 === 0 ? "1.1" : "1.2"}
                    src={src}
                    alt="img"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

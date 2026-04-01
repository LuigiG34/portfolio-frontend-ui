import { Leaf } from "../svg";
import { Link } from "react-router-dom";

export default function InstagramArea() {
  // instagram images
  const instagram_images = [
    { id: 1, img: "/assets/img/home-02/instagram/insta-inner-1.jpg" },
    { id: 2, img: "/assets/img/home-02/instagram/insta-inner-2.jpg" },
    { id: 3, img: "/assets/img/home-02/instagram/insta-inner-3.jpg" },
    { id: 4, img: "/assets/img/home-02/instagram/insta-inner-4.jpg" },
    { id: 5, img: "/assets/img/home-02/instagram/insta-inner-5.jpg" },
    { id: 6, img: "/assets/img/home-02/instagram/insta-inner-6.jpg" },
    { id: 7, img: "/assets/img/home-02/instagram/insta-inner-7.jpg" },
  ];

  return (
    <div className="tp-instagram-area tp-instagram-ptb text-center">
      <div className="tp-instagram-thumb-wrap p-relative">
        {instagram_images.map((item) => (
          <div
            key={item.id}
            className={`tp-instagram-thumb-inner-${item.id} d-none d-xl-block`}
          >
            <img src={item.img} alt="inst-img" />
          </div>
        ))}
        <div className="tp-instagram-thumb-inner-8 d-none d-xl-block">
          <Link to="#">
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
        <div className="tp-instagram-thumb">
          <img src="/assets/img/home-02/instagram/insta-1.jpg" alt="inst-img" />
        </div>
        <div className="tp-instagram-content-wrap text-start">
          <div className="tp-instagram-title-box">
            <span className="tp-instagram-subtitle">INSTAGRAM</span>
            <h4 className="tp-instagram-title">@likoagency</h4>
          </div>
          <div className="tp-instagram-content">
            <p>
              Become a part of our stories! <br /> Join the adventure.
            </p>
            <Link className="tp-btn-white background-black" to="#">
              Follow Us
              <span>
                <Leaf />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

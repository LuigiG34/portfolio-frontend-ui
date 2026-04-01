import React from "react";
import { Behance, CloseTwo, Dribble, InstagramTwo, Youtube } from "../svg";

// images
import MobileMenus from "./mobile-menus";
import { Link } from "react-router-dom";

const gallery_images = [
  '/assets/img/menu/offcanvas/offcanvas-1.jpg',
  '/assets/img/menu/offcanvas/offcanvas-2.jpg',
  '/assets/img/menu/offcanvas/offcanvas-3.jpg',
  '/assets/img/menu/offcanvas/offcanvas-4.jpg',
];

// prop type
type IProps = {
  openOffcanvas: boolean;
  setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileOffcanvas({ openOffcanvas, setOpenOffcanvas }: IProps) {
  return (
    <>
      <div className={`tp-offcanvas-area ${openOffcanvas ? "opened" : ""}`}>
        <div className="tp-offcanvas-wrapper">
          <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
            <div className="tp-offcanvas-logo">
              <Link to="#">
                <img src={'/assets/img/logo/logo.png'} alt="logo" />
              </Link>
            </div>
            <div className="tp-offcanvas-close">
              <button
                className="tp-offcanvas-close-btn"
                onClick={() => setOpenOffcanvas(false)}
              >
                <CloseTwo />
              </button>
            </div>
          </div>
          <div className="tp-offcanvas-main">
            <div className="tp-offcanvas-content">
              <h3 className="tp-offcanvas-title">Hello There!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
            <div className="tp-main-menu-mobile d-xl-none">
              <MobileMenus />
            </div>
            <div className="tp-offcanvas-gallery">
              <div className="row gx-2">
                {gallery_images.map((item, i) => (
                  <div className="col-md-3 col-3" key={i}>
                    <div className="tp-offcanvas-gallery-img fix">
                      <Link to="#">
                        <img src={item} alt="gallery-img" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="tp-offcanvas-contact">
              <h3 className="tp-offcanvas-title sm">Information</h3>

              <ul>
                <li>
                  <Link to="tel:1245654">+ 4 20 7700 1007</Link>
                </li>
                <li>
                  <Link to="mailto:hello@diego.com">hello@diego.com</Link>
                </li>
                <li>
                  <Link to="#">Avenue de Roma 158b, Lisboa</Link>
                </li>
              </ul>
            </div>
            <div className="tp-offcanvas-social">
              <h3 className="tp-offcanvas-title sm">Follow Us</h3>
              <ul>
                <li>
                  <Link to="#"><InstagramTwo /></Link>
                </li>
                <li>
                  <Link to="#"><Dribble /></Link>
                </li>
                <li>
                  <Link to="#"> <Behance /></Link>
                </li>
                <li>
                  <Link to="#"><Youtube /></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpenOffcanvas(false)}
        className={`body-overlay ${openOffcanvas ? "opened" : ""}`}
      ></div>
    </>
  );
}

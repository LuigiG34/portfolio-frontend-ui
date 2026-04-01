import { useState } from "react";
import { Link } from "react-router-dom";
import { MenuTwo, UpArrowTwo } from "../../component/svg";
import MobileOffcanvasTwo from "../../component/offcanvas/mobile-offcanvas-2";

export default function HeaderSeven() {
  const [openOffCanvas, setOpenOffcanvas] = useState(false);
  return (
    <>
      <header>
        <div className="tp-header-7-area d-none d-xl-block">
          <div className="tp-header-7-wrap">
            <div className="tp-header-7-logo">
              <Link to="/">
                <img src="/assets/img/logo/logo-white-rotate.png" alt="logo" />
              </Link>
            </div>
            <div className="tp-header-7-menubar">
              <button onClick={() => setOpenOffcanvas(true)} className="tp-offcanvas-open-btn">
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="tp-header-7-btn-box">
              <Link className="tp-btn-white-sm" to="#">
                Let’s talk
                <span>
                  <MenuTwo />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="tp-header-7-area tp-header-7-lg-area d-xl-none">
          <div className="tp-header-7-wrap">
            <div className="tp-header-7-logo tp-header-logo">
              <Link to="/">
                <img src="/assets/img/logo/logo-white.png" alt="logo" />
              </Link>
            </div>
            <div className="tp-header-7-menubar">
              <button onClick={() => setOpenOffcanvas(true)} className="tp-offcanvas-open-btn">
                <span></span>
                <span></span>
              </button>
            </div>
            <div className="tp-header-7-btn-box d-none d-md-block">
              <Link className="tp-btn-white-sm" to="#">
                Let’s talk
                <span>
                  <UpArrowTwo />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* off canvas */}
      <MobileOffcanvasTwo openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffcanvas} />
      {/* off canvas */}
    </>
  );
}

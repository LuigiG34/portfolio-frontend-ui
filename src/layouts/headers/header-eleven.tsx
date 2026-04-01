import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../../component/svg";
import HeaderMenus from "./header-menus";
import CartOffcanvas from "../../component/offcanvas/cart-offcanvas";
import MobileOffcanvas from "../../component/offcanvas/mobile-offcanvas";
import useStickyHeader from "../../hooks/use-sticky-header";

// prop type 
type IProps = {
  transparent?: boolean;
  cls?: string;
}
export default function HeaderEleven({ transparent = false, cls = '' }: IProps) {
  const { isSticky, headerFullWidth } = useStickyHeader(20);
  const [openCartMini, setOpenCartMini] = useState(false);
  const [openOffCanvas, setOpenOffCanvas] = useState(false);

  useEffect(() => {
    headerFullWidth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <header className="tp-header-height z-index-5">
        <div
          id="header-sticky"
          className={`tp-inner-header-area ${cls} ${transparent ? 'transparent' : 'tp-inner-header-style-2'} tp-inner-header-mob-space ${isSticky ? "header-sticky" : ""}`}
        >
          <div className="container container-1800">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-logo tp-header-logo">
                  <Link className={`${transparent ? 'ab-logo-1' : 'logo-1'}`} to="/">
                    <img src={transparent ? "/assets/img/logo/logo-white.png" : "/assets/img/logo/logo.png"} alt="logo" />
                  </Link>
                  <Link className={`${transparent ? 'ab-logo-2' : 'logo-2'}`} to="/">
                    <img src={transparent ? "/assets/img/logo/logo.png" : "/assets/img/logo/logo-white.png"} alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 d-none d-xl-block">
                <div className="tp-inner-header-right-wrap text-center">
                  <div className="tp-inner-header-menu header-main-menu">
                    <nav className="tp-main-menu-content">
                      {/* header menus */}
                      <HeaderMenus />
                      {/* header menus */}
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-6 col-md-6 col-6">
                <div className="tp-inner-header-right-action text-end">
                  <ul>
                    <li>
                      <div className="tp-inner-cart">
                        <a
                          onClick={() => setOpenCartMini(true)}
                          className="cartmini-open-btn pointer"
                        >
                          <span className="p-relative">
                            <Cart />
                            <i>0</i>
                          </span>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="tp-inner-bar tp-header-bar">
                        <button onClick={() => setOpenOffCanvas(true)} className="tp-offcanvas-open-btn">
                          <span></span>
                          <span></span>
                        </button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* cart mini */}
      <CartOffcanvas openCartMini={openCartMini} setOpenCartMini={setOpenCartMini} />
      {/* cart mini */}

      {/* off canvas */}
      <MobileOffcanvas openOffcanvas={openOffCanvas} setOpenOffcanvas={setOpenOffCanvas} />
      {/* off canvas */}
    </>
  );
}

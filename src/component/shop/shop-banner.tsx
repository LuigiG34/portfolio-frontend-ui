import { Link } from "react-router-dom";

export default function ShopBanner() {
  return (
    <div className="tp-shop-banner-area pb-90">
      <div className="container container-1300">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-shop-banner-left p-relative mb-30">
              <div className="tp-shop-banner-thumb fix">
                <img src="/assets/img/inner-shop/banner/banner-1.jpg" alt="banner-img" />
              </div>
              <div className="tp-shop-banner-content">
                <h4 className="tp-shop-banner-title">Sale</h4>
                <span>20% Off all Shoes</span>
                <Link className="tp-shop-btn" to="/shop">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className="tp-shop-banner-right mb-30">
              <div className="tp-shop-banner-thumb fix mb-40">
                <img src="/assets/img/inner-shop/banner/banner-2.jpg" alt="banner-img" />
              </div>
              <div className="tp-shop-banner-content text-center">
                <h4 className="tp-shop-banner-title sm tp-text-black">
                  Special Offer
                </h4>
                <span className="text-color-black">
                  Up to 65% off first order
                </span>
                <Link
                  className="tp-shop-btn border-style"
                  to="/shop"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

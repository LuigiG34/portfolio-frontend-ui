import DetailsRightWrap from "./details-right-wrap";

const tab_images = [
  "/assets/img/inner-shop/shop-details/tab-img/tab-1.png",
  "/assets/img/inner-shop/shop-details/tab-img/tab-2.png",
  "/assets/img/inner-shop/shop-details/tab-img/tab-3.png",
  "/assets/img/inner-shop/shop-details/tab-img/tab-4.png",
  "/assets/img/inner-shop/shop-details/tab-img/tab-5.png",
];
const nav_images = [
  "/assets/img/inner-shop/shop-details/tab-img/nav-1.png",
  "/assets/img/inner-shop/shop-details/tab-img/nav-2.png",
  "/assets/img/inner-shop/shop-details/tab-img/nav-3.png",
  "/assets/img/inner-shop/shop-details/tab-img/nav-4.png",
  "/assets/img/inner-shop/shop-details/tab-img/nav-5.png",
];

export default function ShopDetailsAreaTwo() {
  return (
    <div className="tp-shop-details-2-area tp-product-details-2-style pt-170">
      <div className="container container-1300">
        <div className="row align-items-start">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-product-details-thumb-wrapper tp-tab">
              <div
                className="tab-content m-img mb-20"
                id="productDetailsNavContent"
              >
                {tab_images.map((imgSrc, i) => (
                  <div
                    key={i}
                    className={`tab-pane fade ${i === 0 ? "show active" : ""}`}
                    id={`nav-${i + 1}`}
                    role="tabpanel"
                    aria-labelledby={`nav-${i + 1}-tab`}
                    tabIndex={0}
                  >
                    <div className="tp-product-details-nav-main-thumb">
                      <img
                        className="w-100"
                        src={imgSrc}
                        alt="tab-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <nav>
                <div
                  className="nav nav-tabs"
                  id="productDetailsNavThumb"
                  role="tablist"
                >
                  {nav_images.map((imgSrc, i) => (
                    <button
                      key={i}
                      className={`nav-link ${i === 0 ? "active" : ""}`}
                      id={`nav-${i + 1}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#nav-${i + 1}`}
                      type="button"
                      role="tab"
                      aria-controls={`nav-${i + 1}`}
                      aria-selected={i === 0 ? "true" : "false"}
                      tabIndex={i === 0 ? 0 : -1}
                    >
                      <img
                        className="w-100"
                        src={imgSrc}
                        alt="nav-img"
                      />
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6">
            <DetailsRightWrap id={1} />
          </div>
        </div>
      </div>
    </div>
  );
}
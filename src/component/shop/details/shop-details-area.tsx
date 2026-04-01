import DetailsRightWrap from "./details-right-wrap";
import type { IdProps } from "../../../types/custom-d-t";

const shop_details_images = [
  "/assets/img/inner-shop/shop-details/shop-details-1.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-2.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-3.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-4.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-5.jpg",
  "/assets/img/inner-shop/shop-details/shop-details-6.jpg",
];

export default function ShopDetailsArea({ id }: IdProps) {
  return (
    <div className="tp-shop-details-area tp-shop-details-scroll-height pt-100">
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-xxl-8 col-xl-7">
            <div className="tp-shop-details-left-wrap">
              <div className="row gx-5">
                {shop_details_images.map((imgSrc, i) => (
                  <div key={i} className="col-xl-6 col-lg-6 col-md-6">
                    <div className="tp-shop-details-left-thumb mb-5">
                      <img
                        src={imgSrc}
                        alt="shop-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5">
            <DetailsRightWrap id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

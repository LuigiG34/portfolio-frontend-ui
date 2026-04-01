import { Link } from "react-router-dom";

// brand images
const brand_images = [
  "/assets/img/inner-shop/shop-sidebar/brand/brand-1.png",
  "/assets/img/inner-shop/shop-sidebar/brand/brand-2.png",
  "/assets/img/inner-shop/shop-sidebar/brand/brand-3.png",
  "/assets/img/inner-shop/shop-sidebar/brand/brand-4.png",
  "/assets/img/inner-shop/shop-sidebar/brand/brand-5.png",
  "/assets/img/inner-shop/shop-sidebar/brand/brand-6.png",
  "/assets/img/inner-shop/shop-sidebar/brand/brand-7.png",
  "/assets/img/inner-shop/shop-sidebar/brand/brand-8.png"
];

export default function ShopBrands() {
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Popular Brands</h3>
      <div className="tp-shop-widget-content ">
        <div className="tp-shop-widget-brand-list d-flex align-items-center justify-content-between flex-wrap">
          {brand_images.map((item, i) => (
            <div className="tp-shop-widget-brand-item" key={i}>
              <Link to="#">
                <img src={item} alt="brand-img" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

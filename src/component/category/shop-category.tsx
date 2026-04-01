import { Link } from "react-router-dom";

const category_data = [
  {
    id: 1,
    img: "/assets/img/inner-shop/category/category-1.jpg",
    title: "Shop men",
  },
  {
    id: 2,
    img: "/assets/img/inner-shop/category/category-2.jpg",
    title: "Shop Women",
  },
  {
    id: 3,
    img: "/assets/img/inner-shop/category/category-3.jpg",
    title: "Shop kids",
  },
];

export default function ShopCategory() {
  return (
    <div className="tp-shop-category-area pt-100 pb-90">
      <div className="container container-1720">
        <div className="row">
          {category_data.map((item) => (
            <div key={item.id} className="col-xl-4 col-lg-6 col-md-6 mb-30">
              <div className="tp-shop-category-item p-relative fix">
                <img src={item.img} alt="category-img" style={{ height: "auto" }} />
                <Link className="tp-btn-shop-category" to="/shop">
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

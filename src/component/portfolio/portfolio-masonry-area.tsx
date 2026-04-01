import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useIsotop } from "../../hooks/use-isotop";
import { UpArrow } from "../svg";

// data
const portfolio_masonry_data = [
  {
    id: 1,
    title: "D&T ASSOCIATION",
    subtitle: "Creative",
    img: "/assets/img/inner-project/masonary/masonary-1.jpg",
  },
  {
    id: 2,
    title: "D&T ASSOCIATION",
    subtitle: "Creative",
    img: "/assets/img/inner-project/masonary/masonary-2.jpg",
  },
  {
    id: 3,
    title: "D&T ASSOCIATION",
    subtitle: "Creative",
    img: "/assets/img/inner-project/masonary/masonary-3.jpg",
  },
  {
    id: 4,
    title: "D&T ASSOCIATION",
    subtitle: "Creative",
    img: "/assets/img/inner-project/masonary/masonary-4.jpg",
  },
  {
    id: 5,
    title: "D&T ASSOCIATION",
    subtitle: "Creative",
    img: "/assets/img/inner-project/masonary/masonary-5.jpg",
  },
  {
    id: 6,
    title: "D&T ASSOCIATION",
    subtitle: "Creative",
    img: "/assets/img/inner-project/masonary/masonary-6.jpg",
  },
];
export default function PortfolioMasonryArea() {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);

  return (
    <div className="pm-project-masonary-area">
      <div className="container container-1800">
        <div className="row gx-0 grid-2" ref={isotopContainer}>
          {portfolio_masonry_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-${item.id === 6 ? 12 : 6} grid-item`}
            >
              <div className="pm-project-masonary-item p-relative">
                <div className="fix">
                  <img
                    src={item.img}
                    alt="masonry-img"
                  />
                </div>
                <div className="pm-project-masonary-content">
                  <span className="pm-project-masonary-subtitle">
                    {item.subtitle}
                  </span>
                  <h4 className="pm-project-masonary-title">
                    <Link to="/portfolio-details-comparison">{item.title}</Link>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-projct-5-2-btn-box mt-50 d-flex justify-content-center">
              <div className="tp-hover-btn-wrapper">
                <Link
                  className="tp-btn-circle style-2 tp-hover-btn-item tp-hover-btn"
                  to="/portfolio-grid-col-4"
                >
                  <span className="tp-btn-circle-text">
                    More
                    <br />
                    Projects
                  </span>
                  <span className="tp-btn-circle-icon">
                    <UpArrow />
                  </span>
                  <i className="tp-btn-circle-dot"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

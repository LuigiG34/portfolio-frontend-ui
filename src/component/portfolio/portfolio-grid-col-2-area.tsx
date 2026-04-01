import { useEffect } from "react";
import { Link } from "react-router-dom";
import { UpArrow } from "../svg";
import { useIsotop } from "../../hooks/use-isotop";

// data
const portfolio_data = [
  {
    id: 1,
    img: "/assets/img/inner-project/portfolio-col-2/port-1.jpg",
    category: "Shooting",
    title: "Roadtrip",
    year: "2024",
    show: "cat2 cat4 cat3",
  },
  {
    id: 2,
    img: "/assets/img/inner-project/portfolio-col-2/port-2.jpg",
    category: "Studio",
    title: "Fashion",
    year: "2023",
    show: "cat3 cat1 cat3",
  },
  {
    id: 3,
    img: "/assets/img/inner-project/portfolio-col-2/port-3.jpg",
    category: "Agency",
    title: "Tesla",
    year: "2022",
    show: "cat4 cat4 cat2 cat3",
  },
  {
    id: 4,
    img: "/assets/img/inner-project/portfolio-col-2/port-4.jpg",
    category: "Studio",
    title: "Cosmetic",
    year: "2024",
    show: "cat1 cat4 cat3",
  },
  {
    id: 5,
    img: "/assets/img/inner-project/portfolio-col-2/port-5.jpg",
    category: "Visual",
    title: "Porsche",
    year: "2024",
    show: "cat4 cat1 cat2",
  },
  {
    id: 6,
    img: "/assets/img/inner-project/portfolio-col-2/port-6.jpg",
    category: "Agency",
    title: "Fiedunit",
    year: "2024",
    show: "cat1 cat2 cat3 cat4",
  },
];

export default function PortfolioGridColTwoArea() {
  const { initIsotop, isotopContainer } = useIsotop();

  useEffect(() => {
    initIsotop();
  }, [initIsotop]);
  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130">
      <div className="container container-1530">
        <div className="row justify-content-center">
          <div className="col-xl-8">
            <div className="portfolio-filter masonary-menu d-flex justify-content-center mb-40">
              <button data-filter="*" className="active">
                <span>SHOW ALL</span>
              </button>
              <button data-filter=".cat1">
                <span>AGENCY</span>
              </button>
              <button data-filter=".cat2">
                <span>Visual</span>
              </button>
              <button data-filter=".cat3">
                <span>SHOOTING</span>
              </button>
              <button data-filter=".cat4">
                <span>STUDIO</span>
              </button>
            </div>
          </div>
        </div>
        <div className="row grid" ref={isotopContainer}>
          {portfolio_data.map((item) => (
            <div
              key={item.id}
              className={`col-xl-6 col-lg-6 col-md-6 grid-item ${item.show}`}
            >
              <div className="tp-project-5-2-thumb anim-zoomin-wrap mb-30 not-hide-cursor p-relative" data-cursor="View<br>Demo">
                <Link to="/portfolio-details-1" className="cursor-hide">
                  <img
                    className="anim-zoomin"
                    src={item.img}
                    alt="port-img"
                  />
                  <div className="tp-project-5-2-category tp_fade_anim">
                    <span>{item.category}</span>
                  </div>
                  <div className="tp-project-5-2-content tp_fade_anim">
                    <span className="tp-project-5-2-meta">{item.year}</span>
                    <h4 className="tp-project-5-2-title-sm">{item.title}</h4>
                  </div>
                </Link>
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
                  to="/portfolio-grid-col-4-fullwidth"
                >
                  <span className="tp-btn-circle-text">
                    More <br /> Projects
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

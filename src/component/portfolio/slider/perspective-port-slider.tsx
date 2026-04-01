import { Fragment } from "react";
import { Share } from "../../svg";
import { Link } from "react-router-dom";

const portfolio_data = [
  {
    id: 1,
    title: "Keepgrading",
    category: "Branding",
    image: "/assets/img/home-09/slider/slider-1.jpg",
  },
  {
    id: 2,
    title: "Fiedunit",
    category: "Branding",
    image: "/assets/img/home-09/slider/slider-2.jpg",
  },
  {
    id: 3,
    title: "Roadtrip",
    category: "Branding",
    image: "/assets/img/home-09/slider/slider-3.jpg",
  },
  {
    id: 4,
    title: "Perspective",
    category: "Photography",
    image: "/assets/img/home-09/slider/slider-4.jpg",
  },
  {
    id: 5,
    title: "Roadtrip",
    category: "Branding",
    image: "/assets/img/home-09/slider/slider-5.jpg",
  },
];
export default function PerspectivePortfolioSlider() {
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <Fragment>
      <div className="tp-portfolio-9-area">
        <div className="container container-1685">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-perspective-slider">
                {portfolio_data.map((item) => (
                  <div key={item.id} className="tp-slide">
                    <div className="tp-slide-inner">
                      <div
                        className="tp-image"
                        data-background="assets/img/home-09/slider/slider-1.jpg"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className="tp-slider-content">
                          <span className="tp-portfolio-9-category tp_reveal_anim">
                            {item.category}
                          </span>
                          <h1
                            className="tp-portfolio-9-title tp_reveal_anim not-hide-cursor"
                            data-cursor="View<br>Demo"
                          >
                            <Link
                              className="cursor-hide"
                              to="/portfolio-showcase-details-2"
                            >
                              {item.title}
                            </Link>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tp-portfolio-9-social-wrap">
        <div className="container container-1685">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
              <div className="tp-portfolio-9-social-info">
                <span>
                  Follow Us{" "}
                  <Share />
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-6">
              <div className="tp-portfolio-9-scroll text-end">
                <Link onClick={scrollTop} to="#">(Scroll)</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

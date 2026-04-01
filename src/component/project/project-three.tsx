import { Link } from "react-router-dom";

// portfolio data
const portfolio_data = [
  {
    id: 1,
    title: "Silkvision",
    img: "/assets/img/home-04/portfolio/port-1.jpg",
  },
  {
    id: 2,
    title: "Egatan",
    img: "/assets/img/home-04/portfolio/port-2.jpg",
  },
  {
    id: 3,
    title: "Métrica",
    img: "/assets/img/home-04/portfolio/port-3.jpg",
  },
  {
    id: 4,
    title: "Fiedunit",
    img: "/assets/img/home-04/portfolio/port-4.jpg",
  },
];
export default function ProjectThree() {
  return (
    <div
      className="tp-project-4-area pb-120 project-panel-area"
      style={{ backgroundImage: "url(/assets/img/home-04/brand/overly.png)" }}
    >
      <div className="container-fluid p-0">
        <div className="row g-0">
          <div className="col-xl-12">
            {portfolio_data.map((item) => (
              <div key={item.id} className="tp-project-4-bg project-panel">
                <Link to="/portfolio-details-1">
                  <div className="tp-project-4-thumb">
                    <img src={item.img} alt="port-thumb" />
                  </div>
                  <div className="tp-project-4-content z-index">
                    <h4 className="tp-project-4-title tp_reveal_anim-2">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

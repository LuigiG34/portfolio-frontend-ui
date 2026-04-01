import { Link } from "react-router-dom";
import portfolio_data from "../../data/portfolio-data";

// prop type 
type IProps = {
  style_2?: boolean;
}

export default function PortfolioGridFourColArea({ style_2 = false }: IProps) {
  return (
    <div className="tp-project-5-2-area tp-project-5-2-pt pb-130 pt-130 black-bg">
      <div className={`container container-${style_2 ? '1800' : '1530'}`}>

        <div className="row">
          <div className="col-xl-12">
            <div className="tp-mission-title-box mb-80 text-center">
              <h4 className="tp-about-5-title tp_fade_bottom p-relative">
                Mes <br /> réalisations
              </h4>
            </div>
          </div>
        </div>


        <div className="row">
          {portfolio_data.slice(0, 8).map((item) => (
            <div key={item.id} className="col-xl-3 col-lg-6 col-md-6">
              <div className="mb-30 p-relative not-hide-cursor">
                <div className="tp_img_reveal cursor-hide">
                  <div className="tp_img_reveal">
                    <img
                      src={item.img}
                      alt="prd-img"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                  
                  
                  <div className="tp-project-5-2-content">
                    <span className="tp-project-5-2-meta">Mediabat <span>lien</span></span>
                    <div>Stack</div>
                  </div>
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
                  to="/portfolio-grid-col-2"
                >
                  <span className="tp-btn-circle-text">
                    Voir plus
                  </span>
                  <span className="tp-btn-circle-icon">
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

import { Link } from "react-router-dom";


// service data
const service_data = [
  {
    id: 1,
    title: "Bac STMG option Gestion et Finance",
    desc: "Lycée Jules Guesde (2020)",
    icon: '/assets/img/home-01/service/service-icon-1.png',
  },
  {
    id: 2,
    title: "Développeur Web & Web Mobile",
    desc: "Titre RNCP niveau 5 - ADRAR Digit@l Academy (2022)",
    icon: '/assets/img/home-01/service/service-icon-2.png',
  },
  {
    id: 3,
    title: "Concepteur Développeur d'Application PHP/Symfony",
    desc: "Titre RNCP niveau 6 - Openclassrooms (2023)",
    icon: '/assets/img/home-01/service/service-icon-3.png',
  }
];

const ServiceOne = () => {
  return (
    <div className="tp-service-area pt-180 pb-80 tp-btn-trigger">
      <div className="container container-1630">
        <div className="row">
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-title-box p-relative">
              <h4 className="tp-section-title tp-char-animation">
                Mes<br />
                <span>Diplômes</span>
              </h4>
            </div>

          
          </div>
          <div className="col-xl-6 col-lg-6">
            <div className="tp-service-right-wrap">
              {service_data.map((s) => (
                <div
                  key={s.id}
                  className="tp-service-item d-flex align-items-start mb-75 tp_fade_bottom"
                >
                  <div className="tp-service-icon">
                    <img src={s.icon} alt="icon" />
                  </div>
                  <div className="tp-service-content">
                    <h4 className="tp-service-title-sm order-0">
                      {s.title}
                    </h4>
                    <p className="order-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceOne;

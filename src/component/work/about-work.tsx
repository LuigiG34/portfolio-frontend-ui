
const work_data = [
  {
    id: 1,
    title: "Product Designer",
    subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 2,
    title: "Modern Designer",
    subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
  {
    id: 3,
    title: "Creative Technologist",
    subtitle: "Design Studio",
    text: "Write modern, perform ant, maintainable code for a diverse array of client and internal projects",
  },
];
export default function AboutWork() {
  return (
    <div className="ab-2-work-area">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-5">
            <div className="ab-2-work-title-box p-relative">
              <h4 className="ab-2-work-title tp_title_anim">
                Expérience <br /> Professionnel
              </h4>
              <span className="ab-2-work-subtitle tp_title_anim">
                +{new Date().getFullYear() - 2023} ans d'expérience
              </span>
              <img
                className="ab-2-work-shape d-none d-lg-block"
                src="/assets/img/inner-about/about/shape-1.png"
                alt="shape"
              />
            </div>
          </div>
          <div className="col-xl-6 col-lg-7">
            {work_data.map((item) => (
              <div key={item.id} className="ab-2-work-item tp_fade_bottom">
                <div className="sv-service-content">
                  <div className="sv-service-title-box">
                    <span className="sv-service-subtitle">
                      <i>{item.id < 9 ? "0" + item.id : item.id}</i>
                      {item.subtitle}
                    </span>
                    <h4 className="sv-service-title">{item.title}</h4>
                  </div>
                  <div className="sv-service-space-wrap">
                    <div className="sv-service-text">
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

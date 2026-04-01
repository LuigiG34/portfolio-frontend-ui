import React from "react";
import { Leaf } from "../svg";

const award_data = [
  {
    id: 1,
    img: '/assets/img/home-01/award/award-1.png',
    subtitle: "x2",
    title: "FWA, Site of the Day",
    date: "Jun 24, 2024",
  },
  {
    id: 2,
    img: '/assets/img/home-01/award/award-2.png',
    subtitle: "x3",
    title: "Awwwards Interior Excellence",
    date: "Nov 24, 2022",
  },
  {
    id: 3,
    img: '/assets/img/home-01/award/award-3.png',
    subtitle: "x1",
    title: "Loki boundary pushing year in Review 2022",
    date: "May 24, 2012",
  },
  {
    id: 4,
    img: '/assets/img/home-01/award/award-4.png',
    subtitle: "x1",
    title: "The New Liko Tools Website is Live.",
    date: "Sep 10, 2021",
  },
  {
    id: 5,
    img: '/assets/img/home-01/award/award-5.png',
    subtitle: "x2",
    title: "Digital Agencies Worldwide",
    date: "Jun 12, 2021",
  },
  {
    id: 6,
    img: '/assets/img/home-01/award/award-6.png',
    subtitle: "x1",
    title: "FWA, Site of the Day",
    date: "Aug 18, 2022",
  },
];

// prop type
type IProps = {
  cls?: string;
  abStyle?: boolean;
};
const AwardOne = ({ cls = "pt-125 pb-125", abStyle = false }: IProps) => {
  const [activeThumb, setActiveThumb] = React.useState(1);
  return (
    <div className={`tp-award-area ${cls}`}>
      <div className="container container-1630">
        <div className="row">
          <div className="col-xxl-6 col-xl-7">
            {!abStyle && (
              <div className="tp-award-title-box">
                <h4 className="tp-section-title tp-char-animation">
                  Awards <br /> <span>& Recognitions</span>
                </h4>
              </div>
            )}
            {abStyle && (
              <div className="ab-award-title-sm">
                <span>
                  <Leaf />
                  Our Awards
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12">
            <div className="tp-award-list-thumb-wrap p-relative">
              <div
                id="tp-award-thumb"
                className={`tp-award-list-thumb-${activeThumb}`}
              >
                {award_data.map((item) => (
                  <img
                    key={item.id}
                    className={`tp-award-list-thumb-${item.id}`}
                    src={item.img}
                    alt="list-thumb"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8 col-md-12">
            <div className="tp-award-list-wrap">
              {award_data.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveThumb(item.id)}
                  className="tp-award-list-item d-flex align-items-center justify-content-between tp_fade_bottom"
                  rel={`tp-award-list-thumb-${item.id}`}
                >
                  <div className="tp-award-list-content-left d-flex align-items-center">
                    <span>{item.subtitle}</span>
                    <p>{item.title}</p>
                  </div>
                  <div className="tp-award-list-content-right">
                    <span>{item.date}</span>
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

export default AwardOne;

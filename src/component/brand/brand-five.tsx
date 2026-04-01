import Marquee from "react-fast-marquee";

const brand_images = [
  "/assets/img/inner-about/brand/brand-1.png",
  "/assets/img/inner-about/brand/brand-2.png",
  "/assets/img/inner-about/brand/brand-3.png",
  "/assets/img/inner-about/brand/brand-4.png",
  "/assets/img/inner-about/brand/brand-5.png",
  "/assets/img/inner-about/brand/brand-2.png",
];

export default function BrandFive() {
  return (
    <div
      className="ab-brand-area pt-120 pb-120 black-bg-2"
      style={{
        backgroundImage:
          "url(/assets/img/inner-about/brand/brand-bg-shape.png)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-title-box mb-100">
              <h4 className="ab-brand-title">Our clients</h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12">
            <div className="ab-brand-wrapper mb-80">
              <div className="swiper-container ab-brand-slide-active">
                <Marquee speed={100} loop={0} className="ab-brand-slide-wrap">
                  {brand_images.map((b, i) => (
                    <div
                      key={i}
                      className="ab-brand-item"
                    >
                      <img src={b} alt="brand" />
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-9">
            <div className="ab-brand-content">
              <p className="tp_title_anim">
                We belive in creating partnerships based on honesty and true
                connection. That is why some of the biggest companies stayed with
                us for years.
              </p>
              <span>More about us</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

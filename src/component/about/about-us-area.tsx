import { Hand } from "../svg";

export default function AboutUsArea() {
  return (
    <div className="ab-about-area ab-about-mt pb-90 z-index-5">
      <div className="container container-1480">
        <div className="ab-about-thumb-wrap mb-180">
          <div className="row align-items-end">
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-left-thumb">
                <img
                  data-speed=".7"
                  src="/assets/img/inner-about/about/about-1.jpg"
                  alt="about-img"
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6">
              <div className="ab-about-right-thumb p-relative">
                <img
                  data-speed="1.1"
                  className="inner-img z-index-5"
                  src="/assets/img/inner-about/about/about-3.jpg"
                  alt="about-img"
                />
                <img
                  data-speed="0.9"
                  src="/assets/img/inner-about/about/about-2.jpg"
                  alt="about-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="about-info" className="row">
          <div className="col-xxl-9">
            <div className="ab-about-content p-relative">
              <span>
                <Hand />
                Hi!
              </span>
              <p className="tp-dropcap tp_fade_bottom">
                We are a creative studio that specializes in providing
                high-quality design and branding solutions to businesses and
                individuals. Our team is composed of talented designers,
                developers, and marketers.!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-9">
            <div className="row">
              <div className="col-xl-5 col-lg-5 col-md-4 mb-40">
                <div className="ab-about-category-title-box p-relative">
                  <h4 className="ab-about-category-title">
                    Something <br />
                    <span>WHAT I DO</span>
                  </h4>
                  <img
                    className="ab-about-shape-1 d-none d-md-block"
                    src="/assets/img/inner-about/about/shape-1.png"
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-xl-7 col-lg-7 col-md-8">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-1 tp_fade_bottom">
                      <ul>
                        <li>Art direction</li>
                        <li>Branding</li>
                        <li>Content Production</li>
                        <li>User Interface Design</li>
                        <li>Animation</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 mb-40">
                    <div className="ab-about-category-list category-space-2 tp_fade_bottom">
                      <ul>
                        <li>Brand Identity</li>
                        <li>User Interface</li>
                        <li>User Experience</li>
                        <li>Responsive Design</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

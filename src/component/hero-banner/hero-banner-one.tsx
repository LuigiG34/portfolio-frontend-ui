import { useGSAP } from "@gsap/react";
import { fadeAnimation } from "../../utils/title-animation";


const HeroBannerOne = () => {
  useGSAP(() => {

    if (typeof window !== 'undefined') {
      setTimeout(() => {
        fadeAnimation();
      }, 100)
    }
  }, {});
  return (
    <div className="tp-hero-area pt-150 main-slider">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-xxl-12">
            <div className="tp-hero-title-wrap mb-35 p-relative">
              <div className="tp-hero-shape-1">
                <img
                  src="/assets/img/home-01/hero/hero-bg-shape-1-1.svg"
                  alt="shape"
                />
              </div>
              <div className="tp-hero-title-box text-center p-relative">
                <h1 className="tp-hero-title tp_fade_bottom">
                  <span className="p-relative">
                    Bienvenue
                    <span className="tp-hero-subtitle d-none d-lg-block ">
                      Développeur <br /> Fullstack
                    </span>
                    <span className="tp-hero-shape-2 d-none d-md-block">
                      <img
                        src="/assets/img/home-01/hero/hero-shape-1-1.png"
                        alt="shape"
                      />
                    </span>
                  </span>
                  <br />
                  je suis
                  <span className="tp-hero-title-img">
                      <img src="/assets/img/home-08/hero/shape-1.png" alt="shape" />
                  </span>
                  Luigi
                </h1>
              </div>
            </div>
            <div className="tp-hero-content tp_fade_bottom">
              <p>
                <span></span>
                Un développeur passionné de{' '}
                {new Date().getFullYear() - 2002 - ((new Date().getMonth() + 1 < 8 || (new Date().getMonth() + 1 === 8 && new Date().getDate() < 20)) ? 1 : 0)}{' '}
                 ans basé à Montpellier, où le code est mon royaume et la résolution de problèmes mon art depuis près de {' '}
                 {new Date().getFullYear() - 2023}  ans. Bienvenue dans mon univers digital !
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerOne;

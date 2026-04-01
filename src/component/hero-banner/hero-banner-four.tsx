import { ArrowBg, RightArrowTwo } from "../svg";
import { Link } from "react-router-dom";

export default function HeroBannerFour() {
  return (
    <div className="tp-hero-3-area tp-hero-3-ptb fix">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-hero-3-content-box text-center p-relative">
              <div className="tp-hero-3-circle-shape">
                <span></span>
              </div>
              <h4 className="tp-hero-3-title tp_reveal_anim">
                <span className="tp-reveal-line">{"Bienvenue"}</span>
                <br />
                <span className="tp-reveal-line">moi c'est Luigi</span>
              </h4>
              <span className="tp-hero-3-category tp_reveal_anim pb-100">
                Un développeur web passionné de{' '}
                {new Date().getFullYear() - 2002 - ((new Date().getMonth() + 1 < 8 || (new Date().getMonth() + 1 === 8 && new Date().getDate() < 20)) ? 1 : 0)}{' '}
                 ans basé à Montpellier, où le code est mon royaume et la résolution de problèmes mon art depuis près de {' '}
                 {new Date().getFullYear() - 2023}  ans. Bienvenue dans mon univers digital !
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

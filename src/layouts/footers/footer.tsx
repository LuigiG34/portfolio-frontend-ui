import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>

      {/* copyright area start */}
      <div className="tp-copyright-5-area tp-copyright-5-style-2 black-bg pb-50 pt-50">
        <div className="container container-1560">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-6 col-md-5 d-none d-xl-block">
              <div className="tp-copyright-5-left-info">
                <span>
                  <Link
                    to="https://www.google.com/maps/place/Montpellier/@43.6099786,3.7917687,12z"
                    target="_blank"
                  >
                    Montpellier, France
                  </Link>
                </span>
                <span>
                  Tél :
                  <Link to="tel:+33767872553"> + 33 7 67 87 25 53</Link>
                </span>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-7">
              <div className="tp-copyright-2-social text-start text-sm-center text-xl-center">
                <Link className="mb-10" to="https://www.linkedin.com/in/luigi-gdm/" target="_blank">
                  Linkedin
                </Link>
                <Link className="mb-10" to="https://github.com/LuigiG34" target="_blank">
                  Github
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-5">
              <div className="tp-copyright-2-left text-center text-md-end">
                <p>© {new Date().getFullYear()} Luigi Gandemer | Développeur Web</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

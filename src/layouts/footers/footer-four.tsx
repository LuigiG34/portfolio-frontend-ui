import { RightArrow, SvgBgSm } from '../../component/svg';
import { Link } from 'react-router-dom';

export default function FooterFour() {
  return (
    <footer>
      <div className="tp-footer-3-area dark-bg pt-120">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-1">
                <div className="tp-footer-3-widget mb-40">
                  <h4 className="tp-footer-3-title">Website map</h4>
                  <div className="tp-footer-3-menu">
                    <ul>
                      <li><Link to="#">Home</Link></li>
                      <li><Link to="#">About</Link></li>
                      <li><Link to="#">Landing</Link></li>
                      <li><Link to="#">Blog</Link></li>
                      <li><Link to="#">Contact</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Newsletter</h4>
                  <div className="tp-footer-3-input-box d-flex align-items-center">
                    <input type="text" placeholder="Enter Address..." />
                    <button className="tp-footer-3-btn p-relative">
                      <span className="icon-1">
                        <RightArrow clr='#19191A' />
                      </span>
                      <span className="icon-2">
                        <SvgBgSm />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget text-md-center footer-col-3-2">
                <div className="tp-footer-3-logo-box">
                  <p className="mb-100">
                    Drop us a line sed id semper <br />
                    risus in hend rerit.
                  </p>
                  <Link className="tp-footer-3-logo p-relative" to="/">
                    <img src="/assets/img/logo/logo-white.png" alt="logo" />
                  </Link>
                  <p className="tp-footer-3-copyright">
                    {new Date().getFullYear()} Themepure <br /> © All rights reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 mb-60">
              <div className="tp-footer-3-widget-wrapper footer-col-3-3">
                <div className="tp-footer-3-widget mb-30">
                  <h4 className="tp-footer-3-title">Contact</h4>
                  <div className="tp-footer-2-contact-item">
                    <span>
                      <Link to="https://www.google.com/maps/@23.8223596,90.3656686,15z?entry=ttu"
                        target="_blank">740 NEW SOUTH HEAD RD, TRIPLE BAY SWFW 3108, NEW YORK</Link>
                    </span>
                  </div>
                  <div className="tp-footer-2-contact-item">
                    <span>P: <Link to="tel:+725214456">+ 725 214 456</Link></span>
                    <span>E: <Link to="mailto:contact@liko.com">contact@liko.com</Link></span>
                  </div>
                </div>
                <div className="tp-footer-3-widget">
                  <h4 className="tp-footer-3-title">Follow</h4>
                  <div className="tp-footer-3-social">
                    <Link to="#"><i className="fa-brands fa-twitter"></i></Link>
                    <Link to="#"><i className="fa-brands fa-facebook-f"></i></Link>
                    <Link to="#"><i className="fa-brands fa-instagram"></i></Link>
                    <Link to="#"><i className="fa-brands fa-linkedin-in"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

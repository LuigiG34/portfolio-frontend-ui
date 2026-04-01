import ContactForm from "../form/contact-form";

export default function ContactTwo() {
  return (
    <div className="cn-contactform-area cn-contactform-style p-relative pb-100 pt-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="ab-about-category-title-box mb-40 p-relative">
              <h4 className="ab-about-category-title">
                Envoyez-moi un message. <br />
                <span>Contact</span>
              </h4>
              <img
                className="ab-about-shape-1 d-none d-xl-block"
                src="/assets/img/inner-about/about/shape-1.png"
                alt="shape"
              />
            </div>
          </div>
          <div className="col-xl-7">
            <div className="cn-contactform-wrap">
              {/* form start */}
              <ContactForm />
              {/* form end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

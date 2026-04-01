import { Search } from "../svg";
import FaqItem from "./faq-item";
import { faq_data } from "../../data/faq-data";


export default function FaqArea() {
  return (
    <div className="fq-faq-area fq-faq-bdr pt-80 pb-140">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8">
            <div className="fq-faq-wrapper">
              <div className="tp-service-2-accordion-box">
                <div className="accordion" id="accordionExample">
                  {faq_data.map((item) => (
                    <FaqItem key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4">
            <div className="fq-faq-sidebar">
              <div className="fq-faq-sidebar-content">
                <h4 className="fq-faq-sidebar-title">Q&A</h4>
                <p>
                  Lorem ipsum dolor sit laud munere dicunt detraxit mel, nisl
                  evertitu <br /> eu vim.
                </p>
              </div>
              <div className="fq-faq-sidebar-thumb">
                <img
                  className="w-100"
                  src="/assets/img/inner-faq/faq/banner-faq.jpg"
                  alt="faq-banner"
                  style={{ height: 'auto' }}
                />
              </div>
              <div className="fq-faq-sidebar-input p-relative">
                <input type="text" placeholder="Search product" />
                <button className="fq-faq-sidebar-search">
                  <Search />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

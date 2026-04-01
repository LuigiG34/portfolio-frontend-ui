const portfolio_images = [
  "/assets/img/inner-about/portfolio/portfolio-1.jpg",
  "/assets/img/inner-about/portfolio/portfolio-2.jpg",
  "/assets/img/inner-about/portfolio/portfolio-3.jpg",
];

export default function AboutPortfolio() {
  return (
    <div className="ab-2-portfolio-area pb-115">
      <div className="container-fluid ab-2-portfolio-thumb-wrap">
        <div className="row gx-5">
          {portfolio_images.map((imgSrc, i) => (
            <div key={i} className="col-xl-4 col-lg-4 col-md-6 mb-5">
              <div className="ab-2-portfolio-thumb fix">
                <img src={imgSrc} alt="p-img" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

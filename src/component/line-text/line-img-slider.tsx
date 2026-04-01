import Marquee from "react-fast-marquee";

const port_images = [
  "/assets/img/inner-service/portfolio/port-2.jpg",
  "/assets/img/inner-service/portfolio/port-2.jpg",
  "/assets/img/inner-service/portfolio/port-3.jpg",
  "/assets/img/inner-service/portfolio/port-4.jpg",
  "/assets/img/inner-service/portfolio/port-1.jpg",
  "/assets/img/inner-service/portfolio/port-2.jpg",
  "/assets/img/inner-service/portfolio/port-3.jpg",
];

export default function LineImgSlider() {
  return (
    <div className="tp-line-text-wrap tp-line-text-wrap-2 pb-120">
      <div className="swiper tp-img-slide">
        <Marquee speed={150}>
          {port_images.map((imgSrc, index) => (
            <div
              key={index}
              className={`sv-port-thumb port-thumb-${index % 2 === 0 ? 1 : 2}`}
              style={{ marginRight: '40px' }}
            >
              <img src={imgSrc} alt="port-img" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

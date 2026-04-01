import Marquee from "react-fast-marquee";

const brand_images = [
  "Développeur Web",
  "Front-End",
  "Back-End",
  "Conception Web",
  "Intégration Web",
  "Développeur Web",
  "Front-End",
  "Back-End",
  "Conception Web",
  "Intégration Web",
  "Développeur Web",
  "Front-End",
  "Back-End",
  "Conception Web",
  "Intégration Web",
  "Développeur Web",
  "Front-End",
  "Back-End",
  "Conception Web",
  "Intégration Web",
];

export default function BrandSlider() {
  return (
    <div className="tp-brand-slider-active fix">
      <Marquee
        speed={100}
        loop={0}
        className="brand-wrapper"
      >
        {brand_images.map((b, i) => (
          <>
            <div key={i} className="tp-service-3-category" style={{ height: "auto", width: "auto" }}>
                <span>{b}</span>
            </div>
          </>
        ))}
      </Marquee>
    </div>
  );
}

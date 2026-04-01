import type { CSSProperties } from 'react';
import Marquee from 'react-fast-marquee';

const gallery_images = [
  "/assets/img/home-03/gallery/gal-1.jpg",
  "/assets/img/home-03/gallery/gal-2.jpg",
  "/assets/img/home-03/gallery/gal-3.jpg",
  "/assets/img/home-03/gallery/gal-4.jpg",
  "/assets/img/home-03/gallery/gal-5.jpg",
  "/assets/img/home-03/gallery/gal-3.jpg",
  "/assets/img/home-03/gallery/gal-1.jpg",
  "/assets/img/home-03/gallery/gal-2.jpg",
  "/assets/img/home-03/gallery/gal-3.jpg",
  "/assets/img/home-03/gallery/gal-4.jpg",
  "/assets/img/home-03/gallery/gal-5.jpg",
  "/assets/img/home-03/gallery/gal-3.jpg",
]

const imgStyle: CSSProperties = { height: "auto" };

export default function GalleryOne() {
  return (
    <div className="tp-gallery-area fix p-relative">
      <div className="tp-gallery-shape-1">
        <img className="img-1" src="/assets/img/home-03/gallery/gal-shape-1.png" alt="shape" style={imgStyle} />
        <img className="img-2" src="/assets/img/home-03/gallery/gal-shape-dark-1.png" alt="shape" style={imgStyle} />
      </div>
      <div className="tp-gallery-shape-2">
        <img className="img-1" src="/assets/img/home-03/gallery/gal-shape-2.png" alt="shape" style={imgStyle} />
        <img className="img-2" src="/assets/img/home-03/gallery/gal-shape-dark-2.png" alt="shape" style={imgStyle} />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-gallery-slider-wrap">
              <div className="swiper-container tp-gallery-slider-active">
                <Marquee className="tp-gallery-titming" speed={100} direction='left'>

                  {gallery_images.map((g, i) => (

                    <div key={i}>
                      <div className="tp-gallery-item mr-30">
                        <img src={g} alt="gallery-img" style={{ height: 'auto' }} />
                      </div>
                    </div>
                  ))}

                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { gsap } from "gsap";

function perspective() {
  if (document.querySelector(".tp-perspective-slider")) {
    gsap.set(".tp-perspective-slider .tp-slide .tp-slide-inner", {
      perspective: 60,
    });

    document.querySelectorAll<HTMLElement>(".tp-perspective-slider .tp-slide .tp-slide-inner .tp-image").forEach(
      (element) => {
        gsap.fromTo(
          element,
          {
            rotationX: 1.8,
            scaleX: 1,
            z: "0vh",
          },
          {
            rotationX: -0.5,
            scaleX: 1,
            z: "-2vh",
            scrollTrigger: {
              trigger: element,
              start: "top+=150px bottom",
              end: "bottom top",
              immediateRender: false,
              scrub: 0.1,
            },
          }
        );
      }
    );
  }
};

export { perspective };

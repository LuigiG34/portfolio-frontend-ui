import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function useScrollSmooth() {
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });

    ScrollTrigger.refresh();

    return () => {
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);
}


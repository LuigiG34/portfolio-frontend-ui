/* eslint-disable @typescript-eslint/no-explicit-any */
import { gsap, Power2 } from "gsap";
import { SplitText } from "gsap/all";

function heroTitleAnim() {
  const heroArea = document.querySelector(".tp-hero-2-area");
  if (heroArea) {
    gsap.set(".tp-hero-2-title.text-1", { x: 300 });
    gsap.to(".tp-hero-2-title.text-1", {
      scrollTrigger: {
        trigger: heroArea,
        start: "top center",
        markers: false,
      },
      duration: 1.7,
      x: 0,
    });

    gsap.set(".tp-hero-2-title.text-2", { x: -300 });
    gsap.to(".tp-hero-2-title.text-2", {
      scrollTrigger: {
        trigger: heroArea,
        start: "top center",
        markers: false,
      },
      duration: 1.7,
      x: 0,
    });

    gsap.set(".tp-hero-2-content", { x: -500 });
    gsap.to(".tp-hero-2-content", {
      scrollTrigger: {
        trigger: heroArea,
        start: "top center",
        markers: false,
      },
      duration: 2,
      x: 0,
    });
  }
}

function heroBgAnimation() {
  const heroBg = document.querySelector(".tp-hero-bg-single");
  if (heroBg) {
    gsap.from(heroBg, {
      scale: 1.3,
      duration: 1.5,
    });
  }
}

// bounce animation
function bounceAnimation() {
  const bounce = document.querySelectorAll(".tp-btn-bounce");
  if (bounce.length > 0) {
    gsap.from(bounce, { y: -100, opacity: 0 });
    const mybtn = gsap.utils.toArray<HTMLElement>(bounce);
    mybtn.forEach((btn: any) => {
      gsap.to(btn, {
        scrollTrigger: {
          trigger: btn.closest(".tp-btn-trigger"),
          start: "top center",
          markers: false,
        },
        duration: 1,
        ease: "bounce.out",
        y: 0,
        opacity: 1,
      });
    });

    gsap.from(bounce, { y: -100, opacity: 0 });
    const mybtn2 = gsap.utils.toArray<HTMLElement>(bounce);
    mybtn2.forEach((btn: any) => {
      gsap.to(btn, {
        scrollTrigger: {
          trigger: btn.closest(".tp-btn-trigger"),
          start: "bottom bottom",
          markers: false,
        },
        duration: 0.9,
        delay: 4,
        ease: "bounce.out",
        y: 0,
        opacity: 1,
      });
    });
  }
}

// char animation
function charAnimation() {
    const char_come = gsap.utils.toArray<HTMLElement>(".tp-char-animation");
    char_come.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: "chars, words",
      });

      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: "chars, words" });
      tl.from(itemSplitted.chars, {
        duration: 1,
        delay: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });
}

// fade left animation
function fadeAnimation() {
  const fadeBottoms = document.querySelectorAll(".tp_fade_bottom");
  if (fadeBottoms.length > 0) {
    gsap.set(fadeBottoms, { y: 100, opacity: 0 });
    fadeBottoms.forEach((item: any) => {
      const fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=400",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 1.5,
      });
    });
  }

  const fadeTops = document.querySelectorAll(".tp_fade_top");
  if (fadeTops.length > 0) {
    gsap.set(fadeTops, { y: -100, opacity: 0 });
    fadeTops.forEach((item: any) => {
      const fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=100",
        },
      });
      fadeTl.to(item, {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2.5,
      });
    });
  }

  const fadeLefts = document.querySelectorAll(".tp_fade_left");
  if (fadeLefts.length > 0) {
    gsap.set(fadeLefts, { x: -100, opacity: 0 });
    fadeLefts.forEach((item: any) => {
      const fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=100",
        },
      });
      fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2.5,
      });
    });
  }

  const fadeRights = document.querySelectorAll(".tp_fade_right");
  if (fadeRights.length > 0) {
    gsap.set(fadeRights, { x: 100, opacity: 0 });
    fadeRights.forEach((item: any) => {
      const fadeTl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top center+=100",
        },
      });
      fadeTl.to(item, {
        x: 0,
        opacity: 1,
        ease: "power2.out",
        duration: 2.5,
      });
    });
  }

  const fadeAnims = document.querySelectorAll(".tp_fade_anim");
  if (fadeAnims.length > 0) {
    fadeAnims.forEach((t: any) => {
      let r = "bottom",
        a = 1,
        o = 1,
        i = 50,
        s = .5,
        l = "power2.out";
      const offsetAttr = t.getAttribute("data-fade-offset");
      if (offsetAttr) i = Number(offsetAttr);
      const durationAttr = t.getAttribute("data-duration");
      if (durationAttr) o = Number(durationAttr);
      const fromAttr = t.getAttribute("data-fade-from");
      if (fromAttr) r = fromAttr;
      const onScrollAttr = t.getAttribute("data-on-scroll");
      if (onScrollAttr) a = Number(onScrollAttr);
      const delayAttr = t.getAttribute("data-delay");
      if (delayAttr) s = Number(delayAttr);
      const easeAttr = t.getAttribute("data-ease");
      if (easeAttr) l = easeAttr;

      const commonConfig: any = {
        opacity: 0,
        ease: l,
        duration: o,
        delay: s,
      };

      if (a === 1) {
        commonConfig.scrollTrigger = {
          trigger: t,
          start: "top 110%",
        };
      }

      if (r === "top") {
        gsap.from(t, { ...commonConfig, y: -i });
      } else if (r === "left") {
        gsap.from(t, { ...commonConfig, x: -i });
      } else if (r === "bottom") {
        gsap.from(t, { ...commonConfig, y: i });
      } else if (r === "right") {
        gsap.from(t, { ...commonConfig, x: i });
      } else if (r === "in") {
        gsap.from(t, { ...commonConfig });
      }
    });
  }
}

// revel animation
// revel animation one
function revelAnimationOne() {
  const anim_reveal: NodeListOf<HTMLElement> =
    document.querySelectorAll(".tp_reveal_anim");
  if (anim_reveal.length > 0) {
    anim_reveal.forEach((areveal: any) => {
      let duration_value = 1.5;
      let onscroll_value = 1;
      let stagger_value = 0.02;
      let data_delay = 0.05;

      if (areveal.getAttribute("data-duration")) {
        duration_value = Number(areveal.getAttribute("data-duration"));
      }
      if (areveal.getAttribute("data-on-scroll")) {
        onscroll_value = Number(areveal.getAttribute("data-on-scroll"));
      }
      if (areveal.getAttribute("data-stagger")) {
        stagger_value = Number(areveal.getAttribute("data-stagger"));
      }
      if (areveal.getAttribute("data-delay")) {
        data_delay = Number(areveal.getAttribute("data-delay"));
      }

      areveal.split = new SplitText(areveal, {
        type: "lines,words,chars",
        linesClass: "tp-reveal-line",
      });

      if (onscroll_value == 1) {
        areveal.anim = gsap.from(areveal.split.chars, {
          scrollTrigger: {
            trigger: areveal,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse",
          },
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      } else {
        areveal.anim = gsap.from(areveal.split.chars, {
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      }
    });
  }
}
// revel animation two
function revelAnimationTwo() {
  const anim_reveal2: NodeListOf<HTMLElement> =
    document.querySelectorAll(".tp_reveal_anim-2");
  if (anim_reveal2.length > 0) {
    anim_reveal2.forEach((areveal: any) => {
      let duration_value = 2;
      let onscroll_value = 1;
      let stagger_value = 0.05;
      let data_delay = 0.1;

      if (areveal.getAttribute("data-duration")) {
        duration_value = Number(areveal.getAttribute("data-duration"));
      }
      if (areveal.getAttribute("data-on-scroll")) {
        onscroll_value = Number(areveal.getAttribute("data-on-scroll"));
      }
      if (areveal.getAttribute("data-stagger")) {
        stagger_value = Number(areveal.getAttribute("data-stagger"));
      }
      if (areveal.getAttribute("data-delay")) {
        data_delay = Number(areveal.getAttribute("data-delay"));
      }

      areveal.split = new SplitText(areveal, {
        type: "lines,words,chars",
        linesClass: "tp-reveal-line-2",
      });

      if (onscroll_value == 1) {
        areveal.anim = gsap.from(areveal.split.chars, {
          scrollTrigger: {
            trigger: areveal,
            start: "top 85%",
          },
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      } else {
        areveal.anim = gsap.from(areveal.split.chars, {
          duration: duration_value,
          delay: data_delay,
          ease: "circ.out",
          y: 200,
          stagger: stagger_value,
          opacity: 0,
        });
      }
    });
  }
}

function zoomAnimation() {
  const zoomInElements = document.querySelectorAll(".anim-zoomin");
  if (zoomInElements.length > 0) {
    zoomInElements.forEach((el: any) => {
      // Create wrap <div>.
      const wrapper = document.createElement("div");
      wrapper.className = "anim-zoomin-wrap";
      wrapper.style.overflow = "hidden";
      
      // Wrap the element
      el.parentNode?.insertBefore(wrapper, el);
      wrapper.appendChild(el);

      const tp_ZoomIn = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 90%",
          markers: false,
        },
      });
      tp_ZoomIn.from(el, {
        duration: 1.5,
        autoAlpha: 0,
        scale: 1.4,
        ease: Power2.easeOut,
        clearProps: "all",
      });
    });
  }
}

function titleAnimation() {
  const titleAnimElements = document.querySelectorAll(".tp_title_anim");
  if (titleAnimElements.length > 0) {
    const splitTitleLines = gsap.utils.toArray(titleAnimElements);
    splitTitleLines.forEach((splitTextLine: any) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none'
        }
      });

      const itemSplitted = new SplitText(splitTextLine, { type: "words, lines" });
      gsap.set(splitTextLine, { perspective: 400 });
      itemSplitted.split({ type: "lines" })
      tl.from(itemSplitted.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -80,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.1
      });
    });
  }
}

export {
  heroTitleAnim,
  heroBgAnimation,
  bounceAnimation,
  fadeAnimation,
  charAnimation,
  revelAnimationTwo,
  revelAnimationOne,
  zoomAnimation,
  titleAnimation,
};

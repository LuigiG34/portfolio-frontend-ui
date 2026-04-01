import gsap from "gsap";

export function slidePrevTransitionStart() {
  document.querySelectorAll('.tp-slider-dot .swiper-pagination-bullet').forEach((bullet) => {
    if (!bullet.classList.contains("swiper-pagination-bullet-active")) {
      const activeSlideDiv = document.querySelector<HTMLElement>('#trigger-slides .swiper-slide-active div');
      if (activeSlideDiv && !activeSlideDiv.classList.contains("active")) {
        activeSlideDiv.click();
      }

      const duplicateActiveSlideDiv = document.querySelector<HTMLElement>('#trigger-slides .swiper-slide-duplicate-active div');
      if (duplicateActiveSlideDiv && !duplicateActiveSlideDiv.classList.contains("active")) {
        duplicateActiveSlideDiv.click();
      }
    }
  });
}

export function slideNextTransitionStart() {
  document.querySelectorAll('.tp-slider-dot .swiper-pagination-bullet').forEach((bullet) => {
    if (!bullet.classList.contains("swiper-pagination-bullet-active")) {
      const activeSlideDiv = document.querySelector<HTMLElement>('#trigger-slides .swiper-slide-active div');
      if (activeSlideDiv && !activeSlideDiv.classList.contains("active")) {
        activeSlideDiv.click();
      }

      const duplicateActiveSlideDiv = document.querySelector<HTMLElement>('#trigger-slides .swiper-slide-duplicate-active div');
      if (duplicateActiveSlideDiv && !duplicateActiveSlideDiv.classList.contains("active")) {
        duplicateActiveSlideDiv.click();
      }
    }
  });
}

export function verTextFragment() {
  const vertex =
    "varying vec2 vUv; void main() {  vUv = uv;  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );	}";
  const fragment = `
		varying vec2 vUv;
	
		uniform sampler2D currentImage;
		uniform sampler2D nextImage;
		uniform sampler2D disp;
		uniform float dispFactor;
		uniform float effectFactor;
		uniform vec4 resolution;
	
		void main() {
	
			vec2 uv = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	
			vec4 disp = texture2D(disp, uv);
			vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
			vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
			vec4 _currentImage = texture2D(currentImage, distortedPosition);
			vec4 _nextImage = texture2D(nextImage, distortedPosition2);
			vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
	
			gl_FragColor = finalTexture; }
	
		`;

  return { vertex, fragment };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function addEvents(webGL: any) {
  const triggerSlidesEl = document.getElementById("trigger-slides");
  if (!triggerSlidesEl) return;

  const triggerSlide: HTMLElement[] = Array.from(
    triggerSlidesEl.querySelectorAll(".slide-wrap")
  );
  webGL.isRunning = false;

  triggerSlide.forEach((el: HTMLElement) => {
    el.addEventListener("click", () => {
      if (!webGL.isRunning) {
        webGL.isRunning = true;

        const activeEl = triggerSlidesEl.querySelector(".active");
        if (activeEl) {
          activeEl.classList.remove("active");
        }
        el.classList.add("active");

        const slideId = parseInt(el.dataset.slide || "0", 10);

        webGL.material.uniforms.nextImage.value = webGL.textures[slideId];
        webGL.material.uniforms.nextImage.needsUpdate = true;

        gsap.to(webGL.material.uniforms.dispFactor, {
          duration: 1,
          value: 1,
          ease: "Sine.easeInOut",
          onComplete: () => {
            webGL.material.uniforms.currentImage.value =
              webGL.textures[slideId];
            webGL.material.uniforms.currentImage.needsUpdate = true;
            webGL.material.uniforms.dispFactor.value = 0.0;
            webGL.isRunning = false;
          },
        });
      }
    });
  });
}

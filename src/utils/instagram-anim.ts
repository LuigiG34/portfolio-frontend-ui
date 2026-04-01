import { gsap } from "gsap";

function instagramAnim() {
  if (document.querySelector('.tp-instagram-area')) {
		const ins = gsap.matchMedia();
		ins.add("(min-width: 1200px)", () => {

			// Home 8
			const tp_instagram_3 = gsap.timeline({
				scrollTrigger: {
					trigger: ".tp-instagram-area",
					start: "top 30%",
					pin: true,
					markers: false,
					scrub: 1,
					pinSpacing: false,
					end: "bottom 100%",
				}
			});
			tp_instagram_3.to(".tp-instagram-thumb img", {
				width: "580px",
				height: "580px",
				borderRadius: "10px",
			});
	
		});
	}
}

export {
  instagramAnim,
}
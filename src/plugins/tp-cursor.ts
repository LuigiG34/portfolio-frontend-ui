import { gsap, Power2 } from "gsap";

export default function cursorAnimation() {
    if (typeof window !== 'undefined') {
        const body = document.querySelector("body");
        if (body && !body.classList.contains("is-mobile") && body.classList.contains("tp-magic-cursor")) {

            // --- wrap magnetic items ---
            const magneticItems = document.querySelectorAll(".tp-magnetic-item");
            magneticItems.forEach(item => {
                if (item.parentElement && item.parentElement.classList.contains("tp-magnetic-wrap")) {
                    return;
                }
                const wrapper = document.createElement('div');
                wrapper.classList.add('tp-magnetic-wrap');
                if (item.parentNode) {
                    item.parentNode.insertBefore(wrapper, item);
                    wrapper.appendChild(item);
                }
            });

            // mark magnetic links so they don't hide cursor
            document.querySelectorAll("a.tp-magnetic-item").forEach(item => {
                item.classList.add("not-hide-cursor");
            });

            const $mouse = { x: 0, y: 0 };
            const $pos = { x: 0, y: 0 };
            const $ratio = 0.15;
            let $active = false;
            const $ball = document.getElementById("ball");
            const $magicCursor = document.getElementById("magic-cursor");

            if (!$ball) return;

            const $ballWidth = 14;
            const $ballHeight = 14;
            const $ballScale = 1;
            const $ballOpacity = 1;
            const $ballBorderWidth = 1;

            // initialise ball style
            gsap.set($ball, {
                xPercent: -50,
                yPercent: -50,
                width: $ballWidth,
                height: $ballHeight,
                borderWidth: $ballBorderWidth,
                opacity: $ballOpacity,
            });

            // show cursor immediately on first load
            if ($magicCursor) {
                gsap.set($magicCursor, { autoAlpha: 1 });
            }

            // --- track mouse ---
            const mouseMove = (e: MouseEvent) => {
                $mouse.x = e.clientX;
                $mouse.y = e.clientY;
            };
            document.addEventListener("mousemove", mouseMove);

            // --- GSAP ticker follow ---
            const updatePosition = () => {
                if (!$active) {
                    $pos.x += ($mouse.x - $pos.x) * $ratio;
                    $pos.y += ($mouse.y - $pos.y) * $ratio;
                    gsap.set($ball, { x: $pos.x, y: $pos.y });
                }
            };
            gsap.ticker.add(updatePosition);

            // --- magnetic helpers ---
            const parallaxIt = (e: MouseEvent, parent: HTMLElement, target: HTMLElement, movement: number) => {
                const br = parent.getBoundingClientRect();
                gsap.to(target, {
                    duration: 0.3,
                    x: ((e.clientX - br.left - br.width / 2) / br.width) * movement,
                    y: ((e.clientY - br.top - br.height / 2) / br.height) * movement,
                    ease: Power2.easeOut,
                });
            };

            const parallaxCursor = (e: MouseEvent, parent: HTMLElement, movement: number) => {
                const rect = parent.getBoundingClientRect();
                const relX = e.clientX - rect.left;
                const relY = e.clientY - rect.top;
                $pos.x = rect.left + rect.width / 2 + (relX - rect.width / 2) / movement;
                $pos.y = rect.top + rect.height / 2 + (relY - rect.height / 2) / movement;
                gsap.to($ball, { duration: 0.3, x: $pos.x, y: $pos.y });
            };

            // --- magnetic wrap events ---
            document.querySelectorAll(".tp-magnetic-wrap").forEach(wrap => {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                wrap.addEventListener("mousemove", (e: any) => {
                    parallaxCursor(e, wrap as HTMLElement, 2);
                    const target = (wrap as HTMLElement).querySelector(".tp-magnetic-item") as HTMLElement | null;
                    if (target) parallaxIt(e, wrap as HTMLElement, target, 25);
                });
                wrap.addEventListener("mouseenter", () => {
                    gsap.to($ball, { duration: 0.3, scale: 2, borderWidth: 1, opacity: $ballOpacity });
                    $active = true;
                });
                wrap.addEventListener("mouseleave", () => {
                    gsap.to($ball, { duration: 0.3, scale: $ballScale, borderWidth: $ballBorderWidth, opacity: $ballOpacity });
                    const target = (wrap as HTMLElement).querySelector(".tp-magnetic-item");
                    if (target) gsap.to(target, { duration: 0.3, x: 0, y: 0, clearProps: "all" });
                    $active = false;
                });
            });

            // --- data-cursor elements ---
            document.querySelectorAll<HTMLElement>("[data-cursor]").forEach(elem => {
                // mark so the generic hide-on-hover below is skipped
                elem.classList.add("not-hide-cursor");

                elem.addEventListener("mouseenter", () => {
                    // Kill any in-progress animation and immediately remove stale ball-views
                    gsap.killTweensOf($ball);
                    const stale = $ball.querySelectorAll(".ball-view");
                    stale.forEach(n => n.remove());
                    $ball.classList.remove("with-blur");

                    $ball.classList.add("with-blur");
                    const ballView = document.createElement("div");
                    ballView.classList.add("ball-view");
                    const text = elem.getAttribute("data-cursor");
                    if (text) ballView.innerHTML = text;
                    $ball.appendChild(ballView);

                    // Reset first so animation always plays from a known state
                    gsap.set(ballView, { scale: 0, autoAlpha: 0 });

                    gsap.to($ball, {
                        duration: 0.3,
                        yPercent: -75,
                        width: 110,
                        height: 110,
                        opacity: 1,
                        borderWidth: 0,
                        zIndex: 1,
                        backdropFilter: "blur(14px)",
                        backgroundColor: "#fff",
                        boxShadow: "0px 1px 3px 0px rgba(18, 20, 32, 0.14)",
                    });
                    gsap.to(ballView, { duration: 0.3, scale: 1, autoAlpha: 1 });
                });

                elem.addEventListener("mouseleave", () => {
                    $ball.classList.remove("with-blur");
                    gsap.to($ball, {
                        duration: 0.3,
                        yPercent: -50,
                        width: $ballWidth,
                        height: $ballHeight,
                        opacity: $ballOpacity,
                        borderWidth: $ballBorderWidth,
                        backgroundColor: "transparent",
                        clearProps: "backdropFilter,boxShadow,zIndex",
                    });
                    const ballViews = $ball.querySelectorAll(".ball-view");
                    gsap.to(ballViews, {
                        duration: 0.3, scale: 0, autoAlpha: 0, clearProps: "all",
                        onComplete: () => ballViews.forEach(n => n.remove()),
                    });
                });
            });

            // --- generic hide on a / button hover ---
            // IMPORTANT: skip elements marked with "not-hide-cursor"
            document.querySelectorAll("a, button").forEach(el => {
                if (el.classList.contains("cursor-hide") || el.classList.contains("not-hide-cursor")) return;

                // also skip if the element itself (or any ancestor) is a data-cursor element
                if (el.closest("[data-cursor]")) return;

                el.addEventListener("mouseenter", () => {
                    gsap.to($ball, { duration: 0.3, scale: 0, opacity: 0 });
                });
                el.addEventListener("mouseleave", () => {
                    gsap.to($ball, { duration: 0.3, scale: $ballScale, opacity: $ballOpacity });
                });
            });

            // --- click fade-out on internal links ---
            document.querySelectorAll("a").forEach(el => {
                const href = el.getAttribute("href") || "";
                if (
                    el.getAttribute("target") !== "_blank" &&
                    !el.classList.contains("cursor-hide") &&
                    !href.startsWith("#") &&
                    !href.startsWith("mailto") &&
                    !href.startsWith("tel") &&
                    !el.classList.contains("lg-trigger") &&
                    (!el.parentElement || !el.parentElement.classList.contains("tp-btn-disabled"))
                ) {
                    el.addEventListener("click", () => {
                        gsap.to($ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
                    });
                }
            });

            // --- show / hide cursor when mouse enters / leaves the viewport ---
            const toggleCursorOn = () => {
                if ($magicCursor) gsap.to($magicCursor, { duration: 0.3, autoAlpha: 1 });
            };
            const toggleCursorOff = () => {
                if ($magicCursor) gsap.to($magicCursor, { duration: 0.3, autoAlpha: 0 });
            };

            document.addEventListener("mouseleave", toggleCursorOff);
            document.addEventListener("mouseenter", toggleCursorOn);
            // show on first move in case cursor was hidden
            const onFirstMove = () => {
                toggleCursorOn();
                document.removeEventListener("mousemove", onFirstMove);
            };
            document.addEventListener("mousemove", onFirstMove);

            // --- cleanup ---
            return () => {
                document.removeEventListener("mousemove", mouseMove);
                document.removeEventListener("mouseleave", toggleCursorOff);
                document.removeEventListener("mouseenter", toggleCursorOn);
                gsap.ticker.remove(updatePosition);
            };
        }
    }
    return () => {};
}

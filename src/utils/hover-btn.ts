import { gsap, Power2 } from "gsap";

function hoverBtn() {
  const hoverBtnElements = document.querySelectorAll<HTMLElement>('.tp-hover-btn');
  
  hoverBtnElements.forEach(btn => {
    btn.addEventListener('mouseenter', function (e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dot = this.querySelector<HTMLElement>('.tp-btn-circle-dot');
      if (dot) {
        dot.style.top = `${y}px`;
        dot.style.left = `${x}px`;
      }
    });

    btn.addEventListener('mouseout', function (e: MouseEvent) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const dot = this.querySelector<HTMLElement>('.tp-btn-circle-dot');
      if (dot) {
        dot.style.top = `${y}px`;
        dot.style.left = `${x}px`;
      }
    });
  });

  const hoverBtns = gsap.utils.toArray<HTMLElement>(".tp-hover-btn-wrapper");
  const hoverBtnItem = gsap.utils.toArray<HTMLElement>(".tp-hover-btn-item");

  hoverBtns.forEach((btn, i) => {
    const target = hoverBtnItem[i];
    
    btn.addEventListener('mousemove', (e: MouseEvent) => {
      const rect = btn.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;
      const movement = 60;

      gsap.to(target, {
        duration: 1,
        x: ((relX - rect.width / 2) / rect.width) * movement,
        y: ((relY - rect.height / 2) / rect.height) * movement,
        ease: Power2.easeOut,
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(target, {
        duration: 1,
        x: 0,
        y: 0,
        ease: Power2.easeOut,
      });
    });
  });
}

export {
  hoverBtn,
};

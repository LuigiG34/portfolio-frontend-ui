import { useState, useEffect, useRef } from 'react';

const useStickyHeader = (offset = 20) => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
    const setHeaderHeight = headerRef.current?.offsetHeight;

    if (setHeaderHeight) {
      const headerElements = document.querySelectorAll<HTMLDivElement>('.tp-header-height');
      headerElements.forEach(element => {
        element.style.height = `${setHeaderHeight}px`;
      });
    }
  }, []);

  function adjustMenuBackground() {
    const header3Area = document.querySelector('.tp-header-3-area');
    if (header3Area) {
      const menuBox = document.querySelector('.tp-header-3-menu-box') as HTMLElement;
      if (menuBox) {
        const menuBoxWidth = menuBox.offsetWidth;
        const menuBoxHeight = menuBox.offsetHeight;
        const menuBoxRect = menuBox.getBoundingClientRect();
        const leftOffset = menuBoxRect.left + window.scrollX;

        const menuBgs = document.querySelectorAll<HTMLElement>('.menu-bg');
        menuBgs.forEach(bg => {
          bg.style.width = `${menuBoxWidth + 46}px`;
          bg.style.height = `${menuBoxHeight}px`;
          bg.style.left = `${leftOffset}px`;
        });
      }
    }
  }

   function headerFullWidth () {
    const menuElements = document.querySelectorAll(".tp-menu-fullwidth");
    menuElements.forEach((element: Element) => {
      const previousDiv = element.parentElement?.parentElement;
      if (previousDiv) {
        previousDiv.classList.add("has-homemenu");
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > offset);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);



  return {isSticky, headerFullWidth, adjustMenuBackground, headerRef};
};

export default useStickyHeader;
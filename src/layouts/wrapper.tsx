import { type ReactNode } from "react";
import BackToTop from "../component/back-to-top";
import ThemeSetting from "../component/theme-setting";

import SEO from "../component/seo";

interface WrapperProps {
  children: ReactNode;
  showBackToTop?: boolean;
  title?: string;
}

const Wrapper = ({ children, showBackToTop = true, title }: WrapperProps) => {
  return (
    <>
      <SEO title={title} />
      {children}
      {showBackToTop && <BackToTop />}
      <ThemeSetting />
    </>
  );
};

export default Wrapper;

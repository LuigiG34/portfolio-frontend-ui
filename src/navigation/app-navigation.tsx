import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../component/scroll-to-top";

// home pages
import HomeMainDev from "../pages/home/home";
import LoginMain from "../pages/others/login-main";

export default function AppNavigation() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomeMainDev />} />
                <Route path="/login" element={<LoginMain />} />
            </Routes>
        </BrowserRouter>
    );
}
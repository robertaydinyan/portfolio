import './styles/colors.css';
import './styles/styles.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Header from './Components/layouts/Header';
import Footer from './Components/layouts/Footer';
import Sidebar from "./Components/layouts/Sidebar";
import MobileMenu from "./Components/layouts/MobileMenu";
import AboutPage from "./Components/AboutPage/AboutPage";
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import PortfolioDetailsPage from "./Components/PortfolioDetailsPage/PortfolioDetailsPage";

import AOS from 'aos';
import 'aos/dist/aos.css';

import {useState} from "react";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="container">
            <BrowserRouter>
                <MobileMenu openSidebar={openSidebar} />
                <Header />
                <div className="page-content">
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route exact path="/about" element={<AboutPage />} />
                        <Route exact path="/portfolio" element={<PortfolioPage />} />
                        <Route exact path="/contact" element={<ContactPage />} />
                        <Route exact path="/portfolio-details" element={<PortfolioDetailsPage />} />
                    </Routes>
                </div>
                <Footer openSidebar={openSidebar} />
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
            </BrowserRouter>
        </div>
    );
}

export default App;

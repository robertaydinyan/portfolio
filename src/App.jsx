import './styles/colors.css';
import './styles/styles.css';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Header from './Components/layouts/Header';
import Footer from './Components/layouts/Footer';
import Sidebar from "./Components/layouts/Sidebar";
import LaptopMenu from "./Components/layouts/LaptopMenu";
import MobileMenu from "./Components/layouts/MobileMenu";
import AboutPage from "./Components/AboutPage/AboutPage";
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";
import ContactPage from "./Components/ContactPage/ContactPage";
import NotFoundPage from "./Components/NotFoundPage/NotFoundPage";
import React, {useEffect, useState} from 'react';

import { ToastContainer } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';

const ROUTE_TITLES = {
    '/': 'Robert Aydinyan — Senior Full-Stack Web & Mobile Developer',
    '/about': 'About — Robert Aydinyan',
    '/portfolio': 'Portfolio — Robert Aydinyan',
    '/contact': 'Contact — Robert Aydinyan',
};

function RouteTitle() {
    const { pathname } = useLocation();
    useEffect(() => {
        document.title = ROUTE_TITLES[pathname] || 'Robert Aydinyan — Senior Full-Stack Developer';
    }, [pathname]);
    return null;
}

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(window.location.pathname === '/');

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    useEffect(() => {
        AOS.init();

        const stored = localStorage.getItem('theme');
        const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
        const theme = stored || (prefersLight ? 'light' : 'dark');
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    return (
        <div className="container">
            <ToastContainer />
            <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <RouteTitle />
                <MobileMenu openSidebar={openSidebar} />
                <Header showHeader={showHeader}/>
                <div className="page-content">
                    <LaptopMenu openSidebar={openSidebar} />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/portfolio" element={<PortfolioPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </div>
                <Footer openSidebar={openSidebar} />
                <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} setShowHeader={setShowHeader} />
            </BrowserRouter>
        </div>
    );
}

export default App;

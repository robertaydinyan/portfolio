import './styles/colors.css';
import './styles/styles.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Header from './Components/layouts/Header';
import Footer from './Components/layouts/Footer';
import AboutPage from "./Components/AboutPage/AboutPage";
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage";
import ContactPage from "./Components/ContactPage/ContactPage";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                    <Route exact path="/portfolio" element={<PortfolioPage />} />
                    <Route exact path="/contact" element={<ContactPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

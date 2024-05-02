import './styles/colors.css';
import './styles/styles.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Components/HomePage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutPage from "./Components/AboutPage";

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/about" element={<AboutPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;

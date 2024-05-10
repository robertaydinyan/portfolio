import React, {useEffect, useRef} from 'react';
// import x_lg_icon from '../../images/icons/x-lg.svg'
// import logo from '../../images/icons/icon.png'
// import home_icon from '../../images/icons/home.svg'
// import about_icon from '../../images/icons/about.svg'
// import portfolio_icon from '../../images/icons/portfolio.svg'
// import contact_icon from '../../images/icons/contact.svg'
import {Link} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function Sidebar({isOpen, onClose}) {
    const sidebarRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            sidebarRef.current.classList.add('active');
        } else {
            sidebarRef.current.classList.remove('active');
        }
    }, [isOpen]);

    return (
        <div className="offcanvase" ref={sidebarRef}>
            <div className="menu-overlay" onClick={onClose}></div>
            <div className="menu-inner">
                <div className="close-icon" onClick={onClose}>
                    <LazyLoadImage
                        src="/images/icons/x_lg.svg"
                        alt="logo"
                        effect="blur"
                    />
                </div>
                <div className="offcanvase__logo logo-area">
                    <a href="/">
                        <LazyLoadImage
                                src="/images/icons/logo.svg"
                                alt="logo"
                                effect="blur"
                            />
                    </a>
                </div>
                <div className="sidemenu">
                    <div className="menu">
                        <ul>
                            <li>
                                <Link className="link" to="/">
                                    <LazyLoadImage
                                        src="/images/icons/home.svg"
                                        alt="logo"
                                        effect="blur"
                                    />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/about">
                                    <LazyLoadImage
                                        src="/images/icons/about.svg"
                                        alt="logo"
                                        effect="blur"
                                    />
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/portfolio">
                                    <LazyLoadImage
                                        src="/images/icons/portfolio.svg"
                                        alt="logo"
                                        effect="blur"
                                    />
                                    portfolio
                                </Link>
                            </li>
                            <li>
                                <a className="link" href="/contact">
                                    <LazyLoadImage
                                        src="/images/icons/contact.svg"
                                        alt="logo"
                                        effect="blur"
                                    />
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="sidecontact">
                    <h6>Contact Me</h6>
                    <a href="tel:+8801712345678">+8801712345678</a>
                    <a href="mailto:axz@axz.com">axz@axz.com</a>
                </div>
            </div>
        </div>
    );
}
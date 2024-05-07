import React, {useEffect, useRef} from 'react';
import x_lg_icon from '../../images/icons/x-lg.svg'
import logo from '../../images/icons/icon.png'
import home_icon from '../../images/icons/home.svg'
import about_icon from '../../images/icons/about.svg'
import portfolio_icon from '../../images/icons/portfolio.svg'
import contact_icon from '../../images/icons/contact.svg'
import {Link} from "react-router-dom";

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
            <div className="menu-overlay" onclose></div>
            <div className="menu-inner">
                <div className="close-icon" onClick={onClose}>
                    <img alt="image" width="16" height="16" src={x_lg_icon}/>
                </div>
                <div className="offcanvase__logo logo-area">
                    <a href="/">
                        <img alt="image" src={logo} />
                    </a>
                </div>
                <div className="sidemenu">
                    <div className="menu">
                        <ul>
                            <li>
                                <Link className="link" to="/">
                                    <img alt="image" width="18" height="15" className="svg" src={home_icon} />
                                     Home
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/about">
                                    <img alt="image" width="17" height="18" className="svg" src={about_icon} />
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link className="link" to="/portfolio">
                                    <img alt="image" width="18" height="16" className="svg" src={portfolio_icon} />
                                    portfolio
                                </Link>
                            </li>
                            <li>
                                <a className="link" href="/contact">
                                    <img alt="image" width="15" height="15" className="svg" src={contact_icon} />
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
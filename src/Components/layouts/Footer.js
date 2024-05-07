import React from 'react';
import home_icon from '../../images/icons/home.svg'
import about_icon from '../../images/icons/about.svg'
import portfolio_icon from '../../images/icons/portfolio.svg'
import contact_icon from '../../images/icons/contact.svg'
import bars_icon from '../../images/icons/bars.svg'

import {Link} from "react-router-dom";

export default function Footer({openSidebar}) {
    return (
        <div className="navigation">
            <div className="header-menu-bar sticky-top mode" onClick={openSidebar}>
                {/*<div className="icon offcanvase">*/}
                    <img alt="menu" className="svg" src={bars_icon} />
                {/*</div>*/}
            </div>
            <div className="tab-action-item">
                <ul>
                    <li>
                        <Link to="/" data-title="Home" className="link active">
                            <img alt="home" className="svg" src={home_icon}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" data-title="About" className="link active">
                            <img alt="about" className="svg" src={about_icon}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio" data-title="Portfolio" className="link active">
                            <img alt="portfolio" className="svg" src={portfolio_icon}/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" data-title="Contact" className="link active">
                            <img alt="contact" className="svg" src={contact_icon}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
)
}
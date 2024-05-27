import React from 'react';
// import home_icon from '../../images/icons/home.svg'
// import about_icon from '../../images/icons/about.svg'
// import portfolio_icon from '../../images/icons/portfolio.svg'
// import contact_icon from '../../images/icons/contact.svg'
// import bars_icon from '../../images/icons/bars.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import {Link} from "react-router-dom";

export default function Footer({openSidebar}) {


    return (
        <div className="navigation">
            <div className='navbar sticky-top'>
                <div className="header-menu-bar mode" onClick={openSidebar}>
                    {/*<div className="icon offcanvase">*/}
                        <LazyLoadImage
                            src="/images/icons/bars.svg"
                            alt="Bars Picture"
                            effect="blur"
                            className="svg"
                        />
                    {/*</div>*/}
                </div>
                <div className="tab-action-item">
                    <ul>
                        <li>
                            <Link to="/" data-title="Home" className="link active">
                                <LazyLoadImage
                                    src="/images/icons/home.svg"
                                    alt="Home Picture"
                                    effect="blur"
                                    className="svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" data-title="About" className="link active">
                                <LazyLoadImage
                                    src="/images/icons/about.svg"
                                    alt="About Picture"
                                    effect="blur"
                                    className="svg"
                                    style={{ display: 'block' }}
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio" data-title="Portfolio" className="link active">
                                <LazyLoadImage
                                    src="/images/icons/portfolio.svg"
                                    alt="About Picture"
                                    effect="blur"
                                    className="svg"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" data-title="Contact" className="link active">
                                <LazyLoadImage
                                    src="/images/icons/contact.svg"
                                    alt="Contact Picture"
                                    effect="blur"
                                    className="svg"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
)
}
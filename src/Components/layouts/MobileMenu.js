import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function MobileMenu({openSidebar}) {
    return (
        <div className="mobile-menu">
            <div className="header-menu mode">
                <div className="menu-left">
                    <div className="logo-area">
                        <a href="/">
                            <LazyLoadImage
                                src="/images/icons/icon.png"
                                alt="logo"
                                effect="blur"
                            />
                        </a>
                    </div>
                    {/*<div className="header-menu">*/}
                    {/*    <ul className="list-unstyled">*/}
                    {/*        <li><a href="/">Home</a></li>*/}
                    {/*        <li><a className="hire" href="/contact">Hire Me!</a></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
                <div className="functionality cm-right" onClose={openSidebar}>
                    <div className="">
                        <LazyLoadImage
                            src="/images/icons/bars.png"
                            alt="menu-bar"
                            effect="blur"
                            className="svg"
                            onClick={openSidebar}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// <div className="header sticky-top">
//     <div className="header-menu mode">
//         <div className="menu-left">
//             <div className="logo-area">
//                 <a href="/">
//                     <img alt="logo" className="logo" src={logo}/>
//                 </a>
//             </div>
//             {/*<div className="header-menu">*/}
//             {/*    <ul className="list-unstyled">*/}
//             {/*        <li><a href="/">Home</a></li>*/}
//             {/*        <li><a className="hire" href="/contact">Hire Me!</a></li>*/}
//             {/*    </ul>*/}
//             {/*</div>*/}
//         </div>
//     </div>
// </div>
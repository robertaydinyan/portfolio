import React from 'react';
import logo from '../../images/icons/icon.png'
import bars_icon from '../../images/icons/bars.svg'

export default function MobileMenu({openSidebar}) {
    return (
        <div className="mobile-menu">
            <div className="header-menu mode">
                <div className="menu-left">
                    <div className="logo-area">
                        <a href="/">
                            <img alt="logo" src={logo} />
                        </a>
                    </div>
                    {/*<div className="header-menu">*/}
                    {/*    <ul className="list-unstyled">*/}
                    {/*        <li><a href="/">Home</a></li>*/}
                    {/*        <li><a className="hire" href="/contact">Hire Me!</a></li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
                <div className="functionality cm-right" onclose={openSidebar}>
                    <div className="">
                        <img alt="menu-bar" className="svg" src={bars_icon} onClick={openSidebar}/>
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
import React from 'react';
import TopBar from './TopBar'

export default function MobileMenu({openSidebar}) {

    return (
        <div className="mobile-menu sticky-top">
           <TopBar openSidebar={openSidebar} />
           <div className='mobile-menu-shadow'></div>
        </div>
    );
}

import React from 'react';
import TopBar from './TopBar'

export default function MobileMenu({openSidebar}) {
    return (
        <div className="mobile-menu">
           <TopBar openSidebar={openSidebar} />
        </div>
    );
}

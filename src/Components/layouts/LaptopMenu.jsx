import React from 'react';
import TopBar from './TopBar'

export default function LaptopMenu({openSidebar}) {
    return (
        <div className="header">
           <TopBar openSidebar={openSidebar} />
        </div>
    );
}

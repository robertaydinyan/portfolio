import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function MobileMenu({openSidebar}) {
    return (
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
            </div>
            <div className="functionality cm-right" onClose={openSidebar}>
                <div className="">
                    <LazyLoadImage
                        src="/images/icons/bars.svg"
                        alt="menu-bar"
                        effect="blur"
                        className="svg"
                        onClick={openSidebar}
                    />
                </div>
            </div>
        </div>
    );
}

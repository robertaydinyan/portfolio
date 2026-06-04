import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function readTheme() {
    if (typeof document === 'undefined') return 'dark';
    return document.documentElement.getAttribute('data-theme') || 'dark';
}

function ThemeToggle() {
    const [theme, setTheme] = useState(readTheme);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        try { localStorage.setItem('theme', theme); } catch (e) { /* ignore */ }
    }, [theme]);

    const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
    const isDark = theme === 'dark';

    return (
        <button
            type="button"
            onClick={toggle}
            className="theme-toggle"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {isDark ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                </svg>
            ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
            )}
        </button>
    );
}

export default function TopBar({openSidebar}) {
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
            <div className="functionality cm-right">
                <ThemeToggle />
                <button
                    type="button"
                    onClick={openSidebar}
                    className="menu-trigger"
                    aria-label="Open menu"
                >
                    <LazyLoadImage
                        src="/images/icons/bars.svg"
                        alt="menu"
                        effect="blur"
                        className="svg"
                    />
                </button>
            </div>
        </div>
    );
}

import React from 'react';
import { Link } from 'react-router-dom';
import ContentCircle from '../layouts/ContentCircle';

export default function NotFoundPage() {
    return (
        <div className="content-area">
            <div className="content-box mode">
                <div className="content-item page-template">
                    <div className="content-item__top">
                        <ContentCircle />
                        <div className="content-sub">
                            <p>404 — Not Found</p>
                        </div>
                        <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                            This page doesn't exist <span>(yet)</span>.
                        </h1>
                        <p style={{ marginTop: '20px', color: 'var(--body-color)' }}>
                            The link may be broken, or the page may have been moved.
                        </p>
                        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                            <Link to="/" className="btn primary">Back home</Link>
                            <Link to="/portfolio" className="btn primary">See portfolio</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

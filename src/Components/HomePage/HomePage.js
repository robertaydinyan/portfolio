import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ContentCircle from '../layouts/ContentCircle'

export default function HomePage() {

    return (
        <div className="content-area">
            <div className="content-box mode">
                <div className="content-item index">
                    <ContentCircle />

                    <div className="content-sub">
                        <div className="icon">
                            <LazyLoadImage
                                    src="/images/icons/home.svg"
                                    alt="home icon"
                                    effect="blur"
                                    style={{display: 'block'}}
                            />
                        </div>
                        <p>Hi! There I’m</p>
                    </div>

                    <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                        I'm building Minimalistic and User-Centric <span>Web & Mobile</span> Solutions.
                    </h1>
                    <div className="contact-zone">
                        <a href="mailto:robert.aydinyan2002@gmail.com">
                            <span>
                                <LazyLoadImage
                                    src="/images/icons/email.svg"
                                    alt="email"
                                    effect="blur"
                                    style={{display: 'block'}}
                                />
                            </span>
                            robertrobert
                        </a>
                        <a href="callto:+37433230250">
                            <span>
                                <LazyLoadImage
                                    src="/images/icons/phone.svg"
                                    alt="email"
                                    effect="blur"
                                    style={{display: 'block'}}
                                />
                            </span>
                            +374 33 230 250
                        </a>
                    </div>
                    <div className="content-img">
                        <LazyLoadImage
                            src="/images/code.png"
                            alt="code"
                            effect="blur"
                        />
                    </div>
                    <div className="counter">
                        <div className="counter-single">
                            <span className="count-item theme">6</span>
                            <p>Years of experience.</p>
                        </div>
                        <div className="counter-single">
                            <span className="count-item">30+</span>
                            <p>Projects successfully done.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

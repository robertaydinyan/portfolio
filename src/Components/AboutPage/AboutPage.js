import React, {useEffect} from 'react';
import ContentCircle from "../layouts/ContentCircle";
import about_icon from "../../images/icons/about.svg"
import line_icon from "../../images/icons/line.svg"
import star_icon from "../../images/icons/star.svg"

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutPage() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="content-area">
            <div className="content-box mode">
                <div className="content-item page-template">
                    <div className="content-item__top">
                        <ContentCircle />
                        <div className="content-sub">
                            <div className="icon">
                                <img alt="icon" className="svg" src={about_icon} />
                            </div>
                            <p>Me! About</p>
                        </div>
                        <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                            Hire the best Portfolio Freelancers in <span>Jeckob Martin</span>
                            <u className="inline">
                                <img alt="image" src={line_icon} />
                            </u>
                            in Los Angeles.
                        </h1>
                    </div>
                    <div className="about-brief">
                        <div className="about-left">
                            <p>There are many variations of passages of Lorem Ipsum available,
                            but majority have suffered alteration in some form, by injected humour.</p>

                            <div className="rating">
                                <div className="star-icon">
                                    <img alt="star" src={star_icon} />
                                </div>
                                <div className="rating-count">
                                    <h4>5 Star</h4>
                                    <p>Read Our <a href="#">Success Story's</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="about-right">
                            <p>Randomised words which don't look even slightly belie vable. If
                            you are going to use a passage of Lorem Ipsu you need to be sure there isn't anything embarr
                            assing hidden in the middle of text All the Lorem Ipsum.</p>

                            <p className="margin">Generators
                            on the Internet tend to repeat predefined chunks as necessary, making this the first true
                            generator on the Internet. Lorem Ipsu you need to be sure there isn't anything embarr.</p>
                        </div>
                    </div>
                    <div className="about-inf">
                        <div className="about-info-content">
                            <div className="about-info"><h6 className="name">Name</h6><p>Donald L. Juarez</p></div>
                            <div className="about-info"><h6 className="name">Phone</h6><p><a href="tel:+99 (555) 666 88 55">+99
                                (555) 666 88 55</a></p></div>
                        </div>
                        <div className="about-info-content">
                            <div className="about-info"><h6 className="name">Office</h6><p>1247/Plot No. 39, New York.</p></div>
                            <div className="about-info"><h6 className="name">Experience</h6><p>12 Years</p></div>
                        </div>
                    </div>
            {/*        <div className="about-client">*/}
            {/*            <div className="client-brand project-slider">*/}
            {/*                <div className="swiper-wrapper">*/}
            {/*                    <div className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden">*/}
            {/*                        <div className="swiper-wrapper"*/}
            {/*                             style="transition-duration: 0ms; transform: translate3d(-210.333px, 0px, 0px); transition-delay: 0ms;">*/}
            {/*                            <div className="swiper-slide swiper-slide-prev" style="width: 210.333px;"*/}
            {/*                                 data-swiper-slide-index="0">*/}
            {/*                                <div className="single-project"><img alt="image" loading="lazy" width="143"*/}
            {/*                                                                 height="57" decoding="async" data-nimg="1"*/}
            {/*                                                                 srcset="/_next/image?url=%2Fassets%2Fimg%2Fclient%2F1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimg%2Fclient%2F1.png&amp;w=384&amp;q=75 2x"*/}
            {/*                                                                 src="/_next/image?url=%2Fassets%2Fimg%2Fclient%2F1.png&amp;w=384&amp;q=75"*/}
            {/*                                                                 style="color: transparent;"></div>*/}
            {/*                            </div>*/}
            {/*                            <div className="swiper-slide swiper-slide-active" style="width: 210.333px;"*/}
            {/*                                 data-swiper-slide-index="1">*/}
            {/*                                <div className="single-project"><img alt="image" loading="lazy" width="143"*/}
            {/*                                                                 height="57" decoding="async" data-nimg="1"*/}
            {/*                                                                 srcset="/_next/image?url=%2Fassets%2Fimg%2Fclient%2F2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimg%2Fclient%2F2.png&amp;w=384&amp;q=75 2x"*/}
            {/*                                                                 src="/_next/image?url=%2Fassets%2Fimg%2Fclient%2F2.png&amp;w=384&amp;q=75"*/}
            {/*                                                                 style="color: transparent;"></div>*/}
            {/*                            </div>*/}
            {/*                            <div className="swiper-slide swiper-slide-next" style="width: 210.333px;"*/}
            {/*                                 data-swiper-slide-index="2">*/}
            {/*                                <div className="single-project"><img alt="image" loading="lazy" width="143"*/}
            {/*                                                                 height="57" decoding="async" data-nimg="1"*/}
            {/*                                                                 srcset="/_next/image?url=%2Fassets%2Fimg%2Fclient%2F1.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimg%2Fclient%2F1.png&amp;w=384&amp;q=75 2x"*/}
            {/*                                                                 src="/_next/image?url=%2Fassets%2Fimg%2Fclient%2F1.png&amp;w=384&amp;q=75"*/}
            {/*                                                                 style="color: transparent;"></div>*/}
            {/*                            </div>*/}
            {/*                            <div className="swiper-slide" data-swiper-slide-index="3" style="width: 210.333px;">*/}
            {/*                                <div className="single-project"><img alt="image" loading="lazy" width="143"*/}
            {/*                                                                 height="57" decoding="async" data-nimg="1"*/}
            {/*                                                                 srcset="/_next/image?url=%2Fassets%2Fimg%2Fclient%2F2.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimg%2Fclient%2F2.png&amp;w=384&amp;q=75 2x"*/}
            {/*                                                                 src="/_next/image?url=%2Fassets%2Fimg%2Fclient%2F2.png&amp;w=384&amp;q=75"*/}
            {/*                                                                 style="color: transparent;"></div>*/}
            {/*                            </div>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
                </div>
            </div>
        </div>
    );
}

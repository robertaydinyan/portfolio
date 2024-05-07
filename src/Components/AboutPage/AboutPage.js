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
                            Hire a Top Full Stack Web & Mobile Developer <span> Robert Aydinyan </span>
                            <u className="inline">
                                <img alt="image" src={line_icon} />
                            </u>
                             in Yerevan.
                        </h1>
                    </div>
                    <div className="about-brief">
                        <div className="about-left">
                            <h3>Me!</h3>
                            <p>As a seasoned Full Stack Web and Mobile Developer based in Yerevan, 
                                I specialize in delivering high-quality digital products 
                                tailored to your needs. With over a decade of experience in the tech industry,
                                 my work focuses on creating sleek, efficient, and user-centric solutions.</p>

                            <div className="rating">
                                <div className="star-icon">
                                    <img alt="star" src={star_icon} />
                                </div>
                                <div className="rating-count">
                                    <h4>5 Star</h4>
                                    <p>Read Our <a href="#"><span>Success Story's</span></a></p>
                                </div>
                            </div>
                        </div>
                        <div className="about-right">
                            <h3>Commitment to Excellence</h3>
                            <p>My portfolio boasts a range of projects that demonstrate my expertise in developing
                                 scalable web and mobile applications. Each project underscores my commitment
                                 to quality and the innovative use of technology to achieve the best outcomes..</p>

                            <p className="margin">Explore this site to understand the scope of my services, read client testimonials,
                             and view detailed case studies of my work. Let's connect and discuss how I can bring your project to life 
                             with professionalism and precision.</p>
                        </div>
                    </div>
                    <div className="about-inf">
                        <div className="about-info-content">
                            <div className="about-info"><h6 className="name">Name</h6><p>Robert Aydinyan</p></div>
                            <div className="about-info"><h6 className="name">Phone</h6><p><a href="tel:+374 (33) 230 250">+374 (33) 230 250</a></p></div>
                        </div>
                        <div className="about-info-content">
                            <div className="about-info"><h6 className="name">Location</h6><p>Armenia, Yerevan</p></div>
                            <div className="about-info"><h6 className="name">Experience</h6><p>6+ Years</p></div>
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

import React, {useEffect} from 'react';
import ContentCircle from "../layouts/ContentCircle";
import { LazyLoadImage } from 'react-lazy-load-image-component';


import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore from 'swiper/core'; 
// import { Autoplay } from 'swiper'; // Import Autoplay from swiper

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
                                <LazyLoadImage
                                    src="/images/icons/about.svg"
                                    alt="icon"
                                    effect="blur"
                                    style={{display: 'block'}}
                                />
                            </div>
                            <p>Me! About</p>
                        </div>
                        <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                            Hire a Top Full Stack Web & Mobile Developer <span> Robert Aydinyan </span>
                            <u className="inline">
                                <LazyLoadImage
                                    src="/images/icons/line.svg"
                                    alt="image"
                                    effect="blur"
                                    style={{display: 'block'}}
                                />
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
                        </div>
                        <div className="about-right">
                            <h3>Commitment to Excellence</h3>
                            <p>My portfolio boasts a range of projects that demonstrate my expertise in developing
                                 scalable web and mobile applications. Each project underscores my commitment
                                 to quality and the innovative use of technology to achieve the best outcomes..
                                 <br/>
                                 <br/>
                                 Let's connect and discuss how I can bring your project to life 
                                  with professionalism and precision.</p>
                        </div>
                    </div>

                    <div className="single-info-item">
                        <div className="row">
                            <h3>Skills 
                                 <LazyLoadImage
                                    src="/images/icons/line.svg"
                                    alt="image"
                                    effect="blur"
                                    style={{display: 'block'}}
                                />
                            </h3>
                            <div className="skill-container">
                                <div className="single-skill-item">
                                    <div className="expertise__single">
                                        <p className="expertise__title">Web Development - <span>95%</span></p>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="90" 
                                            aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}></div>
                                        </div>
                                    </div>
                                    <div className="expertise__single">
                                        <p className="expertise__title">Mobile Development - <span>90%</span></p>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="90" 
                                            aria-valuemin="0" aria-valuemax="100" style={{width:"90%"}}></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-skill-item">
                                    <div className="expertise__single">
                                        <p className="expertise__title">PHP, HTML/CSS, Javascript - <span>95%</span></p>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="90" 
                                            aria-valuemin="0" aria-valuemax="100" style={{width:"95%"}}></div>
                                        </div>
                                    </div>
                                    <div className="expertise__single">
                                        <p className="expertise__title">MySQL, React Native, REST API - <span>93%</span></p>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="90" 
                                            aria-valuemin="0" aria-valuemax="100" style={{width:"93%"}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                </div>
            </div>
        </div>
    );
}

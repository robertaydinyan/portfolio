import React, {useEffect} from 'react';
import home_icon from '../../images/icons/home.svg'
import email_icon from '../../images/icons/email.svg'
import phone_icon from '../../images/icons/phone.svg'
import code_image from '../../images/code.png'
import ContentCircle from '../layouts/ContentCircle'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="content-area">
            <div className="content-box mode">
                <div className="content-item index">
                    <ContentCircle />

                    <div className="content-sub">
                        <div className="icon">
                            <img alt="home icon" src={home_icon}/>
                        </div>
                        <p>Hi! There I’m</p>
                    </div>

                    <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                        I'm making product and <span>design</span> minimal modern.
                    </h1>
                    <div className="contact-zone">
                        <a href="mailto:hi@infoexample.com">
                            <span>
                                <img alt="email" src={email_icon}/>
                            </span>
                            hi@infoexample.com
                        </a>
                        <a href="callto:+8801712345678">
                            <span>
                                <img alt="email" src={phone_icon}/>
                            </span>
                            +8801712345678
                        </a>
                    </div>
                    <div className="content-img">
                        <img alt="code" src={code_image}/>
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

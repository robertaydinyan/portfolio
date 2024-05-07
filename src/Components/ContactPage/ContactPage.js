import React, {useEffect} from 'react';
import ContentCircle from "../layouts/ContentCircle";
import contact_icon from '../../images/icons/contact.svg'
import line_icon from '../../images/icons/line.svg'
import phone_icon from '../../images/icons/phone-call.svg'
import mail_icon from '../../images/icons/mail-open.svg'

import './styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactPage() {
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
                                <img alt="contact" className="svg" src={contact_icon} />
                            </div>
                            <p>Contact our office</p>
                        </div>
                        <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                            Jeckob Martin the best
                            <span> Contact Us </span>
                            <u>
                                <img alt="line" src={line_icon} />
                            </u>
                        </h1>
                    </div>
                    <div className="contact-area">
                        <div className="contact-method">
                            <h3 className="section-title">Contact </h3>
                            <div className="contact-method__content">
                                <div className="single-contact-item">
                                    <div className="single-contact-item__top">
                                        <div className="icon">
                                            <img alt="call" src={phone_icon} />
                                        </div>
                                        <div className="text"><p>Contact Phone</p></div>
                                    </div>
                                    <div className="single-contact-item__bottom">
                                        <a href="callto:37433230250">+374 33 230 250</a>
                                    </div>
                                </div>
                                <div className="single-contact-item">
                                    <div className="single-contact-item__top">
                                        <div className="cm-icon">
                                            <img alt="mail-open" src={mail_icon} />
                                        </div>
                                        <div className="text"><p>Contact Email</p></div>
                                    </div>
                                    <div className="single-contact-item__bottom">
                                        <a href="mailto:robert.aydinyan2002@gmail.com">robert.aydinyan2002@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h3 className="section-title">Contact Us</h3>
                            <div className="contact-form__content">
                                <form className="form">
                                    <div className="single-input">
                                        <div className="single-input__item">
                                            <label for="fname">Your first name <span>*</span></label>
                                            <input id="fname" required type="text" name="fname" autoCorrect="false"  />
                                        </div>
                                        <div className="single-input__item">
                                            <label for="lname">Your last name <span>*</span></label>
                                            <input id="lname" required type="text" name="lname" autoCorrect="false"  />
                                        </div>
                                    </div>
                                    <div className="single-input">
                                        <div className="single-input__item">
                                            <label for="email">Your email address <span>*</span></label>
                                            <input id="email" required type="email" name="email" autoCorrect="false"  />
                                        </div>
                                        <div className="single-input__item">
                                            <label for="phone">Your phone number <span>*</span></label>
                                            <input id="phone" className="no-arrows" required type="number" name="phone" autoCorrect="false" />
                                        </div>
                                    </div>
                                    <div className="single-input">
                                        <div className="single-input__item w-full">
                                            <label for="msg">Your message <span>*</span></label>
                                            <textarea name="msg" id="msg" required></textarea></div>
                                    </div>
                                    <button type="submit" className="btn primary">Submit Now</button>
                                </form>
                                <div className="contact__msg mt-40"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
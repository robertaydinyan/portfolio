import React, {useEffect} from 'react';
import ContentCircle from "../layouts/ContentCircle";
import { LazyLoadImage } from 'react-lazy-load-image-component';


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
                                <LazyLoadImage
                                    src="/images/icons/contact.svg"
                                    alt="contact"
                                    effect="blur"
                                    style={{display: 'block'}}
                                />
                            </div>
                            <p>Contact our office</p>
                        </div>
                        <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                            Jeckob Martin the best
                            <span> Contact Us </span>
                            <u>
                                <LazyLoadImage
                                    src="/images/icons/line.svg"
                                    alt="line"
                                    effect="blur"
                                    style={{display: 'block'}}
                                />
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
                                            <LazyLoadImage
                                                src="/images/icons/phone.svg"
                                                alt="call"
                                                effect="blur"
                                                style={{display: 'block'}}
                                            />
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
                                            <LazyLoadImage
                                                src="/images/icons/mail.svg"
                                                alt="mail-open"
                                                effect="blur"
                                                style={{display: 'block'}}
                                             />
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
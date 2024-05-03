import React, {useEffect} from 'react';
import ContentCircle from "../layouts/ContentCircle";
import contact_icon from '../../images/icons/contact.svg'
import line_icon from '../../images/icons/line.svg'

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
            {/*        <div class="cm-contact-area">*/}
            {/*            <div class="cm-contact-method"><h3 class="section-title">Contact </h3>*/}
            {/*                <div class="cm-contact-method__content">*/}
            {/*                    <div class="single-contact-item">*/}
            {/*                        <div class="single-contact-item__top">*/}
            {/*                            <div class="cm-icon"><img alt="call" loading="lazy" width="50" height="50"*/}
            {/*                                                      decoding="async" data-nimg="1"*/}
            {/*                                                      src="/_next/static/media/phone-call.1bec022a.svg"*/}
            {/*                                                      style="color: transparent;"></div>*/}
            {/*                            <div class="cm-text"><p>Contact Phone</p></div>*/}
            {/*                        </div>*/}
            {/*                        <div class="single-contact-item__bottom"><a href="callto:5588866622">+55 888 666*/}
            {/*                            22</a><a href="callto:5588866633">+55 888 666 33</a></div>*/}
            {/*                    </div>*/}
            {/*                    <div class="single-contact-item">*/}
            {/*                        <div class="single-contact-item__top">*/}
            {/*                            <div class="cm-icon"><img alt="mail-open" loading="lazy" width="50" height="50"*/}
            {/*                                                      decoding="async" data-nimg="1"*/}
            {/*                                                      src="/_next/static/media/mail-open.8e16e342.svg"*/}
            {/*                                                      style="color: transparent;"></div>*/}
            {/*                            <div class="cm-text"><p>Contact Email</p></div>*/}
            {/*                        </div>*/}
            {/*                        <div class="single-contact-item__bottom"><a*/}
            {/*                            href="mailto:Info.axz@gmail.com">Info.axz@gmail.com</a><a*/}
            {/*                            href="mailto:Info.axz@gmail.com">Info.mela@gmail.com</a></div>*/}
            {/*                    </div>*/}
            {/*                    <div class="single-contact-item">*/}
            {/*                        <div class="single-contact-item__top">*/}
            {/*                            <div class="cm-icon"><img alt="location" loading="lazy" width="50" height="50"*/}
            {/*                                                      decoding="async" data-nimg="1"*/}
            {/*                                                      src="/_next/static/media/location-dot.bd626853.svg"*/}
            {/*                                                      style="color: transparent;"></div>*/}
            {/*                            <div class="cm-text"><p>Contact Location</p></div>*/}
            {/*                        </div>*/}
            {/*                        <div class="single-contact-item__bottom"><p class="location-text">Mirpur 12,*/}
            {/*                            Pollobi, <br>Dhaka, Bangladesh</p></div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div class="cm-location-map"><h3 class="section-title">Location Map</h3>*/}
            {/*                <div class="cm-location-map__content">*/}
            {/*                    <div class="cm-map-iframe">*/}
            {/*                        <iframe*/}
            {/*                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mirpur%20Dhaka+(Martin)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div class="cm-contact-form"><h3 class="section-title">Contact Us</h3>*/}
            {/*                <div class="cm-contact-form__content">*/}
            {/*                    <form class="cm-form">*/}
            {/*                        <div class="single-input">*/}
            {/*                            <div class="single-input__item"><label for="fname">Your first*/}
            {/*                                name <span>*</span></label><input id="fname" required="" autocomplete="off"*/}
            {/*                                                                  type="text" name="fname"></div>*/}
            {/*                            <div class="single-input__item"><label for="lname">Your last name <span>*</span></label><input*/}
            {/*                                id="lname" required="" autocomplete="off" type="text" name="lname"></div>*/}
            {/*                        </div>*/}
            {/*                        <div class="single-input">*/}
            {/*                            <div class="single-input__item"><label for="email">Your email*/}
            {/*                                address <span>*</span></label><input id="email" required=""*/}
            {/*                                                                     autocomplete="off" type="email"*/}
            {/*                                                                     name="email"></div>*/}
            {/*                            <div class="single-input__item"><label for="phone">Your phone*/}
            {/*                                number <span>*</span></label><input id="phone" class="no-arrows" required=""*/}
            {/*                                                                    autocomplete="off" type="number"*/}
            {/*                                                                    name="phone"></div>*/}
            {/*                        </div>*/}
            {/*                        <div class="single-input">*/}
            {/*                            <div class="single-input__item w-full"><label for="msg">Your*/}
            {/*                                message <span>*</span></label><textarea name="msg" id="msg"*/}
            {/*                                                                        required=""></textarea></div>*/}
            {/*                        </div>*/}
            {/*                        <button type="submit" class="cm-btn primary">Submit Now</button>*/}
            {/*                    </form>*/}
            {/*                    <div class="contact__msg mt-40"></div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
                </div>
            </div>
        </div>
    )
}
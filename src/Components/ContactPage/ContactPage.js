import React, { useState, useEffect } from 'react';
import ContentCircle from "../layouts/ContentCircle";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

import './styles.css'

export default function ContactPage() {
    const [inputValues, setInputValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isEmpty = Object.values(inputValues).some(value => value === '');

        if (isEmpty) {
            toast.error('Please fill in all fields before submitting.');
        } else {
            e.preventDefault();
            const serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
            const templateId = process.env.REACT_APP_EMAIL_TEMPLATE_ID;
            const userId = process.env.REACT_APP_EMAIL_PUBLIC_KEY
            emailjs.send(
                serviceId,
                templateId,
                inputValues,
                userId
              )
                .then(() => {
                    setInputValues({ firstName: '', lastName: '', email: '', phone: '', message: '' });
                    toast.success('Your message was sent successfully!');
                })
                .catch((e) => {
                    toast.error('There was an error sending your message. Please try again later.');
                });
        }
    };
    
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
                            <p>Contact Me</p>
                        </div>
                        <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                            Robert Aydinyan the best
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
                                                src="/images/icons/phone-call.svg"
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
                                                src="/images/icons/mail-open.svg"
                                                alt="mail-open"
                                                effect="blur"
                                                style={{display: 'block'}}
                                             />
                                        </div>
                                        <div className="text"><p>Contact Email</p></div>
                                    </div>
                                    <div className="single-contact-item__bottom">
                                        <a href="mailto:contact@robond.dev">contact@robond.dev</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h3 className="section-title">Contact Us</h3>
                            <div className="contact-form__content">
                                <form className="form" onSubmit={handleSubmit}>
                                    <div className="single-input">
                                        <div className="single-input__item">
                                            <label htmlFor="fname">Your first name <span>*</span></label>
                                            <input id="fname" required type="text" autoCorrect="false" 
                                                    name="firstName" value={inputValues.firstName} onChange={handleChange} />
                                        </div>
                                        <div className="single-input__item">
                                            <label htmlFor="lname">Your last name <span>*</span></label>
                                            <input id="lname" required type="text" autoCorrect="false"
                                                    name="lastName" value={inputValues.lastName} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="single-input">
                                        <div className="single-input__item">
                                            <label htmlFor="email">Your email address <span>*</span></label>
                                            <input id="email" required type="email" autoCorrect="false"
                                                    name="email" value={inputValues.email} onChange={handleChange} />
                                        </div>
                                        <div className="single-input__item">
                                            <label htmlFor="phone">Your phone number <span>*</span></label>
                                            <input id="phone" className="no-arrows" required type="number" autoCorrect="false"
                                                    name="phone" value={inputValues.phone} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="single-input">
                                        <div className="single-input__item w-full">
                                            <label htmlFor="msg">Your message <span>*</span></label>
                                            <textarea
                                                id="msg" required 
                                                name="message"
                                                value={inputValues.message}
                                                onChange={handleChange}
                                            />
                                        </div>
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
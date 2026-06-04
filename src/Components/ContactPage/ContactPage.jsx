import React, { useRef, useState } from 'react';
import ContentCircle from "../layouts/ContentCircle";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';

import './styles.css'

const MIN_FILL_MS = 3000;
const COOLDOWN_MS = 30000;

export default function ContactPage() {
    const [inputValues, setInputValues] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: ''
    });
    const [honeypot, setHoneypot] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const mountedAt = useRef(Date.now());
    const lastSentAt = useRef(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitting) return;

        // Honeypot: real users never touch this field. Bots fill every input.
        // Show the success toast anyway so a scraper can't tell it was caught.
        if (honeypot.trim() !== '') {
            toast.success('Your message was sent successfully!');
            return;
        }

        // Submit-time threshold: bots submit instantly after page load.
        if (Date.now() - mountedAt.current < MIN_FILL_MS) {
            toast.success('Your message was sent successfully!');
            return;
        }

        // Per-session cooldown so a single user can't blast the EmailJS quota.
        if (Date.now() - lastSentAt.current < COOLDOWN_MS) {
            toast.info('Please wait a moment before sending another message.');
            return;
        }

        const isEmpty = Object.values(inputValues).some(value => value === '');
        if (isEmpty) {
            toast.error('Please fill in all fields before submitting.');
            return;
        }

        const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
        const userId = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

        setSubmitting(true);
        emailjs.send(serviceId, templateId, inputValues, userId)
            .then(() => {
                lastSentAt.current = Date.now();
                setInputValues({ firstName: '', lastName: '', email: '', phone: '', message: '' });
                toast.success('Your message was sent successfully!');
            })
            .catch(() => {
                toast.error('There was an error sending your message. Please try again later.');
            })
            .finally(() => {
                setSubmitting(false);
            });
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
                                        <a href="tel:+37433230250">+374 33 230 250</a>
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
                                <div className="single-contact-item">
                                    <div className="single-contact-item__top">
                                        <div className="cm-icon">
                                            <LazyLoadImage
                                                src="/images/icons/linkedin.svg"
                                                alt="linkedin"
                                                effect="blur"
                                                style={{display: 'block'}}
                                            />
                                        </div>
                                        <div className="text"><p>LinkedIn</p></div>
                                    </div>
                                    <div className="single-contact-item__bottom">
                                        <a
                                            href="https://www.linkedin.com/in/robertaydinyan/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            linkedin.com/in/robertaydinyan
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <h3 className="section-title">Contact Us</h3>
                            <div className="contact-form__content">
                                <form className="form" onSubmit={handleSubmit} noValidate>
                                    {/* Honeypot — real users never see or focus this. */}
                                    <div className="hp-field" aria-hidden="true">
                                        <label htmlFor="hp-website">Website</label>
                                        <input
                                            id="hp-website"
                                            type="text"
                                            name="website"
                                            tabIndex={-1}
                                            autoComplete="off"
                                            value={honeypot}
                                            onChange={(e) => setHoneypot(e.target.value)}
                                        />
                                    </div>
                                    <div className="single-input">
                                        <div className="single-input__item">
                                            <label htmlFor="fname">Your first name <span>*</span></label>
                                            <input id="fname" required type="text" autoCorrect="off" 
                                                    name="firstName" value={inputValues.firstName} onChange={handleChange} />
                                        </div>
                                        <div className="single-input__item">
                                            <label htmlFor="lname">Your last name <span>*</span></label>
                                            <input id="lname" required type="text" autoCorrect="off"
                                                    name="lastName" value={inputValues.lastName} onChange={handleChange} />
                                        </div>
                                    </div>
                                    <div className="single-input">
                                        <div className="single-input__item">
                                            <label htmlFor="email">Your email address <span>*</span></label>
                                            <input id="email" required type="email" autoCorrect="off"
                                                    name="email" value={inputValues.email} onChange={handleChange} />
                                        </div>
                                        <div className="single-input__item">
                                            <label htmlFor="phone">Your phone number <span>*</span></label>
                                            <input id="phone" className="no-arrows" required type="number" autoCorrect="off"
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
                                    <button type="submit" className="btn primary" disabled={submitting}>
                                        {submitting ? 'Sending…' : 'Submit Now'}
                                    </button>
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
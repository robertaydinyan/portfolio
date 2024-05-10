import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Header() {
    return (
        <div className="author-view">
            <div className="author-content">
                <div className="author-image">
                    <div className="profile-picture-container">
                        <LazyLoadImage
                            src="/images/profile_picture.jpeg"
                            alt="Profile Picture"
                            effect="blur"
                            className="profile-picture"
                        />
                    </div>
                </div>

                <div className="author-info">
                    <h3 className="author-name">Robert Aydinyan</h3>
                    <span className="author-designation">Full Stack Web &amp; Mobile Developer</span>
                </div>

                <div className="author-hiring">
                    <a className="btn primary" href="/contact">Hire Me!</a>
                    <a className="btn" href="#">Download CV</a>
                </div>

                <div className="author-description">
                    <p>Specializing in creating robust digital solutions tailored to your business needs </p>
                    <p> Let’s collaborate to bring your vision to life!</p>
                </div>
                

                <div className="author-social-links">
                    <a href="https://www.facebook.com/robond0" className="social-links" target="_blank">
                        <LazyLoadImage
                            src="/images/icons/facebook.svg"
                            alt="Facebook"
                            effect="blur"
                            className="svg"
                        />
                    </a>

                    <a href="https://github.com/robertaydinyan" className="social-links" target="_blank">
                        <LazyLoadImage
                            src="/images/icons/github.svg"
                            alt="github"
                            effect="blur"
                            className="svg"
                        />
                    </a>

                    {/*<a href="https://www.instagram.com/" className="social-links" target="_blank">*/}
                    {/*    <img alt="instagram" className="svg" src={instagram_icon}/>*/}
                    {/*</a>*/}

                    <a href="https://www.linkedin.com/in/robertaydinyan/" className="social-links" target="_blank">
                        <LazyLoadImage
                            src="/images/icons/linkedin.svg"
                            alt="linkedin"
                            effect="blur"
                            className="svg"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

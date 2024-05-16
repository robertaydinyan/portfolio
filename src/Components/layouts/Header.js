import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {Link} from "react-router-dom";

export default function Header() {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = 'Robert_Aydinyan_CV.pdf';
        link.download = 'filename.extension';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

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
                    <Link className="btn primary" to="/contact">Hire Me!</Link>
                    <a className="btn" href="#" onClick={handleDownload}>Download CV</a>
                </div>

                <div className="author-description">
                    <p>Specializing in creating robust digital solutions tailored to your business needs </p>
                    <p> Let’s collaborate to bring your vision to life!</p>
                </div>
                

                <div className="author-social-links">

                    <a href="https://github.com/robertaydinyan" className="social-links" target="_blank">
                        <LazyLoadImage
                            src="/images/icons/github.svg"
                            alt="github"
                            effect="blur"
                            className="svg"
                        />
                    </a>

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

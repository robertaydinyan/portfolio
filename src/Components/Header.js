import React from 'react';
import profile_picture from '../images/profile_picture.jpeg';
import github_icon from '../images/icons/github.svg'
import instagram_icon from '../images/icons/instagram.svg'
import facebook_icon from '../images/icons/facebook.svg'
import linkedin_icon from '../images/icons/linkedin.svg'

export default function Header() {
    return (
        <div className="author-view sticky-top">
            <div className="author-content">
                <div className="author-image">
                    <img alt="Profile Picture" src={profile_picture} className="profile-picture" />
                </div>

                <div className="author-info">
                    <h3 className="author-name">Robert Aydinyan</h3>
                    <span className="author-designation">Designer &amp; Developer</span>
                </div>

                <div className="author-hiring">
                    <a className="btn primary" href="/contact">Hire Me!</a>
                    <a className="btn" href="#">Download CV</a>
                </div>

                <div className="author-description">
                    <p>Specializing in strategy, improving design maturity &amp; design systems.</p>
                </div>
                
                <div className="author-social-links">
                    <a href="https://www.facebook.com/" className="social-links" target="_blank">
                        <img alt="facebook" className="svg" src={facebook_icon}/>
                    </a>

                    <a href="https://www.github.com/" className="social-links" target="_blank">
                        <img alt="github" className="svg" src={github_icon}/>
                    </a>

                    <a href="https://www.instagram.com/" className="social-links" target="_blank">
                        <img alt="instagram" className="svg" src={instagram_icon}/>
                    </a>

                    <a href="https://www.linkedin.com/" className="social-links" target="_blank">
                        <img alt="linkedin" className="svg" src={linkedin_icon}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import profile_picture from '../../images/profile_picture.jpeg';
import github_icon from '../../images/icons/github.svg'
// import instagram_icon from '../../images/icons/instagram.svg'
import facebook_icon from '../../images/icons/facebook.svg'
import linkedin_icon from '../../images/icons/linkedin.svg'

export default function Header() {
    return (
        <div className="author-view">
            <div className="author-content">
                <div className="author-image">
                    <div className="profile-picture-container">
                        <img alt="Profile Picture" src={profile_picture} className="profile-picture" />
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
                        <img alt="facebook" className="svg" src={facebook_icon}/>
                    </a>

                    <a href="https://github.com/robertaydinyan" className="social-links" target="_blank">
                        <img alt="github" className="svg" src={github_icon}/>
                    </a>

                    {/*<a href="https://www.instagram.com/" className="social-links" target="_blank">*/}
                    {/*    <img alt="instagram" className="svg" src={instagram_icon}/>*/}
                    {/*</a>*/}

                    <a href="https://www.linkedin.com/in/robertaydinyan/" className="social-links" target="_blank">
                        <img alt="linkedin" className="svg" src={linkedin_icon}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

import React from 'react';
import ContentCircle from "../layouts/ContentCircle";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import './styles.css'

export default function AboutPage() {
    return (
        <div className="content-area">
            <div className="content-box mode">
                <div className="content-item page-template">
                    <div className="content-item__top">
                        <ContentCircle />
                        <div className="content-sub">
                            <div className="icon">
                                <LazyLoadImage
                                    src="/images/icons/about.svg"
                                    alt="icon"
                                    effect="blur"
                                    style={{display: 'block'}}
                                />
                            </div>
                            <p>Me! About</p>
                        </div>
                        <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                            Hire a Top Full Stack Web & Mobile Developer <span> Robert Aydinyan </span>
                            <u className="inline">
                                <LazyLoadImage
                                    src="/images/icons/line.svg"
                                    alt="image"
                                    effect="blur"
                                    style={{display: 'block'}}
                                />
                            </u>
                             in Yerevan.
                        </h1>
                    </div>
                    <div className="about-brief">
                        <div className="about-left">
                            <h3>Me!</h3>
                            <p>I'm a Senior Full-Stack Web & Mobile Developer based in Yerevan with
                                7 years of experience shipping production software — from
                                enterprise LMS platforms and BI dashboards to clinic management
                                systems and mobile apps. I currently lead engineering teams,
                                mentoring developers and translating business problems into
                                scalable technical solutions.</p>
                        </div>
                        <div className="about-right">
                            <h3>Commitment to Excellence</h3>
                            <p>My portfolio boasts a range of projects that demonstrate my expertise in developing
                                 scalable web and mobile applications. Each project underscores my commitment
                                 to quality and the innovative use of technology to achieve the best outcomes..
                                 <br/>
                                 <br/>
                                 Let's connect and discuss how I can bring your project to life 
                                  with professionalism and precision.</p>
                        </div>
                    </div>

                    <div className="single-info-item">
                        <div className="row">
                            <h3>Tech Stack
                                <LazyLoadImage
                                    src="/images/icons/line.svg"
                                    alt="image"
                                    effect="blur"
                                    style={{display: 'block'}}
                                />
                            </h3>
                            <div className="stack-groups">
                                {[
                                    { label: 'Languages', items: ['PHP', 'JavaScript', 'TypeScript', 'Python', 'Go', 'HTML', 'CSS'] },
                                    { label: 'Frontend', items: ['React', 'React Native', 'Angular', 'Vue', 'Livewire', 'jQuery'] },
                                    { label: 'Backend', items: ['Laravel', 'Yii2', 'Node.js', 'Express', 'Django'] },
                                    { label: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
                                    { label: 'DevOps & Infra', items: ['AWS', 'Docker', 'Linux', 'Nginx', 'Apache', 'REST APIs'] },
                                    { label: 'Integrations', items: ['Stripe', 'Twilio', 'DocuSign', 'Uber', 'DoorDash', 'Vista', 'Intercart'] }
                                ].map((group) => (
                                    <div className="stack-group" key={group.label}>
                                        <h4 className="stack-group__label">{group.label}</h4>
                                        <div className="tech-tags">
                                            {group.items.map((item) => (
                                                <span className="tech-tag" key={item}>{item}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="about-inf">
                        <div className="about-info-content">
                            <div className="about-info"><h6 className="name">Name</h6><p>Robert Aydinyan</p></div>
                            <div className="about-info"><h6 className="name">Phone</h6><p><a href="tel:+374 (33) 230 250">+374 (33) 230 250</a></p></div>
                        </div>
                        <div className="about-info-content">
                            <div className="about-info"><h6 className="name">Location</h6><p>Armenia, Yerevan</p></div>
                            <div className="about-info"><h6 className="name">Experience</h6><p>7 Years</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

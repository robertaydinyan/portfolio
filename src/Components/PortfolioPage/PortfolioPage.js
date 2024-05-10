import React, { useState, useEffect } from 'react';
import ContentCircle from "../layouts/ContentCircle";
// import portfolio_icon from "../../images/icons/portfolio.svg"
// import line_icon from "../../images/icons/line.svg"
// import rotate_arrow_icon from "../../images/icons/"
// import projects from '../../data/projects.json'
import './styles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import projects from '../../data/projects.json'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PortfolioPage() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div className="content-area">
            <div className="content-box mode">
                <div className="content-item page-template">
                    <div className="content-item__top">
                        <ContentCircle/>
                        <div className="content-sub">
                            <div className="icon">
                            </div>
                            <p>Best Our Portfolio</p>
                        </div>
                        <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                            Check out my
                            <span> Portfolio </span>
                            <u>
                                <LazyLoadImage
                                    src="/images/icons/line.svg"
                                    alt="portfolio"
                                    effect="blur"
                                />
                            </u>
                        </h1>
                    </div>
                    <div className="portfolio">
                        <div className="portfolio-item">
                            {projects.map((project, index) => (
                                <div className="single-portfolio-content" style={{
                                    gridRow: 'span ' + (project.height ? project.height : 1),
                                    gridColumn: 'span ' + (project.weight ? project.weight : 1),
                                }} key={project.id}>
                                    <div className="portfolio-thumb">
                                        <LazyLoadImage
                                            src={"/images/projects/0" + (index + 1) + "/01.png"}
                                            alt="portfolio-item"
                                            effect="blur"
                                            style={{ display: 'block', width: '100%' }}
                                            wrapperProps={null}
                                        />
                                        <a className="portfolio-cat" href="#">{project.cat}</a>
                                        <div className="center-btn">
                                            <a className="round-btn" href="/portfolio-details">
                                                {/* <img alt="image" src={rotate_arrow_icon}/> */}
                                                <LazyLoadImage
                                                    src={"/images/icons/rotate-arrow.svg"}
                                                    effect="blur"
                                                    alt="image"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-meta">
                                        <div className="tag"><span>Type:</span> {project.tag}</div>
                                        <a className="title" href="/portfolio-details">{ project.title }</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

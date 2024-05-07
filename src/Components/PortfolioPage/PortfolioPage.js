import React, {useEffect} from 'react';
import ContentCircle from "../layouts/ContentCircle";
import portfolio_icon from "../../images/icons/portfolio.svg"
import line_icon from "../../images/icons/line.svg"
import rotate_arrow_icon from "../../images/icons/rotate-arrow.svg"
import project_1_img from "../../images/projects/01/01.jpg"
import project_2_img from "../../images/projects/02/01.png"
import project_3_img from "../../images/projects/03/01.png"
import project_4_img from "../../images/projects/04/01.png"

import './styles.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function PortfolioPage() {
    useEffect(() => {
        AOS.init();
    }, []);

    const projects = [
        {
            title: 'Yerevan Mall',
            tag: 'Web Development',
            cat: 'Web Development',
            image: project_1_img,
            height: 3,
        },
        {
            title: 'Grocera',
            tag: 'Web Development',
            cat: 'Web Development',
            image: project_2_img
        },
        {
            title: 'Youmme tech',
            tag: 'Web Development',
            cat: 'Web Development',
            image: project_3_img
        },
        {
            title: 'Games Sakla',
            tag: 'Web Development',
            cat: 'Web Development',
            image: project_4_img
        }
    ]

    return (
        <div className="content-area">
            <div className="content-box mode">
                <div className="content-item page-template">
                    <div className="content-item__top">
                        <ContentCircle/>
                        <div className="content-sub">
                            <div className="icon">
                                <img alt="portfolio" className="svg" src={portfolio_icon}/>
                            </div>
                            <p>Best Our Portfolio</p>
                        </div>
                        <h1 className="main-title" data-aos="fade-up" data-aos-duration="1500">
                            Check out my
                            <span> Portfolio </span>
                            <u>
                                <img alt="image" loading="lazy" src={line_icon}/>
                            </u>
                        </h1>
                    </div>
                    <div className="portfolio">
                        <div className="portfolio-item">
                            {projects.map((project, index) => (
                                <div className="single-portfolio-content" style={{
                                    gridRow: 'span ' + (project.height ? project.height : 1),
                                    gridColumn: 'span ' + (project.weight ? project.weight : 1),
                                }}>
                                    <div className="portfolio-thumb">
                                        <img alt="portfolio-item" src={project.image}/>
                                        <a className="portfolio-cat" href="#">{project.cat}</a>
                                        <div className="center-btn">
                                            <a className="round-btn" href="/portfolio-details">
                                                <img alt="image" src={rotate_arrow_icon}/>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="portfolio-meta">
                                        <div className="tag"><span>Type:</span> {project.tag}</div>
                                        <a className="title" href="/portfolio-details">{ project.title }</a>
                                    </div>
                                </div>
                            ))}

                            {/*                <div class="single-portfolio-content">*/}
                            {/*                    <div class="cm-portfolio-thumb"><img alt="portfolio-item" loading="lazy" width="856"*/}
                            {/*                                                         height="414" decoding="async" data-nimg="1"*/}
                            {/*                                                         srcset="/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F02.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F02.jpg&amp;w=1920&amp;q=75 2x"*/}
                            {/*                                                         src="/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F02.jpg&amp;w=1920&amp;q=75"*/}
                            {/*                                                         style="color: transparent;"><a*/}
                            {/*                        class="cm-portfolio-cat" href="#">Web Design</a>*/}
                            {/*                        <div class="cm-center-btn"><a class="cm-round-btn" href="/portfolio-details"><img*/}
                            {/*                            alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"*/}
                            {/*                            src="/assets/img/icons/rotate-arrow.svg" style="color: transparent;"></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div class="cm-portfolio-meta">*/}
                            {/*                        <div class="cm-tag"><span>Type:</span>Web and iOS Application</div>*/}
                            {/*                        <a class="title" href="/portfolio-details">Website UI Design</a></div>*/}
                            {/*                </div>*/}
                            {/*                <div class="single-portfolio-content">*/}
                            {/*                    <div class="cm-portfolio-thumb"><img alt="portfolio-item" loading="lazy" width="856"*/}
                            {/*                                                         height="414" decoding="async" data-nimg="1"*/}
                            {/*                                                         srcset="/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F03.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F03.jpg&amp;w=1920&amp;q=75 2x"*/}
                            {/*                                                         src="/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F03.jpg&amp;w=1920&amp;q=75"*/}
                            {/*                                                         style="color: transparent;"><a*/}
                            {/*                        class="cm-portfolio-cat" href="#">Bronco Design</a>*/}
                            {/*                        <div class="cm-center-btn"><a class="cm-round-btn" href="/portfolio-details"><img*/}
                            {/*                            alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"*/}
                            {/*                            src="/assets/img/icons/rotate-arrow.svg" style="color: transparent;"></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div class="cm-portfolio-meta">*/}
                            {/*                        <div class="cm-tag"><span>Type:</span>Mobile Application</div>*/}
                            {/*                        <a class="title" href="/portfolio-details">Flayer Microsoft Template Design</a>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div class="single-portfolio-content">*/}
                            {/*                    <div class="cm-portfolio-thumb"><img alt="portfolio-item" loading="lazy" width="856"*/}
                            {/*                                                         height="414" decoding="async" data-nimg="1"*/}
                            {/*                                                         srcset="/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F04.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F04.jpg&amp;w=1920&amp;q=75 2x"*/}
                            {/*                                                         src="/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F04.jpg&amp;w=1920&amp;q=75"*/}
                            {/*                                                         style="color: transparent;"><a*/}
                            {/*                        class="cm-portfolio-cat" href="#">Mockup Design</a>*/}
                            {/*                        <div class="cm-center-btn"><a class="cm-round-btn" href="/portfolio-details"><img*/}
                            {/*                            alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"*/}
                            {/*                            src="/assets/img/icons/rotate-arrow.svg" style="color: transparent;"></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div class="cm-portfolio-meta">*/}
                            {/*                        <div class="cm-tag"><span>Type:</span>UX, UI, UXW, 3D</div>*/}
                            {/*                        <a class="title" href="/portfolio-details">Bronco PSD, Figma &amp; XD Design</a>*/}
                            {/*                    </div>*/}
                            {/*                </div>*/}
                            {/*                <div class="single-portfolio-content">*/}
                            {/*                    <div class="cm-portfolio-thumb"><img alt="portfolio-item" loading="lazy" width="856"*/}
                            {/*                                                         height="414" decoding="async" data-nimg="1"*/}
                            {/*                                                         srcset="/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F05.jpg&amp;w=1080&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F05.jpg&amp;w=1920&amp;q=75 2x"*/}
                            {/*                                                         src="/_next/image?url=%2Fassets%2Fimg%2Fportfolio%2F05.jpg&amp;w=1920&amp;q=75"*/}
                            {/*                                                         style="color: transparent;"><a*/}
                            {/*                        class="cm-portfolio-cat" href="#">Mockup Design</a>*/}
                            {/*                        <div class="cm-center-btn"><a class="cm-round-btn" href="/portfolio-details"><img*/}
                            {/*                            alt="image" loading="lazy" width="20" height="20" decoding="async" data-nimg="1"*/}
                            {/*                            src="/assets/img/icons/rotate-arrow.svg" style="color: transparent;"></a></div>*/}
                            {/*                    </div>*/}
                            {/*                    <div class="cm-portfolio-meta">*/}
                            {/*                        <div class="cm-tag"><span>Type:</span>Web and iOS Application</div>*/}
                            {/*                        <a class="title" href="/portfolio-details">Furniture mockup template</a></div>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div class="cm-site-pagination">*/}
                            {/*                <nav aria-label="pagination-area">*/}
                            {/*                    <ul class="pagination">*/}
                            {/*                        <li class="page-item"><a class="page-link" tabindex="0" href="#">01</a></li>*/}
                            {/*                        <li class="page-item"><a class="page-link" href="#">02</a></li>*/}
                            {/*                        <li class="page-item"><a class="page-link" href="#">03</a></li>*/}
                            {/*                        <li class="page-item"><a class="page-link" href="#">04</a></li>*/}
                            {/*                    </ul>*/}
                            {/*                </nav>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

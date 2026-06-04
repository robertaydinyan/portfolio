import React, { useEffect, useState } from 'react';
import ContentCircle from "../layouts/ContentCircle";
import './styles.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import projectsData from '../../data/projects.json'

const { featured, earlierWork } = projectsData;

const isPortrait = (p) => p.orientation === 'portrait';

function ProjectThumb({ project, onOpen }) {
    const fitClass = isPortrait(project) ? 'fit-contain' : 'fit-cover';
    return (
        <button
            type="button"
            className={`portfolio-thumb orient-${project.orientation || 'landscape'}`}
            onClick={() => onOpen(project)}
            aria-label={`Open ${project.title}`}
        >
            <div className={`portfolio-thumb__media ${fitClass}`}>
                <LazyLoadImage
                    src={projectImagePath(project, '01.png')}
                    alt={project.title}
                    effect="blur"
                    wrapperClassName="portfolio-thumb__lazy"
                />
            </div>
            <span className="portfolio-cat">{project.cat}</span>
            {project.internal && (
                <span className="portfolio-badge internal" title="Internal / private project">
                    Internal
                </span>
            )}
            <div className="center-description">
                <span>Click to view details</span>
            </div>
        </button>
    );
}

function ProjectTitle({ project }) {
    if (project.liveUrl) {
        return (
            <a className="title" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                {project.title}
            </a>
        );
    }
    return <span className="title">{project.title}</span>;
}

const pad2 = (n) => String(n).padStart(2, '0');
const projectImagePath = (project, file) => `/images/projects/${pad2(project.id)}/${file}`;

const probeImage = (src) =>
    new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
    });

const MAX_PROBE = 10;

function ProjectViewer({ project, onClose }) {
    const initialImages = Array.isArray(project.images) && project.images.length > 0
        ? project.images.map((f) => projectImagePath(project, f))
        : [projectImagePath(project, '01.png')];

    const [images, setImages] = useState(initialImages);
    const [index, setIndex] = useState(0);
    const [panelCollapsed, setPanelCollapsed] = useState(false);

    // Auto-detect additional screenshots when projects.json doesn't pin an explicit list.
    useEffect(() => {
        if (Array.isArray(project.images) && project.images.length > 0) return;

        let cancelled = false;
        (async () => {
            const candidates = Array.from({ length: MAX_PROBE }, (_, i) =>
                projectImagePath(project, `${pad2(i + 1)}.png`)
            );
            const results = await Promise.all(candidates.map(probeImage));
            if (cancelled) return;
            const found = [];
            for (let i = 0; i < results.length; i++) {
                if (results[i]) found.push(candidates[i]);
                else break;
            }
            if (found.length > 1) setImages(found);
        })();
        return () => { cancelled = true; };
    }, [project.id, project.images]);

    const hasMany = images.length > 1;
    const next = () => setIndex((i) => (i + 1) % images.length);
    const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowRight' && hasMany) next();
            else if (e.key === 'ArrowLeft' && hasMany) prev();
        };
        document.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose, hasMany]);

    return (
        <div
            className="project-viewer"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
        >
            <div className="project-viewer__stage" onClick={onClose}>
                <img
                    className="project-viewer__image"
                    src={images[index]}
                    alt={`${project.title} — screenshot ${index + 1}`}
                    onClick={(e) => e.stopPropagation()}
                />
            </div>

            <button
                type="button"
                className="project-viewer__close"
                onClick={onClose}
                aria-label="Close"
                autoFocus
            >
                ×
            </button>

            {hasMany && (
                <>
                    <button
                        type="button"
                        className="project-viewer__nav project-viewer__nav--prev"
                        onClick={prev}
                        aria-label="Previous screenshot"
                    >
                        ‹
                    </button>
                    <button
                        type="button"
                        className="project-viewer__nav project-viewer__nav--next"
                        onClick={next}
                        aria-label="Next screenshot"
                    >
                        ›
                    </button>
                    <div className="project-viewer__counter">
                        {index + 1} / {images.length}
                    </div>
                </>
            )}

            <div className={`project-viewer__panel ${panelCollapsed ? 'is-collapsed' : ''}`}>
                <button
                    type="button"
                    className="project-viewer__toggle"
                    onClick={() => setPanelCollapsed((v) => !v)}
                    aria-expanded={!panelCollapsed}
                    aria-label={panelCollapsed ? 'Show details' : 'Hide details'}
                >
                    <span className="project-viewer__toggle-icon" aria-hidden="true">
                        {panelCollapsed ? '⌃' : '⌄'}
                    </span>
                    <span>{panelCollapsed ? 'Show details' : 'Hide details'}</span>
                </button>

                <div className="project-viewer__panel-inner">
                    <div className="project-viewer__head">
                        <h2>{project.title}</h2>
                        <span className="year">{project.year}</span>
                    </div>
                    <p className="project-viewer__meta">
                        <span>{project.company}</span>
                        <span className="dot">·</span>
                        <span className="role">{project.role}</span>
                        <span className="dot">·</span>
                        <span>{project.cat}</span>
                    </p>
                    <p className="project-viewer__desc">{project.description}</p>
                    <div className="tech-tags">
                        {project.tech.map((t) => (
                            <span className="tech-tag" key={t}>{t}</span>
                        ))}
                    </div>
                    {project.liveUrl && (
                        <a
                            className="btn primary project-viewer__cta"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Visit live site ↗
                        </a>
                    )}
                    {project.internal && !project.liveUrl && (
                        <p className="project-viewer__note">
                            Internal / private project — no public link available.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function PortfolioPage() {
    const [activeProject, setActiveProject] = useState(null);

    return (
        <div className="content-area">
            <div className="content-box mode">
                <div className="content-item page-template">
                    <div className="content-item__top">
                        <ContentCircle/>
                        <div className="content-sub">
                            <div className="icon"></div>
                            <p>Best of My Portfolio</p>
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
                            {featured.map((project) => (
                                <div
                                    className={`single-portfolio-content orient-${project.orientation || 'landscape'}`}
                                    key={project.id}
                                >
                                    <ProjectThumb project={project} onOpen={setActiveProject} />
                                    <div className="portfolio-meta">
                                        <div className="portfolio-meta__head">
                                            <ProjectTitle project={project} />
                                            <span className="year">{project.year}</span>
                                        </div>
                                        <div className="company-role">
                                            <span className="company">{project.company}</span>
                                            <span className="dot">·</span>
                                            <span className="role">{project.role}</span>
                                        </div>
                                        <div className="tech-tags">
                                            {project.tech.map((t) => (
                                                <span className="tech-tag" key={t}>{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="earlier-work">
                        <h3 className="earlier-work__title">Earlier work (2017 – 2022)</h3>
                        <ul className="earlier-work__list">
                            {earlierWork.map((p) => (
                                <li key={p.id} className="earlier-work__item">
                                    <div className="earlier-work__head">
                                        <span className="earlier-work__year">{p.year}</span>
                                        <span className="earlier-work__name">{p.title}</span>
                                        <span className="earlier-work__company">— {p.company}</span>
                                    </div>
                                    <p className="earlier-work__desc">{p.description}</p>
                                    <div className="tech-tags">
                                        {p.tech.map((t) => (
                                            <span className="tech-tag" key={t}>{t}</span>
                                        ))}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {activeProject && (
                <ProjectViewer project={activeProject} onClose={() => setActiveProject(null)} />
            )}
        </div>
    );
}

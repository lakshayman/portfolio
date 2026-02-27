'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        number: '01',
        title: 'Xtasy — College Fest',
        desc: 'Official website for the college fest "Xtasy" using React.js. Implemented a QR code registration system integrated with a mobile app for secure campus access management.',
        tags: ['ReactJS', 'QR Codes', 'Node.js'],
        live: 'https://xtasy.lakshaymanchanda.com',
        github: null,
    },
    {
        number: '02',
        title: 'Identity Service',
        desc: 'Owns and maintains the Identity Service app at RealDevSquad — managing architectural design, user stories, task assignments, and feature delivery across multiple languages.',
        tags: ['Java', 'Golang', 'Next.js', 'PostgreSQL'],
        live: 'https://realdevsquad.com',
        github: 'https://github.com/Real-Dev-Squad',
    },
    {
        number: '03',
        title: 'YUDEK Chrome Extension',
        desc: 'Chrome extension built as part of the YUDEK platform, enabling cross-platform features for both administrative and end-user workflows as part of the full product suite.',
        tags: ['Chrome Extension', 'JavaScript', 'EmberJS'],
        live: null,
        github: null,
    },
];

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: { trigger: card, start: 'top 85%' },
                    opacity: 0,
                    y: 60,
                    duration: 0.9,
                    delay: i * 0.12,
                    ease: 'power3.out',
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="section" id="projects" ref={sectionRef} style={{ background: 'var(--bg-2)' }}>
            <div className="grid-bg" />
            <div className="container">
                <div className="section-label">projects</div>
                <h2 className="section-title">
                    Things I've <span className="gradient-text">built</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: 560, marginBottom: 48, marginTop: 12, lineHeight: 1.7 }}>
                    A selection of things I've shipped — from college-level products to production-grade open source apps.
                </p>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <div key={i} className="project-card glass glow-border">
                            <div className="project-number mono">{p.number}</div>
                            <h3 className="project-title">{p.title}</h3>
                            <p className="project-desc">{p.desc}</p>
                            <div className="project-tags">
                                {p.tags.map((t) => (
                                    <span key={t} className="skill-tag">{t}</span>
                                ))}
                            </div>
                            <div style={{ display: 'flex', gap: 16 }}>
                                {p.live && (
                                    <a className="project-link" href={p.live} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink size={14} /> live site →
                                    </a>
                                )}
                                {p.github && (
                                    <a className="project-link" href={p.github} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)' }}>
                                        <Github size={14} /> source
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

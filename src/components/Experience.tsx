'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const experience = [
    {
        date: 'Jan 2025 – Present',
        company: 'AI Squared',
        role: 'Software Engineer',
        points: [
            'Currently building at AI Squared, working on AI-powered web experiences.',
        ],
        accent: 'var(--accent)',
    },
    {
        date: 'Jan 2025 – Present',
        company: 'U.S. Insurance Platform',
        role: 'Software Engineer (Contractual)',
        points: [
            'Developed a platform for U.S. Insurance providers enabling agents and sellers to manage and track all issued insurance policies efficiently.',
            'Collaborated with product and backend teams to design scalable workflows improving policy communication and management.',
        ],
        accent: 'var(--accent-2)',
    },
    {
        date: 'Jul 2023 – Jan 2025',
        company: 'YUDEK',
        role: 'Software Development Engineer 1',
        points: [
            'Created an admin panel allowing administrators to customise various aspects of the platform.',
            'Worked across the entire tech stack: backend, database, frontend, and Chrome extension.',
            'Built reusable image-processing services using HTML Canvas for automated cropping & resizing.',
            'Developed a real-time commenting feature using Pusher.com to enhance social connectivity.',
        ],
        accent: 'var(--accent)',
    },
    {
        date: 'Nov 2021 – Jul 2023',
        company: 'YUDEK',
        role: 'Software Development Engineer – Intern',
        points: [
            'Migrated the entire EmberJS application to TypeScript for better error detection and maintainability.',
            'Implemented testing strategies resulting in a 14% increase in test coverage (68% → 82%).',
            'Authored detailed component stories to improve team collaboration and codebase understanding.',
        ],
        accent: 'var(--accent-3)',
    },
];

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, i) => {
                gsap.from(item, {
                    scrollTrigger: { trigger: item, start: 'top 82%' },
                    opacity: 0,
                    x: i % 2 === 0 ? -60 : 60,
                    duration: 0.9,
                    ease: 'power3.out',
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="section" id="experience" ref={sectionRef} style={{ background: 'var(--bg-2)' }}>
            <div className="grid-bg" />
            <div className="container">
                <div className="section-label">experience</div>
                <h2 className="section-title">
                    Where I've <span className="gradient-text">shipped</span>
                </h2>

                <div className="timeline" style={{ marginTop: '64px' }}>
                    {experience.map((exp, i) => (
                        <div key={i} className="timeline-item">
                            <div className="timeline-card glass glow-border">
                                <div className="timeline-date">{exp.date}</div>
                                <h3 className="timeline-company">{exp.company}</h3>
                                <div className="timeline-role" style={{ color: exp.accent }}>{exp.role}</div>
                                <ul className="timeline-points">
                                    {exp.points.map((p, j) => (
                                        <li key={j}>{p}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

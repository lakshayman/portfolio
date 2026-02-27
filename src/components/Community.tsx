'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const community = [
    {
        icon: '🏘️',
        name: 'Tech Hangout Community',
        role: 'Founder & Organiser · Sep 2024 – Present',
        desc: 'Building a cross-city community of developers and tech enthusiasts focused on casual, no-agenda meetups that foster learning and authentic connections.',
        stat: '400+ participants on WhatsApp',
        accent: 'var(--accent)',
        accentBg: 'rgba(0, 240, 255, 0.08)',
    },
    {
        icon: '⚙️',
        name: 'RealDevSquad',
        role: 'Member & App Owner · Jul 2021 – Present',
        desc: 'Owns the Identity Service app — manages architectural design, user stories, and task assignments. Contributed across Java, Golang, JavaScript, Next.js, React.js, and Ember.js.',
        stat: 'Identity Service Owner',
        accent: 'var(--accent-2)',
        accentBg: 'rgba(123, 47, 255, 0.08)',
    },
    {
        icon: '🎤',
        name: 'JSLovers',
        role: 'Organiser · Mar 2023 – Nov 2024 · New Delhi',
        desc: 'Targeting 50%+ engagement that impacts JSLovers meetup within the Delhi Tech Community. Focused on fostering knowledge growth among JavaScript developers.',
        stat: 'Delhi Tech Community',
        accent: 'var(--accent-3)',
        accentBg: 'rgba(0, 255, 136, 0.08)',
    },
];

export default function Community() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>('.community-card').forEach((card, i) => {
                gsap.from(card, {
                    scrollTrigger: { trigger: card, start: 'top 85%' },
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: 'power3.out',
                });
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="section" id="community" ref={sectionRef}>
            <div className="grid-bg" />
            <div className="container">
                <div className="section-label">open source &amp; community</div>
                <h2 className="section-title">
                    Building <span className="gradient-text-green">together</span>
                </h2>
                <p style={{ color: 'var(--text-muted)', maxWidth: 560, marginBottom: 48, marginTop: 12, lineHeight: 1.7 }}>
                    Code is better when shared. I actively contribute to open source and lead communities
                    that connect developers across India.
                </p>

                <div className="community-grid">
                    {community.map((c, i) => (
                        <div key={i} className="community-card glass glow-border">
                            <div className="community-icon" style={{ background: c.accentBg, color: c.accent }}>
                                {c.icon}
                            </div>
                            <h3 className="community-name">{c.name}</h3>
                            <div className="community-role" style={{ color: c.accent }}>{c.role}</div>
                            <p className="community-desc">{c.desc}</p>
                            <div className="community-stat" style={{ color: c.accent, background: c.accentBg, borderColor: `${c.accent}33` }}>
                                ✦ {c.stat}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

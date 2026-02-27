'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const skills = [
    'ReactJS', 'NextJS', 'EmberJS', 'NodeJS', 'ExpressJS',
    'MongoDB', 'AWS', 'TypeScript', 'JavaScript',
    'Java', 'Python', 'Golang', 'C++',
    'HTML/CSS', 'Git', 'Chrome Extensions',
];

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from('.terminal', {
                scrollTrigger: { trigger: '.terminal', start: 'top 80%' },
                opacity: 0, y: 60, duration: 1, ease: 'power3.out',
            });
            gsap.from('.about-text-block', {
                scrollTrigger: { trigger: '.about-text-block', start: 'top 80%' },
                opacity: 0, x: 40, duration: 1, delay: 0.2, ease: 'power3.out',
            });
            gsap.from('.skill-tag', {
                scrollTrigger: { trigger: '.skills-grid', start: 'top 85%' },
                opacity: 0, y: 20, duration: 0.5, stagger: 0.05, ease: 'power2.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="section" id="about" ref={sectionRef}>
            <div className="grid-bg" />
            <div className="container">
                <div className="section-label">about.me</div>
                <h2 className="section-title reveal">
                    The <span className="gradient-text">story</span> so far
                </h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginTop: '48px', alignItems: 'start' }}>
                    {/* Terminal */}
                    <div className="terminal">
                        <div className="terminal-bar">
                            <span className="terminal-dot red" />
                            <span className="terminal-dot yellow" />
                            <span className="terminal-dot green" />
                            <span className="terminal-title">~/lakshay — zsh</span>
                        </div>
                        <div className="terminal-body">
                            <div className="terminal-line">
                                <span className="terminal-prompt">~$</span>
                                <span className="terminal-cmd">whoami</span>
                            </div>
                            <div className="terminal-output">Lakshay Manchanda</div>

                            <div className="terminal-line">
                                <span className="terminal-prompt">~$</span>
                                <span className="terminal-cmd">cat role.txt</span>
                            </div>
                            <div className="terminal-output">Software Engineer @ AI Squared</div>

                            <div className="terminal-line">
                                <span className="terminal-prompt">~$</span>
                                <span className="terminal-cmd">cat stack.json | jq '.primary'</span>
                            </div>
                            <div className="terminal-output">["React", "Next.js", "Node.js", "AWS"]</div>

                            <div className="terminal-line">
                                <span className="terminal-prompt">~$</span>
                                <span className="terminal-cmd">cat location.txt</span>
                            </div>
                            <div className="terminal-output">New Delhi, India 🇮🇳</div>

                            <div className="terminal-line">
                                <span className="terminal-prompt">~$</span>
                                <span className="terminal-cmd">echo $STATUS</span>
                            </div>
                            <div className="terminal-output" style={{ color: 'var(--accent-3)' }}>Open to interesting opportunities ✓</div>

                            <div className="terminal-line" style={{ marginTop: '12px' }}>
                                <span className="terminal-prompt">~$</span>
                                <span className="terminal-cmd terminal-comment"># B.Tech Information Technology</span>
                            </div>
                            <div className="terminal-output terminal-comment">Bharati Vidyapeeth College Of Engineering</div>

                            <div className="terminal-line">
                                <span className="terminal-prompt">~$</span>
                                <span style={{ color: 'var(--accent)' }}>▮</span>
                            </div>
                        </div>
                    </div>

                    {/* Right text */}
                    <div className="about-text-block">
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '24px' }}>
                            I'm a full-stack engineer with a passion for building products that actually <em style={{ color: 'var(--text)' }}>ship</em>.
                            From migrating entire codebases to TypeScript, to building real-time features with Pusher,
                            I thrive across the stack.
                        </p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.8', marginBottom: '32px' }}>
                            Beyond the keyboard, I organise developer communities, run cross-city tech meetups,
                            and own production apps in open-source collectives like <span style={{ color: 'var(--accent)' }}>RealDevSquad</span>.
                        </p>

                        <div className="skills-grid">
                            {skills.map((s, i) => (
                                <span key={s} className={`skill-tag ${i < 4 ? 'highlight' : ''}`}>{s}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

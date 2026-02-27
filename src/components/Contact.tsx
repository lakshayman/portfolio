'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Github, Linkedin, Twitter } from 'lucide-react';

const socials = [
    { href: 'https://github.com/lakshayman', icon: Github, label: 'GitHub', handle: '@lakshayman' },
    { href: 'https://linkedin.com/in/lakshayman', icon: Linkedin, label: 'LinkedIn', handle: 'lakshayman' },
    { href: 'https://x.com/lakshayman2000', icon: Twitter, label: 'X', handle: '@lakshayman2000' },
];

export default function Contact() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            gsap.from('.contact-wrapper > *', {
                scrollTrigger: { trigger: '.contact-wrapper', start: 'top 80%' },
                opacity: 0,
                y: 40,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="section" id="contact" ref={sectionRef}>
            <div className="grid-bg" />
            <div className="container">
                <div className="contact-wrapper">
                    <div className="section-label" style={{ justifyContent: 'center' }}>contact</div>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>
                        Let's <span className="gradient-text">connect</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '16px auto 0', lineHeight: 1.7, textAlign: 'center' }}>
                        Whether you have a project in mind, want to collaborate on something,
                        or just want to say hello — my inbox is always open.
                    </p>

                    <a className="contact-email" href="mailto:lakshay73lakshay@gmail.com">
                        lakshay73lakshay@gmail.com
                    </a>

                    <div className="contact-socials">
                        {socials.map((s) => (
                            <a key={s.label} className="contact-social-btn" href={s.href} target="_blank" rel="noopener noreferrer">
                                <s.icon size={16} />
                                {s.handle}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

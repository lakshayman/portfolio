'use client';
import { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    /* Particle canvas */
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        let w = (canvas.width = window.innerWidth);
        let h = (canvas.height = window.innerHeight);
        let animId: number;

        interface Particle {
            x: number; y: number; vx: number; vy: number; size: number; opacity: number;
        }

        const particles: Particle[] = Array.from({ length: 100 }, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            size: Math.random() * 1.5 + 0.5,
            opacity: Math.random() * 0.5 + 0.1,
        }));

        const connect = (a: Particle, b: Particle) => {
            const dist = Math.hypot(a.x - b.x, a.y - b.y);
            if (dist < 120) {
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.strokeStyle = `rgba(0,240,255,${0.08 * (1 - dist / 120)})`;
                ctx.lineWidth = 0.5;
                ctx.stroke();
            }
        };

        const draw = () => {
            ctx.clearRect(0, 0, w, h);
            particles.forEach((p) => {
                p.x += p.vx; p.y += p.vy;
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0,240,255,${p.opacity})`;
                ctx.fill();
            });
            for (let i = 0; i < particles.length; i++)
                for (let j = i + 1; j < particles.length; j++)
                    connect(particles[i], particles[j]);
            animId = requestAnimationFrame(draw);
        };

        draw();
        const onResize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', onResize);
        return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', onResize); };
    }, []);

    /* GSAP entrance */
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.hero-tag', { opacity: 0, y: 20, duration: 0.8, delay: 0.2 });
            gsap.from('.hero-name', { opacity: 0, y: 50, duration: 1, delay: 0.4 });
            gsap.from('.hero-tagline', { opacity: 0, y: 30, duration: 0.8, delay: 0.7 });
            gsap.from('.hero-desc', { opacity: 0, y: 20, duration: 0.8, delay: 0.9 });
            gsap.from('.hero-ctas', { opacity: 0, y: 20, duration: 0.8, delay: 1.1 });
            gsap.from('.scroll-hint', { opacity: 0, duration: 1, delay: 1.8 });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="hero" ref={containerRef} id="hero">
            <canvas ref={canvasRef} className="hero-canvas" />
            <div className="grid-bg" />
            <div className="container">
                <div className="hero-content">
                    <p className="hero-tag mono">
                        <span className="blink" />
                        &nbsp;software engineer &amp; open source contributor
                    </p>

                    <h1 className="hero-name">
                        <span className="gradient-text">Lakshay</span>
                        <br />Manchanda
                    </h1>

                    <p className="hero-tagline">
                        Building at <strong>AI Squared</strong> · SDE · Open Source
                    </p>

                    <p className="hero-desc">
                        I craft scalable full-stack products, contribute to open source communities,
                        and organise developer meetups. Currently building AI-powered experiences
                        at AI Squared.
                    </p>

                    <div className="hero-ctas">
                        <a className="btn-primary" href="#projects">
                            view my work
                        </a>
                        <a className="btn-outline" href="https://github.com/lakshayman" target="_blank" rel="noopener noreferrer">
                            <Github size={16} />
                            github
                        </a>
                        <a className="btn-outline" href="https://linkedin.com/in/lakshayman" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={16} />
                            linkedin
                        </a>
                    </div>
                </div>
            </div>

            <div className="scroll-hint">
                <span>scroll</span>
                <div className="scroll-line" />
            </div>
        </section>
    );
}

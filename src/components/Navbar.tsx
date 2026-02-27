'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
    { href: '#about', label: '01. about' },
    { href: '#experience', label: '02. experience' },
    { href: '#community', label: '03. community' },
    { href: '#projects', label: '04. projects' },
    { href: '#contact', label: '05. contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-inner">
                <a href="#" className="nav-logo">
                    lm<span>.</span>
                </a>
                <ul className="nav-links">
                    {links.map((l) => (
                        <li key={l.href}>
                            <a href={l.href}>{l.label}</a>
                        </li>
                    ))}
                </ul>
                <a className="nav-cta" href="mailto:lakshay73lakshay@gmail.com">
                    hire me
                </a>
            </div>
        </nav>
    );
}

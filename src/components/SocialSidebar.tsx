'use client';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const socials = [
    { href: 'https://github.com/lakshayman', icon: Github, label: 'GitHub' },
    { href: 'https://linkedin.com/in/lakshayman', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://x.com/lakshayman2000', icon: Twitter, label: 'X / Twitter' },
    { href: 'mailto:lakshay73lakshay@gmail.com', icon: Mail, label: 'Email' },
];

export default function SocialSidebar() {
    return (
        <aside className="social-sidebar">
            {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                    <s.icon size={18} />
                </a>
            ))}
        </aside>
    );
}

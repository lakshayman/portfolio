'use client';
import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;
        let animId: number;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.left = mouseX + 'px';
            dot.style.top = mouseY + 'px';
        };

        const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

        const animate = () => {
            ringX = lerp(ringX, mouseX, 0.1);
            ringY = lerp(ringY, mouseY, 0.1);
            ring.style.left = ringX + 'px';
            ring.style.top = ringY + 'px';
            animId = requestAnimationFrame(animate);
        };

        const onEnter = () => ring.classList.add('hovered');
        const onLeave = () => ring.classList.remove('hovered');

        document.addEventListener('mousemove', onMove);
        document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
            el.addEventListener('mouseenter', onEnter);
            el.addEventListener('mouseleave', onLeave);
        });
        animate();

        return () => {
            document.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}

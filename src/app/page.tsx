import Navbar from '@/components/Navbar';
import SocialSidebar from '@/components/SocialSidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Community from '@/components/Community';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <About />
      <Experience />
      <Community />
      <Projects />
      <Contact />
      <footer className="footer">
        <p>
          Designed &amp; built by{' '}
          <span style={{ color: 'var(--accent)' }}>Lakshay Manchanda</span>{' '}
          · Crafted with Next.js, GSAP &amp; Framer Motion
        </p>
      </footer>
    </main>
  );
}

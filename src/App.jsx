import React, { useEffect, useState } from 'react';
import './components/Section.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '44px',
        height: '44px',
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        color: 'var(--accent-blue)',
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 999,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(10px)',
        transition: 'all 0.3s',
        pointerEvents: visible ? 'auto' : 'none',
        fontFamily: 'var(--font-mono)',
      }}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => { setTimeout(() => setDone(true), 1200); }, []);
  if (done) return null;
  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'var(--bg-primary)',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1.5rem',
      animation: done ? 'fadeOut 0.5s forwards' : 'none',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '1.5rem',
        color: 'var(--accent-blue)',
        fontWeight: '500',
        letterSpacing: '0.1em',
      }}>
        [NY]
      </div>
      <div style={{
        width: '200px',
        height: '2px',
        background: 'var(--bg-card)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          background: 'linear-gradient(90deg, var(--accent-blue), var(--accent-purple))',
          borderRadius: '2px',
          animation: 'progressFill 1s ease forwards',
          '--target-width': '100%',
        }} />
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        color: 'var(--text-muted)',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
      }}>
        Loading portfolio...
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

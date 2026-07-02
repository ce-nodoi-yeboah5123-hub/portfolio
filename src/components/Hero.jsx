import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

const TITLES = [
  'Software Engineer',
  'Embedded Systems Developer',
  'VR Enthusiast',
  'Full-Stack Developer',
];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const canvasRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const current = TITLES[titleIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 40);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTitleIndex(i => (i + 1) % TITLES.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    const particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79, 142, 247, ${p.alpha})`;
        ctx.fill();
      });
      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79, 142, 247, ${0.05 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero__canvas" />

      <div className="hero__content">
        <div className="hero__badge animate-fadeIn" style={{ animationDelay: '0.2s', opacity: 0 }}>
          <span className="hero__badge-dot" />
          Available for opportunities
        </div>

        <div className="hero__name-block animate-fadeInUp" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <p className="hero__greeting">Hello, I'm</p>
          <h1 className="hero__name">Odoi-Yeboah<br />Nana Yaw</h1>
        </div>

        <div className="hero__title-block animate-fadeInUp" style={{ animationDelay: '0.6s', opacity: 0 }}>
          <span className="hero__title-prefix">_</span>
          <span className="hero__title">{displayed}</span>
          <span className="hero__cursor">|</span>
        </div>

        <p className="hero__bio animate-fadeInUp" style={{ animationDelay: '0.8s', opacity: 0 }}>
          Passionate about building impactful software — from low-level embedded systems
          and microcontroller applications to full-stack web platforms and immersive VR experiences.
          I bridge hardware and software to create technology that matters.
        </p>

        <div className="hero__actions animate-fadeInUp" style={{ animationDelay: '1s', opacity: 0 }}>
          <a href="#projects" className="btn btn--primary">
            <span>View Projects</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn--ghost">Contact Me</a>
          <a href="/cv.pdf" download className="btn btn--outline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="hero__stats animate-fadeIn" style={{ animationDelay: '1.2s', opacity: 0 }}>
          {[
            { num: '6+', label: 'Projects Built' },
            { num: '5+', label: 'Technologies' },
            { num: '3+', label: 'Years Learning' },
          ].map(({ num, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-num">{num}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint animate-fadeIn" style={{ animationDelay: '1.5s', opacity: 0 }}>
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}

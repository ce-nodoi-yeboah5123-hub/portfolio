import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const SKILLS = [
  {
    category: 'Web Development',
    icon: '</>',
    color: '#2554e0',
    items: ['PHP', 'JavaScript', 'HTML & CSS', 'Bootstrap'],
  },
  {
    category: 'Databases',
    icon: '[ ]',
    color: '#7c3aed',
    items: ['MySQL', 'Database Design', 'SQL Queries'],
  },
  {
    category: 'Tools & Workflow',
    icon: '⌘',
    color: '#0891b2',
    items: ['Git & GitHub', 'XAMPP / WAMP', 'VS Code', 'Linux / Ubuntu'],
  },
  {
    category: 'Python & ML',
    icon: '🐍',
    color: '#16a34a',
    items: ['Python', 'Flask', 'YOLO / Computer Vision'],
  },
  {
    category: 'Backend & Cloud',
    icon: '☁',
    color: '#ea580c',
    items: ['Node.js / Express', 'Supabase', 'PostgreSQL'],
  },
  {
    category: 'VR & Embedded',
    icon: '🕶',
    color: '#9333ea',
    items: ['A-Frame / WebXR', '8051 Assembly', 'Proteus'],
  },
];

export default function Skills() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <div className="section-label">
          <span className="section-label__line" />
          <span className="section-label__text">02 / Skills</span>
        </div>
        <h2 className="section-title">
          Technical <em>expertise</em>
        </h2>
        <p className="section-subtitle">
          A diverse toolkit spanning multiple domains of software and hardware engineering.
        </p>

        <div className="skills__grid">
          {SKILLS.map((cat, i) => (
            <div
              key={cat.category}
              className="skills__card"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.6s cubic-bezier(0.4,0,0.2,1) ${i * 0.1}s`,
              }}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon" style={{ color: cat.color }}>
                  {cat.icon}
                </span>
                <h3 className="skills__card-title">{cat.category}</h3>
                <div className="skills__card-accent" style={{ background: `${cat.color}22` }} />
              </div>
              <div className="skills__tags">
                {cat.items.map(name => (
                  <span key={name} className="skills__tag" style={{ '--tag-color': cat.color }}>
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

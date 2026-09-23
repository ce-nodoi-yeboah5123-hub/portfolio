import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const SKILLS = [
  {
    category: 'Web Development',
    icon: '</>',
    color: '#2554e0',
    items: [
      { name: 'PHP', level: 85 },
      { name: 'JavaScript', level: 60 },
      { name: 'HTML & CSS', level: 90 },
      { name: 'Bootstrap', level: 90 },
    ],
  },
  {
    category: 'Databases',
    icon: '[ ]',
    color: '#7c3aed',
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'Database Design', level: 78 },
      { name: 'SQL Queries', level: 80 },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: '⌘',
    color: '#0891b2',
    items: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'XAMPP / WAMP', level: 85 },
      { name: 'VS Code', level: 88 },
      { name: 'Linux / Ubuntu', level: 70 }
      
    ],
  },
  {
    category: 'Python & ML',
    icon: '🐍',
    color: '#16a34a',
    items: [
      { name: 'Python', level: 78 },
      { name: 'Flask', level: 80 },
      { name: 'YOLO / Computer Vision', level: 65 },
    ],
  },
  {
    category: 'Backend & Cloud',
    icon: '☁',
    color: '#ea580c',
    items: [
      { name: 'Node.js / Express', level: 75 },
      { name: 'Supabase', level: 78 },
      { name: 'PostgreSQL', level: 75 },
    ],
  },
  {
    category: 'VR & Embedded',
    icon: '🕶',
    color: '#9333ea',
    items: [
      { name: 'A-Frame / WebXR', level: 70 },
      { name: '8051 Assembly', level: 65 },
      { name: 'Proteus', level: 65 },
    ],
  },
];

function SkillBar({ name, level, color, animate }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div
          className="skill-bar__fill"
          style={{
            width: animate ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}88, ${color})`,
            transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>
    </div>
  );
}

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
              <div className="skills__items">
                {cat.items.map(item => (
                  <SkillBar key={item.name} {...item} color={cat.color} animate={visible} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

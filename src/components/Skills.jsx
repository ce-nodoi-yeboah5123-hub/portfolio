import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const SKILLS = [
  {
    category: 'Programming Languages',
    icon: '{ }',
    color: '#4f8ef7',
    items: [
      { name: 'Python', level: 85 },
      { name: 'C', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'Java', level: 70 },
      { name: 'JavaScript', level: 82 },
    ],
  },
  {
    category: 'Web Development',
    icon: '</>',
    color: '#22d3ee',
    items: [
      { name: 'HTML & CSS', level: 90 },
      { name: 'React', level: 78 },
      { name: 'Flask', level: 82 },
      { name: 'REST APIs', level: 75 },
    ],
  },
  {
    category: 'Databases',
    icon: '[ ]',
    color: '#8b5cf6',
    items: [
      { name: 'SQL Server', level: 80 },
      { name: 'MySQL', level: 82 },
      { name: 'Database Design', level: 75 },
    ],
  },
  {
    category: 'Embedded Systems',
    icon: '⚙',
    color: '#f59e0b',
    items: [
      { name: '8051 Microcontroller', level: 78 },
      { name: 'Assembly Language', level: 72 },
      { name: 'Proteus Simulation', level: 80 },
      { name: 'Circuit Design', level: 70 },
    ],
  },
  {
    category: 'VR Development',
    icon: '◎',
    color: '#ec4899',
    items: [
      { name: 'A-Frame', level: 75 },
      { name: 'WebXR', level: 68 },
      { name: '3D Scene Design', level: 72 },
    ],
  },
  {
    category: 'Tools & Workflow',
    icon: '⌘',
    color: '#10b981',
    items: [
      { name: 'Git & GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux / CLI', level: 75 },
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

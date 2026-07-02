import React from 'react';
import './Experience.css';

const TIMELINE = [
  {
    type: 'edu',
    year: '2022 — Present',
    title: 'BSc Software Engineering',
    org: 'University · Ghana',
    desc: 'Studying software engineering with specialization in embedded systems, database management, and web development. Actively working on projects spanning hardware and software domains.',
    tags: ['Software Engineering', 'Embedded Systems', 'Databases'],
    icon: '🎓',
    color: '#4f8ef7',
  },
  {
    type: 'project',
    year: '2024',
    title: 'VR Development Projects',
    org: 'Personal Projects',
    desc: 'Developed two complete WebVR experiences — a Solar System exploration and a Modern Villa house tour — using A-Frame and WebXR, demonstrating 3D scene design and interactive VR environments.',
    tags: ['A-Frame', 'WebXR', 'VR Design'],
    icon: '🥽',
    color: '#ec4899',
  },
  {
    type: 'project',
    year: '2024',
    title: 'Full-Stack Web Applications',
    org: 'Academic & Personal Projects',
    desc: 'Built production-quality web applications including a Flight Booking System and Food Joint Management System using Flask, React, SQL Server, and MySQL with full CRUD functionality.',
    tags: ['Flask', 'React', 'SQL Server', 'MySQL'],
    icon: '🌐',
    color: '#22d3ee',
  },
  {
    type: 'cert',
    year: '2023',
    title: 'Embedded Systems Programming',
    org: 'Academic Training',
    desc: 'Completed intensive training in 8051 microcontroller programming, Assembly language, and hardware simulation using Proteus. Built multiple real-world embedded systems applications.',
    tags: ['8051 MCU', 'Assembly', 'Proteus'],
    icon: '⚙',
    color: '#10b981',
  },
  {
    type: 'cert',
    year: '2023',
    title: 'Database Management & Design',
    org: 'Academic Coursework',
    desc: 'Advanced study in relational database design, SQL optimization, stored procedures, and data modeling with Microsoft SQL Server and MySQL.',
    tags: ['SQL Server', 'MySQL', 'Database Design'],
    icon: '🗄',
    color: '#8b5cf6',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-label">
          <span className="section-label__line" />
          <span className="section-label__text">04 / Experience</span>
        </div>
        <h2 className="section-title">
          Academic & <em>professional</em> journey
        </h2>
        <p className="section-subtitle">
          A timeline of education, projects, and technical achievements.
        </p>

        <div className="timeline">
          <div className="timeline__line" />
          {TIMELINE.map((item, i) => (
            <div key={i} className="timeline__item" style={{ '--color': item.color }}>
              <div className="timeline__dot">
                <span className="timeline__dot-icon">{item.icon}</span>
              </div>
              <div className="timeline__content">
                <div className="timeline__meta">
                  <span className="timeline__year">{item.year}</span>
                  <span className="timeline__type-badge">
                    {item.type === 'edu' ? 'Education' : item.type === 'project' ? 'Project' : 'Training'}
                  </span>
                </div>
                <h3 className="timeline__title">{item.title}</h3>
                <p className="timeline__org">{item.org}</p>
                <p className="timeline__desc">{item.desc}</p>
                <div className="timeline__tags">
                  {item.tags.map(t => (
                    <span key={t} className="timeline__tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

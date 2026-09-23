import React from 'react';
import './Experience.css';

const TIMELINE = [
  {
    type: 'edu',
    year: '2022 — Present',
    title: 'BSc Software Engineering',
    org: 'University · Ghana',
    desc: 'Studying software engineering with a focus on database management and full-stack web development. Actively building projects to apply what I learn.',
    tags: ['Software Engineering', 'Databases', 'Web Development'],
    icon: '🎓',
    color: '#2554e0',
  },
  {
    type: 'project',
    year: '2026',
    title: 'Construction Management System',
    org: 'Group Project (Group 18)',
    desc: 'Built with a team using PHP, MySQL, and Bootstrap — a dashboard for tracking projects, tasks, resources, team members, suppliers, clients, equipment, budgets, and invoicing.',
    tags: ['PHP', 'MySQL', 'Bootstrap'],
    icon: '🏗',
    color: '#0891b2',
  },
  {
    type: 'project',
    year: '2026',
    title: 'School Management System',
    org: 'Personal Project',
    desc: 'A lightweight class management system for teachers — student management, daily attendance, exam and assignment marks, automated report generation, and a class-statistics dashboard.',
    tags: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    icon: '🏫',
    color: '#7c3aed',
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

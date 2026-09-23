import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Construction Management System',
    category: 'Web',
    description: 'A group project (Group 18) built to help construction teams track work in one place — projects, tasks, resources, team members, suppliers, clients, equipment, budgets, and invoicing.',
    tech: ['PHP', 'MySQL', 'Bootstrap'],
    color: '#2554e0',
    icon: '🏗',
    github: 'https://github.com/ce-nodoi-yeboah5123-hub',
  },
  {
    id: 2,
    title: 'School Management System',
    category: 'Web',
    description: 'A lightweight class management system for teachers, running on XAMPP/WAMP with no external dependencies — student management, daily attendance, exam and assignment marks, automated report generation, and a class-statistics dashboard.',
    tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    color: '#7c3aed',
    icon: '🏫',
    github: 'https://github.com/ce-nodoi-yeboah5123-hub',
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-label">
          <span className="section-label__line" />
          <span className="section-label__text">03 / Projects</span>
        </div>
        <h2 className="section-title">
          Featured <em>work</em>
        </h2>
        <p className="section-subtitle">
          A selection of web applications I've built using PHP, MySQL, and Bootstrap.
        </p>

        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className={`project-card ${hovered === project.id ? 'project-card--hovered' : ''}`}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--accent': project.color }}
            >
              <div className="project-card__thumb">
                <div className="project-card__icon">{project.icon}</div>
                <div className="project-card__overlay" />
                <span className="project-card__category">{project.category}</span>
              </div>

              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__desc">{project.description}</p>

                <div className="project-card__tech">
                  {project.tech.map(t => (
                    <span key={t} className="project-card__tag">{t}</span>
                  ))}
                </div>

                <div className="project-card__links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>

              <div className="project-card__glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

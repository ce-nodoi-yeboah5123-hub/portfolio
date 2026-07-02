import React, { useState } from 'react';
import './Projects.css';

const PROJECTS = [
  {
    id: 1,
    title: 'Flight Booking System',
    category: 'Web',
    description: 'A full-featured flight booking platform with user authentication, seat selection, booking management, and payment integration. Built with Flask and SQL Server backend.',
    tech: ['Python', 'Flask', 'SQL Server', 'HTML/CSS', 'JavaScript'],
    color: '#4f8ef7',
    icon: '✈',
    github: 'https://github.com/nanayaw',
    demo: '#',
  },
  {
    id: 2,
    title: 'Food Joint Management System',
    category: 'Web',
    description: 'Complete restaurant management solution with menu management, order processing, table reservations, and real-time inventory tracking. Full-stack CRUD application.',
    tech: ['Python', 'Flask', 'MySQL', 'React', 'CSS'],
    color: '#f59e0b',
    icon: '🍽',
    github: 'https://github.com/nanayaw',
    demo: '#',
  },
  {
    id: 3,
    title: 'Solar System VR',
    category: 'VR',
    description: 'Immersive WebVR experience exploring the solar system with accurate planetary models, orbital animations, and interactive information panels viewable on any device.',
    tech: ['A-Frame', 'WebXR', 'JavaScript', 'HTML', '3D Modeling'],
    color: '#ec4899',
    icon: '🪐',
    github: 'https://github.com/nanayaw',
    demo: '#',
  },
  {
    id: 4,
    title: 'Modern Villa VR Tour',
    category: 'VR',
    description: 'Virtual reality house tour of a modern villa. Navigate through rooms, explore architectural details, and experience the space as if you\'re physically present.',
    tech: ['A-Frame', 'WebXR', 'JavaScript', '360° Photography'],
    color: '#22d3ee',
    icon: '🏠',
    github: 'https://github.com/nanayaw',
    demo: '#',
  },
  {
    id: 5,
    title: '8051 Microcontroller Projects',
    category: 'Embedded',
    description: 'Collection of embedded systems projects using the 8051 microcontroller including traffic light controllers, digital clocks, and sensor interfacing with assembly programming.',
    tech: ['Assembly', '8051 MCU', 'Proteus', 'C', 'Circuit Design'],
    color: '#10b981',
    icon: '⚙',
    github: 'https://github.com/nanayaw',
    demo: '#',
  },
  {
    id: 6,
    title: 'Embedded Systems Applications',
    category: 'Embedded',
    description: 'Various embedded systems simulations and hardware projects including LED matrix control, serial communication, ADC/DAC interfacing, and interrupt-driven systems.',
    tech: ['C', 'Assembly', 'Proteus', 'Electronics', 'Debugging'],
    color: '#8b5cf6',
    icon: '🔌',
    github: 'https://github.com/nanayaw',
    demo: '#',
  },
];

const FILTERS = ['All', 'Web', 'VR', 'Embedded'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [hovered, setHovered] = useState(null);

  const filtered = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter);

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
          A selection of projects spanning web applications, VR experiences, and embedded systems.
        </p>

        <div className="projects__filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`projects__filter ${filter === f ? 'projects__filter--active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
              <span className="projects__filter-count">
                {f === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === f).length}
              </span>
            </button>
          ))}
        </div>

        <div className="projects__grid">
          {filtered.map((project, i) => (
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
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--demo">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    Live Demo
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

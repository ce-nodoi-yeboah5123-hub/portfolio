import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-label">
          <span className="section-label__line" />
          <span className="section-label__text">01 / About</span>
        </div>

        <div className="about__grid">
          <div className="about__text">
            <h2 className="section-title">
              Building practical software,<br />
              <em>end to end</em>
            </h2>
            <div className="about__body">
              <p>
                I'm Nana Yaw, a Computer Science And Engineering student, who enjoys building complete,
                practical web applications: from the database schema up to a clean,
                usable interface.
              </p>
              <p>
                My work spans web development (PHP, Flask, Node.js), machine learning
                (Python, YOLO, computer vision), and VR/embedded systems (A-Frame,
                8051 Assembly) — building systems that solve real, everyday problems,
                from crop disease detection to transport navigation to hostel management.
              </p>
              <p>
                Currently pursuing my degree in Computer Science And engineering, I'm actively looking
                for internship opportunities and freelance projects where I can keep
                building and growing as an engineer.
              </p>
            </div>

            <div className="about__highlights">
              {[
                { icon: '🎓', label: 'Education', value: 'Computer Science And Engineering' },
                { icon: '📍', label: 'Location', value: 'Ghana' },
                { icon: '💼', label: 'Status', value: 'Open to Opportunities' },
                { icon: '🚀', label: 'Focus', value: 'Full-Stack Web Development | DevOps ' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="about__highlight">
                  <span className="about__highlight-icon">{icon}</span>
                  <div>
                    <span className="about__highlight-label">{label}</span>
                    <span className="about__highlight-value">{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about__visual">
            <div className="about__img-frame">
              <div className="about__img-placeholder">
                <img
                  src="/nana.jpg"
                  alt="Nana Yaw"
                  className="about__photo"
                />
              </div>
              <div className="about__img-border" />
              <div className="about__img-corner about__img-corner--tl" />
              <div className="about__img-corner about__img-corner--br" />
            </div>

            <div className="about__card">
              <div className="about__card-row">
                <span className="about__card-key">const</span>
                <span className="about__card-var"> stack</span>
                <span className="about__card-op"> = </span>
                <span className="about__card-str">["Python", "PHP", "Node.js", "JS"]</span>
              </div>
              <div className="about__card-row">
                <span className="about__card-key">const</span>
                <span className="about__card-var"> focus</span>
                <span className="about__card-op"> = </span>
                <span className="about__card-str">"Practical, full-stack systems"</span>
              </div>
              <div className="about__card-row">
                <span className="about__card-key">const</span>
                <span className="about__card-var"> status</span>
                <span className="about__card-op"> = </span>
                <span className="about__card-str">"Open to opportunities"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

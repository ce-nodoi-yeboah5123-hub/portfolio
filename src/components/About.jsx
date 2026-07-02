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
              Building at the intersection of<br />
              <em>hardware</em> and <em>software</em>
            </h2>
            <div className="about__body">
              <p>
                I'm Nana Yaw, a software engineering and embedded systems student with a deep curiosity
                for how technology works at every level — from assembly instructions running on a microcontroller
                to immersive virtual reality environments rendered in a browser.
              </p>
              <p>
                My journey spans full-stack web development with Flask and React, database management
                with SQL Server and MySQL, embedded systems programming with 8051 microcontrollers,
                and VR development using A-Frame and WebXR. I love building complete solutions
                that solve real problems.
              </p>
              <p>
                Currently pursuing my degree in software engineering, I'm actively seeking internship
                opportunities and freelance projects where I can apply my diverse technical background
                and continue growing as an engineer.
              </p>
            </div>

            <div className="about__highlights">
              {[
                { icon: '🎓', label: 'Education', value: 'Software Engineering Student' },
                { icon: '📍', label: 'Location', value: 'Ghana' },
                { icon: '💼', label: 'Status', value: 'Open to Opportunities' },
                { icon: '🚀', label: 'Focus', value: 'Embedded Systems & Full-Stack' },
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
                <div className="about__img-initials">NY</div>
                <div className="about__img-caption">
                  <span className="about__img-caption-mono">// Replace with your photo</span>
                </div>
              </div>
              <div className="about__img-border" />
              <div className="about__img-corner about__img-corner--tl" />
              <div className="about__img-corner about__img-corner--br" />
            </div>

            <div className="about__card">
              <div className="about__card-row">
                <span className="about__card-key">const</span>
                <span className="about__card-var"> passion</span>
                <span className="about__card-op"> = </span>
                <span className="about__card-str">"Building things that matter"</span>
              </div>
              <div className="about__card-row">
                <span className="about__card-key">const</span>
                <span className="about__card-var"> stack</span>
                <span className="about__card-op"> = </span>
                <span className="about__card-str">["Web", "Embedded", "VR"]</span>
              </div>
              <div className="about__card-row">
                <span className="about__card-key">const</span>
                <span className="about__card-var"> goal</span>
                <span className="about__card-op"> = </span>
                <span className="about__card-str">"Impact through engineering"</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

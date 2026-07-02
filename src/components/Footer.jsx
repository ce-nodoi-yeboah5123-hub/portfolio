import React from 'react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <span className="footer__logo">
              <span className="footer__logo-bracket">[</span>NY<span className="footer__logo-bracket">]</span>
            </span>
            <p className="footer__tagline">Building at the intersection of hardware & software.</p>
          </div>
          <div className="footer__links">
            {[
              { label: 'GitHub', href: 'https://github.com' },
              { label: 'LinkedIn', href: 'https://linkedin.com' },
              { label: 'Email', href: 'mailto:nanayaw@email.com' },
            ].map(({ label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="footer__link">
                {label}
              </a>
            ))}
          </div>
          <p className="footer__copy">© {year} Odoi-Yeboah Nana Yaw</p>
        </div>
      </div>
    </footer>
  );
}

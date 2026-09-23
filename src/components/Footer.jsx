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
            <p className="footer__tagline">Full-stack web development, built with purpose.</p>
          </div>
          <div className="footer__links">
            {[
              { label: 'GitHub', href: 'https://github.com/nyodoi-dev' },
              { label: 'LinkedIn', href: 'https://linkedin.com' },
              { label: 'Email', href: 'mailto:nanayawodoiyeboah@gmail.com' },
              { label: 'Phone', href: 'tel:+233503670830' }
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

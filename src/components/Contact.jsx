import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim() || form.message.length < 20) e.message = 'Message must be at least 20 characters';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});
    setStatus('sending');
    // Simulate send — replace with your form backend (Formspree, EmailJS, etc.)
    setTimeout(() => setStatus('sent'), 1800);
  };

  const handleChange = (field, val) => {
    setForm(f => ({ ...f, [field]: val }));
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }));
  };

  const CONTACTS = [
    { icon: '✉', label: 'Email', value: 'nanayaw@email.com', href: 'mailto:nanayaw@email.com' },
    { icon: '📞', label: 'Phone', value: '+233 XX XXX XXXX', href: 'tel:+233XXXXXXXX' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/nanayaw', href: 'https://linkedin.com' },
    { icon: '🐙', label: 'GitHub', value: 'github.com/nanayaw', href: 'https://github.com' },
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-label">
          <span className="section-label__line" />
          <span className="section-label__text">05 / Contact</span>
        </div>
        <h2 className="section-title">
          Let's <em>work together</em>
        </h2>
        <p className="section-subtitle">
          Open to internships, freelance projects, and collaborations.
          Let's build something great.
        </p>

        <div className="contact__grid">
          <div className="contact__info">
            <p className="contact__intro">
              Whether you have an exciting project idea, an internship opportunity, or just want to
              talk tech — I'd love to hear from you. I'm actively seeking opportunities to apply
              my skills in embedded systems, web development, and VR.
            </p>

            <div className="contact__links">
              {CONTACTS.map(({ icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact__link">
                  <span className="contact__link-icon">{icon}</span>
                  <div>
                    <span className="contact__link-label">{label}</span>
                    <span className="contact__link-value">{value}</span>
                  </div>
                  <span className="contact__link-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="contact__availability">
              <div className="contact__avail-dot" />
              <span>Currently available for new opportunities</span>
            </div>
          </div>

          <div className="contact__form-wrap">
            {status === 'sent' ? (
              <div className="contact__success">
                <div className="contact__success-icon">✓</div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button className="btn btn--ghost" onClick={() => { setStatus('idle'); setForm({ name:'',email:'',subject:'',message:'' }); }}>
                  Send another
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="contact__form-row">
                  <div className="form-field">
                    <label>Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e => handleChange('name', e.target.value)}
                      className={errors.name ? 'input--error' : ''}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-field">
                    <label>Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={e => handleChange('email', e.target.value)}
                      className={errors.email ? 'input--error' : ''}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-field">
                  <label>Subject</label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    value={form.subject}
                    onChange={e => handleChange('subject', e.target.value)}
                    className={errors.subject ? 'input--error' : ''}
                  />
                  {errors.subject && <span className="form-error">{errors.subject}</span>}
                </div>
                <div className="form-field">
                  <label>Message</label>
                  <textarea
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={e => handleChange('message', e.target.value)}
                    className={errors.message ? 'input--error' : ''}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn--primary contact__submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <><span className="contact__spinner" />Sending...</>
                  ) : (
                    <><span>Send Message</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

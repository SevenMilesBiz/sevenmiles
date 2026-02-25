import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Linkedin,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollSpy';
import SectionHeader from './SectionHeader';
import { personalInfo } from '../data/content';

function ContactInfoItem({ icon: Icon, label, value, href, color }) {
  const content = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        padding: '16px 20px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }}
      onMouseEnter={(e) => {
        if (href) {
          e.currentTarget.style.borderColor = `${color}50`;
          e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.3)`;
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border-color)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: `${color}15`,
          border: `1px solid ${color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={18} color={color} />
      </div>
      <div>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '2px' }}>
          {label}
        </p>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 600 }}>
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" style={{ display: 'block' }}>
        {content}
      </a>
    );
  }
  return content;
}

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [ref, inView] = useIntersectionObserver();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    else if (form.message.trim().length < 20) errs.message = 'Message must be at least 20 characters';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) {
      setErrors((errs) => ({ ...errs, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
    }, 1500);
  };

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '13px 16px',
    borderRadius: 'var(--radius-sm)',
    background: 'rgba(255,255,255,0.04)',
    border: `1px solid ${hasError ? '#ef4444' : 'var(--border-color)'}`,
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'border-color 0.2s, box-shadow 0.2s',
  });

  return (
    <section id="contact" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Work"
          highlight="Together"
          description="Have a project in mind or looking for expert IT services? We would love to hear about it. Send a message and we will get back to you as soon as possible."
          centered
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="contact-grid"
        >
          {/* Left: Contact info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
          >
            <div
              style={{
                padding: '28px',
                borderRadius: 'var(--radius-lg)',
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                marginBottom: '8px',
              }}
            >
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                Available for New Projects
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                I am currently accepting freelance projects, consulting engagements, and long-term
                contracts. Based in Brussels, available for remote work worldwide.
              </p>
            </div>

            <ContactInfoItem
              icon={Mail}
              label="Email"
              value={personalInfo.email}
              href={`mailto:${personalInfo.email}`}
              color="#00d4ff"
            />
            <ContactInfoItem
              icon={MapPin}
              label="Location"
              value={personalInfo.location}
              color="#10b981"
            />
            <ContactInfoItem
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/xavierroba"
              href={personalInfo.linkedin}
              color="#0077b5"
            />

            {/* Preferred work types */}
            <div
              style={{
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Preferred Engagements
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Freelance', 'Consulting', 'Long-term Contract', 'Remote', 'On-site Brussels'].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '999px',
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--accent-blue)',
                      background: 'rgba(0, 212, 255, 0.08)',
                      border: '1px solid rgba(0, 212, 255, 0.2)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div
              style={{
                padding: '36px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
                <MessageSquare size={20} color="var(--accent-blue)" />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Send a Message
                </h3>
              </div>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    padding: '40px 24px',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '2px solid rgba(16, 185, 129, 0.4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CheckCircle size={28} color="#10b981" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                      Message Sent!
                    </h4>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                      Thank you for reaching out. We will be in touch soon.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus('idle')}
                    style={{
                      padding: '10px 24px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--accent-blue)',
                      background: 'rgba(0, 212, 255, 0.08)',
                      border: '1px solid rgba(0, 212, 255, 0.3)',
                      cursor: 'pointer',
                    }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '16px',
                      marginBottom: '16px',
                    }}
                    className="form-grid"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        style={{
                          display: 'block',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: 'var(--text-secondary)',
                          marginBottom: '6px',
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        style={inputStyle(errors.name)}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--accent-blue)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.name ? '#ef4444' : 'var(--border-color)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.name && (
                        <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <AlertCircle size={12} /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        style={{
                          display: 'block',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          color: 'var(--text-secondary)',
                          marginBottom: '6px',
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        style={inputStyle(errors.email)}
                        onFocus={(e) => {
                          e.target.style.borderColor = 'var(--accent-blue)';
                          e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.12)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors.email ? '#ef4444' : 'var(--border-color)';
                          e.target.style.boxShadow = 'none';
                        }}
                      />
                      {errors.email && (
                        <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <label
                      htmlFor="subject"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '6px',
                      }}
                    >
                      Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Project inquiry, consulting request..."
                      style={inputStyle(errors.subject)}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--accent-blue)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.12)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.subject ? '#ef4444' : 'var(--border-color)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                    {errors.subject && (
                      <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <AlertCircle size={12} /> {errors.subject}
                      </p>
                    )}
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label
                      htmlFor="message"
                      style={{
                        display: 'block',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        marginBottom: '6px',
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, timeline, and goals..."
                      style={{
                        ...inputStyle(errors.message),
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = 'var(--accent-blue)';
                        e.target.style.boxShadow = '0 0 0 3px rgba(0, 212, 255, 0.12)';
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = errors.message ? '#ef4444' : 'var(--border-color)';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                    {errors.message && (
                      <p style={{ fontSize: '0.75rem', color: '#ef4444', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <AlertCircle size={12} /> {errors.message}
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'submitting'}
                    whileHover={status !== 'submitting' ? { scale: 1.02, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' } : {}}
                    whileTap={status !== 'submitting' ? { scale: 0.98 } : {}}
                    style={{
                      width: '100%',
                      padding: '14px 24px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#fff',
                      background: status === 'submitting'
                        ? 'rgba(0, 212, 255, 0.4)'
                        : 'var(--accent-gradient)',
                      border: 'none',
                      cursor: status === 'submitting' ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '10px',
                      boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)',
                    }}
                  >
                    {status === 'submitting' ? (
                      <>
                        <span
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderTopColor: '#fff',
                            animation: 'spin 0.8s linear infinite',
                            flexShrink: 0,
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={18} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

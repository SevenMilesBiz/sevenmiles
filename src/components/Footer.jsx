import { motion } from 'framer-motion';
import { Heart, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo } from '../data/content';
import SevenMilesLogo from './SevenMilesLogo';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
        padding: '60px 0 32px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr',
            gap: '48px',
            marginBottom: '48px',
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div style={{ marginBottom: '16px' }}>
              <SevenMilesLogo height={30} onDark />
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '320px', marginBottom: '20px' }}>
              IT services company based in Brussels, Belgium.
              Backend, mobile & web engineering — delivered by experts with 20+ years of experience.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                href={`mailto:${personalInfo.email}`}
                style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--accent-blue)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--text-muted)')}
              >
                <Mail size={14} />
                {personalInfo.email}
              </a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <MapPin size={14} />
                {personalInfo.location}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}
            >
              Navigation
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-secondary)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'var(--accent-blue)')}
                    onMouseLeave={(e) => (e.target.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <p
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '16px',
              }}
            >
              Connect
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#0077b5')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Linkedin size={16} />
                LinkedIn Profile
              </motion.a>
              <motion.a
                href={`mailto:${personalInfo.email}`}
                whileHover={{ x: 4 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-blue)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
              >
                <Mail size={16} />
                Send Email
              </motion.a>
            </div>

            {/* Availability badge */}
            <div
              style={{
                marginTop: '24px',
                padding: '14px 16px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 8px #10b981',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: '#10b981' }}>
                  Available
                </span>
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Open to new projects and consulting
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            &copy; {new Date().getFullYear()} SevenMiles. All rights reserved.
          </p>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            Built with{' '}
            <Heart size={13} color="#ef4444" fill="#ef4444" />{' '}
            using React & Framer Motion
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}

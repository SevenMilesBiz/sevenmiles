import { motion } from 'framer-motion';
import { MapPin, ArrowDown, ExternalLink, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/content';
import SevenMilesLogo from './SevenMilesLogo';

const floatingCard = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

function StatBadge({ value, label }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2px',
      }}
    >
      <span
        style={{
          fontSize: '1.8rem',
          fontWeight: 800,
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.1,
        }}
      >
        {value}
      </span>
      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
        {label}
      </span>
    </div>
  );
}

function GridBackground() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(61, 173, 160, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(61, 173, 160, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
      }}
    />
  );
}

function GlowOrb({ style }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        borderRadius: '50%',
        filter: 'blur(80px)',
        ...style,
      }}
    />
  );
}

export default function Hero() {
  const handleScrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #0a0e1a 0%, #0f1629 100%)',
      }}
    >
      <GridBackground />

      {/* Glow orbs */}
      <GlowOrb
        style={{
          width: '600px',
          height: '600px',
          background: 'rgba(61, 173, 160, 0.08)',
          top: '-200px',
          right: '-100px',
        }}
      />
      <GlowOrb
        style={{
          width: '400px',
          height: '400px',
          background: 'rgba(45, 63, 85, 0.25)',
          bottom: '0',
          left: '-100px',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, paddingTop: '120px', paddingBottom: '80px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '48px',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left content */}
          <div>
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '999px',
                border: '1px solid rgba(61, 173, 160, 0.4)',
                background: 'rgba(61, 173, 160, 0.08)',
                marginBottom: '28px',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#3dada0',
                  animation: 'pulse-glow 2s infinite',
                  boxShadow: '0 0 8px #3dada0',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#3dada0' }}>
                Brussels-based IT Services Company
              </span>
            </motion.div>

            {/* Main heading — company logo large */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              style={{ marginBottom: '16px' }}
            >
              <SevenMilesLogo height={64} onDark />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '20px',
                lineHeight: 1.3,
              }}
            >
              {personalInfo.title}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                maxWidth: '560px',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}
            >
              {personalInfo.tagline}
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-muted)',
                fontSize: '0.9rem',
                marginBottom: '40px',
              }}
            >
              <MapPin size={14} />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <motion.button
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(61, 173, 160, 0.45)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#fff',
                  background: 'var(--accent-gradient)',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 0 20px rgba(61, 173, 160, 0.3)',
                }}
              >
                Get in Touch
                <ChevronRight size={18} />
              </motion.button>

              <motion.button
                onClick={handleScrollToProjects}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'var(--accent-blue)',
                  color: 'var(--accent-blue)',
                }}
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: '14px 28px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  background: 'transparent',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
              >
                View Projects
                <ExternalLink size={16} />
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.7 }}
              style={{
                display: 'flex',
                gap: '32px',
                marginTop: '52px',
                padding: '24px 28px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(20, 28, 53, 0.6)',
                border: '1px solid var(--border-color)',
                backdropFilter: 'blur(10px)',
                maxWidth: 'fit-content',
              }}
            >
              <StatBadge value="20+" label="Years Exp." />
              <div style={{ width: '1px', background: 'var(--border-color)' }} />
              <StatBadge value="5+" label="Companies Led" />
              <div style={{ width: '1px', background: 'var(--border-color)' }} />
              <StatBadge value="10+" label="Major Projects" />
            </motion.div>
          </div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hero-card-container"
            style={{ flexShrink: 0 }}
          >
            <div
              style={{
                width: '300px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--border-color)',
                background: 'rgba(20, 28, 53, 0.7)',
                backdropFilter: 'blur(20px)',
                overflow: 'hidden',
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              {/* Card header */}
              <div
                style={{
                  height: '100px',
                  background: 'linear-gradient(135deg, #3dada0 0%, #2d3f55 100%)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 24px',
                }}
              >
                <SevenMilesLogo height={36} onDark />
              </div>

              <div style={{ padding: '24px', textAlign: 'center' }}>
                <h3
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}
                >
                  Xavier Roba — Founder & Lead Dev
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--accent-blue)', marginBottom: '16px', fontWeight: 500 }}>
                  Brussels, Belgium
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {['Golang', 'Flutter', '.NET', 'Symfony'].map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 10px',
                        borderRadius: '999px',
                        fontSize: '0.72rem',
                        fontWeight: 600,
                        background: 'rgba(0, 212, 255, 0.1)',
                        color: 'var(--accent-blue)',
                        border: '1px solid rgba(0, 212, 255, 0.2)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(0, 0, 0, 0.2)',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center',
                    }}
                  >
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
                    <span style={{ fontSize: '0.78rem', color: '#10b981', fontWeight: 600 }}>
                      Open to Opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={handleScrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            position: 'absolute',
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
          }}
        >
          <span style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          >
            <ArrowDown size={18} />
          </motion.div>
        </motion.button>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-card-container {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

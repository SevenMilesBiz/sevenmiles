import { motion } from 'framer-motion';
import { Briefcase, Award, MapPin, Calendar, Linkedin, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollSpy';
import SectionHeader from './SectionHeader';
import { personalInfo } from '../data/content';

function HighlightCard({ icon: Icon, label, value, color, delay }) {
  const [ref, inView] = useIntersectionObserver();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      whileHover={{ translateY: -4, boxShadow: `0 12px 40px rgba(0,0,0,0.3), 0 0 0 1px ${color}40` }}
      style={{
        padding: '20px 22px',
        borderRadius: 'var(--radius-md)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        cursor: 'default',
        transition: 'box-shadow 0.25s, transform 0.25s',
      }}
    >
      <div
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '10px',
          background: `${color}15`,
          border: `1px solid ${color}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <Icon size={20} color={color} />
      </div>
      <div>
        <p style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1 }}>
          {value}
        </p>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '3px', fontWeight: 500 }}>
          {label}
        </p>
      </div>
    </motion.div>
  );
}

export default function About() {
  const [ref, inView] = useIntersectionObserver();

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="About SevenMiles"
          title="Your Trusted IT Partner"
          highlight="in Brussels"
          description="SevenMiles is an IT services company delivering expert backend, mobile, and web engineering — backed by 20+ years of hands-on experience and proven leadership across Belgium's top digital projects."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left: Text content */}
          <div>
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7 }}
            >
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '20px',
                }}
              >
                <strong style={{ color: 'var(--accent-blue)' }}>SevenMiles</strong> is the IT services company
                of{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Xavier Roba</strong>, a Brussels-based
                software developer and IT consultant with over{' '}
                <strong style={{ color: 'var(--text-primary)' }}>20 years of professional experience</strong>{' '}
                across backend engineering, mobile development, and senior IT management.
              </p>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '20px',
                }}
              >
                Before SevenMiles, Xavier co-founded{' '}
                <strong style={{ color: 'var(--accent-blue)' }}>Rubbik</strong>, a Brussels digital
                agency that built high-profile platforms for RTBF, Kaspersky, and others — growing
                from a startup to a recognised Belgian digital agency over 7 years.
              </p>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.8,
                  marginBottom: '32px',
                }}
              >
                Today, SevenMiles delivers Golang backend architecture and Flutter mobile applications
                to companies like{' '}
                <strong style={{ color: 'var(--text-primary)' }}>Skipr</strong>, contributing
                to some of Belgium's most impactful digital products.
              </p>

              {/* Location & links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  <MapPin size={15} color="var(--accent-blue)" />
                  <span>{personalInfo.location}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.92rem' }}>
                  <Calendar size={15} color="var(--accent-blue)" />
                  <span>20+ years of professional experience</span>
                </div>
              </div>

              {/* Social links */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: '#0077b5' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'color 0.2s',
                  }}
                >
                  <Linkedin size={16} />
                  LinkedIn
                </motion.a>
                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, color: 'var(--text-primary)' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-card)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                    transition: 'color 0.2s',
                  }}
                >
                  <Github size={16} />
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right: Highlight cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}
          >
            <HighlightCard
              icon={Calendar}
              label="Years of Experience"
              value="20+"
              color="#3dada0"
              delay={0.1}
            />
            <HighlightCard
              icon={Briefcase}
              label="Companies Served"
              value="6+"
              color="#2d3f55"
              delay={0.2}
            />
            <HighlightCard
              icon={Award}
              label="Major Projects"
              value="10+"
              color="#3dada0"
              delay={0.3}
            />
            <HighlightCard
              icon={MapPin}
              label="Based in"
              value="Brussels"
              color="#f0a24a"
              delay={0.4}
            />

            {/* Tech philosophy card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                gridColumn: '1 / -1',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                background: 'linear-gradient(135deg, rgba(61, 173, 160, 0.08) 0%, rgba(45, 63, 85, 0.2) 100%)',
                border: '1px solid rgba(61, 173, 160, 0.2)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--accent-gradient)',
                }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                <span style={{ color: 'var(--accent-blue)' }}>const</span>{' '}
                <span style={{ color: '#f0f4ff' }}>sevenmiles</span>{' '}
                <span style={{ color: 'var(--accent-blue)' }}>=</span>{' '}
                {'{'}<br />
                &nbsp;&nbsp;<span style={{ color: '#3dada0' }}>focus</span>:{' '}
                <span style={{ color: '#f0a24a' }}>"clean code & scalable systems"</span>,<br />
                &nbsp;&nbsp;<span style={{ color: '#3dada0' }}>approach</span>:{' '}
                <span style={{ color: '#f0a24a' }}>"pragmatic & delivery-driven"</span>,<br />
                &nbsp;&nbsp;<span style={{ color: '#3dada0' }}>passion</span>:{' '}
                <span style={{ color: '#f0a24a' }}>"building things that matter"</span><br />
                {'}'};
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

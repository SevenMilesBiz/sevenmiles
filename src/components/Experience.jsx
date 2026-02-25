import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useScrollSpy';
import SectionHeader from './SectionHeader';
import { experience } from '../data/content';

function TimelineItem({ item, index, isLast }) {
  const [expanded, setExpanded] = useState(index === 0);
  const [ref, inView] = useIntersectionObserver();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      style={{ display: 'flex', gap: '24px', position: 'relative' }}
    >
      {/* Timeline line & dot */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <motion.div
          whileHover={{ scale: 1.3 }}
          style={{
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: item.current
              ? 'var(--accent-gradient)'
              : 'var(--bg-card)',
            border: item.current
              ? '2px solid var(--accent-blue)'
              : '2px solid var(--border-color)',
            flexShrink: 0,
            marginTop: '6px',
            position: 'relative',
            zIndex: 1,
            boxShadow: item.current ? '0 0 12px rgba(0, 212, 255, 0.5)' : 'none',
            transition: 'transform 0.2s',
          }}
        >
          {item.current && (
            <span
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '50%',
                border: '2px solid rgba(0, 212, 255, 0.3)',
                animation: 'pulse-glow 2s infinite',
              }}
            />
          )}
        </motion.div>
        {!isLast && (
          <div
            style={{
              width: '2px',
              flex: 1,
              background: 'linear-gradient(to bottom, var(--border-color), transparent)',
              marginTop: '8px',
              minHeight: '40px',
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ flex: 1, paddingBottom: isLast ? 0 : '36px' }}>
        <div
          onClick={() => setExpanded((e) => !e)}
          style={{
            padding: '24px 28px',
            borderRadius: 'var(--radius-md)',
            background: expanded ? 'var(--bg-card)' : 'rgba(20, 28, 53, 0.4)',
            border: `1px solid ${expanded ? (item.current ? 'rgba(0, 212, 255, 0.3)' : 'var(--border-color)') : 'transparent'}`,
            cursor: 'pointer',
            transition: 'background 0.25s, border-color 0.25s',
          }}
          onMouseEnter={(e) => {
            if (!expanded) {
              e.currentTarget.style.background = 'var(--bg-card)';
              e.currentTarget.style.borderColor = 'var(--border-color)';
            }
          }}
          onMouseLeave={(e) => {
            if (!expanded) {
              e.currentTarget.style.background = 'rgba(20, 28, 53, 0.4)';
              e.currentTarget.style.borderColor = 'transparent';
            }
          }}
        >
          {/* Header row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '16px',
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                  }}
                >
                  {item.role}
                </h3>
                {item.current && (
                  <span
                    style={{
                      padding: '2px 10px',
                      borderRadius: '999px',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      color: '#10b981',
                      background: 'rgba(16, 185, 129, 0.12)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                    }}
                  >
                    Current
                  </span>
                )}
              </div>
              <p
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: 'var(--accent-blue)',
                  marginBottom: '8px',
                }}
              >
                {item.company}
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Calendar size={13} />
                  {item.period} · {item.duration}
                </span>
                <span
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontSize: '0.82rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <MapPin size={13} />
                  {item.location}
                </span>
              </div>
            </div>
            <motion.div
              animate={{ rotate: expanded ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              style={{ color: 'var(--text-muted)', flexShrink: 0, marginTop: '4px' }}
            >
              <ChevronRight size={18} />
            </motion.div>
          </div>

          {/* Expanded content */}
          <motion.div
            initial={false}
            animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '16px' }}>
                {item.description}
              </p>

              <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                {item.highlights.map((h, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: 'var(--accent-blue)',
                        flexShrink: 0,
                        marginTop: '7px',
                      }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: 'var(--text-secondary)',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Career Journey"
          title="20+ Years of"
          highlight="Professional Growth"
          description="From startup co-founder to enterprise IT leader — a career built on consistently delivering complex technical projects across diverse industries."
        />

        <div
          style={{
            maxWidth: '800px',
          }}
        >
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isLast={index === experience.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

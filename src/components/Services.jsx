import { motion } from 'framer-motion';
import {
  Server,
  Smartphone,
  Globe,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollSpy';
import SectionHeader from './SectionHeader';
import { services } from '../data/content';

const iconMap = {
  Server,
  Smartphone,
  Globe,
  BarChart3,
};

function ServiceCard({ service, index }) {
  const [ref, inView] = useIntersectionObserver();
  const Icon = iconMap[service.icon] || Server;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ translateY: -6 }}
      style={{
        padding: '32px',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'box-shadow 0.3s, transform 0.3s',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${service.accent}30`;
        e.currentTarget.style.borderColor = `${service.accent}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: `linear-gradient(90deg, ${service.accent}, transparent)`,
          opacity: 0.8,
        }}
      />

      {/* Icon */}
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '12px',
          background: `${service.accent}15`,
          border: `1px solid ${service.accent}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size={24} color={service.accent} />
      </div>

      {/* Content */}
      <div>
        <h3
          style={{
            fontSize: '1.2rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '10px',
          }}
        >
          {service.title}
        </h3>
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
          }}
        >
          {service.description}
        </p>
      </div>

      {/* Technologies */}
      <div>
        <p
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '10px',
          }}
        >
          Technologies
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {service.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '4px 10px',
                borderRadius: '999px',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: service.accent,
                background: `${service.accent}12`,
                border: `1px solid ${service.accent}25`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Includes checkmark */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: 'auto',
          paddingTop: '8px',
          borderTop: '1px solid var(--border-color)',
        }}
      >
        <CheckCircle2 size={14} color={service.accent} />
        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
          Available for freelance & consulting
        </span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="What I Do"
          title="Services &"
          highlight="Expertise"
          description="From microservices to mobile apps, I deliver robust technical solutions across the full stack — with 20+ years of real-world delivery experience."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: '60px',
            padding: '40px 48px',
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08) 0%, rgba(124, 58, 237, 0.08) 100%)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '6px' }}>
              Looking for a senior developer?
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
              I am available for freelance projects, consulting, and long-term contracts.
            </p>
          </div>
          <motion.button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '13px 28px',
              borderRadius: 'var(--radius-md)',
              fontSize: '0.95rem',
              fontWeight: 700,
              color: '#fff',
              background: 'var(--accent-gradient)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            Start a Conversation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useScrollSpy';

export default function SectionHeader({ eyebrow, title, highlight, description, centered = false }) {
  const [ref, inView] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      style={{
        textAlign: centered ? 'center' : 'left',
        marginBottom: '64px',
      }}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '16px',
          }}
        >
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              background: 'var(--accent-gradient)',
              borderRadius: '1px',
            }}
          />
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent-blue)',
            }}
          >
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          lineHeight: 1.15,
          color: 'var(--text-primary)',
          marginBottom: description ? '16px' : 0,
        }}
      >
        {title}{' '}
        {highlight && (
          <span
            style={{
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {highlight}
          </span>
        )}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
            maxWidth: centered ? '560px' : '600px',
            margin: centered ? '0 auto' : '0',
            lineHeight: 1.7,
          }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

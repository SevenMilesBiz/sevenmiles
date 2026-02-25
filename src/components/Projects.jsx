import { motion } from 'framer-motion';
import {
  Music,
  Users,
  ShoppingCart,
  Download,
  Hexagon,
  ExternalLink,
  Calendar,
  User,
} from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollSpy';
import SectionHeader from './SectionHeader';
import { projects } from '../data/content';

const iconMap = {
  Music,
  Users,
  ShoppingCart,
  Download,
  Hexagon,
};

function ProjectCard({ project, index }) {
  const [ref, inView] = useIntersectionObserver();
  const Icon = iconMap[project.icon] || Hexagon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ translateY: -6 }}
      style={{
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'box-shadow 0.3s, transform 0.3s, border-color 0.3s',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px ${project.accent}40`;
        e.currentTarget.style.borderColor = `${project.accent}40`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = 'var(--border-color)';
      }}
    >
      {/* Card top banner */}
      <div
        style={{
          height: '100px',
          background: `linear-gradient(135deg, ${project.accent}25 0%, transparent 100%)`,
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background icon */}
        <Icon
          size={80}
          color={project.accent}
          style={{ opacity: 0.06, position: 'absolute', right: '-10px', top: '10px' }}
        />

        <div
          style={{
            width: '52px',
            height: '52px',
            borderRadius: '12px',
            background: `${project.accent}20`,
            border: `1px solid ${project.accent}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={24} color={project.accent} />
        </div>

        <div style={{ textAlign: 'right' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>Period</p>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 600 }}>
            {project.period}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <h3
            style={{
              fontSize: '1.15rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              marginBottom: '4px',
            }}
          >
            {project.title}
          </h3>
          <p
            style={{
              fontSize: '0.82rem',
              fontWeight: 600,
              color: project.accent,
              marginBottom: '12px',
            }}
          >
            {project.subtitle}
          </p>
          <p
            style={{
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </p>
        </div>

        {/* Meta */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <User size={13} />
            <span>{project.role}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <Calendar size={13} />
            <span>{project.client}</span>
          </div>
        </div>

        {/* Highlights */}
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {project.highlights.slice(0, 3).map((h, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
              }}
            >
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: project.accent,
                  flexShrink: 0,
                  marginTop: '6px',
                }}
              />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div style={{ marginTop: 'auto', display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '3px 10px',
                borderRadius: '999px',
                fontSize: '0.72rem',
                fontWeight: 600,
                color: project.accent,
                background: `${project.accent}12`,
                border: `1px solid ${project.accent}25`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section" style={{ background: 'var(--bg-primary)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Portfolio"
          title="Featured"
          highlight="Projects"
          description="A selection of high-impact digital products I have built or led — from public broadcaster ecommerce to banking digital platforms."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Server, Layers, Database, Target } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useScrollSpy';
import SectionHeader from './SectionHeader';
import { skills } from '../data/content';

const iconMap = { Server, Layers, Database, Target };

function SkillBar({ name, level, color, index, inView }) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '6px',
        }}
      >
        <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
          {name}
        </span>
        <span
          style={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: color,
            fontFamily: 'var(--font-mono)',
          }}
        >
          {level}%
        </span>
      </div>
      <div
        style={{
          height: '6px',
          borderRadius: '3px',
          background: 'rgba(255,255,255,0.06)',
          overflow: 'hidden',
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.07, ease: 'easeOut' }}
          style={{
            height: '100%',
            borderRadius: '3px',
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

function SkillCategory({ category, index }) {
  const [ref, inView] = useIntersectionObserver();
  const Icon = iconMap[category.icon] || Server;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{
        padding: '28px',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Corner glow */}
      <div
        style={{
          position: 'absolute',
          top: '-40px',
          right: '-40px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `${category.color}08`,
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />

      {/* Category header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '24px',
        }}
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: `${category.color}15`,
            border: `1px solid ${category.color}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Icon size={20} color={category.color} />
        </div>
        <h3
          style={{
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
          }}
        >
          {category.category}
        </h3>
      </div>

      {/* Skill bars */}
      <div>
        {category.items.map((skill, i) => (
          <SkillBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={category.color}
            index={i}
            inView={inView}
          />
        ))}
      </div>
    </motion.div>
  );
}

function TechCloud() {
  const [ref, inView] = useIntersectionObserver();

  const allTechs = [
    { name: 'Golang', tier: 1 },
    { name: 'Flutter', tier: 1 },
    { name: '.NET Core', tier: 1 },
    { name: 'PHP / Symfony', tier: 1 },
    { name: 'PostgreSQL', tier: 2 },
    { name: 'Docker', tier: 2 },
    { name: 'Node.js', tier: 2 },
    { name: 'Angular', tier: 2 },
    { name: 'MySQL', tier: 2 },
    { name: 'Kubernetes', tier: 3 },
    { name: 'Azure', tier: 3 },
    { name: 'Android', tier: 3 },
    { name: 'React', tier: 3 },
    { name: 'jQuery', tier: 3 },
    { name: 'Sitefinity', tier: 3 },
    { name: 'Git', tier: 2 },
    { name: 'REST APIs', tier: 1 },
    { name: 'Microservices', tier: 2 },
  ];

  const tierColors = {
    1: { color: '#00d4ff', bg: 'rgba(0, 212, 255, 0.12)', border: 'rgba(0, 212, 255, 0.3)', size: '0.92rem', weight: 700 },
    2: { color: '#7c3aed', bg: 'rgba(124, 58, 237, 0.1)', border: 'rgba(124, 58, 237, 0.25)', size: '0.82rem', weight: 600 },
    3: { color: 'var(--text-muted)', bg: 'rgba(255,255,255,0.04)', border: 'var(--border-color)', size: '0.78rem', weight: 500 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{
        marginTop: '48px',
        padding: '36px',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-color)',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: '20px',
        }}
      >
        Full Technology Stack
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
        {allTechs.map((tech, i) => {
          const style = tierColors[tech.tier];
          return (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              whileHover={{ scale: 1.1, y: -2 }}
              style={{
                padding: '6px 14px',
                borderRadius: '999px',
                fontSize: style.size,
                fontWeight: style.weight,
                color: style.color,
                background: style.bg,
                border: `1px solid ${style.border}`,
                cursor: 'default',
              }}
            >
              {tech.name}
            </motion.span>
          );
        })}
      </div>
      <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '16px' }}>
        Size indicates proficiency level — primary, secondary, tertiary
      </p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <SectionHeader
          eyebrow="Technical Skills"
          title="Technology"
          highlight="Expertise"
          description="A comprehensive skill set built over 20+ years — from low-level backend engineering to modern mobile development and technical leadership."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {skills.map((category, index) => (
            <SkillCategory key={category.category} category={category} index={index} />
          ))}
        </div>

        <TechCloud />
      </div>
    </section>
  );
}

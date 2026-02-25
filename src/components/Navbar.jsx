import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import SevenMilesLogo from './SevenMilesLogo';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const sectionIds = navLinks.map((l) => l.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: scrolled
            ? 'rgba(10, 14, 26, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled
            ? '1px solid var(--border-color)'
            : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <SevenMilesLogo height={28} onDark />
          </motion.button>

          {/* Desktop Nav */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <motion.button
                  onClick={() => handleNavClick(link.id)}
                  whileHover={{ color: 'var(--accent-blue)' }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    color:
                      activeSection === link.id
                        ? 'var(--accent-blue)'
                        : 'var(--text-secondary)',
                    background:
                      activeSection === link.id
                        ? 'rgba(61, 173, 160, 0.08)'
                        : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'color var(--transition-fast), background var(--transition-fast)',
                    position: 'relative',
                  }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute',
                        bottom: '4px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'var(--accent-blue)',
                        display: 'block',
                      }}
                    />
                  )}
                </motion.button>
              </li>
            ))}
            <li>
              <motion.button
                onClick={() => handleNavClick('contact')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  marginLeft: '8px',
                  padding: '9px 20px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#fff',
                  background: 'var(--accent-gradient)',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 0 20px rgba(61, 173, 160, 0.25)',
                }}
              >
                Work With Us
              </motion.button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            style={{
              display: 'none',
              color: 'var(--text-primary)',
              padding: '8px',
              borderRadius: '8px',
              border: '1px solid var(--border-color)',
              background: 'rgba(20, 28, 53, 0.8)',
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              zIndex: 999,
              background: 'rgba(10, 14, 26, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-color)',
              padding: '16px 0',
            }}
          >
            <ul style={{ padding: '0 16px' }}>
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <button
                    onClick={() => handleNavClick(link.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      color:
                        activeSection === link.id
                          ? 'var(--accent-blue)'
                          : 'var(--text-secondary)',
                      background:
                        activeSection === link.id
                          ? 'rgba(0, 212, 255, 0.08)'
                          : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    {activeSection === link.id && (
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          background: 'var(--accent-blue)',
                          flexShrink: 0,
                        }}
                      />
                    )}
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                style={{ padding: '8px 16px 0' }}
              >
                <button
                  onClick={() => handleNavClick('contact')}
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: '#fff',
                    background: 'var(--accent-gradient)',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Work With Us
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}

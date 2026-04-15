'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ThemeToggle from '../ThemeToggle';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.35 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const navLinks = [
    { href: '#benefits',     label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#use-cases',    label: 'Use Cases' },
    { href: '#analytics',    label: 'Analytics' },
  ];

  const closeMobile = () => setMenuOpen(false);

  return (
    <nav ref={navRef} className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} aria-label="Main navigation">
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="WhatZupp Home">
            What<span className={styles.logoAccent}>Zupp</span>
          </Link>

          <ul className={styles.links} role="list">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`${styles.link} ${activeSection === l.href.slice(1) ? styles.linkActive : ''}`}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.right}>
            <ThemeToggle />
            <a href="#cta-banner" className="btn btn-primary" style={{ padding: '0.55rem 1.2rem', fontSize: '13px' }}>
              Get a Demo
            </a>
            <button
              className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className={styles.mobileMenu} role="dialog" aria-label="Mobile navigation">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={closeMobile}>{l.label}</a>
          ))}
          <a href="#cta-banner" className="btn btn-primary" style={{ textAlign: 'center', marginTop: '0.5rem' }} onClick={closeMobile}>
            Get a Demo
          </a>
        </div>
      )}
    </nav>
  );
}

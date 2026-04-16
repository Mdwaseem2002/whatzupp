'use client';

import { useState } from 'react';
import { motion, type Variants, AnimatePresence } from 'framer-motion';
import {
  Zap, Shield, BarChart3, MessageSquare, RefreshCcw, Puzzle, ChevronRight,
} from 'lucide-react';
import styles from './Benefits.module.css';

const benefits = [
  {
    icon: Zap,
    title: 'Native SFMC Integration',
    desc: 'Natively syncs with Salesforce Marketing Cloud. No middleware, no custom connectors.',
    accent: '#059669',
    large: true,
    details: [
      { id: 1, text: 'Zero-Latency Real-Time Sync' },
      { id: 2, text: 'Bi-directional Data Flows' },
      { id: 3, text: 'No Middleware Required' }
    ]
  },
  {
    icon: Shield,
    title: 'Zero-PII Architecture',
    desc: 'Personal data never leaves SFMC. Compliance is effortless.',
    accent: '#6366f1',
    large: false,
    details: [
      { id: 1, text: 'Tokenized Identifiers' },
      { id: 2, text: 'GDPR/CCPA Compliant' },
      { id: 3, text: 'End-to-end Encryption' }
    ]
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    desc: 'Live delivery, read, and click metrics streamed back to SFMC.',
    accent: '#0ea5e9',
    large: false,
    details: [
      { id: 1, text: 'Live Engagement Tracking' },
      { id: 2, text: 'Automated SFMC Reporting' },
      { id: 3, text: 'Custom SQL Queries' }
    ]
  },
  {
    icon: MessageSquare,
    title: 'Two-Way Conversations',
    desc: 'Full conversational WhatsApp. Customers reply, your team responds.',
    accent: '#f59e0b',
    large: false,
    details: [
      { id: 1, text: 'Native WhatsApp Support' },
      { id: 2, text: 'AI Bot Integration' },
      { id: 3, text: 'Human Agent Handoff' }
    ]
  },
  {
    icon: RefreshCcw,
    title: 'Template Sync',
    desc: 'WhatsApp templates synced with SFMC content blocks.',
    accent: '#8b5cf6',
    large: false,
    details: [
      { id: 1, text: 'Unified Branding Control' },
      { id: 2, text: 'Instant Approval Flows' },
      { id: 3, text: 'Multi-Region Support' }
    ]
  },
  {
    icon: Puzzle,
    title: 'Extensible Platform',
    desc: 'Open API, webhooks, and 40+ pre-built connectors.',
    accent: '#ec4899',
    large: true,
    details: [
      { id: 1, text: '40+ Pre-built Connectors' },
      { id: 2, text: 'Robust Open API Access' },
      { id: 3, text: 'Enterprise Developer SDK' }
    ]
  },
];

const cardV: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

function FlipCard({ b, i }: { b: typeof benefits[0], i: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const Icon = b.icon;

  return (
    <motion.article
      className={`${styles.cardContainer} ${b.large ? styles.cardLarge : ''}`}
      variants={cardV}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      custom={i}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className={styles.cardInner}
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
      >
        {/* FRONT */}
        <div className={styles.cardFront}>
          <div className={styles.cardContent}>
            <div className={styles.iconWrap} style={{ background: `${b.accent}0d` }}>
              <Icon size={20} strokeWidth={2} style={{ color: b.accent }} />
            </div>
            <h3 className={styles.cardTitle}>{b.title}</h3>
            <p className={styles.cardDesc}>{b.desc}</p>
            <div className={styles.flipHint} style={{ color: b.accent }}>
              <span>Learn more</span>
              <ChevronRight size={14} />
            </div>
          </div>
          <div className={styles.accentGlow} style={{ background: `radial-gradient(circle at 50% 0%, ${b.accent}15, transparent 70%)` }} />
        </div>

        {/* BACK */}
        <div className={styles.cardBack}>
          <div className={styles.cardContent}>
            <div className={styles.backHeader}>
              <div className={styles.backIcon} style={{ background: `${b.accent}15`, border: `1px solid ${b.accent}30` }}>
                <Icon size={14} style={{ color: b.accent }} />
              </div>
              <span className={styles.backTitle}>Technical Details</span>
            </div>
            
            <ul className={styles.detailsList}>
              {b.details.map((detail) => (
                <li key={detail.id} className={styles.detailItem}>
                  <div className={styles.detailDot} style={{ background: b.accent }} />
                  {detail.text}
                </li>
              ))}
            </ul>

            <button 
              className={styles.backButton} 
              style={{ background: b.accent, boxShadow: `0 0 20px ${b.accent}30` }}
            >
              Contact Specialist
            </button>
          </div>
          <div className={styles.accentGlow} style={{ background: `radial-gradient(circle at 50% 100%, ${b.accent}10, transparent 70%)` }} />
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Benefits() {
  return (
    <section id="benefits" className={styles.section} aria-labelledby="benefits-heading">
      <div className="container">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label">Capabilities</span>
          <h2 id="benefits-heading" className="heading-section section-title">
            Built for enterprise scale
          </h2>
          <p className="section-subtitle">
            Everything your team needs to deliver world-class WhatsApp experiences — without compromising compliance.
          </p>
        </motion.header>

        <div className={styles.grid}>
          {benefits.map((b, i) => (
            <FlipCard key={b.title} b={b} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

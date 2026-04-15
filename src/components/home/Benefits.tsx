'use client';

import { motion, type Variants } from 'framer-motion';
import {
  Zap, Shield, BarChart3, MessageSquare, RefreshCcw, Puzzle,
} from 'lucide-react';
import styles from './Benefits.module.css';

const benefits = [
  {
    icon: Zap,
    title: 'Native SFMC Integration',
    desc: 'Natively syncs with Salesforce Marketing Cloud. No middleware, no custom connectors — your data stays in your CRM.',
    accent: '#059669',
    large: true,
  },
  {
    icon: Shield,
    title: 'Zero-PII Architecture',
    desc: 'Personal data never leaves SFMC. Tokenized identifiers make GDPR and CCPA compliance effortless.',
    accent: '#6366f1',
    large: false,
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    desc: 'Live delivery, read, and click metrics streamed back to SFMC. Build dashboards on actual engagement data.',
    accent: '#0ea5e9',
    large: false,
  },
  {
    icon: MessageSquare,
    title: 'Two-Way Conversations',
    desc: 'Full conversational WhatsApp. Customers reply, your team responds — or auto-route to your support platform.',
    accent: '#f59e0b',
    large: false,
  },
  {
    icon: RefreshCcw,
    title: 'Template Sync',
    desc: 'WhatsApp templates synced with SFMC content blocks. One approval flow, consistent brand voice everywhere.',
    accent: '#8b5cf6',
    large: false,
  },
  {
    icon: Puzzle,
    title: 'Extensible Platform',
    desc: 'Open API, webhooks, and 40+ pre-built connectors for Shopify, Commerce Cloud, SAP, and more.',
    accent: '#ec4899',
    large: true,
  },
];

const cardV: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: "easeOut", delay: i * 0.08 },
  }),
};

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
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.article
                key={b.title}
                className={`${styles.card} ${b.large ? styles.cardLarge : ''}`}
                variants={cardV}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                custom={i}
              >
                <div className={styles.iconWrap} style={{ background: `${b.accent}0d` }}>
                  <Icon size={20} strokeWidth={2} style={{ color: b.accent }} />
                </div>
                <h3 className={styles.cardTitle}>{b.title}</h3>
                <p className={styles.cardDesc}>{b.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

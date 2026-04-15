'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import styles from './CtaBanner.module.css';

export default function CtaBanner() {
  return (
    <section id="cta-banner" className={styles.banner} aria-labelledby="cta-heading">
      <div className={styles.noise} aria-hidden="true" />
      <div className={styles.shape1} aria-hidden="true" />
      <div className={styles.shape2} aria-hidden="true" />

      <div className="container">
        <motion.div
          className={styles.inner}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className={styles.eyebrow}>
            <Sparkles size={14} strokeWidth={2.5} />
            Ready to get started?
          </div>

          <h2 id="cta-heading" className={`heading-display ${styles.heading}`}>
            Launch WhatsApp campaigns<br />in days, not months
          </h2>

          <p className={styles.sub}>
            Join 500+ enterprise teams already running on WhatZupp.
          </p>

          <div className={styles.buttons}>
            <a href="#" className="btn btn-white">
              Request Demo
              <ArrowRight size={15} strokeWidth={2.5} />
            </a>
            <a href="#" className="btn btn-ghost-white">
              Talk to an Expert
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

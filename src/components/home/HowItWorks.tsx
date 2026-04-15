'use client';

import { motion } from 'framer-motion';
import { Cloud, Cpu, Radio, Users } from 'lucide-react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    Icon: Cloud,
    title: 'Salesforce MC',
    desc: 'Trigger from journeys, data extensions, or API events',
    color: '#059669',
  },
  {
    Icon: Cpu,
    title: 'WhatZupp Engine',
    desc: 'Template matching, personalization, and compliance in milliseconds',
    color: '#6366f1',
  },
  {
    Icon: Radio,
    title: 'WhatsApp Cloud API',
    desc: "Meta's official Business API with 99.9% uptime SLA",
    color: '#0ea5e9',
  },
  {
    Icon: Users,
    title: 'Your Customers',
    desc: 'Personalized messages delivered, engagement flows back to SFMC',
    color: '#f59e0b',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={styles.section} aria-labelledby="how-heading">
      <div className="container">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label">Integration</span>
          <h2 id="how-heading" className="heading-section section-title">
            How it works
          </h2>
          <p className="section-subtitle">
            Four steps from your CRM to a delivered WhatsApp message.
          </p>
        </motion.header>

        <div className={styles.stepsWrap}>
          <div className={styles.connector} aria-hidden="true" />
          <div className={styles.steps}>
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className={styles.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.1 }}
              >
                <div className={styles.iconCircle} style={{ background: `${step.color}10`, border: `1.5px solid ${step.color}20` }}>
                  <step.Icon size={22} strokeWidth={1.8} style={{ color: step.color }} />
                  <span className={styles.stepNum}>{i + 1}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

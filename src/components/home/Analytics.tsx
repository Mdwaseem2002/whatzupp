'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Send, CheckCircle2 } from 'lucide-react';
import styles from './Analytics.module.css';

const bars = [
  { label: 'Jan', value: 55, display: '3.8M' },
  { label: 'Feb', value: 68, display: '4.5M' },
  { label: 'Mar', value: 82, display: '5.2M' },
  { label: 'Apr', value: 75, display: '4.9M' },
  { label: 'May', value: 90, display: '5.9M' },
];

const sideStats = [
  { Icon: Send, label: 'Campaigns Active', value: '12', highlight: true },
  { Icon: CheckCircle2, label: 'Templates Synced', value: '47', highlight: false },
  { Icon: Clock, label: 'Avg Response', value: '2.3 min', highlight: false },
  { Icon: TrendingUp, label: 'Conversion Rate', value: '8.7%', highlight: true },
];

export default function Analytics() {
  const barRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setAnimated(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="analytics" className={styles.section} aria-labelledby="analytics-heading">
      <div className="container">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label">Analytics</span>
          <h2 id="analytics-heading" className="heading-section section-title">
            Know what&apos;s working
          </h2>
          <p className="section-subtitle">
            Real-time campaign analytics streamed to your SFMC dashboards.
          </p>
        </motion.header>

        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        >
          <div className={styles.body}>
            {/* Chart */}
            <div className={styles.chartArea}>
              <p className={styles.chartTitle}>Message Volume</p>
              <p className={styles.chartSub}>Jan – May 2026</p>
              <div ref={barRef} className={styles.barChart} role="img" aria-label="Monthly message volume chart">
                {bars.map((bar, i) => (
                  <div key={bar.label} className={styles.barGroup}>
                    <div className={styles.barTrack}>
                      <div
                        className={styles.bar}
                        style={{
                          height: `${bar.value}%`,
                          transform: animated ? 'scaleY(1)' : 'scaleY(0)',
                          transitionDelay: animated ? `${i * 0.1}s` : '0s',
                        }}
                      />
                    </div>
                    <span className={styles.barLabel}>{bar.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Side panel */}
            <div className={styles.side}>
              <p className={styles.sideTitle}>Quick Stats</p>
              <div className={styles.miniStats}>
                {sideStats.map((s) => (
                  <div key={s.label} className={styles.miniStat}>
                    <div className={styles.miniLeft}>
                      <div className={styles.miniIcon}>
                        <s.Icon size={14} strokeWidth={2} />
                      </div>
                      <span className={styles.miniLabel}>{s.label}</span>
                    </div>
                    <span className={`${styles.miniValue} ${s.highlight ? styles.miniHighlight : ''}`}>
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className={styles.syncStatus}>
                <span className={styles.syncDot} />
                SFMC Sync — Live
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

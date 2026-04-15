'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './StatsBar.module.css';

interface Stat {
  target: number;
  suffix: string;
  label: string;
  decimal?: boolean;
}

const stats: Stat[] = [
  { target: 24.3, suffix: 'M', label: 'Messages Sent',   decimal: true },
  { target: 98.9, suffix: '%', label: 'Delivery Rate',   decimal: true },
  { target: 52,   suffix: '%', label: 'Read Rate' },
  { target: 18.4, suffix: '%', label: 'Click Rate',      decimal: true },
];

function useCountUp(target: number, decimal: boolean, active: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const duration = 1500;
    const start = performance.now();

    const update = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = target * eased;
      setValue(current);
      if (progress < 1) requestAnimationFrame(update);
      else setValue(target);
    };
    requestAnimationFrame(update);
  }, [active, target]);

  return decimal ? value.toFixed(1) : Math.round(value).toString();
}

function StatItem({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const displayValue = useCountUp(stat.target, !!stat.decimal, active);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.item}>
      <span className={styles.number} aria-live="polite">
        {displayValue}{stat.suffix}
      </span>
      <span className={styles.label}>{stat.label}</span>
    </div>
  );
}

export default function StatsBar() {
  return (
    <section id="stats" className={styles.statsBar} aria-labelledby="stats-heading">
      <h2 id="stats-heading" className="sr-only">Platform Statistics</h2>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, type Variants } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay },
  }),
};

const bubbleV: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.35, ease: "easeOut", delay },
  }),
};

interface HeroBubble { text: string; type: string; delay: number; time?: string; }
interface HeroPhone {
  id: string; icon: string; name: string; status: string;
  positionClass: string; showReplies?: boolean; bubbles: HeroBubble[];
}

const phones: HeroPhone[] = [
  {
    id: 'phone-order', icon: '🛍️', name: 'ShopHub', status: 'Online', positionClass: 'phoneOne',
    bubbles: [
      { text: '🎉 Order confirmed! #SH-48291', type: 'in', delay: 0.5 },
      { text: 'Your Nike Air Max arrives Thu, Apr 17', type: 'in', delay: 0.9 },
      { text: 'Thanks! Can I track it?', type: 'out', delay: 1.3 },
      { text: 'Track here 👉 shophub.co/track', type: 'in', delay: 1.7, time: '10:42 AM ✓✓' },
    ],
  },
  {
    id: 'phone-delivery', icon: '🚚', name: 'FastShip', status: 'Automated', positionClass: 'phoneTwo',
    bubbles: [
      { text: '📦 3 stops away! ETA: 2:30 PM', type: 'in', delay: 1.0 },
      { text: '🗺️ Driver location updated', type: 'in', delay: 1.4 },
      { text: 'Delivered ✅ 2:28 PM', type: 'green', delay: 1.8 },
    ],
  },
  {
    id: 'phone-promo', icon: '🎁', name: 'Exclusive Offers', status: 'Campaign', positionClass: 'phoneThree',
    showReplies: true,
    bubbles: [
      { text: 'Hi Sarah! Flash Sale — 40% OFF ends in 2hrs!', type: 'in', delay: 0.7 },
      { text: 'Code: FLASH40 🔥', type: 'in', delay: 1.1 },
    ],
  },
];

export default function Hero() {
  return (
    <section id="hero" className={styles.hero} aria-labelledby="hero-heading">
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={`${styles.dotGrid} dot-grid`} aria-hidden="true" />

      <div className="container">
        <div className={styles.inner}>

          <div className={styles.content}>
            {/* Badge */}
            <motion.div className={styles.badge} variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span className={styles.badgeDot} aria-hidden="true" />
              Native Salesforce Integration
            </motion.div>

            {/* Headline */}
            <motion.h1 id="hero-heading" className={`heading-display ${styles.headline}`}
              variants={fadeUp} initial="hidden" animate="visible" custom={0.08}
            >
              Turn <span className="text-gradient">WhatsApp</span> into your most powerful engagement channel
            </motion.h1>

            {/* Subhead */}
            <motion.p className={styles.subhead} variants={fadeUp} initial="hidden" animate="visible" custom={0.16}>
              Run campaigns, send transactional messages, and engage customers in real-time — directly from Salesforce Marketing Cloud.
            </motion.p>

            {/* CTAs */}
            <motion.div className={styles.ctas} variants={fadeUp} initial="hidden" animate="visible" custom={0.24}>
              <a href="#cta-banner" className="btn btn-primary">
                <MessageCircle size={16} strokeWidth={2.5} />
                Request Demo
              </a>
              <a href="#" className="btn btn-outline">
                Start Free Trial
                <ArrowRight size={15} strokeWidth={2} />
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div className={styles.socialProof} variants={fadeUp} initial="hidden" animate="visible" custom={0.32}>
              <div className={styles.avatarStack} aria-hidden="true">
                {['JK','ML','SP','AR','TC'].map((init, i) => (
                  <div key={init} className={`${styles.avatar} ${styles[`av${i+1}` as keyof typeof styles]}`}>{init}</div>
                ))}
              </div>
              <p className={styles.socialText}>
                Trusted by <strong>500+ enterprise teams</strong>
              </p>
            </motion.div>
          </div>

          {/* Phones */}
          <motion.div className={styles.visual} variants={fadeUp} initial="hidden" animate="visible" custom={0.15} aria-hidden="true">
            <div className={styles.phonesWrap}>
              {phones.map((phone) => (
                <div key={phone.id} className={`phone-frame-base ${styles.phone} ${styles[phone.positionClass as keyof typeof styles]}`}>
                  <div className="phone-screen">
                    <div className="phone-header-bar">
                      <div className="phone-header-avatar">{phone.icon}</div>
                      <div>
                        <div className="phone-header-name">{phone.name}</div>
                        <div className="phone-header-status">{phone.status}</div>
                      </div>
                    </div>
                    <div className="chat-area">
                      {phone.bubbles.map((b, i) => (
                        <motion.div key={i}
                          className={`chat-bubble ${b.type === 'in' ? 'bubble-in' : b.type === 'out' ? 'bubble-out' : 'bubble-green'}`}
                          variants={bubbleV} initial="hidden" animate="visible" custom={b.delay}
                        >
                          {b.text}
                          {b.time && <div className="bubble-time">{b.time}</div>}
                        </motion.div>
                      ))}
                    </div>
                    {phone.showReplies && (
                      <div className="quick-replies">
                        {['Shop Now', 'Remind Later', 'Unsubscribe'].map((l) => (
                          <div key={l} className="quick-reply-btn">{l}</div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Truck, Check } from 'lucide-react';
import styles from './UseCases.module.css';

interface Bubble {
  type: string; text: string;
  hasAction?: boolean; actionLabel?: string;
  hasTwoBtns?: boolean; btn1?: string; btn2?: string;
}
interface PhoneData { icon: string; name: string; status: string; bubbles: Bubble[]; }
interface UseCase {
  id: string; Icon: typeof ShoppingCart; label: string; title: string; desc: string;
  features: string[]; stat: string; reverse: boolean; phone: PhoneData;
}

const useCases: UseCase[] = [
  {
    id: 'ecommerce', Icon: ShoppingCart, label: 'E-commerce',
    title: 'Abandoned Cart Recovery',
    desc: 'Recover revenue with personalized WhatsApp nudges that bring customers back — in the app they use every day.',
    features: [
      'Automated cart recovery with smart timing',
      'Order confirmation & tracking updates',
      'Personalized product recommendations',
    ],
    stat: 'Recover up to 30% of abandoned carts',
    reverse: false,
    phone: {
      icon: '🛍️', name: 'StyleCo', status: 'Business',
      bubbles: [
        { type: 'divider', text: 'Today' },
        { type: 'in', text: "Hey Maya! 👋 You left something behind…\n\nNike Air Force 1 · $129\nCart expires in 2 hours ⏰", hasAction: true, actionLabel: 'Complete Order →' },
        { type: 'out', text: 'Any discount?' },
        { type: 'in', text: 'Use SAVE10 for 10% off 🎉', hasAction: true, actionLabel: 'Shop with 10% OFF' },
      ],
    },
  },
  {
    id: 'logistics', Icon: Truck, label: 'Logistics',
    title: 'Real-Time Delivery Tracking',
    desc: 'Proactive delivery updates, live location sharing, and flexible rescheduling — all inside WhatsApp.',
    features: [
      'Live GPS location sharing',
      'Delivery rescheduling via replies',
      'Proof of delivery with photos',
    ],
    stat: 'Reduce support calls by up to 65%',
    reverse: true,
    phone: {
      icon: '🚚', name: 'FastShip', status: 'Tracking',
      bubbles: [
        { type: 'divider', text: 'Today · 09:15 AM' },
        { type: 'in', text: "📦 On the way!\n\nETA: 11:00\u201312:00\nDriver: Carlos · ⭐ 4.9", hasAction: true, actionLabel: '📍 Live Track' },
        { type: 'in', text: '🚨 New ETA: 11:30 AM (traffic)' },
        { type: 'out', text: 'Can I reschedule?' },
        { type: 'in', text: 'Pick a new time:', hasTwoBtns: true, btn1: 'Thu 2–4 PM', btn2: 'Fri 10–12 PM' },
      ],
    },
  },
];

function PhoneMockup({ phone }: { phone: PhoneData }) {
  return (
    <div className={`phone-frame-base ${styles.ucPhone}`}>
      <div className="phone-screen">
        <div className="phone-header-bar">
          <div className="phone-header-avatar">{phone.icon}</div>
          <div>
            <div className="phone-header-name">{phone.name}</div>
            <div className="phone-header-status">{phone.status}</div>
          </div>
        </div>
        <div className="chat-area">
          {phone.bubbles.map((b, i) => {
            if (b.type === 'divider') return <div key={i} className="chat-divider">{b.text}</div>;
            return (
              <div key={i} className={`chat-bubble ${b.type === 'out' ? 'bubble-out' : 'bubble-in'}`}>
                {b.text.split('\n').map((line, li) => <span key={li}>{line}<br /></span>)}
                {b.hasAction && <div className="uc-action-btn">{b.actionLabel}</div>}
                {b.hasTwoBtns && (
                  <div style={{ display: 'flex', gap: 4, marginTop: 4 }}>
                    <div className="uc-action-btn" style={{ flex: 1 }}>{b.btn1}</div>
                    <div className="uc-action-btn" style={{ flex: 1 }}>{b.btn2}</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function UseCases() {
  return (
    <section id="use-cases" className={styles.section} aria-labelledby="use-cases-heading">
      <div className="container">
        <motion.header
          className="section-header"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-label">Use Cases</span>
          <h2 id="use-cases-heading" className="heading-section section-title">
            See it in action
          </h2>
          <p className="section-subtitle">
            From e-commerce to logistics — results where it matters.
          </p>
        </motion.header>

        {useCases.map((uc, idx) => (
          <div key={uc.id}
            className={`${styles.row} ${uc.reverse ? styles.rowReverse : ''} ${idx < useCases.length - 1 ? styles.rowGap : ''}`}
          >
            <motion.div className={styles.content}
              initial={{ opacity: 0, x: uc.reverse ? 24 : -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className={styles.ucLabel}>
                <uc.Icon size={13} strokeWidth={2.5} />
                {uc.label}
              </div>
              <h3 className={`heading-section ${styles.ucTitle}`}>{uc.title}</h3>
              <p className={styles.ucDesc}>{uc.desc}</p>
              <ul className={styles.features} role="list">
                {uc.features.map((f) => (
                  <li key={f}>
                    <div className={styles.checkIcon}><Check size={12} strokeWidth={3} /></div>
                    {f}
                  </li>
                ))}
              </ul>
              <div className={styles.statBox}>{uc.stat}</div>
            </motion.div>

            <motion.div className={styles.phoneWrap}
              initial={{ opacity: 0, x: uc.reverse ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
              <PhoneMockup phone={uc.phone} />
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

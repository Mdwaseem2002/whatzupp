'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import styles from './WhatzupAsk.module.css';

const faqs = [
  {
    question: "What exactly is WhatZupp?",
    answer: "WhatZupp is a high-performance WhatsApp integration designed specifically for Salesforce Marketing Cloud. It allows you to send, receive, and track WhatsApp messages directly within your Journey Builder paths."
  },
  {
    question: "How does the SFMC integration work?",
    answer: "It's a native integration. We provide custom activity components for Journey Builder, allowing you to drag and drop WhatsApp messages into your customer journeys just like email or SMS."
  },
  {
    question: "Is the messaging two-way?",
    answer: "Absolutely. WhatZupp supports full two-way conversations. You can set up automated keyword triggers for instant replies or route incoming messages to your support platform for personalized human agent handoff."
  },
  {
    question: "How do you handle PII and compliance?",
    answer: "Security is built-in. We use a Zero-PII (Personally Identifiable Information) architecture, meaning your sensitive customer data never leaves Salesforce servers. We only use tokenized identifiers for message delivery."
  },
  {
    question: "Can I track delivery and read status?",
    answer: "Yes. Every interaction is tracked in real-time. Delivery status, read receipts, and link clicks are streamed directly back to your SFMC Data Extensions, enabling advanced engagement-based branching."
  }
];

export default function WhatzupAsk() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className="container">
        <header className={styles.title}>
          <span className="section-label">Support</span>
          <h2 id="faq-title" className="heading-section section-title">
            Common Questions
          </h2>
          <p className="section-subtitle">
            Everything you need to know about our Salesforce WhatsApp integration.
          </p>
        </header>

        <div className={styles.faqContainer}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className={`${styles.faqItem} ${isOpen ? styles.faqItemActive : ''}`}
              >
                <button
                  className={styles.header}
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{faq.question}</span>
                  <ChevronDown className={`${styles.icon} ${isOpen ? styles.iconActive : ''}`} size={20} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className={styles.content}
                    >
                      <div className={styles.answer}>
                        {faq.answer}
                        <div className={styles.accent} style={{ marginTop: '1rem', display: 'inline-block' }}>
                          View documentation ↗
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import Link from 'next/link';
import { Globe, Mail, ExternalLink } from 'lucide-react';
import styles from './Footer.module.css';

const footerLinks = {
  Product: ['Features', 'How It Works', 'Analytics', 'Pricing'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Legal: ['Privacy', 'Terms', 'GDPR', 'Security'],
};

const socials = [
  { Icon: Globe, label: 'Website' },
  { Icon: Mail, label: 'Email' },
  { Icon: ExternalLink, label: 'Links' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              What<span className={styles.logoAccent}>Zupp</span>
            </Link>
            <p className={styles.brandDesc}>
              Enterprise WhatsApp engagement for Salesforce Marketing Cloud.
            </p>
            <div className={styles.socials}>
              {socials.map(({ Icon, label }) => (
                <a key={label} href="#" className={styles.socialIcon} aria-label={label}>
                  <Icon size={15} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className={styles.colTitle}>{title}</h3>
              <ul className={styles.linkList} role="list">
                {links.map((text) => (
                  <li key={text}><a href="#" className={styles.link}>{text}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2026 WhatZupp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

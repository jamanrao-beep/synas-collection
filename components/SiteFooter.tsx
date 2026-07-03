import Link from 'next/link';
import Image from 'next/image';
import styles from './SiteFooter.module.css';
import footerLogo from '@/public/footer_logo.png';

export default function SiteFooter() {
    return (
        <footer className={styles.footer}>
            <div className={styles.topDeco}>
                <div className={styles.topDecoCenter}>
                    <div className={styles.diamondSmall}></div>
                    <div className={styles.diamondLarge}></div>
                    <div className={styles.diamondSmall}></div>
                </div>
            </div>

            <div className={styles.container}>
                {/* Left Column - Brand */}
                <div className={styles.brandCol}>
                    <Link href="/" className={styles.logoWrap} aria-label="Syna's Collection — Home">
                        <Image
                            src={footerLogo}
                            alt="Syna's Collection"
                            width={220}
                            height={55}
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                    <p className={styles.tagline}>
                        Where heritage meets artistry,
                        <br />
                        and every piece tells a story.
                    </p>
                    <div className={styles.estText}>
                        HANDCRAFTED HERITAGE — EST. 2013
                    </div>
                    <div className={styles.socialRow}>
                        <a href="https://www.facebook.com/synascollection/" target="_blank" rel="noopener noreferrer" className={styles.iconBox} aria-label="Facebook">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/synascollection/" target="_blank" rel="noopener noreferrer" className={styles.iconBox} aria-label="Instagram">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Middle Column - Quick Links */}
                <div className={styles.linksCol}>
                    <div className={styles.colHeader}>
                        <h4 className={styles.colTitle}>QUICK LINKS</h4>
                        <div className={styles.colLine}></div>
                    </div>
                    <Link href="/" className={styles.linkItem}><span className={styles.linkDash}>—</span>Home</Link>
                    <Link href="/how-we-work" className={styles.linkItem}><span className={styles.linkDash}>—</span>How We Work</Link>
                    <Link href="/who-we-are" className={styles.linkItem}><span className={styles.linkDash}>—</span>Who We Are</Link>
                    <Link href="/contact" className={styles.linkItem}><span className={styles.linkDash}>—</span>Contact Us</Link>
                </div>

                {/* Right Column - Get in Touch */}
                <div className={styles.contactCol}>
                    <div className={styles.colHeader}>
                        <h4 className={styles.colTitle}>GET IN TOUCH</h4>
                        <div className={styles.colLine}></div>
                    </div>
                    
                    <div className={styles.contactList}>
                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                                    <circle cx="12" cy="10" r="3"></circle>
                                </svg>
                            </div>
                            <div className={styles.contactContent}>
                                <span className={styles.contactLabel}>ADDRESS</span>
                                <span className={styles.contactText}>MA 01776, United States<br />Mumbai - 400086 India</span>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className={styles.contactContent}>
                                <span className={styles.contactLabel}>UNITED STATES</span>
                                <span className={styles.contactText}>+1 508-507-9623</span>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                            </div>
                            <div className={styles.contactContent}>
                                <span className={styles.contactLabel}>INDIA</span>
                                <span className={styles.contactText}>+91 89760-29638</span>
                            </div>
                        </div>

                        <div className={styles.contactItem}>
                            <div className={styles.iconBox}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                </svg>
                            </div>
                            <div className={styles.contactContent}>
                                <span className={styles.contactLabel}>EMAIL</span>
                                <span className={styles.contactText}>Contact@synascolection.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <div className={styles.copyright}>
                    <span className={styles.diamondSmall}></span>
                    © 2026 <i>Syna 'S CoLection</i> · All rights reserved
                    <span className={styles.diamondSmall}></span>
                </div>
            </div>
        </footer>
    );
}

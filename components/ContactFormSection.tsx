'use client';

import styles from './ContactFormSection.module.css';
import heritageStyles from './HeritageSection.module.css';

export default function ContactFormSection() {
    return (
        <section className={styles.container}>
            <div className={styles.grid}>
                {/* Left Panel */}
                <div className={styles.leftPanel}>
                    <div className={styles.leftContent}>
                        <div className={styles.headerSmall}>
                            <span className={`${styles.subtitle} ${heritageStyles.style1}`}>GET IN TOUCH</span>
                        </div>
                        
                        <h2 className={styles.title}>
                            <span className={heritageStyles.style1} style={{ fontSize: '13px', letterSpacing: '0.25em', lineHeight: '1.6' }}>
                                EVERY SYNA 'S PIECE<br/>BEGINS WITH A
                            </span>
                            <span className={heritageStyles.style2} style={{ marginTop: '-10px' }}>Conversation</span>
                        </h2>
                        
                        <p className={styles.description}>
                            Syna 'S CoLection is for the woman who knows her worth - the woman
                            who does not wait for an occasion, a gift, or permission to choose
                            something extraordinary for herself. If you are drawn to jewelry with
                            rarity, meaning, and presence, begin the conversation with us.
                        </p>
                        
                        <div className={styles.contactRows}>
                            {/* WhatsApp */}
                            <div className={styles.contactRow}>
                                <div className={styles.iconCircle}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </div>
                                <div className={styles.contactText}>
                                    <span className={styles.contactLabel}>WHATSAPP US</span>
                                    <span className={styles.contactValue}>US: +1 508-507-9623</span>
                                    <span className={styles.contactValue}>IN: +91 89760-29638</span>
                                </div>
                            </div>

                            {/* Location */}
                            <div className={styles.contactRow}>
                                <div className={styles.iconCircle}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <div className={styles.contactText}>
                                    <span className={styles.contactValue}>MA 01776, United States</span>
                                    <span className={styles.contactValue}>Mumbai - 400086, Maharashtra India</span>
                                </div>
                            </div>

                            {/* Social */}
                            <div className={styles.contactRow}>
                                <div className={styles.iconCircle}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                                        <line x1="8" y1="21" x2="16" y2="21"/>
                                        <line x1="12" y1="17" x2="12" y2="21"/>
                                    </svg>
                                </div>
                                <div className={styles.contactText}>
                                    <span className={styles.contactLabel}>FOLLOW & DISCOVER</span>
                                    <span className={styles.contactValue}>
                                        @synascollection &middot; <a href="https://www.instagram.com/synascollection/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Instagram</a> & <a href="https://www.facebook.com/synascollection/" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>Facebook</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className={styles.rightPanel}>
                    <div className={styles.rightContent}>
                        <h2 className={styles.formTitle}>Send an Enquiry</h2>
                        
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    First Name <span className={styles.required}>*</span>
                                </label>
                                <input type="text" className={styles.input} placeholder="First name here" />
                            </div>
                            
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    Last Name <span className={styles.required}>*</span>
                                </label>
                                <input type="text" className={styles.input} placeholder="Last name here" />
                            </div>
                            
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    Email Address <span className={styles.required}>*</span>
                                </label>
                                <input type="email" className={styles.input} placeholder="Add email" />
                            </div>
                            
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    Subject <span className={styles.required}>*</span>
                                </label>
                                <input type="text" className={styles.input} placeholder="How can we help you?" />
                            </div>
                            
                            <button type="submit" className={styles.submitBtn}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

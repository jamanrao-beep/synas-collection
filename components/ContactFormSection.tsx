'use client';

import styles from './ContactFormSection.module.css';
import heritageStyles from './HeritageSection.module.css';

export default function ContactFormSection() {
    return (
        <section className={styles.container} style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className={styles.grid}>
                {/* Top Heading inside the shaded box */}
                <h2 className={styles.title} style={{ 
                    gridColumn: '1 / -1',
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    textAlign: 'center', 
                    width: '100%', 
                    marginBottom: '100px',
                    paddingTop: '60px',
                    borderTop: '1px solid rgba(42, 23, 12, 0.2)',
                    gap: '2px'
                }}>
                    <span className={heritageStyles.style1} style={{
                        fontSize: 'clamp(28px, 4vw, 42px)',
                        letterSpacing: '0.25em',
                        whiteSpace: 'nowrap',
                        textAlign: 'center'
                    }}>
                        GET IN TOUCH
                    </span>
                    <span className={heritageStyles.style4} style={{ 
                        textAlign: 'center', 
                        fontSize: 'clamp(18px, 2.5vw, 24px)',
                        letterSpacing: '0.15em',
                        whiteSpace: 'nowrap'
                    }}>
                        EVERY SYNA 'S PIECE BEGINS WITH A
                    </span>
                    <span className={heritageStyles.style2} style={{ fontSize: 'clamp(36px, 5vw, 56px)', textAlign: 'center' }}>
                        Conversation
                    </span>
                </h2>

                {/* Left Panel */}
                <div className={styles.leftPanel} style={{ justifyContent: 'flex-start', paddingTop: '0px' }}>
                    <div className={styles.leftContent}>
                        <p className={`${heritageStyles.style3} ${styles.description}`} style={{ fontWeight: 600, color: '#2A170C' }}>
                            Syna 'S CoLection is for the woman who knows her worth-the woman
                            who does not wait for an occasion, a gift, or permission to choose
                            something extraordinary for herself. If you are drawn to jewelry with
                            rarity, meaning, and presence, begin the conversation with us.
                        </p>

                        <div className={styles.contactRows}>
                            {/* WhatsApp */}
                            <div className={styles.contactRow}>
                                <div className={styles.iconCircle}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                                        <circle cx="12" cy="10" r="3" />
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
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                        <line x1="8" y1="21" x2="16" y2="21" />
                                        <line x1="12" y1="17" x2="12" y2="21" />
                                    </svg>
                                </div>
                                <div className={styles.contactText}>
                                    <span className={styles.contactLabel}>FOLLOW & DISCOVER</span>
                                    <span className={styles.contactValue}>
                                        @synascollection &middot; <a href="https://www.instagram.com/synascollection/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a> & <a href="https://www.facebook.com/synascollection/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Facebook</a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel */}
                <div className={styles.rightPanel} style={{ justifyContent: 'flex-start', paddingTop: '0px' }}>
                    <div className={styles.rightContent}>
                        <h2 className={styles.formTitle}>Send an Enquiry</h2>

                        <form className={styles.form} onSubmit={(e) => {
                            e.preventDefault();
                            const formData = new FormData(e.target as HTMLFormElement);
                            const fname = formData.get('fname') || '';
                            const lname = formData.get('lname') || '';
                            const email = formData.get('email') || '';
                            const message = formData.get('message') || '';
                            
                            const mailtoLink = `mailto:Contact@synascolection.com?subject=Website Enquiry&body=${encodeURIComponent(`Name: ${fname} ${lname}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                            window.location.href = mailtoLink;
                        }}>
                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    First Name <span className={styles.required}>*</span>
                                </label>
                                <input type="text" name="fname" required className={styles.input} placeholder="First name here" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    Last Name <span className={styles.required}>*</span>
                                </label>
                                <input type="text" name="lname" required className={styles.input} placeholder="Last name here" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    Email Address <span className={styles.required}>*</span>
                                </label>
                                <input type="email" name="email" required className={styles.input} placeholder="Add email" />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className={styles.label}>
                                    Message <span className={styles.required}>*</span>
                                </label>
                                <textarea name="message" required className={styles.textarea} placeholder="How can we help you?" rows={4}></textarea>
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

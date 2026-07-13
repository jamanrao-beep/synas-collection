import styles from './page.module.css';
import heritageStyles from '@/components/HeritageSection.module.css';

export default function OurStoryPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.topSubtitle}>
                    <span className={`${styles.subtitleText} ${heritageStyles.style1}`} style={{ fontSize: '12px' }}>OUR STORY</span>
                </div>
                
                <h1 className={styles.title}>
                    <span className={heritageStyles.style1} style={{ fontSize: '18px', letterSpacing: '0.25em', display: 'block', marginBottom: '16px' }}>THE HEART OF</span>
                    <span className={heritageStyles.style2}>Syna 'S CoLection</span>
                </h1>
                
                <div className={styles.verticalLine}></div>
            </div>

            {/* --- BLOCK 1: A Journey Unfolded --- */}
            <div className={styles.contentGrid}>
                <div className={styles.textCol}>
                    <div className={styles.imageCol}>
                        <div className={`${styles.cornerBracket} ${styles.cornerTopLeft}`}></div>
                        <div className={`${styles.cornerBracket} ${styles.cornerTopRight}`}></div>
                        <div className={`${styles.cornerBracket} ${styles.cornerBottomLeft}`}></div>
                        <div className={`${styles.cornerBracket} ${styles.cornerBottomRight}`}></div>
                        
                        <div className={styles.imagePlaceholderText}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                            </svg>
                            TWINKLE MORBIA (MOTHER) - PORTRAIT
                        </div>
                    </div>

                    <h2 className={heritageStyles.style2} style={{ marginBottom: '16px' }}>
                        A Journey Unfolded
                    </h2>
                    <h3 className={heritageStyles.style1} style={{ fontSize: '14px', letterSpacing: '0.15em', marginBottom: '8px' }}>
                        Twinkle Morbia
                    </h3>
                    <p className={heritageStyles.style1} style={{ fontSize: '10px', letterSpacing: '0.1em', opacity: 0.6, marginBottom: '32px' }}>
                        Founder &bull; Creative Director &bull; Designer
                    </p>
                    
                    <div className={heritageStyles.style3} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p>For Twinkle Morbia, creating Syna 'S CoLection was never a carefully planned business venture. It was the beginning of a journey she never expected to take.</p>
                        <p>In 2013, she found herself quietly drawn towards the world of jewelry—to exceptional craftsmanship, old-world artistry, remarkable objects, and creations that seemed to carry stories of their own. There was no jewelry business to inherit, no family workshop waiting to be continued, and no intention of entering the industry. Yet the connection felt instinctive, even if she could not explain it.</p>
                        <p>Only in 2017 did the deeper story reveal itself.</p>
                        <p>While discovering her family's history, Twinkle learned that generations before her, her ancestors had been respected and well-known traders in the gold and silver markets of Kutch, Gujarat. With their passing, that chapter quietly came to an end, leaving decades during which no one in the immediate family remained connected to the trade.</p>
                        <p>Looking back, what once seemed like an unexpected path became a deeply personal rediscovery of heritage.</p>
                        <p>There was no legacy to inherit. Only an appreciation for craftsmanship. An instinct to recognise beauty. And the freedom to create something entirely her own.</p>
                        <p>Rather than continuing an old tradition, Twinkle chose to interpret it through her own creative language—one that honours the character of the past while remaining unmistakably contemporary.</p>
                        <p>Today, every Syna 'S CoLection creation begins with curiosity. Original antique treasures, naturally formed stones, semi-precious gemstones, handcrafted elements, miniature artworks, and traditional techniques are thoughtfully brought together through an entirely in-house design process. Each composition is refined with patience until every element feels complete, balanced, and true to its own identity.</p>
                        <p>For Twinkle, jewelry has never been about adornment alone. It is about preserving craftsmanship, celebrating individuality, and creating pieces that quietly become part of a woman's life—pieces that are worn often, cherished deeply, and remembered for the stories they gather over time.</p>
                        <p>In February 2026, Twinkle Morbia was recognised by Mid-Day among the 'Most Powerful 50 Women' as a 'Cross-Border Brand Builder', recognising her contribution to developing Syna 'S CoLection across the United States and India.</p>
                    </div>
                </div>
            </div>

            <div className={styles.blockSeparator}>
                <div className={styles.blockSeparatorLine}></div>
                <div className={styles.blockSeparatorDiamond}></div>
                <div className={styles.blockSeparatorLine}></div>
            </div>

            {/* --- BLOCK 2: The Name Behind Syna --- */}
            <div className={styles.contentGrid}>
                <div className={styles.textCol}>
                    <div className={styles.imageCol}>
                        <div className={`${styles.cornerBracket} ${styles.cornerTopLeft}`}></div>
                        <div className={`${styles.cornerBracket} ${styles.cornerTopRight}`}></div>
                        <div className={`${styles.cornerBracket} ${styles.cornerBottomLeft}`}></div>
                        <div className={`${styles.cornerBracket} ${styles.cornerBottomRight}`}></div>
                        
                        <div className={styles.imagePlaceholderText}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                            </svg>
                            SYNA BHUVA (DAUGHTER) - PORTRAIT
                        </div>
                    </div>

                    <h2 className={heritageStyles.style2} style={{ marginBottom: '24px' }}>
                        The Name Behind Syna
                    </h2>
                    
                    <div className={heritageStyles.style3} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <p style={{ fontWeight: 700 }}>Every meaningful name carries a story. Ours begins with Syna, our heartbeat.</p>
                        <p>Named after Twinkle Morbia's daughter, Syna Bhuva, the brand began as something deeply personal, rooted in love, and gradually became a reflection of the values it continues to uphold.</p>
                        <p>As the brand evolved, Syna naturally became its in-house face, appearing in editorial campaigns, fashion presentations, runway showcases in the United States, billboard advertising, and newspaper features in India.</p>
                        <p>She represents the woman for whom every Syna creation is imagined—confident, expressive, graceful, and assured in her own worth.</p>
                        <p>The name is a quiet reminder that jewelry does not need to wait for an occasion. Sometimes the most meaningful pieces are simply the ones a woman chooses for herself.</p>
                    </div>
                </div>
            </div>

            <div className={styles.blockSeparator}>
                <div className={styles.blockSeparatorLine}></div>
                <div className={styles.blockSeparatorDiamond}></div>
                <div className={styles.blockSeparatorLine}></div>
            </div>

            {/* --- BLOCK 3: One Vision. Two Homes. --- */}
            <div className={styles.contentGrid}>
                <div className={styles.textCol}>
                    <div className={styles.imageCol}>
                        <div className={`${styles.cornerBracket} ${styles.cornerTopLeft}`}></div>
                        <div className={`${styles.cornerBracket} ${styles.cornerTopRight}`}></div>
                        <div className={`${styles.cornerBracket} ${styles.cornerBottomLeft}`}></div>
                        <div className={`${styles.cornerBracket} ${styles.cornerBottomRight}`}></div>
                        
                        <div className={styles.imagePlaceholderText}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <circle cx="8.5" cy="8.5" r="1.5"/>
                                <polyline points="21 15 16 10 5 21"/>
                            </svg>
                            BRAND PRESENCE / TWO HOMES
                        </div>
                    </div>

                    <h2 className={heritageStyles.style2} style={{ marginBottom: '24px' }}>
                        One Vision. Two Homes.
                    </h2>
                    
                    <div className={heritageStyles.style3} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <p>Syna 'S CoLection is represented through two independently registered entities, united by one creative vision.</p>
                        
                        <div>
                            <h3 className={heritageStyles.style1} style={{ fontSize: '13px', letterSpacing: '0.15em', marginBottom: '8px', color: 'inherit' }}>
                                UNITED STATES
                            </h3>
                            <p style={{ fontWeight: 700, margin: '0 0 8px 0' }}>Krish Enterprises, Inc.<br/>Brand: Syna 'S CoLection</p>
                            <p style={{ margin: 0 }}>Founded in 2013 under the original brand identity Syna's Collection. In January 2026, the brand identity evolved to Syna 'S CoLection, marking a refined creative chapter and the beginning of its cross-border presence.</p>
                        </div>

                        <div>
                            <h3 className={heritageStyles.style1} style={{ fontSize: '13px', letterSpacing: '0.15em', marginBottom: '8px', color: 'inherit' }}>
                                INDIA
                            </h3>
                            <p style={{ fontWeight: 700, margin: '0 0 8px 0' }}>Syna 'S CoLection</p>
                            <p style={{ margin: 0 }}>Launched in Mumbai in January 2026 as a separately registered entity under independent ownership.</p>
                        </div>
                        
                        <p style={{ fontStyle: 'italic', marginTop: '16px' }}>While legally independent, both entities remain united through Twinkle Morbia's creative vision, design philosophy, and distinctive design language.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

import styles from './page.module.css';

export default function WhoWeArePage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <div className={styles.topSubtitle}>
                    <span className={styles.subtitleText}>SYNA'S COLECTION</span>
                    <span className={styles.dot}>&middot;</span>
                    <span className={styles.subtitleText}>EST. 2013</span>
                </div>
                
                <h1 className={styles.title}>
                    Who We <i className={styles.italicText}>Are</i>
                </h1>
                
                <p className={styles.description}>
                    A cross-border luxury jewelry house built on craft, conviction,<br />
                    and a refusal to compromise.
                </p>
                
                <div className={styles.verticalLine}></div>
            </div>

            {/* --- THE BRAND DIVIDER --- */}
            <div className={styles.sectionDivider}>
                <div className={`${styles.dividerLine} ${styles.dividerLineLeft}`}></div>
                <div className={styles.dividerText}>THE BRAND</div>
                <div className={`${styles.dividerLine} ${styles.dividerLineRight}`}></div>
            </div>

            {/* --- SECTION 1: Crafted for Those Who Refuse the Ordinary --- */}
            <div className={styles.contentGrid}>
                {/* Image Col Left */}
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
                        BRAND / COLLECTION IMAGE
                    </div>
                </div>

                {/* Text Col Right */}
                <div className={styles.textCol}>
                    <div className={styles.sectionSubtitle}>EST. 2013 &nbsp;&middot;&nbsp; CROSS-BORDER LUXURY</div>
                    <h2 className={styles.sectionTitle}>
                        Crafted for Those Who <i className={styles.italicText}>Refuse</i><br />
                        the Ordinary
                    </h2>
                    <div className={styles.shortLine}></div>
                    
                    <p className={styles.bodyText}>
                        Syna's CoLection is not a brand that follows trends — it defines them. A cross-border luxury jewelry house rooted in the belief that every piece deserves to be extraordinary, we exist at the precise intersection of heritage artistry and modern elegance.
                    </p>
                    <p className={styles.bodyText}>
                        Nothing we create is mass produced. Every design is individually crafted — built with premium finishing, timeless attention to detail, and a refined sensibility that speaks without effort.
                    </p>

                    <div className={styles.statsRow}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>13</span>
                            <span className={styles.statLabel}>YEARS OF CRAFT</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>2</span>
                            <span className={styles.statLabel}>INTERNATIONAL PRESENCES</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>0</span>
                            <span className={styles.statLabel}>MASS PRODUCED PIECES</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtle Separator */}
            <div className={styles.blockSeparator}>
                <div className={styles.blockSeparatorLine}></div>
                <div className={styles.blockSeparatorDiamond}></div>
                <div className={styles.blockSeparatorLine}></div>
            </div>

            {/* --- SECTION 2: Where Hands of Yesterday Meet Today's Vision --- */}
            <div className={styles.contentGrid}>
                {/* Text Col Left */}
                <div className={styles.textCol}>
                    <div className={styles.sectionSubtitle}>THE SIGNATURE RANGE &nbsp;&middot;&nbsp; ANTIQUE SILVER</div>
                    <h2 className={styles.sectionTitle}>
                        Where Hands of <i className={styles.italicText}>Yesterday</i> Meet<br />
                        Today's Vision
                    </h2>
                    <div className={styles.shortLine}></div>
                    
                    <p className={styles.bodyText}>
                        Our most celebrated range — the exclusive handcrafted silver designer collection — is a testament to what happens when rare heritage meets bold intention. We source antique silver elements handcrafted by master artisans of a bygone era and artfully merge them with newly handcrafted components.
                    </p>
                    <p className={styles.bodyText}>
                        The result is a piece that carries history within it — yet feels entirely of this moment. Unmistakably Syna's CoLection. Impossible to replicate anywhere else.
                    </p>

                    <div className={styles.quoteBox}>
                        <p className={styles.quoteText}>
                            Each piece is a dialogue between eras — the discipline of the past, the vision of the present.
                        </p>
                        <span className={styles.quoteAuthor}>SYNA'S COLECTION &nbsp;&middot;&nbsp; DESIGN PHILOSOPHY</span>
                    </div>
                </div>

                {/* Image Col Right */}
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
                        CRAFT / ARTISAN PROCESS IMAGE
                    </div>
                </div>
            </div>

            {/* --- THE PEOPLE DIVIDER --- */}
            <div className={styles.sectionDivider}>
                <div className={`${styles.dividerLine} ${styles.dividerLineLeft}`}></div>
                <div className={styles.dividerText}>THE PEOPLE</div>
                <div className={`${styles.dividerLine} ${styles.dividerLineRight}`}></div>
            </div>

            {/* --- SECTION 3: Twinkle Morbia --- */}
            <div className={styles.contentGrid}>
                {/* Image Col Left */}
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
                        TWINKLE MORBIA - PORTRAIT
                    </div>
                </div>

                {/* Text Col Right */}
                <div className={styles.textCol}>
                    <div className={styles.sectionSubtitle}>FOUNDER &nbsp;&middot;&nbsp; DESIGNER &nbsp;&middot;&nbsp; VISIONARY</div>
                    <h2 className={styles.sectionTitle}>
                        Twinkle <i className={styles.italicText}>Morbia</i>
                    </h2>
                    <div className={styles.sectionSubSubtitle}>FOUNDER & CREATIVE DIRECTOR</div>
                    <div className={styles.shortLine}></div>
                    
                    <p className={styles.bodyText}>
                        Twinkle Morbia built Syna's CoLection from a singular conviction — that luxury jewelry should be felt, not just worn. Over 13 years, she has grown the brand into an internationally recognized name, crossing borders without ever compromising on craft or character.
                    </p>
                    <p className={styles.bodyText}>
                        Her design philosophy is rooted in the rare: sourcing antique silver elements handcrafted by the masters of a bygone era and merging them with new handcrafted forms. Every piece she conceives is a statement — unhurried, deliberate, and entirely her own.
                    </p>

                    <div className={styles.achievementBox}>
                        <div className={styles.achievementIcon}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="8" r="6"/>
                                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                            </svg>
                        </div>
                        <span className={styles.achievementText}>MID-DAY INDIA &nbsp;&middot;&nbsp; CROSS-BORDER LUXURY BRAND BUILDER 2024</span>
                    </div>
                </div>
            </div>

            {/* Subtle Separator */}
            <div className={styles.blockSeparator}>
                <div className={styles.blockSeparatorLine}></div>
                <div className={styles.blockSeparatorDiamond}></div>
                <div className={styles.blockSeparatorLine}></div>
            </div>

            {/* --- SECTION 4: Mom's Name --- */}
            <div className={styles.contentGrid}>
                {/* Text Col Left */}
                <div className={styles.textCol}>
                    <div className={styles.sectionSubtitle}>THE FOUNDATION &nbsp;&middot;&nbsp; THE FIRST BELIEVER</div>
                    <h2 className={styles.sectionTitle}>
                        [Mom's <i className={styles.italicText}>Name</i>]
                    </h2>
                    <div className={styles.sectionSubSubtitle}>MATRIARCH &nbsp;&middot;&nbsp; BRAND PILLAR</div>
                    <div className={styles.shortLine}></div>
                    
                    <p className={styles.bodyText}>
                        Behind every bold venture is someone whose belief came first. [Mom's Name] has been the quiet strength behind Syna's CoLection — a presence whose values of dedication, grace, and authenticity are woven into the very identity of the brand.
                    </p>
                    <p className={styles.bodyText}>
                        Her influence is not measured in titles — it is felt in the way the brand carries itself. In the patience of the craft. In the dignity of every detail. She is the roots from which everything else has grown.
                    </p>
                </div>

                {/* Image Col Right */}
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
                        MOM'S NAME - PORTRAIT
                    </div>
                </div>
            </div>

            {/* Subtle Separator */}
            <div className={styles.blockSeparator}>
                <div className={styles.blockSeparatorLine}></div>
                <div className={styles.blockSeparatorDiamond}></div>
                <div className={styles.blockSeparatorLine}></div>
            </div>

            {/* --- SECTION 5: Daughter's Name --- */}
            <div className={styles.contentGrid}>
                {/* Image Col Left */}
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
                        DAUGHTER'S NAME - PORTRAIT
                    </div>
                </div>

                {/* Text Col Right */}
                <div className={styles.textCol}>
                    <div className={styles.sectionSubtitle}>THE NEXT CHAPTER &nbsp;&middot;&nbsp; THE FUTURE VOICE</div>
                    <h2 className={styles.sectionTitle}>
                        [Daughter's <i className={styles.italicText}>Name</i>]
                    </h2>
                    <div className={styles.sectionSubSubtitle}>NEXT GENERATION &nbsp;&middot;&nbsp; BRAND LEGACY</div>
                    <div className={styles.shortLine}></div>
                    
                    <p className={styles.bodyText}>
                        [Daughter's Name] represents everything Syna's CoLection is building toward — a future where heritage does not fade, but evolves. Growing up surrounded by craft, intention, and an unwavering standard of beauty, she carries the brand's spirit forward with fresh eyes and deep roots.
                    </p>
                    <p className={styles.bodyText}>
                        She is the reason the brand thinks in generations, not quarters. The legacy of Syna's CoLection does not end — it continues.
                    </p>
                </div>
            </div>
        </main>
    );
}

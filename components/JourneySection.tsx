import styles from './JourneySection.module.css';

const JOURNEY_STEPS = [
    {
        number: '01',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 12 12 17 22 12"></polyline>
                <polyline points="2 17 12 22 22 17"></polyline>
            </svg>
        ),
        title: 'The Art of Meticulous Procurement',
        description:
            "Original antique silver treasures, handcrafted elements from bygone eras, natural and semi precious stones, and rare hand painted artworks are meticulously procured and curated for their history, character, rarity, and potential to be reimagined. Each discovery is sourced through travel and personal curation, chosen for the depth and distinction it can bring to a Syna 'S creation.",
        video: '/meticulous_procurement.mov'
    },
    {
        number: '02',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
        ),
        title: 'The Art of Design Alchemy',
        description:
            'Rare discoveries gathered through travel, personal curation, and a discerning eye are brought together with antique elements, natural stones, miniature artworks, and newly handcrafted details through meticulous composition, assembly, and reinvention. Each design is assembled, reassembled, balanced, and technically refined to transform the vision into a wearable work of art. Stones may be hand carved, elements reshaped, and details reworked until proportion, craftsmanship, and meaning align.',
        video: '/design_alchemy.mov'
    },
    {
        number: '03',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <line x1="10" y1="9" x2="8" y2="9"></line>
            </svg>
        ),
        title: 'The Philosophy of Rarity',
        description:
            "At Syna 'S CoLection, rarity is not a coincidence or a detail - it is the philosophy we follow. Every piece is designed in house and handcrafted around rare, limited, and often irreplaceable elements, making mass production neither possible nor part of our world. Each creation is refined and brought to life with its own character, identity, presence, and soul. No repetition. Only rare creations made to stand apart - so every Syna 'S client does too.",
        video: ''
    },
    {
        number: '04',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        ),
        title: 'The Art of Enduring Meaning',
        description:
            "Every finished Syna 'S CoLection piece tells a story through meticulous detailing, refined finishing, and soulful craftsmanship. Created beyond fast fashion, each piece is made to be worn with pride, reworn with new meaning, and cherished across time. With every wear, it carries a different emotion, a deeper connection, and a story worth passing forward.",
        video: ''
    },
];

export default function JourneySection() {
    return (
        <section className={styles.journeySection}>
            <div className={styles.header}>
                <span className={styles.subtitle}>THE JOURNEY BEHIND EACH CREATION</span>
                <h2 className={styles.title}>From Rare Discoveries to Future Heirloom</h2>
                <div className={styles.separator}></div>
            </div>
            
            <div className={styles.rowsContainer}>
                {JOURNEY_STEPS.map((step, index) => {
                    const isEven = index % 2 !== 0;
                    return (
                        <div key={step.number} className={`${styles.row} ${isEven ? styles.rowReverse : ''}`}>
                            <div className={styles.textContent}>
                                <span className={styles.number}>{step.number}</span>
                                <div className={styles.iconWrap}>{step.icon}</div>
                                <h3 className={styles.columnTitle}>{step.title}</h3>
                                <p className={styles.columnDesc}>{step.description}</p>
                            </div>
                            <div className={styles.videoContent}>
                                {step.video ? (
                                    <video 
                                        src={step.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={styles.video}
                                    />
                                ) : (
                                    <div className={styles.videoPlaceholder}>
                                        <span>Video Coming Soon</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

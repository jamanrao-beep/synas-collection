import styles from './PremiumCollectionSection.module.css';

export default function PremiumCollectionSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={`${styles.column} ${styles.columnLeft}`}>
                    <div className={styles.iconWrap}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                    </div>
                    <h4 className={styles.subtitle}>Heritage craft</h4>
                    <h2 className={styles.title}>The Soul of Antique Silver</h2>
                    <p className={styles.description}>
                        Original antique silver treasures, handcrafted in bygone eras, are one of Syna 'S CoLection's defining fortes. Preserved for their history, character, and old-world craftsmanship, these rare pieces are revived and reimagined into premium creations that carry <strong>the soul of the past</strong> with a contemporary presence.
                    </p>
                </div>

                <div className={styles.divider}>
                    <div className={styles.diamond}></div>
                </div>

                <div className={`${styles.column} ${styles.columnRight}`}>
                    <div className={styles.iconWrap}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                        </svg>
                    </div>
                    <h4 className={styles.subtitle}>Signature line</h4>
                    <h2 className={styles.title}>24K Gold Foil Artistry</h2>
                    <p className={styles.description}>
                        A signature premium category of Syna 'S CoLection, this range is handcrafted through an intricate 24-karat gold foil foaming process, finished with traditional lac filling and semi-precious stone detailing. Lightweight, ornate, and rich in artisanal character, each piece carries <strong>the grandeur of gold</strong> with a rare handcrafted identity.
                    </p>
                </div>
            </div>
        </section>
    );
}

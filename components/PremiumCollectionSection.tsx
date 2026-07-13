import styles from './PremiumCollectionSection.module.css';
import heritageStyles from './HeritageSection.module.css';

const COLLECTIONS = [
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
        ),
        subtitle: 'Heritage craft',
        title: 'The Soul of Antique Silver',
        description: "Original antique silver treasures, handcrafted in bygone eras, are one of Syna 'S CoLection's defining fortes. Preserved for their history, character, and old-world craftsmanship, these rare pieces are revived and reimagined into premium creations that carry the soul of the past with a contemporary presence."
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
        ),
        subtitle: 'Signature line',
        title: '24K Gold Foil Artistry',
        description: "A signature premium category of Syna 'S CoLection, this range is handcrafted through an intricate 24-karat gold foil foaming process, finished with traditional lac filling and semi-precious stone detailing. Lightweight, ornate, and rich in artisanal character, each piece carries the grandeur of gold with a rare handcrafted identity."
    },
    {
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12l4 6-10 13L2 9Z"></path>
                <path d="M11 3 8 9l4 13 4-13-3-6"></path>
                <path d="M2 9h20"></path>
            </svg>
        ),
        subtitle: 'Exclusive',
        title: 'The House Signature',
        description: "The defining expression of Syna ‘S CoLection, this collection unites original antique fragments, newly created elements, semi-precious stones, natural stones retained in their organic form, and touches of 24K gold foil artistry. Each composition is imagined in-house, where rare elements are merged, reworked, and refined into a form entirely its own. The result is jewelry with an unmistakable identity — audacious in vision, refined in execution, and impossible to recreate exactly."
    }
];

export default function PremiumCollectionSection() {
    return (
        <section className={styles.section}>
            <div className={styles.rowsContainer}>
                {COLLECTIONS.map((item, index) => {
                    const isEven = index % 2 !== 0;
                    return (
                        <div key={index} className={`${styles.row} ${isEven ? styles.rowReverse : ''}`}>
                            <div className={styles.textContent}>
                                <div className={styles.iconWrap}>
                                    {item.icon}
                                </div>
                                {item.subtitle && <h4 className={styles.subtitle}>{item.subtitle}</h4>}
                                <h2 className={heritageStyles.style2}>{item.title}</h2>
                                <p className={heritageStyles.style3}>{item.description}</p>
                            </div>
                            <div className={styles.mediaContent}>
                                <div className={styles.slideshowPlaceholder}>
                                    <span>Slideshow Placeholder</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

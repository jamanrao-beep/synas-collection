import styles from './HeritageSection.module.css';

export default function HeritageSection() {
    return (
        <section className={styles.heritageSection}>
            <div className={styles.container}>
                <h4 className={styles.style1}>
                    THE ART BEHIND EVERY SYNA'S CREATION
                </h4>

                <h2 className={styles.title}>
                    <span className={styles.titleWhite}>Heritage Reimagined</span>
                    <span className={styles.style2}>Handcrafted With Soul</span>
                </h2>

                <div className={styles.separator}>
                    <img src="/border_flower.png" alt="Ornament" style={{ width: '250px', height: 'auto', objectFit: 'contain' }} />
                </div>

                <p className={styles.style3}>
                    Every Syna 'S CoLection piece is conceived in-house with intention and brought to life through heritage, artistry, and soulful craftsmanship. From original antique treasures to newly handcrafted silver creations and rare fusions of old-world elements with contemporary design, each piece is imbued with distinctive character and a rare sense of identity. We preserve what is precious, revive what carries history, and create what cannot be found again - jewelry of enduring significance, timeless elegance, and exceptional luxury.
                </p>
            </div>
        </section>
    );
}

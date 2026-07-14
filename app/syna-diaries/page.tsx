import styles from './page.module.css';
import heritageStyles from '@/components/HeritageSection.module.css';
import DiariesSection from '@/components/DiariesSection';

export default function SynaDiariesPage() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <div className={styles.ornament} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="/border_flower.png" alt="Ornament" style={{ width: '250px', height: 'auto', objectFit: 'contain' }} />
                </div>
                <h2 className={styles.title}>
                    <span className={`${styles.titleDark} ${heritageStyles.style1}`}>The Women</span><br />
                    <span className={heritageStyles.style2}>Who Wear Syna 'S With Pride</span>
                </h2>
                <div className={styles.ornament} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src="/border_flower.png" alt="Ornament" style={{ width: '150px', height: 'auto', objectFit: 'contain' }} />
                </div>
                <p className={`${styles.description} ${heritageStyles.style3}`}>
                    Trusted by women across the globe who value heritage,<br/>
                    authenticity and timeless craftsmanship.
                </p>
            </div>
            
            <DiariesSection platform="google" />
            <DiariesSection platform="facebook" />
        </main>
    );
}

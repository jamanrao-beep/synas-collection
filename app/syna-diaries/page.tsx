import styles from './page.module.css';
import DiariesSection from '@/components/DiariesSection';

export default function SynaDiariesPage() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <div className={styles.subtitleWrap}>
                    <span className={styles.line}></span>
                    <h1 className={styles.subtitle}>SYNA'S DIARIES</h1>
                    <span className={styles.line}></span>
                </div>
                <h2 className={styles.title}>
                    Real Words From<br />
                    <i>The Women</i><br />
                    <i>Who Wear Syna 'S With Pride</i>
                </h2>
            </div>
            
            <DiariesSection platform="google" />
            <DiariesSection platform="facebook" />
        </main>
    );
}

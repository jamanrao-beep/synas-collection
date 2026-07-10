import styles from './page.module.css';
import DiariesSection from '@/components/DiariesSection';

export default function SynaDiariesPage() {
    return (
        <main className={styles.main}>
            <div className={styles.header}>
                <div className={styles.ornament}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#4F7C78"/>
                        <circle cx="12" cy="12" r="3" fill="#B88A3B"/>
                    </svg>
                </div>
                <h2 className={styles.title}>
                    <span className={styles.titleDark}>The Women</span><br />
                    <span className={styles.titleGold}>Who Wear Syna 'S With Pride</span>
                </h2>
                <div className={styles.ornament}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="#4F7C78"/>
                        <circle cx="12" cy="12" r="3" fill="#B88A3B"/>
                    </svg>
                </div>
                <p className={styles.description}>
                    Trusted by women across the globe who value heritage,<br/>
                    authenticity and timeless craftsmanship.
                </p>
            </div>
            
            <DiariesSection platform="google" />
            <DiariesSection platform="facebook" />
        </main>
    );
}

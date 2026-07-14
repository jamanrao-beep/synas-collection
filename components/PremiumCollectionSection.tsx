'use client';

import { useState, useEffect, useCallback } from 'react';
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
        description: "Original antique silver treasures, handcrafted in bygone eras, are one of Syna 'S CoLection's defining fortes. Preserved for their history, character, and old-world craftsmanship, these rare pieces are revived and reimagined into premium creations that carry the soul of the past with a contemporary presence.",
        images: Array.from({ length: 8 }, (_, i) => `/silver/${i + 1}.png`)
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
        description: "A signature premium category of Syna 'S CoLection, this range is handcrafted through an intricate 24-karat gold foil foaming process, finished with traditional lac filling and semi-precious stone detailing. Lightweight, ornate, and rich in artisanal character, each piece carries the grandeur of gold with a rare handcrafted identity.",
        images: Array.from({ length: 8 }, (_, i) => `/24kGold/${i + 1}.png`)
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
        description: "The defining expression of Syna 'S CoLection, this collection unites original antique fragments, newly created elements, semi-precious stones, natural stones retained in their organic form, and touches of 24K gold foil artistry. Each composition is imagined in-house, where rare elements are merged, reworked, and refined into a form entirely its own. The result is jewelry with an unmistakable identity — audacious in vision, refined in execution, and impossible to recreate exactly.",
        images: Array.from({ length: 8 }, (_, i) => `/house-signature/${i + 1}.png`)
    }
];

function Slideshow({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const goToPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    useEffect(() => {
        const timer = setInterval(goToNext, 2500);
        return () => clearInterval(timer);
    }, [goToNext]);

    return (
        <div 
            className={styles.slideshowContainer}
            style={{ 
                position: 'relative', 
                width: '100%',
                maxWidth: '440px',
                aspectRatio: '4/5', 
                borderRadius: '12px', 
                overflow: 'hidden',
                backgroundColor: '#2b251e',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)'
            }}
        >
            {images.map((img, index) => (
                <img 
                    key={img}
                    src={img}
                    alt={`Gallery Image ${index + 1}`}
                    className={`${styles.slideImage} ${index === currentIndex ? styles.active : ''}`}
                    style={{ 
                        position: 'absolute', 
                        top: 0, 
                        left: 0, 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        opacity: index === currentIndex ? 1 : 0,
                        transition: 'opacity 0.8s ease-in-out'
                    }}
                />
            ))}
            
            <button 
                className={`${styles.arrowBtn} ${styles.prevBtn}`} 
                onClick={goToPrev} 
                aria-label="Previous image"
                style={{
                    position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '16px',
                    backgroundColor: '#122421', color: '#B88A3B', border: 'none',
                    width: '40px', height: '40px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', zIndex: 2
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button 
                className={`${styles.arrowBtn} ${styles.nextBtn}`} 
                onClick={goToNext} 
                aria-label="Next image"
                style={{
                    position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '16px',
                    backgroundColor: '#122421', color: '#B88A3B', border: 'none',
                    width: '40px', height: '40px', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer', zIndex: 2
                }}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    );
}

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
                                {item.subtitle && <h4 className={heritageStyles.style1} style={{ marginBottom: '16px', fontSize: '14px' }}>{item.subtitle}</h4>}
                                <h2 className={heritageStyles.style2}>{item.title}</h2>
                                <p className={heritageStyles.style3}>{item.description}</p>
                            </div>
                            <div className={styles.mediaContent} style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
                                <Slideshow images={item.images} />
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

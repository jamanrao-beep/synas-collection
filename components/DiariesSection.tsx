'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './DiariesSection.module.css';

interface Review {
    id: string;
    author: string;
    initial: string;
    date: string;
    text: string;
    color: string;
}

const GOOGLE_REVIEWS: Review[] = [
    {
        id: '1',
        author: 'Shipra Chadda',
        initial: 'S',
        date: 'Sep 2025',
        text: 'Known Twinkle over a decade and love her passion and knowledge toward jewellery. She puts that all into bringing you customized, one of a kind pieces. Highly recommend for pure silver and high end costume jewelry.',
        color: '#c99b4d'
    },
    {
        id: '2',
        author: 'Deepali P. Khanzode',
        initial: 'D',
        date: 'Sep 2025',
        text: 'I have always admired Syna\'s unique, creative pieces. I personally own their 100% pure silver Lakshmi coin. I vouch for the personal touch Twinkle puts into each piece. Highly recommended for high quality jewelry or coins!',
        color: '#8c6bc1'
    },
    {
        id: '3',
        author: 'Nipa Purohit',
        initial: 'N',
        date: 'last month',
        text: 'Jewelry from Syna\'s Collection always looks thoughtfully curated, timeless and unique. Twinkle is an amazing designer who brings so much heart into every piece she creates.',
        color: '#5b4fbe'
    },
    {
        id: '4',
        author: 'Meghna Trivedi',
        initial: 'M',
        date: '2 months ago',
        text: 'Stunning collection and great quality. It\'s truly a pride to wear jewellery from her collection. Each piece feels elegant, well made, and worth every penny.',
        color: '#1d8a5c'
    },
    {
        id: '5',
        author: 'Shuchi Naum',
        initial: 'S',
        date: '2 months ago',
        text: 'I can trust the quality of Syna\'s Collection completely as Twinkle is particular about it. Their designs are versatile and suit every occasion beautifully.',
        color: '#a94f83'
    }
];

const FACEBOOK_REVIEWS: Review[] = [
    {
        id: '3',
        author: 'Lavanya Karthik',
        initial: 'L',
        date: 'Apr 2017',
        text: 'An absolutely passionate designer creating an array of wonderful designs — both unique and trendy! Syna\'s Collection has something to offer everyone who loves to adorn jewelry. Highly recommend!',
        color: '#9e9e9e'
    },
    {
        id: 'f2',
        author: 'Prateek Kumar Fitcru',
        initial: 'P',
        date: 'Jun 2018',
        text: 'Great stuff for my wife, thanks for the last minute delivery arranged across borders. Service and quality both exceeded expectations.',
        color: '#ff9800'
    },
    {
        id: 'f3',
        author: 'Neha Verma',
        initial: 'N',
        date: 'Oct 2023',
        text: 'Beautiful designs and excellent craftsmanship. The packaging was also very premium. Will definitely buy again.',
        color: '#6c63ff'
    },
    {
        id: 'f4',
        author: 'Sara T',
        initial: 'S',
        date: 'Dec 2022',
        text: 'Twinkle is an amazing designer. Her pieces are unique and always draw compliments.',
        color: '#4caf50'
    }
];

export default function DiariesSection({ platform }: { platform: 'google' | 'facebook' }) {
    const reviews = platform === 'google' ? GOOGLE_REVIEWS : FACEBOOK_REVIEWS;
    const [activeIndex, setActiveIndex] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => {
                const nextIndex = (current + 1) % reviews.length;
                if (sliderRef.current) {
                    const cardWidth = sliderRef.current.children[0].clientWidth;
                    sliderRef.current.scrollTo({
                        left: nextIndex * (cardWidth + 20),
                        behavior: 'smooth'
                    });
                }
                return nextIndex;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, [reviews.length]);
    
    return (
        <section className={styles.container}>
            <div className={styles.glassBox}>
                
                {/* Left Branding Column */}
                <div className={styles.brandCol}>
                    <div className={styles.avatarWrap}>
                        <div className={styles.avatar}>SC</div>
                    </div>
                    <h3 className={styles.brandTitle}>Syna 'S CoLection {platform === 'google' && '(dba)'}</h3>
                    
                    {platform === 'facebook' && (
                        <p className={styles.facebookDesc}>
                            cross-border luxury jewelry brand<br />
                            known for handcrafted pieces
                        </p>
                    )}
                    
                    <div className={styles.ratingBox}>
                        <span className={styles.score}>5.0</span>
                        <div className={styles.stars}>★★★★★</div>
                    </div>
                    
                    <p className={styles.reviewCount}>
                        {platform === 'google' ? 'Based on 16 reviews' : '240+ Facebook recommendations'}
                    </p>
                    <p className={styles.poweredBy}>
                        powered by {platform === 'google' ? 'Google' : 'Facebook'}
                    </p>
                    
                    <a href="#" className={styles.actionButton} style={{ backgroundColor: platform === 'google' ? '#4285F4' : '#1877F2' }}>
                        {platform === 'google' ? (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#4285F4">
                                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z"/>
                            </svg>
                        ) : (
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2">
                                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                            </svg>
                        )}
                        Review us on {platform === 'google' ? 'Google' : 'Facebook'}
                    </a>
                </div>

                {/* Right Carousel Column */}
                <div className={styles.carouselCol}>
                    <button className={styles.navButton} aria-label="Previous">‹</button>
                    
                    <div className={styles.slider} ref={sliderRef}>
                        {reviews.map((review) => (
                            <div key={review.id} className={styles.card}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.cardAvatar} style={{ backgroundColor: review.color }}>
                                        {review.initial}
                                    </div>
                                    <div className={styles.cardMeta}>
                                        <h4 className={styles.cardAuthor}>{review.author}</h4>
                                        <span className={styles.cardDate}>{review.date}</span>
                                    </div>
                                    <div className={styles.cardIcon}>
                                        {platform === 'google' ? (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#4285F4">
                                                <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.761H12.545z"/>
                                            </svg>
                                        ) : (
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="#1877F2">
                                                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
                                            </svg>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.cardStars}>★★★★★</div>
                                <p className={styles.cardText}>{review.text}</p>
                            </div>
                        ))}
                    </div>

                    <button className={styles.navButton} aria-label="Next">›</button>
                </div>

                <div className={styles.dots}>
                    {reviews.map((_, i) => (
                        <span key={i} className={`${styles.dot} ${activeIndex === i ? styles.activeDot : ''}`}></span>
                    ))}
                </div>
            </div>
        </section>
    );
}

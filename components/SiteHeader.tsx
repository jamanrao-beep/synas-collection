'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SiteHeader.module.css';
import whiteLogo from '@/public/white-logo.jpeg';
import bronzeLogo from '@/public/bronze-logo.jpeg';

const NAV_LINKS = [
    { label: 'Our Story', href: '/our-story' },
    { label: 'The Artistry', href: '/the-artistry' },
    { label: 'Premium Collections', href: '/premium-collections' },
    { label: 'Syna Diaries', href: '/syna-diaries' },
    { label: 'Contact', href: '/contact' },
];

export default function SiteHeader() {
    const pathname = usePathname();
    const activeHref = pathname || '/';
    const [menuOpen, setMenuOpen] = useState(false);
    const [navHidden, setNavHidden] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 150) {
                // Scrolling down and past the top header
                setNavHidden(true);
            } else {
                // Scrolling up
                setNavHidden(false);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.headerWrapper}>
            <header className={styles.siteHeader}>
                <div className={styles.headerInner}>
                    <button
                        className={styles.menuToggle}
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                    <Link href="/" className={styles.logoWrap} aria-label="Syna's Collection — Home">
                        {/* Default state: white logo on the teal header */}
                        <Image
                            src={whiteLogo}
                            alt="Syna's Collection"
                            width={380}
                            height={95}
                            priority
                            className={`${styles.logoWhite}`}
                            style={{ objectFit: 'contain' }}
                        />
                        {/* Hover state: header turns white, bronze/gold logo fades in */}
                        <Image
                            src={bronzeLogo}
                            alt="Syna's Collection"
                            width={380}
                            height={95}
                            priority
                            className={`${styles.logoBronze}`}
                            style={{ objectFit: 'contain' }}
                        />
                    </Link>
                </div>
            </header>
            <nav className={`${styles.tabNav} ${navHidden ? styles.navHidden : ''}`}>
                <div className={`${styles.tabNavInner} ${menuOpen ? styles.open : ''}`}>
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={link.href === activeHref ? styles.active : undefined}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </nav>
        </div>
    );
}
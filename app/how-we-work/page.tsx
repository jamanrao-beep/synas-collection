import styles from './page.module.css';

export default function HowWeWorkPage() {
    return (
        <main className={styles.main}>
            {/* --- HERO SECTION --- */}
            <div className={styles.heroSection}>
                <div className={styles.topSubtitle}>
                    <span className={styles.subtitleText}>SYNA'S COLECTION</span>
                    <span className={styles.dot}>&#x2022;</span>
                    <span className={styles.subtitleText}>THE ATELIER</span>
                </div>
                
                <h1 className={styles.title}>
                    How We <i className={styles.italicText}>Work</i>
                </h1>
                
                <p className={styles.description}>
                    Every piece begins with intention. Here is the journey from vision to creation.
                </p>

                <div className={styles.verticalLine}></div>
            </div>

            {/* --- LIGHT CONTENT SECTION --- */}
            <section className={styles.videoSection}>
                <div className={styles.videoLayout}>
                    {/* Left side text content */}
                    <div className={styles.videoContent}>
                        <p className={styles.eyebrow}>BEHIND THE MAKING</p>
                        
                        <h2>
                            Watch the <em>Craft</em><br />
                            Come Alive
                        </h2>
                        
                        <div className={styles.vRule}></div>
                        
                        <p>
                            Every Syna's CoLection piece carries within it hours of focused, quiet work — hands shaping silver that has already lived one life, being guided into a new one.
                        </p>
                        
                        <p>
                            These are not factory floors. These are craftsmen at benches, tools worn smooth by use, and materials selected with the patience of someone who knows that extraordinary things cannot be rushed.
                        </p>
                    </div>

                    {/* Right side video frames */}
                    <div className={styles.videoFrames}>
                        {/* VIDEO 1 */}
                        {/* EDITABLE: Replace this entire .videoPlaceholder div with your Instagram embed code */}
                        {/* Steps: Instagram post -> ... -> Share -> Embed -> Copy code -> paste here */}
                        <div className={styles.videoSlot}>
                            <div className={styles.videoPlaceholder}>
                                <div className={`${styles.corner} ${styles.tl}`}></div>
                                <div className={`${styles.corner} ${styles.tr}`}></div>
                                <div className={`${styles.corner} ${styles.bl}`}></div>
                                <div className={`${styles.corner} ${styles.br}`}></div>
                                
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"></circle>
                                </svg>
                                
                                <span>
                                    Paste Instagram
                                    <br />
                                    Embed Code Here
                                    <br />
                                    . Video 1 .
                                </span>
                            </div>
                        </div>
                        
                        {/* VIDEO 2 */}
                        <div className={styles.videoSlot}>
                            <div className={styles.videoPlaceholder}>
                                <div className={`${styles.corner} ${styles.tl}`}></div>
                                <div className={`${styles.corner} ${styles.tr}`}></div>
                                <div className={`${styles.corner} ${styles.bl}`}></div>
                                <div className={`${styles.corner} ${styles.br}`}></div>
                                
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="2" y="2" width="20" height="20" rx="5"></rect>
                                    <circle cx="12" cy="12" r="4"></circle>
                                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"></circle>
                                </svg>
                                
                                <span>
                                    Paste Instagram
                                    <br />
                                    Embed Code Here
                                    <br />
                                    . Video 2 .
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- THE JOURNEY SECTION --- */}
            <section className={styles.journeySection}>
                <div className={styles.journeyHeader}>
                    <p className={styles.eyebrow}>THE JOURNEY</p>
                    <h2>From First Thought to <em>Final Piece</em></h2>
                    <p className={styles.subtitle}>Four stages. No shortcuts. A process shaped by 13 years of craft and conviction.</p>
                    <div className={styles.hRule}></div>
                </div>

                <div className={styles.timelineGrid}>
                    {/* Stage 01 */}
                    <div className={styles.timelineCol}>
                        <div className={styles.hugeNumber}>01</div>
                        <p className={styles.timelineEyebrow}>THE SPARK</p>
                        <h3 className={styles.timelineTitle}>Concept & <em>Vision</em></h3>
                        <p className={styles.timelineText}>
                            Every piece begins as a feeling — an aesthetic tension between the weight of history and the clarity of now. Twinkle draws from antique elements, nature, and the architecture of forgotten eras to sketch the first idea.
                        </p>
                    </div>

                    <div className={styles.timelineDivider}><div className={styles.circleDot}></div></div>

                    {/* Stage 02 */}
                    <div className={styles.timelineCol}>
                        <div className={styles.hugeNumber}>02</div>
                        <p className={styles.timelineEyebrow}>THE BLUEPRINT</p>
                        <h3 className={styles.timelineTitle}>Design & <em>Selection</em></h3>
                        <p className={styles.timelineText}>
                            Rare antique silver components are sourced and selected by hand. Each element is evaluated for its story, its texture, and its potential. No two pieces share the same components — the selection itself is an act of design.
                        </p>
                    </div>

                    <div className={styles.timelineDivider}><div className={styles.circleDot}></div></div>

                    {/* Stage 03 */}
                    <div className={styles.timelineCol}>
                        <div className={styles.hugeNumber}>03</div>
                        <p className={styles.timelineEyebrow}>THE WORK</p>
                        <h3 className={styles.timelineTitle}>Handcraft & <em>Finishing</em></h3>
                        <p className={styles.timelineText}>
                            Skilled artisans handcraft new components and merge them with the antique elements. Every join, every surface, every edge is finished with the precision of someone who knows this piece will be worn for decades.
                        </p>
                    </div>

                    <div className={styles.timelineDivider}><div className={styles.circleDot}></div></div>

                    {/* Stage 04 */}
                    <div className={styles.timelineCol}>
                        <div className={styles.hugeNumber}>04</div>
                        <p className={styles.timelineEyebrow}>THE MOMENT</p>
                        <h3 className={styles.timelineTitle}>Yours, <em>Forever</em></h3>
                        <p className={styles.timelineText}>
                            The completed piece is inspected, signed off, and prepared with the care of something irreplaceable — because it is. What arrives with you is not just jewelry. It is a singular object that will never exist again in quite this way.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- OUR PROMISE SECTION --- */}
            <section className={styles.promiseSection}>
                <div className={styles.promiseHeader}>
                    <p className={styles.eyebrow}>OUR PROMISE</p>
                    <h2>The Standards We <em>Never</em> Compromise</h2>
                    <p className={styles.subtitle}>Three principles that have guided every piece since 2013.</p>
                    <div className={styles.hRule}></div>
                </div>

                <div className={styles.promiseGrid}>
                    {/* Column 1 */}
                    <div className={styles.promiseCol}>
                        <div className={styles.promiseIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                                <polyline points="2 12 12 17 22 12"></polyline>
                                <polyline points="2 17 12 22 22 17"></polyline>
                            </svg>
                        </div>
                        <h3>Never <em>Mass Produced</em></h3>
                        <p>
                            Every piece in the collection is made individually, by hand. We do not operate production lines, minimum orders, or repeat runs. If it exists, it was made once, for one purpose.
                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className={`${styles.promiseCol} ${styles.middle}`}>
                        <div className={styles.promiseIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <h3>Heritage <em>Materials</em></h3>
                        <p>
                            We source antique silver elements handcrafted by the master craftsmen of a bygone era. These are not reproductions. They are originals — carrying the marks of the hands that first made them.
                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className={styles.promiseCol}>
                        <div className={styles.promiseIcon}>
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                        </div>
                        <h3>Premium <em>Finishing</em></h3>
                        <p>
                            The final stage of every piece is where character is confirmed. Detail, surface, weight, proportion — each is assessed against a standard that has been refined over years and will not be lowered.
                        </p>
                    </div>
                </div>
            </section>

            {/* --- WORK WITH US SECTION --- */}
            <section className={styles.workWithUsSection}>
                <div className={styles.workVerticalLine}></div>
                <p className={styles.eyebrow}>WORK WITH US</p>
                <h2>Something <em>Made</em><br/>Only for You</h2>
                <p className={styles.description}>
                    For those who want a piece that begins with their own story, Twinkle works directly with clients on bespoke commissions — from concept to creation.
                </p>
                <a href="/contact" className={styles.workBtn}>BEGIN A CONVERSATION</a>
            </section>
        </main>
    );
}

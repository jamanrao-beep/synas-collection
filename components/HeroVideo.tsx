export default function HeroVideo() {
    return (
        <section
            style={{
                position: 'relative',
                width: '100%',
                height: '100vh',
                overflow: 'hidden',
                background: '#000',
            }}
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                }}
            >
                <source src="/Main.mp4" type="video/mp4" />
                <source src="/Main.mov" type="video/quicktime" />
                {/* .mp4 (H.264) plays natively on all modern browsers (Chrome/Edge/Firefox/Safari).
                    .mov is kept as a fallback if needed. */}
                Your browser does not support the video tag.
            </video>
        </section>
    );
}
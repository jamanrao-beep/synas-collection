export default function HeroVideo() {
    return (
        <section
            style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 9',
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
                <source src="/Main.mov" type="video/quicktime" />
                {/* .mov (H.264/QuickTime) plays natively in Safari; other browsers
           will simply show nothing here if they can't decode it. If you
           need broad cross-browser support, also export an .mp4 version
           of the same file and add it as a second <source> above the
           .mov line, e.g. <source src="/Main.mp4" type="video/mp4" /> */}
                Your browser does not support the video tag.
            </video>
        </section>
    );
}
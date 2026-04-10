interface IntroScreenProps {
  onStart: () => void;
}

export default function IntroScreen({ onStart }: IntroScreenProps) {
  return (
    <section className="card hero-minimal">
      <div className="eyebrow">
        <span className="eyebrow-dot" />
        BRTI — BrainRot Type Indicator
      </div>
      <h1>
        MBTI is <span className="dead-word">dead</span>.
        <br />
        BRTI has arrived.
      </h1>
      <p className="hero-sub">
        Forget Myers-Briggs. Discover which iconic brainrot character
        matches your personality through 15 scientifically unhinged questions.
      </p>
      <div className="hero-actions">
        <button className="btn-primary" onClick={onStart}>
          Start the Test
        </button>
      </div>
      <div className="hero-features">
        <div className="mini-panel">
          <h3>5 Dimensions Analyzed</h3>
          <ul>
            <li>Chaos Energy</li>
            <li>Rizz Factor</li>
            <li>Brain Mode</li>
            <li>Squad Energy</li>
            <li>Vibe Check</li>
          </ul>
        </div>
        <div className="mini-panel">
          <h3>16 Brainrot Types</h3>
          <ul>
            <li>From Bombardiro to Sigma Boy</li>
            <li>Each with lore & vibes</li>
            <li>Shareable results</li>
            <li>100% scientifically unverified</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

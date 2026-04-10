interface ClassicIntroScreenProps {
  onStart: () => void;
}

export default function ClassicIntroScreen({
  onStart,
}: ClassicIntroScreenProps) {
  return (
    <section className="card hero-minimal">
      <div className="eyebrow">
        <span className="eyebrow-dot" />
        Classic Edition — 15 Dimensions
      </div>
      <h1>
        The <span className="dead-word">Original</span>
        <br />
        Deep Brainrot Scan
      </h1>
      <p className="hero-sub">
        30 questions. 15 psychological dimensions. 22 personality types (plus 2
        secret ones). A comprehensive map of your brainrot soul, modeled after
        the legendary SBTI framework — culturally remastered for the English
        internet.
      </p>
      <div className="hero-actions">
        <button className="btn-primary" onClick={onStart}>
          Begin Deep Scan
        </button>
      </div>
      <div className="hero-features">
        <div className="mini-panel">
          <h3>5 Models × 3 Dimensions</h3>
          <ul>
            <li>Self Model</li>
            <li>Emotional Model</li>
            <li>Attitude Model</li>
            <li>Action Model</li>
            <li>Social Model</li>
          </ul>
        </div>
        <div className="mini-panel">
          <h3>22+ Personality Types</h3>
          <ul>
            <li>From MAIN to GHOST</li>
            <li>Detailed personality profiles</li>
            <li>15-dimensional breakdown</li>
            <li>Secret types to unlock</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

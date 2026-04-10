import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-name">BRTI</span>
          <span className="footer-copy">
            © {new Date().getFullYear()} BrainRot Type Indicator. For
            entertainment only.
          </span>
        </div>
        <nav className="footer-links">
          <Link href="/types">Types</Link>
          <Link href="/compare">Compare</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </footer>
  );
}

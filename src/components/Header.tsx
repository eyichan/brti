"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <img src="/brand.svg" alt="" width={28} height={28} />
          <span>BRTI</span>
        </Link>
        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${open ? "open" : ""}`} />
        </button>
        <nav className={`nav-links ${open ? "show" : ""}`}>
          <Link href="/quiz/brainrot" onClick={() => setOpen(false)}>
            Brainrot Quiz
          </Link>
          <Link href="/quiz/classic" onClick={() => setOpen(false)}>
            Classic Quiz
          </Link>
          <Link href="/types" onClick={() => setOpen(false)}>
            Types
          </Link>
          <Link href="/compare" onClick={() => setOpen(false)}>
            Compare
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

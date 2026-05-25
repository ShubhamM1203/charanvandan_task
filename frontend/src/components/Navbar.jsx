import { useEffect, useState } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#initiatives", label: "Initiatives" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Partner" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleNavClick}>
          <span className="navbar__logo" aria-hidden="true">
            ॐ
          </span>
          <span>
            <strong>Charanvandan</strong>
            <small>Foundation</small>
          </span>
        </a>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary navbar__cta" onClick={handleNavClick}>
            Partner With Us
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}

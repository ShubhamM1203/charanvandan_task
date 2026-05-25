import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo" aria-hidden="true">
            ॐ
          </span>
          <div>
            <strong>Charanvandan Foundation</strong>
            <p>Section 8 Non-Profit · Registered under MCA, Government of India</p>
          </div>
        </div>
        <p className="footer__demo">
          Demo inspired by{" "}
          <a href="https://charanvandan.com/csr/" target="_blank" rel="noopener noreferrer">
            charanvandan.com/csr
          </a>
        </p>
        <p className="footer__copy">© {new Date().getFullYear()} Charanvandan. All rights reserved.</p>
      </div>
    </footer>
  );
}

import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__pattern" aria-hidden="true" />
      <div className="container hero__content">
        <div className="hero__badge">Section 8 Non-Profit · Ministry of Corporate Affairs</div>
        <h1 className="hero__title">
          Corporate Social
          <span> Responsibility</span>
        </h1>
        <p className="hero__text">
          Charanvandan Foundation partners with responsible organizations to create
          meaningful impact through structured CSR initiatives—fulfilling commitments
          while preserving India&apos;s spiritual heritage and serving humanity.
        </p>
        <div className="hero__actions">
          <a href="#initiatives" className="btn btn-primary">
            Explore Initiatives
          </a>
          <a href="#contact" className="btn btn-ghost">
            Partner With Us
          </a>
        </div>
        <div className="hero__stats">
          <div>
            <strong>8+</strong>
            <span>Years on Ground</span>
          </div>
          <div>
            <strong>6</strong>
            <span>CSR Programs</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Transparent Reporting</span>
          </div>
        </div>
      </div>
    </section>
  );
}

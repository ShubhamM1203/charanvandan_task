import "./Services.css";

export default function Services({ initiatives = [], loading }) {
  return (
    <section id="initiatives" className="section services">
      <div className="container">
        <div className="services__header">
          <span className="section-label">CSR Programs</span>
          <h2 className="section-title">Our Initiatives</h2>
          <p className="section-subtitle">
            Structured programs allowing companies to support humanitarian work while
            fulfilling CSR commitments across heritage, health, environment, and livelihood.
          </p>
        </div>

        {loading ? (
          <div className="services__loading">Loading initiatives…</div>
        ) : (
          <div className="services__grid">
            {initiatives.map((item) => (
              <article key={item.id} className="service-card">
                <div className="service-card__top">
                  <span className="service-card__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="service-card__category">{item.category}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#contact" className="service-card__link">
                  Discuss this program →
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import "./About.css";

const PILLARS = [
  {
    title: "Ground-Level Execution",
    text: "We operate directly on the ground ensuring real implementation and transparent reporting of CSR projects.",
    icon: "◆",
  },
  {
    title: "Visible Impact",
    text: "Companies receive real updates, photos, and documentation of the initiatives they support.",
    icon: "◇",
  },
  {
    title: "Heritage + Humanity",
    text: "Our initiatives uniquely combine humanitarian aid with preservation of India's spiritual heritage.",
    icon: "○",
  },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__main">
          <span className="section-label">Our Mission</span>
          <h2 className="section-title">Why Partner With Charanvandan?</h2>
          <p className="section-subtitle">
            A Section 8 non-profit registered under the Ministry of Corporate Affairs with
            over 8 years of ground-level social service—now structured for corporate partnerships
            that deliver measurable humanitarian and heritage outcomes.
          </p>
          <p className="about__body">
            We design CSR programs aligned with Schedule VII mandates—from national heritage
            protection and healthcare to environmental sustainability and rural livelihood—while
            maintaining rigorous compliance documentation for your board and auditors.
          </p>
        </div>
        <div className="about__pillars">
          {PILLARS.map((pillar) => (
            <article key={pillar.title} className="about__card">
              <span className="about__card-icon" aria-hidden="true">
                {pillar.icon}
              </span>
              <h3>{pillar.title}</h3>
              <p>{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

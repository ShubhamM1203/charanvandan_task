import { useState } from "react";
import "./Impact.css";

export default function Impact({ stats = [], testimonials = [] }) {
  const [active, setActive] = useState(0);

  if (!testimonials.length) return null;

  const current = testimonials[active];

  return (
    <section id="impact" className="section impact">
      <div className="container">
        <div className="impact__header">
          <span className="section-label">Measurable Outcomes</span>
          <h2 className="section-title">Impact & Testimonials</h2>
        </div>

        {stats.length > 0 && (
          <div className="impact__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="impact__stat">
                <strong>
                  {stat.value}
                  {stat.suffix}
                </strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        )}

        <div className="testimonial">
          <blockquote>
            <p>&ldquo;{current.quote}&rdquo;</p>
            <footer>
              <cite>{current.author}</cite>
              <span>{current.company}</span>
            </footer>
          </blockquote>
          <div className="testimonial__dots" role="tablist" aria-label="Testimonials">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`Testimonial ${i + 1}`}
                className={i === active ? "active" : ""}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

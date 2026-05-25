import { useState } from "react";
import { submitContact } from "../api";
import "./Contact.css";

const INITIATIVE_OPTIONS = [
  { value: "", label: "General inquiry" },
  { value: "heritage", label: "Adopt-a-Heritage Project" },
  { value: "mobility", label: "Gift of Mobility Drive" },
  { value: "mothers", label: "Dignity for Mothers Initiative" },
  { value: "ghat", label: "Ghat Hygiene Initiative" },
  { value: "water", label: "Safe Drinking Water Stations" },
  { value: "fodder", label: "Sustainable Fodder Banks" },
];

const EMPTY_FORM = {
  name: "",
  email: "",
  organization: "",
  phone: "",
  initiative: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState({ type: null, text: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, text: "" });

    try {
      const result = await submitContact(form);
      setStatus({ type: "success", text: result.message });
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus({ type: "error", text: err.message || "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="section-label">Partner With Us</span>
          <h2 className="section-title">Start Your CSR Collaboration</h2>
          <p className="section-subtitle">
            Our team will work with you to design impactful programs aligned with your CSR
            objectives. Reach out via the form or contact us directly.
          </p>
          <ul className="contact__channels">
            <li>
              <strong>Email</strong>
              <a href="mailto:support@charanvandan.com">support@charanvandan.com</a>
            </li>
            <li>
              <strong>Phone / WhatsApp</strong>
              <a href="tel:+916390658852">+91 63906 58852</a>
            </li>
            <li>
              <strong>Address</strong>
              <span>
                2A Sarai Nandan, Sunderpur, Varanasi, Uttar Pradesh 221005, India
              </span>
            </li>
          </ul>
          <div className="contact__cta-row">
            <a
              href="https://wa.me/916390658852"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              WhatsApp Us
            </a>
            <a href="mailto:support@charanvandan.com" className="btn btn-primary">
              Email Us
            </a>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <label>
              Full Name *
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                minLength={2}
                placeholder="Your name"
              />
            </label>
            <label>
              Work Email *
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@company.com"
              />
            </label>
          </div>
          <div className="form-row">
            <label>
              Organization *
              <input
                name="organization"
                value={form.organization}
                onChange={handleChange}
                required
                minLength={2}
                placeholder="Company name"
              />
            </label>
            <label>
              Phone
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 ..."
              />
            </label>
          </div>
          <label>
            Initiative of Interest
            <select name="initiative" value={form.initiative} onChange={handleChange}>
              {INITIATIVE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </label>
          <label>
            Message *
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              minLength={10}
              rows={4}
              placeholder="Tell us about your CSR goals and timeline..."
            />
          </label>
          {status.text && (
            <p className={`form-status form-status--${status.type}`} role="alert">
              {status.text}
            </p>
          )}
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? "Sending…" : "Submit Partnership Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

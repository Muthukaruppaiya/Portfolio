import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form send
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="title-underline" />
          <p className="section-subtitle">Have a project in mind? Let's work together!</p>
        </motion.div>

        <div className="contact-wrapper">
          {/* Info Panel */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-desc">
              I'm currently open to freelance projects and full-time opportunities.
              Feel free to reach out — I'll get back to you as soon as possible!
            </p>

            <div className="contact-details">
              <div className="contact-detail-item">
                <div className="detail-icon"><Mail size={18} /></div>
                <div>
                  <p className="detail-label">Email</p>
                  <a href="mailto:sivamkaruppaiya15@gmail.com" className="detail-value">sivamkaruppaiya15@gmail.com</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="detail-icon"><Phone size={18} /></div>
                <div>
                  <p className="detail-label">Phone</p>
                  <a href="tel:+916383142368" className="detail-value">+91 6383142368</a>
                </div>
              </div>
              <div className="contact-detail-item">
                <div className="detail-icon"><MapPin size={18} /></div>
                <div>
                  <p className="detail-label">Location</p>
                  <span className="detail-value">Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <p className="socials-label">Find me on</p>
              <div className="socials-row">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-btn" id="contact-linkedin" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="social-btn" id="contact-github" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn" id="contact-twitter" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div className="location-map">
              <MapPin size={20} color="var(--accent-green)" />
              <div>
                <p className="map-city">Coimbatore, India</p>
                <p className="map-sub">Tamil Nadu · IST (UTC+5:30)</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary form-submit"
                id="contact-submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sent ? '✅ Message Sent!' : <><Send size={16} /> Send Message</>}
              </motion.button>

              {sent && (
                <motion.p
                  className="form-success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thanks for reaching out! I'll get back to you soon. 🚀
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

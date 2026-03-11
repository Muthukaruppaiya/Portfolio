import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

const certs = [
  {
    title: 'Spring Boot Development',
    issuer: 'Springboard by Infosys',
    date: '2024',
    badge: '🏆',
    color: '#8b5cf6',
    link: '#',
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="certifications" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Certifications & <span>Achievements</span></h2>
          <div className="title-underline" />
          <p className="section-subtitle">Professional certifications and recognitions</p>
        </motion.div>

        <div className="certs-grid">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="cert-card"
              style={{ '--cert-color': cert.color }}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="cert-badge-wrap">
                <span className="cert-badge-icon">{cert.badge}</span>
                <div className="cert-badge-ring" style={{ borderColor: cert.color }} />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">
                  <Award size={14} style={{ color: cert.color }} />
                  {cert.issuer}
                </p>
                <div className="cert-footer">
                  <span className="cert-date">{cert.date}</span>
                  <a href={cert.link} className="cert-link" style={{ color: cert.color }} target="_blank" rel="noreferrer">
                    View Certificate <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Highlight card */}
          <motion.div
            className="cert-highlight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="cert-highlight-icon">🎓</div>
            <h3>MCA Graduate</h3>
            <p>CGPA 8.6/10 — Dr. Mahalingam College of Engineering & Technology</p>
            <div className="cert-highlight-badge">2025</div>
          </motion.div>

          <motion.div
            className="cert-highlight cert-highlight-blue"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="cert-highlight-icon">🚀</div>
            <h3>80% Automation</h3>
            <p>Reduced manual tracking efforts by 80% at ABT TR Office through Fuel Management System</p>
            <div className="cert-highlight-badge" style={{ background: '#3b82f6' }}>Achievement</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

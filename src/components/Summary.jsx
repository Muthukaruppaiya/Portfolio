import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Server, Lightbulb } from 'lucide-react';
import './Summary.css';

const highlights = [
  { icon: <Code2 size={22} />, label: 'Clean Code', desc: 'Maintainable & scalable architecture' },
  { icon: <Server size={22} />, label: 'Backend Expert', desc: 'Java, Spring Boot, REST APIs' },
  { icon: <Database size={22} />, label: 'Database', desc: 'MySQL & PostgreSQL optimization' },
  { icon: <Lightbulb size={22} />, label: 'Problem Solver', desc: 'Complex challenges, elegant solutions' },
];

export default function Summary() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="summary" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="summary-wrapper"
        >
          <div className="summary-left">
            <div className="section-header">
              <h2 className="section-title">Professional <span>Summary</span></h2>
              <div className="title-underline" />
            </div>
            <p className="summary-text">
              Aspiring <strong>Full Stack Developer</strong> with hands-on experience in{' '}
              <strong>Java, Spring Boot, and React.js</strong>. Skilled in building robust
              applications, API integration, and database optimization. Passionate about delivering
              quality code, solving complex problems, and contributing to innovative projects in a
              dynamic development environment.
            </p>
            <div className="summary-stats">
              <div className="stat-item">
                <span className="stat-number" style={{ color: 'var(--accent-green)' }}>1+</span>
                <span className="stat-label">Year Experience</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number" style={{ color: 'var(--accent-blue)' }}>2+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <span className="stat-number" style={{ color: 'var(--accent-green)' }}>9+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
          </div>

          <div className="summary-right">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="highlight-card"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <div className="highlight-icon">{h.icon}</div>
                <div>
                  <p className="highlight-label">{h.label}</p>
                  <p className="highlight-desc">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

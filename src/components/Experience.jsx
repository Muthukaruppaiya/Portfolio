import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Zap, TrendingUp, Code, ExternalLink } from 'lucide-react';
import './Experience.css';

function Counter({ target, suffix = '%', inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{count}{suffix}</span>;
}

const projects = [
  {
    title: 'Zimson Watches Feedback System',
    company: 'ABT Business Solutions, Coimbatore',
    role: 'Associate',
    period: 'May 2025 - Present',
    icon: <Code size={22} />,
    color: '#8b5cf6',
    tags: ['Spring Boot', 'React', 'MySQL', 'Linux Server', 'Email API', 'SMS API', 'WhatsApp API'],
    points: [
      'Developed OTP-based feedback portal with automated coupon distribution',
      'Integrated third-party APIs for multi-channel communication (Email, SMS, WhatsApp)',
      'Built end-to-end customer feedback pipeline with real-time notifications',
    ],
    stat: null,
  },
  {
    title: 'Fuel Management System',
    company: 'ABT TR Office',
    role: 'Associate',
    period: 'May 2025 - Present',
    icon: <TrendingUp size={22} />,
    color: '#3b82f6',
    tags: ['Spring Boot', 'React', 'MySQL', 'REST APIs', 'Linux Server'],
    points: [
      'Created comprehensive fuel tracking system with real-time monitoring dashboard',
      'Developed admin dashboard with advanced reporting and analytics features',
      'Automated manual tracking processes through intelligent system design',
    ],
    stat: { value: 80, label: 'Reduction in Manual Tracking', suffix: '%' },
    screenshots: [
      { url: `${import.meta.env.BASE_URL}fuel-mgmt/1.png`, title: 'Dashboard Overview' },
      { url: `${import.meta.env.BASE_URL}fuel-mgmt/2.png`, title: 'Profit Analysis' },
      { url: `${import.meta.env.BASE_URL}fuel-mgmt/3.png`, title: 'Supply Report' },
      { url: `${import.meta.env.BASE_URL}fuel-mgmt/4.png`, title: 'Supply Entries' }
    ]
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Work <span>Experience</span></h2>
          <div className="title-underline" />
          <p className="section-subtitle">Professional experience and project highlights</p>
        </motion.div>

        <div className="exp-company-badge">
          <Briefcase size={18} />
          <span>ABT Business Solutions, Coimbatore</span>
          <span className="exp-role-badge">Associate · May 2025 – Present</span>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              className="proj-card"
              style={{ '--accent': proj.color }}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
            >
              <div className="proj-header">
                <div className="proj-icon" style={{ background: `${proj.color}20`, color: proj.color }}>
                  {proj.icon}
                </div>
                <div className="proj-title-wrap">
                  <h3 className="proj-title">{proj.title}</h3>
                  <span className="proj-company">{proj.company}</span>
                </div>
              </div>

              {proj.stat && (
                <div className="proj-stat" style={{ borderColor: proj.color, background: `${proj.color}10` }}>
                  <Zap size={16} style={{ color: proj.color }} />
                  <span className="proj-stat-value" style={{ color: proj.color }}>
                    {inView ? <Counter target={proj.stat.value} suffix={proj.stat.suffix} inView={inView} /> : `0${proj.stat.suffix}`}
                  </span>
                  <span className="proj-stat-label">{proj.stat.label}</span>
                </div>
              )}

              <ul className="proj-points">
                {proj.points.map((pt, j) => (
                  <li key={j} className="proj-point">
                    <span className="proj-bullet" style={{ background: proj.color }} />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="proj-tags">
                {proj.tags.map(tag => (
                  <span key={tag} className="proj-tag" style={{ color: proj.color, background: `${proj.color}12`, borderColor: `${proj.color}30` }}>
                    {tag}
                  </span>
                ))}
              </div>

              {proj.screenshots && (
                <div className="proj-gallery-btn-wrap">
                  <button 
                    className="btn btn-outline btn-sm proj-gallery-btn"
                    style={{ borderColor: proj.color, color: proj.color }}
                    onClick={() => window.openScreenshots?.(proj.screenshots)}
                  >
                    <ExternalLink size={14} /> View Screenshots
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

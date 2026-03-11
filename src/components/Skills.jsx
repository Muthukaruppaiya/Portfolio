import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const skills = [
  { name: 'Java', level: 90, icon: '☕', color: '#f89820' },
  { name: 'Spring Boot', level: 85, icon: '🍃', color: '#6db33f' },
  { name: 'React.js', level: 80, icon: '⚛️', color: '#61dafb' },
  { name: 'MySQL', level: 85, icon: '🐬', color: '#4479a1' },
  { name: 'PostgreSQL', level: 80, icon: '🐘', color: '#336791' },
];

function SkillCard({ skill, index, inView }) {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
    >
      <div className="skill-header">
        <div className="skill-icon-wrap" style={{ background: `${skill.color}20`, borderColor: `${skill.color}40` }}>
          <span className="skill-emoji">{skill.icon}</span>
        </div>
        <div className="skill-info">
          <span className="skill-name">{skill.name}</span>
          <span className="skill-pct" style={{ color: skill.color }}>{skill.level}%</span>
        </div>
      </div>
      <div className="skill-bar-bg">
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.07, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="title-underline" />
          <p className="section-subtitle">Technologies I work with on a daily basis</p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

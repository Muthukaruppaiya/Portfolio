import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Languages.css';

const langs = [
  { name: 'Tamil', skills: ['Read', 'Write', 'Speak'], level: 100, flag: '🇮🇳', native: true },
  { name: 'English', skills: ['Read', 'Write', 'Speak'], level: 85, flag: '🇬🇧', native: false },
];

export default function Languages() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="languages" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">Language <span>Proficiency</span></h2>
          <div className="title-underline" />
          <p className="section-subtitle">Languages I communicate in professionally</p>
        </motion.div>

        <div className="langs-grid">
          {langs.map((lang, i) => (
            <motion.div
              key={lang.name}
              className="lang-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="lang-flag">{lang.flag}</div>
              <div className="lang-info">
                <div className="lang-name-row">
                  <h3 className="lang-name">{lang.name}</h3>
                  {lang.native && <span className="lang-native-badge">Native</span>}
                </div>
                <div className="lang-skills">
                  {lang.skills.map(s => (
                    <span key={s} className="lang-skill">{s}</span>
                  ))}
                </div>
                <div className="lang-bar-bg">
                  <motion.div
                    className="lang-bar-fill"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${lang.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                  />
                </div>
                <span className="lang-level-label">{lang.level}% Proficiency</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

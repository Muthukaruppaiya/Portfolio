import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import './Education.css';

const education = [
  {
    degree: 'PG - MCA',
    institution: 'Dr. Mahalingam College of Engineering and Technology',
    score: 'CGPA: 8.6 / 10',
    year: '2025',
    type: 'Post Graduate',
    color: 'var(--accent-green)',
  },
  {
    degree: 'UG - B.Sc. Computer Science',
    institution: 'Kovai Kalaimagal College of Arts and Science',
    score: 'CGPA: 7.4 / 10',
    year: '2023',
    type: 'Under Graduate',
    color: 'var(--accent-blue)',
  },
  {
    degree: 'HSC (12th Grade)',
    institution: 'S.D.A Matric Hr. Sec School, Theni',
    score: '64%',
    year: '2020',
    type: 'Higher Secondary',
    color: '#f59e0b',
  },
  {
    degree: 'SSLC (10th Grade)',
    institution: 'S.D.A Matric Hr. Sec School, Theni',
    score: '79%',
    year: '2018',
    type: 'Secondary',
    color: '#ec4899',
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="section-title">My <span>Education</span></h2>
          <div className="title-underline" />
          <p className="section-subtitle">Academic background and qualifications</p>
        </motion.div>

        <div className="timeline">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="timeline-item"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="timeline-dot" style={{ background: edu.color, boxShadow: `0 0 0 4px ${edu.color}30` }}>
                <GraduationCap size={16} color="#fff" />
              </div>
              <div className="edu-card card">
                <div className="edu-card-header">
                  <span className="edu-type" style={{ color: edu.color, background: `${edu.color}15`, borderColor: `${edu.color}30` }}>
                    {edu.type}
                  </span>
                  <span className="edu-year">
                    <Calendar size={13} />
                    {edu.year}
                  </span>
                </div>
                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-institution">{edu.institution}</p>
                <div className="edu-score" style={{ color: edu.color }}>
                  🏆 {edu.score}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

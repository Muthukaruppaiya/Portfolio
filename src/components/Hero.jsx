import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Phone, Mail, Linkedin, Github, ChevronDown } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.6 + 0.1;
        this.color = Math.random() > 0.5 ? '#8b5cf6' : '#3b82f6';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < 120; i++) particles.push(new Particle());

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 100) * 0.15;
            ctx.strokeStyle = '#8b5cf6';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      drawConnections();
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-overlay" />

      <div className="container hero-content">
        <div className="hero-text">
          <motion.div
            className="hero-greeting"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            👋 Hello, I'm
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            MUTHU <span className="name-highlight">KARUPPAIYA</span> P
          </motion.h1>

          <motion.div
            className="hero-title-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="hero-title-prefix">I'm a </span>
            <TypeAnimation
              sequence={[
                'Full Stack Developer', 2000,
                'Java Developer', 2000,
                'Spring Boot Engineer', 2000,
                'Problem Solver', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="hero-typing"
            />
          </motion.div>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Building robust Full Stack applications with Java, Spring Boot & React
          </motion.p>

          <motion.div
            className="hero-contacts"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a href="tel:+916383142368" className="contact-icon-link" aria-label="Phone">
              <Phone size={16} /> <span>+91 6383142368</span>
            </a>
            <a href="mailto:sivamkaruppaiya15@gmail.com" className="contact-icon-link" aria-label="Email">
              <Mail size={16} /> <span>sivamkaruppaiya15@gmail.com</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-icon-link" aria-label="LinkedIn">
              <Linkedin size={16} /> <span>LinkedIn</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-icon-link" aria-label="GitHub">
              <Github size={16} /> <span>GitHub</span>
            </a>
          </motion.div>

          <motion.div
            className="hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <a
              href="#experience"
              className="btn btn-primary"
              id="view-projects-btn"
              onClick={(e) => { e.preventDefault(); document.querySelector('#experience').scrollIntoView({ behavior: 'smooth' }); }}
            >
              View Projects
            </a>
            <a
              href="https://drive.google.com/file/d/11DyBVTa2nTv_-dMSE8KN31hqV7hq2loS/view?usp=sharing"
              className="btn btn-outline-hero"
              id="download-resume-btn"
              target="_blank"
              rel="noreferrer"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-avatar"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="avatar-ring">
            <div className="avatar-inner">
              <span className="avatar-initials">MK</span>
            </div>
          </div>
          <div className="avatar-badge">
            <span className="badge-dot" />
            Available for Work
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#skills"
        className="scroll-down"
        onClick={(e) => { e.preventDefault(); document.querySelector('#skills').scrollIntoView({ behavior: 'smooth' }); }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}

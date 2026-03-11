import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <span className="footer-logo">
            <span className="logo-bracket">&lt;</span>MK<span className="logo-bracket">/&gt;</span>
          </span>
          <p className="footer-tagline">Building robust applications with Java, Spring Boot & React</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          {['#home', '#skills', '#education', '#experience', '#contact'].map(href => (
            <a
              key={href}
              href={href}
              className="footer-link"
              onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); }}
            >
              {href.replace('#', '').charAt(0).toUpperCase() + href.replace('#', '').slice(1)}
            </a>
          ))}
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <a href="mailto:sivamkaruppaiya15@gmail.com" className="footer-contact-link">
            <Mail size={14} /> sivamkaruppaiya15@gmail.com
          </a>
          <a href="tel:+916383142368" className="footer-contact-link">
            📞 +91 6383142368
          </a>
          <div className="footer-socials">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social" id="footer-linkedin" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-social" id="footer-github" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="mailto:sivamkaruppaiya15@gmail.com" className="footer-social" id="footer-mail" aria-label="Email">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-content">
          <p className="footer-copy">
            © {year} Muthu Karuppaiya P. All rights reserved.
          </p>
          <p className="footer-tech">Java · Spring Boot · React.js · MySQL</p>
        </div>
      </div>
    </footer>
  );
}

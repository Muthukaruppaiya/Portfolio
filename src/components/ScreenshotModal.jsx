import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './ScreenshotModal.css';

export default function ScreenshotModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    window.openScreenshots = (screenshots) => {
      setImages(screenshots);
      setIndex(0);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    return () => {
      delete window.openScreenshots;
    };
  }, []);

  const close = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={close}
      >
        <motion.div 
          className="modal-content"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <button className="modal-close" onClick={close}><X /></button>
          
          <div className="modal-slider">
            <button className="slider-nav prev" onClick={prev}><ChevronLeft /></button>
            
            <div className="image-container">
              <motion.img 
                key={index}
                src={images[index].url} 
                alt={images[index].title} 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <div className="image-caption">
                {images[index].title} ({index + 1} / {images.length})
              </div>
            </div>

            <button className="slider-nav next" onClick={next}><ChevronRight /></button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

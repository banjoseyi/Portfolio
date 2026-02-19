import { useState, useEffect } from 'react';

export const useTypewriter = (texts, typeSpeed = 80, deleteSpeed = 50, pauseDuration = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = texts[currentIndex];

    if (!isDeleting && charIndex < currentText.length) {
      // Typing forward
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + currentText[charIndex]);
        setCharIndex(prev => prev + 1);
      }, typeSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      // Deleting backward
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1));
        setCharIndex(prev => prev - 1);
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === currentText.length) {
      // Pause at end, then start deleting
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      // Move to next text after deletion
      setIsDeleting(false);
      setCurrentIndex(prev => (prev + 1) % texts.length);
      setCharIndex(0);
    }
  }, [charIndex, isDeleting, currentIndex, texts, typeSpeed, deleteSpeed, pauseDuration]);

  return displayText;
};
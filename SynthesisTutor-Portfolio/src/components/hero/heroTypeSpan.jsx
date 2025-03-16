import  { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

export const HeroTypeSpan = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.span 
    initial={{opacity: 0}} 
    animate={{ opacity: 1 }} 
    className="bg-[#6f66ff] type-span"
    >
      {displayText}
    </motion.span>
  )
}

HeroTypeSpan.propTypes = {
  text: PropTypes.string.isRequired,
};


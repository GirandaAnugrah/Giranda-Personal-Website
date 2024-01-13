import { useState,useEffect } from 'react'

function TextWriter({ text, delay,infinite }:any) {
    const [currentText,setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout:any;
    
        if (currentIndex <= text.length) {
          timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1);
          }, delay);
    
        } else if (infinite) {
          setCurrentIndex(0);
          setCurrentText('');
        }

    
        return () => clearTimeout(timeout);
      }, [currentIndex, delay, infinite, text]);
  return <span>{currentText}</span>
}

export default TextWriter
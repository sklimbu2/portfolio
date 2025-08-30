import './home.css'
import { motion } from "motion/react"
import {useEffect, useState, useRef} from 'react'
const Home = () =>{
    const [text, setText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);
    const cursorRef = useRef(null);
    const fullText = "Hello, I'm Shyam"

    useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, fullText]);

    useEffect(() => {
        if (cursorRef.current) {
            const interval = setInterval(() => {
            if (cursorRef.current) {
                cursorRef.current.style.opacity = cursorRef.current.style.opacity === '0' ? '1' : '0';
            }
        }, 500);
        return () => clearInterval(interval);
    }
     }, []);
    const SlideUpText = ({ text, delay = 0, duration = 500 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <span
      ref={elementRef}
      className={`slide-up-text ${isVisible ? 'visible' : ''}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {text}
    </span>
  );
};
    return(
        <div className='home'>
            <div className='home-content'>
                <div className='profile-detail'>
                    <h2 className='home-title'>{text}</h2>
                    <h2 ref={cursorRef} className="cursor">|</h2>
                    
                    <SlideUpText 
                        text ="Transforming ideas into seamless web applications." 
                        delay={100}
                    />
                    <SlideUpText 
                        text="Web Developer with a passion for crafting clean, efficient, and user-centric 
                        digital experiences. I transform complex problems into elegant, scalable 
                        solutions using modern technologies like React and Node.js. Let's build something 
                        amazing together." 
                        delay={100}
                    />
                    <div className='language'>
                        <h3>Languages</h3>
                        <ul className='language-lists'>
                            <li className='language-list'>English (Fluent)</li>
                            <li className='language-list'>Cantonese (Basic)</li>
                            <li className='language-list'>Nepali (Native)</li>
                        </ul>
                    </div>
                </div>
                <motion.img 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
                    }}
                    src={process.env.PUBLIC_URL + '/Profile.jpg'} 
                    alt="profile"
                    className='profile-img'
                />
            </div>
        </div>
    )
}
export default Home
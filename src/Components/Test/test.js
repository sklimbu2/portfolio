import { useState, useEffect, useRef } from React;

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const cursorRef = useRef(null);
  
  const fullText = "Welcome to our React typing animation demo! This text is being typed out character by character when the component mounts.";

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

  // Blink cursor effect
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

  return (
    <div className="container">
      <h1>React Typing Animation</h1>
      <div className="typing-container">
        <span className="typing-text">{text}</span>
        <span ref={cursorRef} className="cursor">|</span>
      </div>
      <div className="code-container">
        <div className="code-line"><span className="comment">// React typing animation component</span></div>
        <div className="code-line"><span className="keyword">function</span> <span className="function">TypingAnimation</span>() {'{'}</div>
        <div className="code-line">&nbsp;&nbsp;<span className="keyword">const</span> [text, setText] = <span className="function">useState</span>('');</div>
        <div className="code-line">&nbsp;&nbsp;<span className="keyword">const</span> [index, setIndex] = <span className="function">useState</span>(0);</div>
        <div className="code-line">&nbsp;&nbsp;<span className="keyword">const</span> fullText = <span className="string">"Your text here..."</span>;</div>
        <div className="code-line">&nbsp;</div>
        <div className="code-line">&nbsp;&nbsp;<span className="function">useEffect</span>(() => {'{'}</div>
        <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">if</span> (index {'<'} fullText.length) {'{'}</div>
        <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">const</span> timer = <span className="function">setTimeout</span>(() => {'{'}</div>
        <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="function">setText</span>(prev => prev + fullText[index]);</div>
        <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="function">setIndex</span>(i => i + 1);</div>
        <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'}'}, 50);</div>
        <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="keyword">return</span> () => <span className="function">clearTimeout</span>(timer);</div>
        <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;{'}'}</div>
        <div className="code-line">&nbsp;&nbsp;{'}'}, [index, fullText]);</div>
        <div className="code-line">&nbsp;</div>
        <div className="code-line">&nbsp;&nbsp;<span className="keyword">return</span> (</div>
        <div className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;{'{text}'}&lt;/div&gt;</div>
        <div className="code-line">&nbsp;&nbsp;);</div>
        <div className="code-line">{'}'}</div>
      </div>
      <div className="instructions">
        <h3>How It Works</h3>
        <p>This React component uses the useState and useEffect hooks to simulate typing. It adds one character at a time to the displayed text with a delay between each character. The cursor blinks using a CSS animation.</p>
      </div>
    </div>
  );
};

export default TypingAnimation
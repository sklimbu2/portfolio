import { useState } from 'react';
import './contact.css'
// Icons (simulated since we can't import in this environment)
const IoMailOutline = () => <span className="icon">✉️</span>;
const FaGithub = () => <span className="icon">🐱</span>;
const SlLocationPin = () => <span className="icon">📍</span>;

const Contact = () => {
    const FlipCard = ({ frontContent, backContent, height = 250, width = 250 }) => {
        const [isFlipped, setIsFlipped] = useState(false);
        return (
            <div 
                className="flip-card"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
                style={{ height: `${height}px`, width: `${width}px` }}
            >
                <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                    <div className="flip-card-front">
                        {frontContent}
                     </div>
                    <div className="flip-card-back">
                        {backContent}
                    </div>
                </div>
            </div>
        );
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:limbuneyoung@gmail.com';
    };

    const handleGithubClick = () => {
        window.open('https://github.com/sklimbu2', '_blank');
    };

    return(
        <div className='contact'>
        <div className='contact-container'>
            <h1 className="contact-title">Get In Touch</h1>
            <p className="contact-subtitle">Hover over the cards to reveal contact information</p>
            
            <div className='contact-cards'>
                <FlipCard 
                    frontContent={
                    <div className="card-content">
                        <IoMailOutline />
                        <h4>My Email</h4>
                    </div>
                    }
                    backContent={
                        <div className="card-content">
                            <span>limbuneyoung@gmail.com</span>
                            <button className="contact-btn" onClick={handleEmailClick}>Send Mail</button>
                        </div>
                    }
                /> 
                <FlipCard 
                    frontContent={
                    <div className="card-content">
                        <FaGithub />
                        <h4>My Github</h4>
                    </div>
                    }
                    backContent={
                        <div className="card-content">
                            <span>github.com/sklimbu2</span>
                            <button className="contact-btn" onClick={handleGithubClick}>Go to Profile</button>
                        </div>
                    }
                />  
                <FlipCard 
                    frontContent={
                    <div className="card-content">
                        <SlLocationPin />
                        <h4>My Location</h4>
                    </div>
                    }
                    backContent={
                        <div className="card-content">
                            <span>Hong Kong</span>
                            <button className="contact-btn">View Map</button>
                        </div>
                    }
                />  
            </div>

            <div className="contact-info">
                <h2>Let's Work Together</h2>
                <p>I'm always interested in new opportunities and collaborations.</p>
            </div>
        </div>
        </div>
    );
};

export default Contact
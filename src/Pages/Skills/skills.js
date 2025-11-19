import { useState, useEffect } from "react";
import { FaCode, FaGraduationCap } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import './skills.css';

const Skills = () => {
    const [activeSkill, setActiveSkill] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    
    const skills = [
        {title:'HTML', imgUrl:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', proficiency: 90, description: 'Semantic HTML5, accessibility, and modern markup practices'},
        {title:'CSS', imgUrl:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', proficiency: 85, description: 'CSS3, Flexbox, Grid, animations, and responsive design'},
        {title:'JavaScript', imgUrl:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', proficiency: 75, description: 'ES6+, async programming, DOM manipulation'},
        {title:'React Js', imgUrl:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', proficiency: 70, description: 'Hooks, Context API, state management, and performance optimization'},
        {title:'Vue Js', imgUrl:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', proficiency: 45, description: 'Vue 3, Composition API, Vuex, and Vue Router'},
        {title:'Node Js', imgUrl:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', proficiency: 35, description: 'Express.js, REST APIs, authentication, and database integration'},
        {title:'AWS', imgUrl:'https://i.scdn.co/image/ab6765630000ba8a49f81331af04ec3614a5a741', proficiency: 30, description: 'EC2, S3, Lambda, and basic cloud infrastructure management'},
        {title:'MongoDB', imgUrl:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', proficiency: 40, description: 'Database design, aggregation, and performance optimization'},
    ];

    const education = [
        {
            institution: 'University of Wollongong, Australia',
            period: '2019–2020',
            degree: 'Bachelor of Computer Science',
            image: process.env.PUBLIC_URL + '/UOW.jpeg',
            details: 'Specialized in software engineering and web technologies'
        },
        {
            institution: 'City University of Hong Kong',
            period: '2017-2019',
            degree: 'Associate Degree in Network and System Administration',
            image: process.env.PUBLIC_URL + '/CityU.jpg',
            details: 'Focused on networking fundamentals and system administration'
        }
    ];

    useEffect(() => {
        setIsVisible(true);
        return () => setIsVisible(false);
    }, []);

    return (
        <div className="skills-container">
            <div className="skills">
                <div className='skills-half'>
                    <motion.h3 
                        className='skills-title'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <FaCode /> My Skills
                    </motion.h3>
                    
                    <div className='skills-grid'>
                        {skills.map((data, index) => (
                            <motion.div 
                                key={data.title}
                                className={`skill-card ${activeSkill === data.title ? 'active' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ 
                                    opacity: isVisible ? 1 : 0, 
                                    y: isVisible ? 0 : 20 
                                }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                onHoverStart={() => setActiveSkill(data.title)}
                                onHoverEnd={() => setActiveSkill(null)}
                            >
                                <div className="skill-content">
                                    <div className="skill-image-container">
                                        <img src={data.imgUrl} alt={data.title} />
                                        <motion.div 
                                            className="proficiency-bar"
                                            initial={{ width: 0 }}
                                            animate={{ width: `${data.proficiency}%` }}
                                            transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                                        />
                                    </div>
                                    <h5>{data.title}</h5>
                                </div>
                                
                                <AnimatePresence>
                                    {activeSkill === data.title && (
                                        <motion.div 
                                            className="skill-details-expanded"
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <p>{data.description}</p>
                                            <span className="proficiency-text">{data.proficiency}% Proficiency</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
                
                <div className='skills-half'>
                    <motion.h3 
                        className='skills-title'
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <FaGraduationCap /> My Education
                    </motion.h3>
                    
                    <div className='education-list'>
                        {education.map((item, index) => (
                            <motion.div 
                                key={item.institution}
                                className='education-item'
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.div 
                                    className="education-image-container"
                                    whileHover={{ rotate: 2 }}
                                >
                                    <img 
                                        src={item.image}
                                        alt={item.institution} 
                                        className="education-img"
                                    />
                                </motion.div>
                                <div className="education-details">
                                    <h4>{item.degree}</h4>
                                    <p className="institution">{item.institution}</p>
                                    <p className="period">{item.period}</p>
                                    <motion.p 
                                        className="details"
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {item.details}
                                    </motion.p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
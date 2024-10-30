import React, { useEffect, useRef, useState } from 'react';
import '../styles/fadein.css';

const FadeIn = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.6 }
        );

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={domRef} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default FadeIn;

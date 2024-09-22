import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../../assets/AnimatedSection.css'; 

interface AnimatedSectionProps {
    children: React.ReactNode;
    animation: string; 
    threshold?: number; 
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
    children,
    animation,
    threshold = 0.1,
}) => {
    const { ref, inView } = useInView({
        threshold,
    });

    return (
        <div ref={ref} className={`${animation} ${inView ? 'visible' : ''}`}>
            {children}
        </div>
    );
};

export default AnimatedSection;

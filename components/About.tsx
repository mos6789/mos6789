import React from 'react';
import { PERSONAL_INFO } from '../constants';
import AnimatedSection from './AnimatedSection';

const AboutSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h3 className="text-2xl font-serif font-bold text-primary mb-3">{title}</h3>
        <div className="text-text-secondary space-y-4 text-lg">{children}</div>
    </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-surface">
      <AnimatedSection>
        <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-4xl mx-auto text-left">
                <div>
                    <AboutSection title="My Medical Journey">
                        <p>
                            My path to medicine began at Kendriya Vidyalaya No 1, Naval Base, Kochi, graduating in 2017. I pursued my MBBS at Malankara Orthodox Syrian Church Medical College, Kolenchery, completing my degree and a comprehensive one-year internship in 2024. I have a strong preference for hands-on clinical skills over theoretical academics, which drives my passion for patient care.
                        </p>
                    </AboutSection>
                    
                    <AboutSection title="My Philosophy of Care">
                        <p>
                            I believe in a holistic approach to medicine that combines rigorous, evidence-based clinical practice with sincere, empathetic patient communication. My goal is to not only treat conditions but to ensure patients feel heard, respected, and actively involved in their own healthcare journey.
                        </p>
                    </AboutSection>

                    <AboutSection title="Leadership & Strengths">
                        <p>
                            Beyond the clinic, I have cultivated strong leadership and coordination skills through various roles, including serving as General Secretary of the College Union, House Captain in school, and CCA Captain. These experiences have instilled in me a deep sense of sincerity, responsibility, and teamwork.
                        </p>
                    </AboutSection>

                    <AboutSection title="Extracurricular Activities & Interests">
                        <p>
                            I am a firm believer in a balanced life. I was the Captain of our college cricket team, an avid opening batsman, and an active member of the basketball and volleyball teams. I also enjoy dancing as a creative outlet. These activities have been crucial in developing my discipline and collaborative spirit.
                        </p>
                    </AboutSection>

                    <AboutSection title="Future Aspirations">
                        <p>
                            I am driven by the goal of pursuing a post-graduate (MS) degree in Surgery from one of India's top medical colleges. My determination is reflected in my competitive exam performance, securing a rank of 2660 in INI-CET and 1296 in NEET PG.
                        </p>
                    </AboutSection>
                </div>
            </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default About;

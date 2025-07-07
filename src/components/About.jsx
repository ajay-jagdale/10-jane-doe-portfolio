import React from 'react';
import Section from './Section.jsx'; // Updated import
import { SKILLS } from '../constants.jsx'; // Updated import

const SkillCard = ({ skill }) => (
    <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 border border-white/10">
        <h3 className="font-semibold text-text-primary">{skill.name}</h3>
    </div>
);

const About = () => {
  return (
    <Section id="about" className="bg-black/20">
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <div className="md:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-primary"></span>
          </h2>
          <p className="text-text-secondary mb-4 leading-relaxed">
            I am a passionate and detail-oriented UI/UX designer with a knack for solving complex problems through elegant and user-centric design. My design philosophy is rooted in empathy, ensuring that every decision is backed by user research and a deep understanding of human behavior.
          </p>
          <p className="text-text-secondary leading-relaxed">
            With a background in visual design and a love for technology, I bridge the gap between aesthetics and functionality. I thrive in collaborative environments and enjoy turning ideas into tangible, impactful products that people love to use.
          </p>
        </div>
        <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-text-primary">My Skills</h3>
            <div className="grid grid-cols-2 gap-4">
                {SKILLS.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                ))}
            </div>
        </div>
      </div>
    </Section>
  );
};

export default About;

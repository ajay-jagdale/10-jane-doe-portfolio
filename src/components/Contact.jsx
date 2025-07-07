import React from 'react';
import Section from './Section.jsx'; // Updated import
import { LinkedInIcon, DribbbleIcon, GitHubIcon } from './icons/SocialIcons.jsx'; // Updated import

const Contact = () => {
  const handleSubmit = (e) => { // Removed type definition
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert('Thank you for your message! I will get back to you soon.');
    const form = e.currentTarget;
    form.reset();
  };

  return (
    <Section id="contact" className="bg-black/20">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-text-primary relative">
        Get In Touch
        <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-primary"></span>
      </h2>
      <div className="max-w-xl mx-auto">
        <p className="text-center text-text-secondary mb-8">
          Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative ideas.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Name</label>
            <input type="text" id="name" placeholder="Your Name" required className="w-full bg-white/5 border border-white/20 text-text-primary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition" />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input type="email" id="email" placeholder="Your Email" required className="w-full bg-white/5 border border-white/20 text-text-primary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition" />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea id="message" placeholder="Your Message" rows={5} required className="w-full bg-white/5 border border-white/20 text-text-primary p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition"></textarea>
          </div>
          <div className="text-center">
             <button
                type="submit"
                className="bg-primary hover:bg-primary-focus text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 text-lg shadow-lg shadow-primary/30 hover:shadow-primary/50"
              >
              Send Message
            </button>
          </div>
        </form>
        <div className="flex justify-center space-x-6 mt-12">
            <a href="#" className="text-text-secondary hover:text-primary transition-colors transform hover:scale-110"><LinkedInIcon /></a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors transform hover:scale-110"><DribbbleIcon /></a>
            <a href="#" className="text-text-secondary hover:text-primary transition-colors transform hover:scale-110"><GitHubIcon /></a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;

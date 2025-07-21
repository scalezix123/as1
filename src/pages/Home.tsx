import React from 'react';
import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <div>
      <SEOHead
        title="Home"
        description="Transform your career with technology education at Scalezix Academy. Learn programming, AI, machine learning, and more from industry experts."
        keywords="technology education, programming courses, AI training, machine learning, web development, online courses"
      />
      <Hero />
      <About />
      <Courses />
      <WhyChooseUs />
      <Testimonials />
      <Blog />
    </div>
  );
};

export default Home;
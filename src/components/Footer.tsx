import React from 'react';
import { Brain, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Courses', href: '/courses' },
    { name: 'Contact', href: '/contact' },
    { name: 'Internships', href: '/internships' },
    { name: 'Workshop', href: '/workshop' },
  ];

  const aboutLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Mission', href: '/about' },
    { name: 'Our Team', href: '/about' },
    { name: 'Our Values', href: '/about' },
    { name: 'Achievements', href: '/about' }
  ];

  const admissionLinks = [
    { name: 'Admissions', href: '/admissions' },
    { name: 'Application Process', href: '/admissions' },
    { name: 'Requirements', href: '/admissions' },
    { name: 'Scholarships', href: '/admissions' },
    { name: 'Apply Now', href: '/admissions' }
  ];

  const studentLinks = [
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Success Stories', href: '/testimonials' },
    { name: 'Alumni Network', href: '/testimonials' },
    { name: 'Student Reviews', href: '/testimonials' }
  ];

  const courses = [
    { name: 'AI Fundamentals', href: '/courses' },
    { name: 'Machine Learning', href: '/courses' },
    { name: 'Deep Learning', href: '/courses' },
    { name: 'Natural Language Processing', href: '/courses' },
    { name: 'Computer Vision', href: '/courses' },
    { name: 'AI Ethics', href: '/courses' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/contact' },
    { name: 'Terms of Service', href: '/contact' },
    { name: 'Cookie Policy', href: '/contact' },
    { name: 'Refund Policy', href: '/contact' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '/contact', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: 'https://x.com/scalezixacademy', name: 'X' },
    { icon: <Linkedin className="h-5 w-5" />, href: '/contact', name: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '/contact', name: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: '/contact', name: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <span className="text-2xl font-bold">Scalezix Academy</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering the next generation of AI professionals through comprehensive, hands-on education. 
              Join hundreds of students who have transformed their careers with our expert-led AI courses.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">San Francisco, CA 94105</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">info@scalezixacademy.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              {aboutLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Admissions Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Admissions</h3>
            <ul className="space-y-2">
              {admissionLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Success Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Student Success</h3>
            <ul className="space-y-2">
              {studentLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <a
                    href={course.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated with AI Trends</h3>
              <p className="text-gray-300">
                Subscribe to our newsletter for the latest AI course updates, industry insights, and career tips.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Social Links */}
            <div className="flex space-x-6 justify-center md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm text-center">
              © 2025 Scalezix Academy. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              {legal.map((item, index) => (
                <span key={item.name} className="flex items-center">
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                  {index < legal.length - 1 && (
                    <span className="text-gray-600 mx-2">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
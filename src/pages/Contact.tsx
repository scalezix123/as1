import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Users, Award } from 'lucide-react';
import EnhancedContactForm from '../components/EnhancedContactForm';
import SEOHead from '../components/SEOHead';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "academy@scalezix.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+91 82000 10241",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "San Francisco, CA 94105",
      description: "Come say hello at our office"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      details: "Mon-Fri: 8am-5pm PST",
      description: "Weekend support available"
    }
  ];

  const departments = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Admissions",
      description: "Questions about enrollment, requirements, and application process",
      email: "academy@scalezix.com"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Academic Support",
      description: "Course content, technical support, and learning assistance",
      email: "academy@scalezix.com"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-purple-600" />,
      title: "General Inquiries",
      description: "General questions, partnerships, and media inquiries",
      email: "academy@scalezix.com"
    }
  ];

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer: "You can enroll by visiting our Courses page, selecting your desired course, and clicking 'Enroll Now'. You'll be guided through the application process."
    },
    {
      question: "What are the technical requirements?",
      answer: "You'll need a computer with internet connection, basic programming knowledge (Python preferred), and access to development tools which we'll help you set up."
    },
    {
      question: "Do you offer financial aid?",
      answer: "Yes, we offer various scholarship programs including merit-based, diversity, and career transition scholarships. Visit our Admissions page for more details."
    },
    {
      question: "What kind of support do students receive?",
      answer: "Students receive 24/7 technical support, mentorship from industry experts, career guidance, and access to our learning community."
    }
  ];

  return (
    <div className="pt-16">
      <SEOHead
        title="Contact Us"
        description="Get in touch with Scalezix Academy for corporate training solutions and educational partnerships. We offer customized AI programs for businesses and institutions."
        keywords="contact scalezix academy, corporate training, educational partnerships, AI programs, business training"
      />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to transform your organization with AI education? Contact us for corporate training solutions and educational partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{info.details}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Departments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the inquiry type that best matches your needs. We'll connect you with the right specialist.
            </p>
          </div>
          
          <EnhancedContactForm />
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Specialized Teams
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get connected with the right department for your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    {dept.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{dept.title}</h3>
                  <p className="text-gray-600 mb-3">{dept.description}</p>
                  <a
                    href={`mailto:${dept.email}`}
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {dept.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions about our AI courses and programs
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Campus
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of San Francisco's tech district
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Scalezix Academy Campus</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">123 Tech Street, San Francisco, CA 94105</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">Monday - Friday: 8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-gray-600 mb-4">
                    Our modern campus features state-of-the-art AI labs, collaborative learning spaces, 
                    and all the resources you need for hands-on AI education.
                  </p>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                    Schedule a Visit
                  </button>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive Map</p>
                  <p className="text-sm text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
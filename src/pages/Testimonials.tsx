import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Play, Award, Briefcase, GraduationCap } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Career Change', 'Recent Graduates', 'Working Professionals', 'Entrepreneurs'];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "AI Engineer at Google",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Scalezix Academy transformed my career completely. The hands-on approach and expert instructors helped me land my dream job at Google. The AI courses are incredibly comprehensive and practical.",
      rating: 5,
      course: "Deep Learning Specialization",
      category: "Career Change",
      beforeRole: "Marketing Manager",
      salaryIncrease: "180%",
      videoUrl: "/testimonials"
    },
    {
      name: "Michael Chen",
      role: "ML Research Scientist at Microsoft",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The quality of education at Scalezix is outstanding. I went from knowing nothing about AI to becoming a research scientist. The projects and mentorship made all the difference.",
      rating: 5,
      course: "Machine Learning Mastery",
      category: "Recent Graduates",
      beforeRole: "Computer Science Graduate",
      salaryIncrease: "150%",
      videoUrl: "/testimonials"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Tesla",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The practical approach to learning AI at Scalezix is unmatched. Working on real-world projects gave me the confidence to apply for positions at top tech companies.",
      rating: 5,
      course: "Computer Vision Fundamentals",
      category: "Working Professionals",
      beforeRole: "Software Developer",
      salaryIncrease: "120%",
      videoUrl: "/testimonials"
    },
    {
      name: "David Kim",
      role: "AI Product Manager at Amazon",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Scalezix Academy doesn't just teach you AI concepts - they teach you how to think like an AI professional. The career support and networking opportunities are incredible.",
      rating: 5,
      course: "AI Fundamentals",
      category: "Career Change",
      beforeRole: "Business Analyst",
      salaryIncrease: "200%",
      videoUrl: "/testimonials"
    },
    {
      name: "Lisa Thompson",
      role: "Founder, AI Startup",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The entrepreneurial mindset and technical skills I gained at Scalezix helped me launch my own AI company. The instructors are not just teachers, they're mentors.",
      rating: 5,
      course: "AI Ethics & Business Applications",
      category: "Entrepreneurs",
      beforeRole: "Consultant",
      salaryIncrease: "300%",
      videoUrl: "/testimonials"
    },
    {
      name: "James Wilson",
      role: "Senior ML Engineer at Netflix",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The depth of knowledge and practical experience I gained through Scalezix's programs exceeded my expectations. The community support continues even after graduation.",
      rating: 5,
      course: "Advanced Deep Learning",
      category: "Working Professionals",
      beforeRole: "Backend Developer",
      salaryIncrease: "140%",
      videoUrl: "/testimonials"
    }
  ];

  const filteredTestimonials = selectedCategory === 'All' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const successMetrics = [
    { number: "100+", label: "Students Trained", description: "Across all our programs" },
    { number: "10+", label: "Courses Available", description: "Comprehensive AI curriculum" },
    { number: "4.8/5", label: "Average Rating", description: "Based on course evaluations" },
    { number: "90%", label: "Completion Rate", description: "Student success rate" }
  ];

  const companyLogos = [
    "Google", "Microsoft", "Amazon", "Tesla", "Netflix", "Apple", "Meta", "Uber"
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Student Success Stories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of successful AI professionals who transformed their careers with Scalezix Academy
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentTestimonial(0);
                }}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {filteredTestimonials.length > 0 && (
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <img
                      src={filteredTestimonials[currentTestimonial].image}
                      alt={filteredTestimonials[currentTestimonial].name}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto lg:mx-0 mb-4"
                    />
                    <div className="mb-4">
                      <div className="font-bold text-gray-900 text-xl mb-1">
                        {filteredTestimonials[currentTestimonial].name}
                      </div>
                      <div className="text-blue-600 font-medium mb-1">
                        {filteredTestimonials[currentTestimonial].role}
                      </div>
                      <div className="text-sm text-gray-500 mb-2">
                        Previously: {filteredTestimonials[currentTestimonial].beforeRole}
                      </div>
                      <div className="text-sm font-medium text-green-600">
                        {filteredTestimonials[currentTestimonial].salaryIncrease} salary increase
                      </div>
                    </div>
                    <div className="flex justify-center lg:justify-start mb-4">
                      {renderStars(filteredTestimonials[currentTestimonial].rating)}
                    </div>
                    <button className="flex items-center justify-center lg:justify-start text-blue-600 hover:text-blue-700 font-medium">
                      <Play className="h-4 w-4 mr-2" />
                      View Success Story
                    </button>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <Quote className="h-8 w-8 text-blue-600 mb-4" />
                    <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                      "{filteredTestimonials[currentTestimonial].content}"
                    </blockquote>
                    <div className="bg-white rounded-lg p-4 inline-block">
                      <div className="text-sm text-gray-500 mb-1">Completed Course:</div>
                      <div className="font-semibold text-gray-900">
                        {filteredTestimonials[currentTestimonial].course}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                disabled={filteredTestimonials.length <= 1}
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                disabled={filteredTestimonials.length <= 1}
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real students who transformed their careers through AI education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {metric.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Companies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Where Our Alumni Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates are making an impact at leading technology companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {companyLogos.map((company, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 h-16 flex items-center justify-center">
                  <span className="text-gray-600 font-semibold">{company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Transformation Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Career Transformation Highlights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our students successfully transitioned into AI careers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="h-8 w-8 text-blue-600" />,
                title: "Career Changers",
                description: "Many career changers successfully transitioned to AI roles",
                examples: ["Marketing → AI Product Manager", "Finance → Data Scientist", "Teaching → ML Engineer"]
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-green-600" />,
                title: "Recent Graduates",
                description: "Recent graduates successfully landed their first AI jobs",
                examples: ["CS Graduate → AI Researcher", "Math Graduate → ML Engineer", "Physics Graduate → Data Scientist"]
              },
              {
                icon: <Award className="h-8 w-8 text-purple-600" />,
                title: "Skill Enhancement",
                description: "Working professionals enhanced their skills and advanced their careers",
                examples: ["Developer → Senior ML Engineer", "Analyst → AI Consultant", "Manager → AI Director"]
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-4">
                  {story.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {story.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {story.description}
                </p>
                <div className="space-y-2">
                  {story.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="text-sm text-gray-500 flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of professionals who have transformed their careers with technology education
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Explore Courses
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
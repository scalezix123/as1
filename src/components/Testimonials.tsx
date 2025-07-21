import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "AI Engineer at Google",
      image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Scalezix Academy transformed my career completely. The hands-on approach and expert instructors helped me land my dream job at Google. The AI courses are incredibly comprehensive and practical.",
      rating: 5,
      course: "Deep Learning Specialization"
    },
    {
      name: "Michael Chen",
      role: "ML Research Scientist at Microsoft",
      image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The quality of education at Scalezix is outstanding. I went from knowing nothing about AI to becoming a research scientist. The projects and mentorship made all the difference.",
      rating: 5,
      course: "Machine Learning Mastery"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Tesla",
      image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "The practical approach to learning AI at Scalezix is unmatched. Working on real-world projects gave me the confidence to apply for positions at top tech companies.",
      rating: 5,
      course: "Computer Vision Fundamentals"
    },
    {
      name: "David Kim",
      role: "AI Product Manager at Amazon",
      image: "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Scalezix Academy doesn't just teach you AI concepts - they teach you how to think like an AI professional. The career support and networking opportunities are incredible.",
      rating: 5,
      course: "AI Fundamentals"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful AI professionals who transformed their careers with Scalezix Academy
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              
              <div className="flex-1 text-center lg:text-left">
                <Quote className="h-8 w-8 text-blue-600 mb-4 mx-auto lg:mx-0" />
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="mb-4">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    Completed: {testimonials[currentTestimonial].course}
                  </div>
                </div>
                
                <div className="flex justify-center lg:justify-start">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
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

        {/* Success Stories Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-gray-600">Students Trained</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Completion Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
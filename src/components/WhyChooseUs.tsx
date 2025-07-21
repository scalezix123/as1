import React from 'react';
import { GraduationCap, Users, Briefcase, Award, Code, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Expert AI Trainers",
      description: "Learn from industry professionals with years of experience in AI development and research",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Code className="h-8 w-8 text-purple-600" />,
      title: "Hands-on AI Projects",
      description: "Build real-world AI applications and develop a portfolio that showcases your skills",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: "Real-World AI Applications",
      description: "Work on projects that solve actual industry problems and gain practical experience",
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Industry-Recognized Certifications",
      description: "Earn certificates that are valued by top tech companies and enhance your career prospects",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <Award className="h-8 w-8 text-orange-600" />,
      title: "Career Guidance",
      description: "Get expert guidance on AI career paths and skill development strategies",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Collaborative Learning Community",
      description: "Join a vibrant community of AI enthusiasts, mentors, and industry professionals",
      color: "bg-teal-50 border-teal-200"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Scalezix Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to succeed in the AI industry, from expert instruction to career support
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`${benefit.color} rounded-xl p-6 border-2 hover:shadow-lg transition-shadow duration-200`}>
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Course Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Career Advancement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Learning Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
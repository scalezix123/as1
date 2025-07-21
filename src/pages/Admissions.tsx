import React, { useState } from 'react';
import { CheckCircle, Clock, Users, Award, FileText, Calendar, Mail, Phone, User, GraduationCap } from 'lucide-react';

const Admissions = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    course: '',
    motivation: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const admissionSteps = [
    {
      step: 1,
      title: "Application Submission",
      description: "Complete our online application form with your background and goals",
      icon: <FileText className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Initial Assessment",
      description: "Take a brief technical assessment to evaluate your current skill level",
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Interview Process",
      description: "Participate in a one-on-one interview with our admissions team",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Enrollment Confirmation",
      description: "Receive your acceptance and complete the enrollment process",
      icon: <Award className="h-6 w-6" />
    }
  ];

  const requirements = [
    "Basic understanding of mathematics and statistics",
    "Familiarity with at least one programming language (Python preferred)",
    "Bachelor's degree or equivalent work experience",
    "Strong motivation to learn AI and machine learning",
    "Access to a computer with internet connection",
    "Commitment to complete the course duration"
  ];

  const scholarships = [
    {
      title: "Merit-Based Scholarship",
      description: "Up to 50% tuition reduction for exceptional candidates",
      eligibility: "High academic performance and technical skills"
    },
    {
      title: "Diversity Scholarship",
      description: "Supporting underrepresented groups in AI",
      eligibility: "Women, minorities, and first-generation college students"
    },
    {
      title: "Career Transition Scholarship",
      description: "For professionals changing careers to AI",
      eligibility: "Minimum 3 years work experience in any field"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Join Scalezix Academy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start your journey to becoming a technology professional. Apply now and transform your career with our expert-led programs.
            </p>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Admission Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined admission process is designed to identify motivated learners ready to excel in AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors duration-200">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 mx-auto">
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-blue-600 mb-2">Step {step.step}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Admission Requirements
              </h2>
              <p className="text-gray-600 mb-8">
                We welcome students from diverse backgrounds who are passionate about AI and committed to learning.
              </p>
              <ul className="space-y-4">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Application Deadline</div>
                    <div className="text-gray-600">Rolling admissions - Apply anytime</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Processing Time</div>
                    <div className="text-gray-600">2-3 weeks from application</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-6 w-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold text-gray-900">Course Duration</div>
                    <div className="text-gray-600">6-16 weeks depending on program</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apply Now
            </h2>
            <p className="text-xl text-gray-600">
              Take the first step towards your AI career. Complete the application form below.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-2">
                  Highest Education Level *
                </label>
                <select
                  id="education"
                  name="education"
                  required
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select education level</option>
                  <option value="high-school">High School</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                  Programming Experience
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="none">No experience</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="advanced">Advanced (3+ years)</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Course *
              </label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a course</option>
                <option value="ai-fundamentals">Introduction to AI</option>
                <option value="machine-learning">Machine Learning Mastery</option>
                <option value="deep-learning">Deep Learning</option>
                <option value="nlp">Natural Language Processing</option>
                <option value="computer-vision">Computer Vision</option>
                <option value="ai-ethics">AI Ethics</option>
              </select>
            </div>

            <div className="mb-8">
              <label htmlFor="motivation" className="block text-sm font-medium text-gray-700 mb-2">
                Why do you want to learn AI? *
              </label>
              <textarea
                id="motivation"
                name="motivation"
                required
                rows={4}
                value={formData.motivation}
                onChange={handleInputChange}
                placeholder="Tell us about your motivation, goals, and what you hope to achieve..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Scholarship Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in making AI education accessible. Explore our scholarship programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {scholarship.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {scholarship.description}
                </p>
                <div className="text-sm text-gray-500">
                  <strong>Eligibility:</strong> {scholarship.eligibility}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;
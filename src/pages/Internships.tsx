import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Star, ArrowRight, Briefcase, Award, CheckCircle, Filter, Search } from 'lucide-react';

const Internships = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const durations = ['All', '1-3 months', '3-6 months', '6+ months'];
  const types = ['All', 'Remote', 'On-site', 'Hybrid'];

  const internships = [
    {
      id: 1,
      title: 'AI Research Intern',
      company: 'Scalezix Labs',
      location: 'Bangalore, India',
      type: 'Hybrid',
      duration: '3-6 months',
      stipend: '₹25,000/month',
      description: 'Work on cutting-edge AI research projects including machine learning algorithms and neural network optimization.',
      requirements: ['Python programming', 'Machine Learning basics', 'Research mindset', 'Strong analytical skills'],
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Research', 'ML Algorithms'],
      posted: '2 days ago',
      applications: 45,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 2,
      title: 'Machine Learning Engineering Intern',
      company: 'TechCorp AI',
      location: 'Mumbai, India',
      type: 'On-site',
      duration: '6+ months',
      stipend: '₹30,000/month',
      description: 'Build and deploy machine learning models in production environments. Work with senior ML engineers on real-world projects.',
      requirements: ['Python/R programming', 'ML frameworks', 'Database knowledge', 'Problem-solving skills'],
      skills: ['Python', 'Scikit-learn', 'SQL', 'AWS', 'Docker'],
      posted: '1 week ago',
      applications: 78,
      rating: 4.9,
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'Analytics Pro',
      location: 'Delhi, India',
      type: 'Remote',
      duration: '3-6 months',
      stipend: '₹20,000/month',
      description: 'Analyze large datasets, create visualizations, and build predictive models for business insights.',
      requirements: ['Statistics knowledge', 'Python/R', 'Data visualization', 'Business acumen'],
      skills: ['Python', 'Pandas', 'Matplotlib', 'Tableau', 'Statistics'],
      posted: '3 days ago',
      applications: 62,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Computer Vision Intern',
      company: 'VisionTech Solutions',
      location: 'Hyderabad, India',
      type: 'Hybrid',
      duration: '1-3 months',
      stipend: '₹22,000/month',
      description: 'Develop computer vision applications for object detection, image classification, and video analysis.',
      requirements: ['OpenCV knowledge', 'Deep learning basics', 'Image processing', 'Python programming'],
      skills: ['OpenCV', 'CNN', 'Image Processing', 'Python', 'Deep Learning'],
      posted: '5 days ago',
      applications: 34,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'NLP Research Intern',
      company: 'Language AI Inc',
      location: 'Pune, India',
      type: 'Remote',
      duration: '3-6 months',
      stipend: '₹28,000/month',
      description: 'Research and develop natural language processing solutions including chatbots and text analysis systems.',
      requirements: ['NLP fundamentals', 'Python programming', 'Linguistics knowledge', 'Research experience'],
      skills: ['NLP', 'NLTK', 'spaCy', 'Transformers', 'Python'],
      posted: '1 day ago',
      applications: 29,
      rating: 4.8,
      image: 'https://images.pexels.com/photos/8386439/pexels-photo-8386439.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'AI Product Development Intern',
      company: 'InnovateTech',
      location: 'Chennai, India',
      type: 'On-site',
      duration: '6+ months',
      stipend: '₹26,000/month',
      description: 'Work with product teams to integrate AI capabilities into consumer applications and enterprise solutions.',
      requirements: ['Product development', 'AI/ML knowledge', 'User experience', 'Communication skills'],
      skills: ['Product Management', 'AI/ML', 'UX Design', 'Agile', 'Communication'],
      posted: '4 days ago',
      applications: 51,
      rating: 4.7,
      image: 'https://images.pexels.com/photos/8386433/pexels-photo-8386433.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const filteredInternships = internships.filter(internship => {
    const matchesSearch = internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         internship.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDuration = selectedDuration === 'All' || internship.duration === selectedDuration;
    const matchesType = selectedType === 'All' || internship.type === selectedType;
    return matchesSearch && matchesDuration && matchesType;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Online': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const benefits = [
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
      title: "Real-World Experience",
      description: "Work on actual AI projects with industry professionals"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Mentorship Program",
      description: "Get guidance from experienced AI engineers and researchers"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Networking Opportunities",
      description: "Connect with AI professionals and build your network"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-orange-600" />,
      title: "Completion Certificate",
      description: "Receive industry-recognized internship completion certificate"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Technology Internship Opportunities
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain hands-on experience in technology through our curated internship programs with top companies
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Internship Program?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our internship program is designed to bridge the gap between academic learning and industry requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-6 mb-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search internships..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {durations.map((duration) => (
                    <option key={duration} value={duration}>{duration}</option>
                  ))}
                </select>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {types.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Internships Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInternships.map((internship) => (
              <div key={internship.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <img
                  src={internship.image}
                  alt={internship.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(internship.type)}`}>
                      {internship.type}
                    </span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium text-gray-700">{internship.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{internship.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{internship.company}</p>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="mr-4">{internship.location}</span>
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{internship.duration}</span>
                  </div>

                  <p className="text-gray-600 mb-4 line-clamp-2">{internship.description}</p>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {internship.skills.slice(0, 3).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                      {internship.skills.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{internship.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-bold text-green-600">{internship.stipend}</div>
                    <div className="text-sm text-gray-500">{internship.applications} applications</div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>

                  <div className="mt-3 text-xs text-gray-500 text-center">
                    Posted {internship.posted}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredInternships.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No internships found matching your criteria</div>
            </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to apply for AI internships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Browse Opportunities",
                description: "Explore available internships and find the perfect match for your skills"
              },
              {
                step: 2,
                title: "Prepare Application",
                description: "Update your resume and prepare a compelling cover letter"
              },
              {
                step: 3,
                title: "Submit Application",
                description: "Apply through our platform with all required documents"
              },
              {
                step: 4,
                title: "Interview Process",
                description: "Participate in interviews and assessment rounds"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your AI Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our internship program and gain valuable experience in the AI industry
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Browse Internships
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internships;
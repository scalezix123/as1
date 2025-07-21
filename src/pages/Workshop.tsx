import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Star, ArrowRight, Play, Award, CheckCircle, Filter, Search } from 'lucide-react';

const Workshop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFormat, setSelectedFormat] = useState('All');

  const categories = ['All', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Ethics', 'Data Science'];
  const formats = ['All', 'Online', 'Offline', 'Hybrid'];

  const workshops = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      category: 'Machine Learning',
      format: 'Online',
      duration: '2 days',
      date: 'March 25-26, 2024',
      time: '10:00 AM - 4:00 PM IST',
      instructor: 'Dr. Sarah Mitchell',
      price: 2999,
      originalPrice: 4999,
      participants: 45,
      maxParticipants: 50,
      rating: 4.8,
      level: 'Beginner',
      description: 'Learn the fundamentals of machine learning including supervised and unsupervised learning algorithms.',
      highlights: ['Hands-on coding sessions', 'Real-world projects', 'Certificate of completion', 'Lifetime access to materials'],
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Linear Regression', 'Classification', 'Clustering', 'Model Evaluation']
    },
    {
      id: 2,
      title: 'Deep Learning with Neural Networks',
      category: 'Deep Learning',
      format: 'Online',
      duration: '3 days',
      date: 'April 5-7, 2024',
      time: '9:00 AM - 5:00 PM IST',
      instructor: 'Michael Chen',
      price: 4999,
      originalPrice: 7999,
      participants: 32,
      maxParticipants: 40,
      rating: 4.9,
      level: 'Intermediate',
      description: 'Master deep learning concepts and build neural networks from scratch using TensorFlow and PyTorch.',
      highlights: ['GPU-enabled coding environment', 'Industry case studies', 'Project portfolio', 'Job placement assistance'],
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Neural Networks', 'CNNs', 'RNNs', 'Transfer Learning']
    },
    {
      id: 3,
      title: 'Natural Language Processing Bootcamp',
      category: 'NLP',
      format: 'Online',
      duration: '2 days',
      date: 'April 12-13, 2024',
      time: '11:00 AM - 5:00 PM IST',
      instructor: 'Dr. Emily Rodriguez',
      price: 3499,
      originalPrice: 5999,
      participants: 28,
      maxParticipants: 35,
      rating: 4.7,
      level: 'Intermediate',
      description: 'Explore NLP techniques including text processing, sentiment analysis, and language models.',
      highlights: ['BERT and GPT implementations', 'Chatbot development', 'Industry mentorship', 'Career guidance'],
      image: 'https://images.pexels.com/photos/8386439/pexels-photo-8386439.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Text Preprocessing', 'Sentiment Analysis', 'Named Entity Recognition', 'Language Models']
    },
    {
      id: 4,
      title: 'Computer Vision Masterclass',
      category: 'Computer Vision',
      format: 'Online',
      duration: '2 days',
      date: 'April 20-21, 2024',
      time: '10:00 AM - 6:00 PM IST',
      instructor: 'Dr. Mark Johnson',
      price: 3999,
      originalPrice: 6999,
      participants: 18,
      maxParticipants: 25,
      rating: 4.8,
      level: 'Advanced',
      description: 'Learn computer vision techniques for image processing, object detection, and facial recognition.',
      highlights: ['OpenCV mastery', 'Real-time applications', 'Hardware integration', 'Industry projects'],
      image: 'https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Image Processing', 'Object Detection', 'Facial Recognition', 'Video Analysis']
    },
    {
      id: 5,
      title: 'AI Ethics and Responsible AI',
      category: 'AI Ethics',
      format: 'Online',
      duration: '1 day',
      date: 'May 3, 2024',
      time: '2:00 PM - 8:00 PM IST',
      instructor: 'Dr. James Wilson',
      price: 1999,
      originalPrice: 3499,
      participants: 52,
      maxParticipants: 60,
      rating: 4.6,
      level: 'Beginner',
      description: 'Understand the ethical implications of AI and learn to build responsible AI systems.',
      highlights: ['Case study analysis', 'Policy discussions', 'Framework development', 'Expert panel'],
      image: 'https://images.pexels.com/photos/8386433/pexels-photo-8386433.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['AI Bias', 'Fairness', 'Transparency', 'Accountability']
    },
    {
      id: 6,
      title: 'Data Science for AI Applications',
      category: 'Data Science',
      format: 'Online',
      duration: '3 days',
      date: 'May 10-12, 2024',
      time: '9:30 AM - 4:30 PM IST',
      instructor: 'Lisa Thompson',
      price: 4499,
      originalPrice: 7499,
      participants: 35,
      maxParticipants: 45,
      rating: 4.9,
      level: 'Intermediate',
      description: 'Master data science techniques specifically for AI and machine learning applications.',
      highlights: ['Big data processing', 'Feature engineering', 'Model deployment', 'MLOps practices'],
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400',
      topics: ['Data Preprocessing', 'Feature Engineering', 'Model Selection', 'Deployment']
    }
  ];

  const filteredWorkshops = workshops.filter(workshop => {
    const matchesSearch = workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         workshop.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || workshop.category === selectedCategory;
    const matchesFormat = selectedFormat === 'All' || workshop.format === selectedFormat;
    return matchesSearch && matchesCategory && matchesFormat;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'Online': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const features = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of AI experience"
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      title: "Small Batch Size",
      description: "Limited participants ensure personalized attention and interaction"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-purple-600" />,
      title: "Hands-on Learning",
      description: "Practical sessions with real-world projects and case studies"
    },
    {
      icon: <Play className="h-8 w-8 text-orange-600" />,
      title: "Recorded Sessions",
      description: "Access to workshop recordings for future reference and revision"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Technology Workshops & Bootcamps
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Intensive hands-on workshops designed to accelerate your technology learning journey with expert guidance
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Workshops?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our workshops are designed to provide intensive, practical learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
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
                  placeholder="Search workshops..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <select
                  value={selectedFormat}
                  onChange={(e) => setSelectedFormat(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {formats.map((format) => (
                    <option key={format} value={format}>{format}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Workshops Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWorkshops.map((workshop) => (
              <div key={workshop.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
                <div className="relative">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(workshop.level)}`}>
                      {workshop.level}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getFormatColor(workshop.format)}`}>
                      {workshop.format}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center bg-white/90 backdrop-blur-sm px-2 py-1 rounded">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{workshop.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-blue-600">{workshop.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{workshop.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{workshop.date}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{workshop.time}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{workshop.participants}/{workshop.maxParticipants} participants</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-2">Topics covered:</div>
                    <div className="flex flex-wrap gap-1">
                      {workshop.topics.slice(0, 2).map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {topic}
                        </span>
                      ))}
                      {workshop.topics.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{workshop.topics.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">₹{workshop.price}</span>
                      <span className="text-lg text-gray-500 line-through">₹{workshop.originalPrice}</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      by {workshop.instructor}
                    </div>
                  </div>
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                    Register Now
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredWorkshops.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No workshops found matching your criteria</div>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Upcoming Workshop Schedule
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar for these exciting AI learning opportunities
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workshops.slice(0, 3).map((workshop, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-blue-600">{workshop.category}</span>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${getFormatColor(workshop.format)}`}>
                      {workshop.format}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{workshop.title}</h3>
                  <div className="text-sm text-gray-600 mb-2">
                    <Calendar className="h-4 w-4 inline mr-1" />
                    {workshop.date}
                  </div>
                  <div className="text-sm text-gray-600 mb-3">
                    <Clock className="h-4 w-4 inline mr-1" />
                    {workshop.time}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-blue-600">₹{workshop.price}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Accelerate Your AI Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our intensive workshops and gain practical AI skills in just a few days
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              Browse Workshops
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

export default Workshop;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import PaymentModal from '../components/PaymentModal';
import toast from 'react-hot-toast';
import { Search, Clock, Users, Star, ArrowRight, Filter, BookOpen, Award, Play } from 'lucide-react';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [paymentModal, setPaymentModal] = useState<{
    isOpen: boolean;
    courseTitle: string;
    coursePrice: number;
  }>({
    isOpen: false,
    courseTitle: '',
    coursePrice: 0
  });

  const categories = ['All', 'AI Fundamentals', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'AI Ethics'];
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const courses = [
    {
      id: 1,
      title: 'Introduction to Artificial Intelligence',
      category: 'AI Fundamentals',
      description: 'Learn the basics of AI, its history, and fundamental concepts that power modern intelligent systems.',
      price: 5000,
      originalPrice: 7000,
      duration: '8 weeks',
      students: '100+',
      rating: 4.9,
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Dr. Sarah Mitchell',
      modules: 12,
      projects: 3,
      certificate: true,
      featured: false
    },
    {
      id: 2,
      title: 'Complete Machine Learning Mastery with Python',
      category: 'Machine Learning',
      description: 'Master Machine Learning from Basics to Advance with Real-World Projects using Python.',
      price: 5000,
      originalPrice: 7000,
      duration: '8 weeks',
      students: '100+',
      rating: 4.8,
      level: 'Beginner to Advanced',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Michael Chen',
      modules: 16,
      projects: 5,
      certificate: true,
      featured: true
    },
    {
      id: 3,
      title: 'Deep Learning with Neural Networks',
      category: 'Deep Learning',
      description: 'Dive deep into neural networks, backpropagation, and modern deep learning architectures.',
      price: 5000,
      originalPrice: 7000,
      duration: '2 months + 1 Month Project',
      students: '100+',
      rating: 4.9,
      level: 'Advanced',
      image: 'https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Dr. Emily Rodriguez',
      modules: 20,
      projects: 7,
      certificate: true,
      featured: false
    },
    {
      id: 4,
      title: 'Natural Language Processing',
      category: 'NLP',
      description: 'Learn how to process and analyze human language using advanced NLP techniques and transformers.',
      price: 5000,
      originalPrice: 7000,
      duration: '2 months + 1 Month Project',
      students: '100+',
      rating: 4.7,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/8386439/pexels-photo-8386439.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Lisa Thompson',
      modules: 18,
      projects: 6,
      certificate: true,
      featured: false
    },
    {
      id: 5,
      title: 'Computer Vision Fundamentals',
      category: 'Computer Vision',
      description: 'Understand how machines see and interpret visual information using OpenCV and deep learning.',
      price: 5000,
      originalPrice: 7000,
      duration: '2 months + 1 Month Project',
      students: '100+',
      rating: 4.8,
      level: 'Intermediate',
      image: 'https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Dr. Mark Johnson',
      modules: 14,
      projects: 4,
      certificate: true,
      featured: false
    },
    {
      id: 6,
      title: 'AI Ethics and Responsible AI',
      category: 'AI Ethics',
      description: 'Explore the ethical implications of AI and learn to build responsible AI systems.',
      price: 5000,
      originalPrice: 7000,
      duration: '2 months + 1 Month Project',
      students: '100+',
      rating: 4.6,
      level: 'Beginner',
      image: 'https://images.pexels.com/photos/8386433/pexels-photo-8386433.jpeg?auto=compress&cs=tinysrgb&w=400',
      instructor: 'Dr. James Wilson',
      modules: 10,
      projects: 2,
      certificate: true,
      featured: false
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleEnrollClick = (courseTitle: string, coursePrice: number) => {
    setPaymentModal({
      isOpen: true,
      courseTitle,
      coursePrice
    });
  };

  const handlePaymentSuccess = () => {
    toast.success('Successfully enrolled! Check your email for course access.');
  };

  return (
    <div className="pt-16">
      <SEOHead
        title="AI Courses"
        description="Explore our comprehensive AI course catalog. Learn machine learning, deep learning, NLP, computer vision and more with expert instructors."
        keywords="AI courses, machine learning training, deep learning courses, NLP courses, computer vision training"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI Course Catalog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of AI courses designed to take you from beginner to expert
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
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
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden border border-gray-200">
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                      <Play className="h-4 w-4 text-blue-600" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-sm font-medium text-blue-600">{course.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {course.modules} modules
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="font-medium text-gray-700">{course.rating}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">{course.students} students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Certificate</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">₹{course.price}</span>
                      <span className="text-lg text-gray-500 line-through">₹{course.originalPrice}</span>
                    </div>
                    <Link 
                      to={`/course/${course.id}`}
                      className="group bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center mr-2"
                    >
                      View Details
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <button
                      onClick={() => handleEnrollClick(course.title, course.price)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                    >
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No courses found matching your criteria</div>
            </div>
          )}
        </div>
      </section>


      {/* Payment Modal */}
      <PaymentModal
        isOpen={paymentModal.isOpen}
        onClose={() => setPaymentModal({ ...paymentModal, isOpen: false })}
        courseTitle={paymentModal.courseTitle}
        coursePrice={paymentModal.coursePrice}
        onPaymentSuccess={handlePaymentSuccess}
      />
    </div>
  );
};

export default Courses;
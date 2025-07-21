import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Clock, Users, Star, Award, BookOpen, CheckCircle, Play, Calendar, User } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PaymentModal from '../components/PaymentModal';
import toast from 'react-hot-toast';

const CourseSingle = () => {
  const { courseId } = useParams();
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    courseTitle: '',
    coursePrice: 0
  });

  // Course data - in a real app, this would be fetched based on courseId
  const course = {
    id: 2,
    title: 'Complete Machine Learning Mastery with Python',
    subtitle: 'Master Machine Learning from Basics to Advance with Real-World Projects',
    category: 'Machine Learning',
    description: 'This comprehensive Machine Learning course is designed to take you from a complete beginner to an advanced practitioner. You\'ll learn the fundamental concepts, key algorithms, and practical applications of machine learning using Python. The course emphasizes hands-on learning through real-world datasets and projects to help you gain in-demand skills for a career in data science, AI, and analytics. By the end, you will be equipped to build, evaluate, and deploy machine learning models confidently.',
    price: 5000,
    originalPrice: 7000,
    duration: '8 weeks',
    students: '100+',
    rating: 4.8,
    level: 'Beginner to Advanced',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800',
    instructor: 'Harsh Singh',
    modules: 8,
    projects: 5,
    certificate: true
  };

  const learningOutcomes = [
    'Introduction to Machine Learning and its applications',
    'Supervised and Unsupervised Learning techniques',
    'Regression, Classification, and Clustering models',
    'Feature Engineering and Model Evaluation',
    'Real-world ML Projects using Python',
    'Use of popular libraries: scikit-learn, pandas, matplotlib, seaborn',
    'Deployment using tools like Streamlit and Flask',
    'Understanding bias-variance, overfitting, underfitting',
    'Handling real datasets: Titanic, Iris, Housing, etc.'
  ];

  const requirements = [
    'Basic knowledge of Python programming',
    'Familiarity with basic statistics and linear algebra',
    'Access to a laptop and internet',
    'Google Colab or Jupyter Notebook environment'
  ];

  const courseFeatures = [
    '8 Weeks of Instructor-Led Sessions',
    'Hands-on Project-Based Learning',
    'Weekly Assignments and Practice Problems',
    'Real-World Case Studies',
    'Access to Datasets and Code Templates',
    'Certificate of Completion',
    'Career guidance and project review support',
    'Live Q&A sessions and community forum access'
  ];

  const curriculum = [
    {
      week: 1,
      title: 'Introduction to Machine Learning & Python for ML',
      topics: [
        'What is Machine Learning? Types & Applications',
        'Setting up your ML Environment (Jupyter, Colab)',
        'Python libraries: pandas, numpy, matplotlib',
        'Exploring datasets and basic data operations'
      ]
    },
    {
      week: 2,
      title: 'Data Preprocessing and Exploratory Data Analysis (EDA)',
      topics: [
        'Handling missing values, encoding categorical data',
        'Data normalization & scaling',
        'Visualizing data with matplotlib and seaborn',
        'Correlation analysis & outlier detection'
      ]
    },
    {
      week: 3,
      title: 'Supervised Learning – Regression Models',
      topics: [
        'Linear Regression and Multiple Regression',
        'Model training, testing, and evaluation',
        'Metrics: MAE, MSE, RMSE, R²',
        'Real-world Regression project: House Price Prediction'
      ]
    },
    {
      week: 4,
      title: 'Supervised Learning – Classification Models',
      topics: [
        'Logistic Regression, K-Nearest Neighbors, Decision Trees',
        'Evaluation Metrics: Accuracy, Confusion Matrix, Precision, Recall, F1-Score',
        'Real-world Classification project: Titanic Survival Prediction'
      ]
    },
    {
      week: 5,
      title: 'Unsupervised Learning – Clustering Techniques',
      topics: [
        'K-Means Clustering, Hierarchical Clustering',
        'Silhouette Score, Elbow Method',
        'Dimensionality Reduction: PCA (Intro)',
        'Real-world Clustering project: Customer Segmentation'
      ]
    },
    {
      week: 6,
      title: 'Model Selection, Overfitting, and Cross-Validation',
      topics: [
        'Train/Test Split vs K-Fold Cross-Validation',
        'Bias vs Variance Tradeoff',
        'GridSearchCV and Hyperparameter Tuning',
        'Feature Engineering techniques'
      ]
    },
    {
      week: 7,
      title: 'Advanced Topics & Model Deployment',
      topics: [
        'Introduction to Ensemble Methods: Random Forest, XGBoost',
        'Saving models using Pickle and Joblib',
        'Deploying ML model using Streamlit (mini demo)',
        'Real-world project: Salary Prediction App'
      ]
    },
    {
      week: 8,
      title: 'Capstone Project & Review',
      topics: [
        'Full-cycle ML project (from preprocessing to deployment)',
        'Group/Individual presentations',
        'Peer and Instructor Feedback',
        'Final Q&A and Career Guidance',
        'Certificate Distribution'
      ]
    }
  ];

  const handleEnrollClick = () => {
    setPaymentModal({
      isOpen: true,
      courseTitle: course.title,
      coursePrice: course.price
    });
  };

  const handlePaymentSuccess = () => {
    toast.success('Successfully enrolled! Check your email for course access.');
  };

  return (
    <div className="pt-16">
      <SEOHead
        title={course.title}
        description={course.description}
        keywords="machine learning course, python machine learning, ML training, data science course"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-4">
                <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                  {course.category}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                {course.title}
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                {course.subtitle}
              </p>
              <div className="flex items-center space-x-6 mb-8">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span className="font-medium">{course.rating}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-500 mr-1" />
                  <span>{course.duration}</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-3xl font-bold text-gray-900">₹{course.price}</span>
                  <span className="text-xl text-gray-500 line-through">₹{course.originalPrice}</span>
                </div>
                <button
                  onClick={handleEnrollClick}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                >
                  Enroll Now
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                <button className="bg-white bg-opacity-90 p-4 rounded-full hover:bg-opacity-100 transition-all duration-200">
                  <Play className="h-8 w-8 text-blue-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Overview</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {course.description}
              </p>

              {/* What You'll Learn */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {learningOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{outcome}</span>
                  </div>
                ))}
              </div>

              {/* Requirements */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
              <div className="space-y-3 mb-12">
                {requirements.map((requirement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>

              {/* Course Features */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {courseFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <Award className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-3xl font-bold text-gray-900">₹{course.price}</span>
                    <span className="text-xl text-gray-500 line-through">₹{course.originalPrice}</span>
                  </div>
                  <p className="text-green-600 font-medium">Save ₹{course.originalPrice - course.price}</p>
                </div>

                <button
                  onClick={handleEnrollClick}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 mb-6"
                >
                  Enroll Now
                </button>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Students</span>
                    <span className="font-medium">{course.students}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Level</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Modules</span>
                    <span className="font-medium">{course.modules}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Projects</span>
                    <span className="font-medium">{course.projects}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Certificate</span>
                    <span className="font-medium text-green-600">Yes</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center mb-2">
                    <User className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="font-medium">Instructor</span>
                  </div>
                  <p className="text-gray-700">{course.instructor}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Course Curriculum (Week Wise)
          </h2>
          <div className="space-y-6">
            {curriculum.map((week, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold mr-4">
                      {week.week}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Week {week.week}</h3>
                      <p className="text-blue-600 font-medium">{week.title}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {week.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
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
            Ready to Master Machine Learning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our comprehensive 8-week program and become a Machine Learning expert
          </p>
          <button
            onClick={handleEnrollClick}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
          >
            Enroll Now - ₹{course.price}
          </button>
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

export default CourseSingle;
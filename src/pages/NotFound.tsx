import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import PageTransition from '../components/PageTransition';

const NotFound = () => {
  return (
    <PageTransition>
      <SEOHead
        title="Page Not Found"
        description="The page you're looking for doesn't exist. Return to Scalezix Academy homepage."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100 flex items-center justify-center px-4">
        <div className="max-w-lg w-full text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-blue-600 mb-4 animate-bounce">
              404
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Don't worry, even our AI couldn't predict this!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              to="/"
              className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              <Home className="h-5 w-5 mr-2" />
              Go Home
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Looking for something specific?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Link to="/courses" className="flex items-center text-blue-600 hover:text-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Browse AI Courses
              </Link>
              <Link to="/about" className="flex items-center text-blue-600 hover:text-blue-700">
                <Search className="h-4 w-4 mr-2" />
                About Us
              </Link>
              <Link to="/admissions" className="flex items-center text-blue-600 hover:text-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Admissions
              </Link>
              <Link to="/contact" className="flex items-center text-blue-600 hover:text-blue-700">
                <Search className="h-4 w-4 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
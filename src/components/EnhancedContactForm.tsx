import React, { useState } from 'react';
import { Send, Building, GraduationCap, User, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface FormData {
  contactType: 'corporate' | 'educational';
  // Common fields
  fullName: string;
  email: string;
  phone: string;
  message: string;
  
  // Corporate specific fields
  companyName?: string;
  industry?: string;
  businessSize?: string;
  jobTitle?: string;
  inquiryType?: string;
  
  // Educational specific fields
  institutionName?: string;
  institutionType?: string;
  department?: string;
  role?: string;
  programInterest?: string;
}

const EnhancedContactForm = () => {
  const [activeTab, setActiveTab] = useState<'corporate' | 'educational'>('corporate');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    contactType: 'corporate',
    fullName: '',
    email: '',
    phone: '',
    message: '',
    companyName: '',
    industry: '',
    businessSize: '',
    jobTitle: '',
    inquiryType: '',
    institutionName: '',
    institutionType: '',
    department: '',
    role: '',
    programInterest: ''
  });

  const industries = [
    'Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing', 
    'Retail', 'Consulting', 'Government', 'Non-profit', 'Other'
  ];

  const businessSizes = [
    'Startup (1-10 employees)', 
    'Small (11-50 employees)', 
    'Medium (51-200 employees)', 
    'Large (201-1000 employees)', 
    'Enterprise (1000+ employees)'
  ];

  const inquiryTypes = [
    'Training Programs', 'Custom Curriculum', 'Corporate Workshops', 
    'Certification Programs', 'Consulting Services', 'Partnership Opportunities'
  ];

  const institutionTypes = [
    'K-12 School', 'Community College', 'University', 'Technical Institute', 
    'Training Center', 'Government Institution', 'Research Organization'
  ];

  const programInterests = [
    'AI & Machine Learning', 'Data Science', 'Software Development', 
    'Cybersecurity', 'Cloud Computing', 'Digital Marketing', 'Project Management'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTabChange = (tab: 'corporate' | 'educational') => {
    setActiveTab(tab);
    setFormData(prev => ({
      ...prev,
      contactType: tab
    }));
  };

  const validateForm = (): boolean => {
    const requiredFields = ['fullName', 'email', 'phone', 'message'];
    
    if (activeTab === 'corporate') {
      requiredFields.push('companyName', 'industry', 'businessSize', 'jobTitle', 'inquiryType');
    } else {
      requiredFields.push('institutionName', 'institutionType', 'department', 'role', 'programInterest');
    }

    for (const field of requiredFields) {
      if (!formData[field as keyof FormData]) {
        toast.error(`Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field`);
        return false;
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      toast.error('Please enter a valid phone number');
      return false;
    }

    return true;
  };

  const submitToGoogleSheets = async (data: FormData) => {
    // This function would integrate with Google Sheets API
    // For now, we'll simulate the API call
    const timestamp = new Date().toISOString();
    const submissionData = {
      timestamp,
      contactType: data.contactType,
      ...data
    };

    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Data to be submitted to Google Sheets:', submissionData);
        resolve(submissionData);
      }, 1000);
    });
  };

  const sendEmailNotifications = async (data: FormData) => {
    // This function would integrate with email service (EmailJS, Nodemailer, etc.)
    const emailData = {
      to: [data.email, 'academy@scalezix.com'], // Send to both user and admin
      subject: `New ${data.contactType} inquiry from ${data.fullName}`,
      template: data.contactType === 'corporate' ? 'corporate_inquiry' : 'educational_inquiry',
      data: data
    };

    // Simulate email sending
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Email notifications sent:', emailData);
        resolve(emailData);
      }, 500);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Google Sheets
      await submitToGoogleSheets(formData);
      
      // Send email notifications
      await sendEmailNotifications(formData);
      
      toast.success('Your inquiry has been submitted successfully! We\'ll get back to you within 24 hours.');
      
      // Reset form
      setFormData({
        contactType: activeTab,
        fullName: '',
        email: '',
        phone: '',
        message: '',
        companyName: '',
        industry: '',
        businessSize: '',
        jobTitle: '',
        inquiryType: '',
        institutionName: '',
        institutionType: '',
        department: '',
        role: '',
        programInterest: ''
      });
      
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('There was an error submitting your inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex mb-8 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => handleTabChange('corporate')}
          className={`flex-1 flex items-center justify-center py-3 px-6 rounded-md font-medium transition-all duration-200 ${
            activeTab === 'corporate'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Building className="h-5 w-5 mr-2" />
          Corporate Inquiry
        </button>
        <button
          onClick={() => handleTabChange('educational')}
          className={`flex-1 flex items-center justify-center py-3 px-6 rounded-md font-medium transition-all duration-200 ${
            activeTab === 'educational'
              ? 'bg-white text-blue-600 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <GraduationCap className="h-5 w-5 mr-2" />
          Educational Institution
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Common Fields */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          {/* Corporate Specific Fields */}
          {activeTab === 'corporate' && (
            <>
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  required
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select your industry</option>
                  {industries.map((industry) => (
                    <option key={industry} value={industry}>{industry}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="businessSize" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Size *
                </label>
                <select
                  id="businessSize"
                  name="businessSize"
                  required
                  value={formData.businessSize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select business size</option>
                  {businessSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title *
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your job title"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </>
          )}

          {/* Educational Specific Fields */}
          {activeTab === 'educational' && (
            <>
              <div>
                <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700 mb-2">
                  Institution Name *
                </label>
                <input
                  type="text"
                  id="institutionName"
                  name="institutionName"
                  required
                  value={formData.institutionName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter institution name"
                />
              </div>

              <div>
                <label htmlFor="institutionType" className="block text-sm font-medium text-gray-700 mb-2">
                  Institution Type *
                </label>
                <select
                  id="institutionType"
                  name="institutionType"
                  required
                  value={formData.institutionType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select institution type</option>
                  {institutionTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-2">
                  Department *
                </label>
                <input
                  type="text"
                  id="department"
                  name="department"
                  required
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your department"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Role *
                </label>
                <input
                  type="text"
                  id="role"
                  name="role"
                  required
                  value={formData.role}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your role/position"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="programInterest" className="block text-sm font-medium text-gray-700 mb-2">
                  Program Interest *
                </label>
                <select
                  id="programInterest"
                  name="programInterest"
                  required
                  value={formData.programInterest}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select program of interest</option>
                  {programInterests.map((program) => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>

        {/* Message Field */}
        <div className="mt-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder={
                activeTab === 'corporate' 
                  ? "Tell us about your training needs, team size, timeline, and any specific requirements..."
                  : "Tell us about your program requirements, student numbers, curriculum needs, and implementation timeline..."
              }
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Submit {activeTab === 'corporate' ? 'Corporate' : 'Educational'} Inquiry
              </>
            )}
          </button>
        </div>

        {/* Privacy Notice */}
        <div className="mt-6 text-sm text-gray-600 text-center">
          <CheckCircle className="h-4 w-4 inline mr-1" />
          By submitting this form, you agree to our privacy policy and terms of service.
          We'll respond within 24 hours.
        </div>
      </form>
    </div>
  );
};

export default EnhancedContactForm;
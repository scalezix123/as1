import React from 'react';
import { Target, Users, Lightbulb, Award, BookOpen, Globe, CheckCircle, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Mission-Driven",
      description: "Empowering the next generation of AI professionals through comprehensive education"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Expert Instructors",
      description: "Learn from industry leaders and experienced AI practitioners"
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-indigo-600" />,
      title: "Practical Learning",
      description: "Hands-on projects and real-world AI applications in every course"
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Industry Recognition",
      description: "Globally recognized certifications that advance your career"
    },
    {
      icon: <BookOpen className="h-8 w-8 text-orange-600" />,
      title: "Comprehensive Curriculum",
      description: "From fundamentals to advanced AI concepts and implementations"
    },
    {
      icon: <Globe className="h-8 w-8 text-teal-600" />,
      title: "Global Community",
      description: "Connect with AI enthusiasts and professionals worldwide"
    }
  ];

  const achievements = [
    { number: "100+", label: "Students Trained" },
    { number: "10+", label: "AI Courses" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "10+", label: "Countries Reached" },
    { number: "100+", label: "Industry Partners" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of AI technology and education methods"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in curriculum and instruction"
    },
    {
      title: "Accessibility",
      description: "We make AI education available to learners worldwide"
    },
    {
      title: "Community",
      description: "We foster a supportive learning environment for all students"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              About Scalezix Academy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are dedicated to democratizing AI education and making advanced artificial intelligence 
              skills accessible to everyone, everywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Shaping the Future of AI Education
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Scalezix Academy, we believe that artificial intelligence is not just the future – it's the present. 
                Our comprehensive AI education platform is designed to transform curious minds into skilled AI practitioners.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With a focus on practical application, industry relevance, and cutting-edge curriculum, we prepare 
                our students for success in the rapidly evolving AI landscape.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Comprehensive Learning Path</div>
                  <div className="text-gray-600">From beginner to expert in structured modules</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-blue-100 mb-6">
                  To be the global leader in AI education, creating a world where everyone has access to 
                  high-quality artificial intelligence training and opportunities.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-bold">2019</div>
                    <div className="text-blue-100">Founded</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-blue-100">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our unique approach to AI education combines theory with practice, ensuring our students are job-ready
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence in AI education
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Scalezix Academy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals leading the future of AI education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Mitchell",
                role: "CEO & Founder",
                image: "https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300",
                bio: "Former AI researcher at Google with 15+ years in machine learning"
              },
              {
                name: "Michael Chen",
                role: "CTO",
                image: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300",
                bio: "Ex-Microsoft AI architect specializing in deep learning systems"
              },
              {
                name: "Dr. Emily Rodriguez",
                role: "Head of Curriculum",
                image: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300",
                bio: "PhD in Computer Science with expertise in AI education methodology"
              }
            ].map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React from 'react';
import { Target, Users, Lightbulb, Award, BookOpen, Globe } from 'lucide-react';

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

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Scalezix Academy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to democratizing AI education and making advanced artificial intelligence 
            skills accessible to everyone, everywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Shaping the Future of AI Education
            </h3>
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
              <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
              <p className="text-blue-100 mb-6">
                To be the global leader in AI education, creating a world where everyone has access to 
                high-quality artificial intelligence training and opportunities.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-3xl font-bold">2025</div>
                  <div className="text-blue-100">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-blue-100">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
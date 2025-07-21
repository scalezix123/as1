import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI: Trends to Watch in 2024",
      excerpt: "Explore the latest developments in artificial intelligence and what they mean for the future of technology and society.",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "AI Trends"
    },
    {
      id: 2,
      title: "Breaking into AI: A Complete Career Guide",
      excerpt: "Everything you need to know about starting a career in artificial intelligence, from skills to opportunities.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Career Advice"
    },
    {
      id: 3,
      title: "Machine Learning vs Deep Learning: Understanding the Difference",
      excerpt: "A comprehensive comparison of machine learning and deep learning approaches, their applications, and when to use each.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technical"
    },
    {
      id: 4,
      title: "AI Ethics: Building Responsible AI Systems",
      excerpt: "Learn about the ethical considerations in AI development and how to create AI systems that benefit society.",
      author: "Dr. James Wilson",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/8386433/pexels-photo-8386433.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Ethics"
    },
    {
      id: 5,
      title: "Natural Language Processing: From Text to Understanding",
      excerpt: "Discover how NLP is revolutionizing human-computer interaction and the latest breakthroughs in language models.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/8386439/pexels-photo-8386439.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "NLP"
    },
    {
      id: 6,
      title: "Computer Vision Applications in Healthcare",
      excerpt: "Explore how computer vision is transforming medical diagnosis and treatment through innovative AI applications.",
      author: "Dr. Mark Johnson",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Healthcare"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Trends': 'bg-blue-100 text-blue-800',
      'Career Advice': 'bg-green-100 text-green-800',
      'Technical': 'bg-purple-100 text-purple-800',
      'Ethics': 'bg-orange-100 text-orange-800',
      'NLP': 'bg-indigo-100 text-indigo-800',
      'Healthcare': 'bg-pink-100 text-pink-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, career advice, and technical insights from industry experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
              <div className="relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-600 transition-colors duration-200">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <button className="group flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Contact Us for More Info
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
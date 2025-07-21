import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Clock, Search, Tag } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'AI Trends', 'Career Advice', 'Technical', 'Ethics', 'NLP', 'Healthcare', 'Industry News'];

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI: Trends to Watch in 2024",
      excerpt: "Explore the latest developments in artificial intelligence and what they mean for the future of technology and society. From generative AI to autonomous systems, discover what's coming next.",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "AI Trends",
      featured: true
    },
    {
      id: 2,
      title: "Breaking into AI: A Complete Career Guide",
      excerpt: "Everything you need to know about starting a career in artificial intelligence, from skills to opportunities. Learn about different AI roles and how to prepare for them.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Career Advice",
      featured: false
    },
    {
      id: 3,
      title: "Machine Learning vs Deep Learning: Understanding the Difference",
      excerpt: "A comprehensive comparison of machine learning and deep learning approaches, their applications, and when to use each. Perfect for beginners and intermediate learners.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technical",
      featured: false
    },
    {
      id: 4,
      title: "AI Ethics: Building Responsible AI Systems",
      excerpt: "Learn about the ethical considerations in AI development and how to create AI systems that benefit society. Explore bias, fairness, and transparency in AI.",
      author: "Dr. James Wilson",
      date: "March 8, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/8386433/pexels-photo-8386433.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Ethics",
      featured: false
    },
    {
      id: 5,
      title: "Natural Language Processing: From Text to Understanding",
      excerpt: "Discover how NLP is revolutionizing human-computer interaction and the latest breakthroughs in language models. Learn about transformers, BERT, and GPT.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/8386439/pexels-photo-8386439.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "NLP",
      featured: false
    },
    {
      id: 6,
      title: "Computer Vision Applications in Healthcare",
      excerpt: "Explore how computer vision is transforming medical diagnosis and treatment through innovative AI applications. Real-world case studies and future possibilities.",
      author: "Dr. Mark Johnson",
      date: "March 3, 2024",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/8386423/pexels-photo-8386423.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Healthcare",
      featured: false
    },
    {
      id: 7,
      title: "AI in Finance: Revolutionizing Banking and Investment",
      excerpt: "How artificial intelligence is transforming the financial sector, from algorithmic trading to fraud detection and personalized banking services.",
      author: "Robert Kim",
      date: "March 1, 2024",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Industry News",
      featured: false
    },
    {
      id: 8,
      title: "Getting Started with TensorFlow: A Beginner's Guide",
      excerpt: "Learn the basics of TensorFlow and how to build your first neural network. Step-by-step tutorial with practical examples and code snippets.",
      author: "Anna Martinez",
      date: "February 28, 2024",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technical",
      featured: false
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = filteredPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const getCategoryColor = (category: string) => {
    const colors = {
      'AI Trends': 'bg-blue-100 text-blue-800',
      'Career Advice': 'bg-green-100 text-green-800',
      'Technical': 'bg-purple-100 text-purple-800',
      'Ethics': 'bg-orange-100 text-orange-800',
      'NLP': 'bg-indigo-100 text-indigo-800',
      'Healthcare': 'bg-pink-100 text-pink-800',
      'Industry News': 'bg-teal-100 text-teal-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              AI Insights & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest AI trends, career advice, and technical insights from industry experts
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
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredPost.category)}`}>
                        {featuredPost.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-200">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {featuredPost.date}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <button className="group flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 self-start">
                      Read Full Article
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
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

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg">No articles found matching your criteria</div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated with AI Insights
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter and never miss the latest AI trends, tutorials, and career advice
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Popular Topics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most popular AI topics and discover what interests you most
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Machine Learning',
              'Deep Learning',
              'Neural Networks',
              'Computer Vision',
              'Natural Language Processing',
              'AI Ethics',
              'Robotics',
              'Data Science',
              'Python',
              'TensorFlow',
              'PyTorch',
              'AI Career'
            ].map((topic, index) => (
              <button
                key={index}
                className="bg-gray-100 hover:bg-blue-100 text-gray-700 hover:text-blue-700 px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
              >
                <Tag className="h-4 w-4 mr-2" />
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
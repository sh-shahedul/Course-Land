import React, { useState } from 'react';
import { motion } from 'framer-motion';

const BlogCard = ({ blog, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800 flex flex-col h-full"
    >
      {/* Featured Badge */}
      {blog.featured && (
        <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-lg">
          ⭐ Featured
        </div>
      )}

      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <span className="absolute bottom-3 left-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg backdrop-blur-sm">
          {blog.category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-1">
        <div className="flex-1">
        {/* Meta Info */}
        <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-pink-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-700 dark:text-gray-300">{blog.author}</span>
          </span>
          
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            <span>{blog.date}</span>
          </span>

          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
            <span>{blog.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:via-purple-600 group-hover:to-indigo-500 transition-all duration-300 line-clamp-2">
          {blog.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2 leading-relaxed">
          {blog.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {blog.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-pink-50 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400 text-xs rounded-full border border-pink-200 dark:border-pink-800"
            >
              #{tag}
            </span>
          ))}
        </div>
        </div>

        {/* Read More Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-semibold py-2 rounded-full hover:from-indigo-500 hover:to-pink-500 transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2 group text-sm mt-auto"
        >
          Read Article
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
          </svg>
        </motion.button>
      </div>
    </motion.article>
  );
};

const BlogComponent = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const blogs = [
    {
      id: 1,
      title: "Top 10 Web Development Courses for 2026",
      excerpt: "Discover the most in-demand web development courses that will boost your career in 2026. From React to Node.js, we cover everything you need to know.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      author: "Rakib Ahmed",
      date: "Jan 2, 2026",
      readTime: "8 min read",
      category: "Web Development",
      tags: ["React", "JavaScript", "Career"],
      featured: true
    },
    {
      id: 2,
      title: "Machine Learning Basics: A Beginner's Guide",
      excerpt: "Start your journey into artificial intelligence with our comprehensive guide to machine learning fundamentals and practical applications.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      author: "Nusrat Jahan",
      date: "Dec 30, 2025",
      readTime: "12 min read",
      category: "AI & ML",
      tags: ["Python", "AI", "Machine Learning"],
      featured: false
    },
    {
      id: 3,
      title: "Master Digital Marketing in 2026",
      excerpt: "Learn the latest digital marketing strategies, from SEO to social media marketing, that drive real business results in today's competitive landscape.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      author: "Tanvir Hossain",
      date: "Dec 28, 2025",
      readTime: "10 min read",
      category: "Marketing",
      tags: ["SEO", "Social Media", "Strategy"],
      featured: true
    },
    {
      id: 4,
      title: "UI/UX Design Trends You Can't Ignore",
      excerpt: "Explore the cutting-edge design trends shaping user experiences in 2026. From glassmorphism to micro-interactions, stay ahead of the curve.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      author: "Fatima Khan",
      date: "Dec 25, 2025",
      readTime: "7 min read",
      category: "Design",
      tags: ["UI/UX", "Figma", "Trends"],
      featured: false
    },
    {
      id: 5,
      title: "Backend Development with Node.js",
      excerpt: "Build scalable and efficient server-side applications using Node.js. Learn best practices, architecture patterns, and modern deployment strategies.",
      image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&q=80",
      author: "Sabbir Rahman",
      date: "Dec 22, 2025",
      readTime: "15 min read",
      category: "Backend",
      tags: ["Node.js", "API", "Database"],
      featured: false
    },
    {
      id: 6,
      title: "Data Science Career Path in Bangladesh",
      excerpt: "Everything you need to know about starting a data science career in Bangladesh, including skills, salary expectations, and top companies hiring.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      author: "Mehedi Hasan",
      date: "Dec 20, 2025",
      readTime: "11 min read",
      category: "Data Science",
      tags: ["Career", "Analytics", "Python"],
      featured: true
    }
  ];

  const categories = ['All', 'Web Development', 'AI & ML', 'Marketing', 'Design', 'Backend', 'Data Science'];

  const filteredBlogs = activeFilter === 'All' 
    ? blogs
    : blogs.filter(blog => blog.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
            Course Land Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover insights, tips, and guides to accelerate your learning journey
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={blog.id} blog={blog} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogComponent;
'use client';

import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn: Variants = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
};

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitMessage('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const portfolioItems = [
    {
      title: 'Brand Identity Design',
      category: 'Branding',
      description: 'Complete brand identity system including logo, color palette, and typography.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop'
    },
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'Modern e-commerce solution with seamless user experience and payment integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
    },
    {
      title: 'Mobile App Design',
      category: 'UI/UX Design',
      description: 'Intuitive mobile application design focused on user engagement and retention.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop'
    },
    {
      title: 'Marketing Campaign',
      category: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategy with measurable results and ROI.',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&h=600&fit=crop'
    },
    {
      title: 'Corporate Website',
      category: 'Web Design',
      description: 'Professional corporate website with modern design and responsive layout.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop'
    },
    {
      title: 'Social Media Strategy',
      category: 'Content Creation',
      description: 'Engaging social media content strategy that builds community and drives engagement.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop'
    }
  ];

  const services = [
    {
      icon: '🎨',
      title: 'Creative Design',
      description: 'Stunning visual designs that capture attention and communicate your brand message effectively.'
    },
    {
      icon: '💻',
      title: 'Web Development',
      description: 'Modern, responsive websites built with the latest technologies for optimal performance.'
    },
    {
      icon: '📱',
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.'
    },
    {
      icon: '🚀',
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies that drive growth and achieve your business objectives.'
    }
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '98%', label: 'Client Satisfaction' }
  ];

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Test Client 2
            </motion.div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
              <a href="#portfolio" className="text-gray-700 hover:text-primary-600 transition-colors">Portfolio</a>
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
            </div>
            <motion.a
              href="#contact"
              className="bg-primary-600 text-white px-6 py-2 rounded-full hover:bg-primary-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                variants={fadeInUp}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Crafting Digital
                <span className="block bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  Excellence
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              >
                We transform ideas into stunning digital experiences that captivate audiences and drive results. Your vision, our expertise.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <motion.a
                  href="#portfolio"
                  className="bg-primary-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Our Work
                </motion.a>
                <motion.a
                  href="#contact"
                  className="bg-white text-primary-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors border-2 border-primary-600"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get in Touch
                </motion.a>
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-primary-200 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -left-6 w-72 h-72 bg-primary-100 rounded-2xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 bg-primary-600">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={scaleIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-primary-100 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest projects and see how we bring creative visions to life
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                variants={fadeInUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="text-sm font-semibold text-primary-300 mb-2">{item.category}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-primary-600 mb-1">{item.category}</div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your unique needs and goals
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                variants={scaleIn}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
            <p className="text-xl text-gray-600">
              Ready to start your next project? Get in touch and let's create something amazing.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            {submitMessage && (
              <motion.div
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {submitMessage}
              </motion.div>
            )}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                Test Client 2
              </div>
              <p className="text-gray-400">
                Crafting digital excellence through innovative design and development.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#home" className="hover:text-primary-400 transition-colors">Home</a></li>
                <li><a href="#portfolio" className="hover:text-primary-400 transition-colors">Portfolio</a></li>
                <li><a href="#services" className="hover:text-primary-400 transition-colors">Services</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Creative Design</li>
                <li>Web Development</li>
                <li>Mobile Solutions</li>
                <li>Digital Strategy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li>info@testclient2.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Design Street</li>
                <li>Creative City, CC 12345</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Test Client 2. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
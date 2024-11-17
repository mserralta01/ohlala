import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>
      
      <nav className="absolute top-0 left-0 right-0 z-50 py-6">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <motion.a 
            href="/"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-2xl font-display"
          >
            Ohlala
          </motion.a>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hidden md:flex space-x-8"
          >
            <Link to="/workshops" className="text-white hover:text-primary-200 transition-colors">
              Workshops
            </Link>
            <a href="/#about" className="text-white hover:text-primary-200 transition-colors">
              About
            </a>
            <Link to="/gallery" className="text-white hover:text-primary-200 transition-colors">
              Gallery
            </Link>
            <a href="#contact" className="text-white hover:text-primary-200 transition-colors">
              Contact
            </a>
          </motion.div>
        </div>
      </nav>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-primary-200 font-display text-xl mb-4 block"
        >
          Welcome to
        </motion.span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
        >
          Designs by Ohlala
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto"
        >
          Experience the charm of French artistry in Wellington's most enchanting creative space
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-x-4"
        >
          <Link to="/workshops" className="btn-primary">
            Discover Workshops
          </Link>
          <a href="#about" className="btn-secondary bg-white/10 border-white text-white hover:bg-white/20">
            Our Story
          </a>
        </motion.div>
      </div>
    </header>
  );
}
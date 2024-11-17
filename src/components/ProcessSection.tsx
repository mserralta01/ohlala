import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Palette, Home } from 'lucide-react';

export function ProcessSection() {
  const steps = [
    { 
      icon: Calendar, 
      title: "Choose Your Date", 
      desc: "Browse our calendar and select your perfect workshop time" 
    },
    { 
      icon: Users, 
      title: "Meet New Friends", 
      desc: "Connect with like-minded creative souls in our welcoming space" 
    },
    { 
      icon: Palette, 
      title: "Create Beauty", 
      desc: "Learn and create under expert guidance in a luxurious setting" 
    },
    { 
      icon: Home, 
      title: "Take Home Joy", 
      desc: "Leave with your masterpiece and memories to cherish" 
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="section-title">The Ohlala Experience</h2>
          <p className="section-subtitle">
            Join us for an unforgettable creative journey in Wellington's most sophisticated workshop space
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 group"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-50 rounded-full flex items-center justify-center group-hover:bg-primary-100 transition-colors duration-300">
                <step.icon className="w-8 h-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
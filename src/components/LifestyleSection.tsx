import React from 'react';
import { motion } from 'framer-motion';
import { Wine, Heart, Coffee, Sparkles } from 'lucide-react';

export function LifestyleSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Escape to Your Creative Haven</h2>
          <p className="section-subtitle">
            More than just workshops - it's a celebration of life, creativity, and connection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80"
              alt="Creative Workshop Atmosphere"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          <div className="grid grid-cols-1 gap-8">
            {[
              {
                icon: Wine,
                title: "Sip & Create",
                description: "Enjoy fine wines and creative company while discovering your artistic talents"
              },
              {
                icon: Heart,
                title: "Form Real Connections",
                description: "Build lasting friendships with fellow art enthusiasts in our intimate setting"
              },
              {
                icon: Coffee,
                title: "Intimate Atmosphere",
                description: "Experience the charm of a Parisian café right here in Wellington"
              },
              {
                icon: Sparkles,
                title: "Escape the Ordinary",
                description: "Leave your worries behind and immerse yourself in creative bliss"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-6 bg-primary-50/30 p-6 rounded-lg"
              >
                <div className="bg-white p-3 rounded-full shadow-md">
                  <item.icon className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
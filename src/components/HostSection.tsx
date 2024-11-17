import React from 'react';
import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';

export function HostSection() {
  return (
    <section className="py-20 px-4 bg-primary-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80"
              alt="Andrea - Your Host"
              className="rounded-lg shadow-xl w-full object-cover aspect-[3/4]"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-full shadow-lg">
              <Palette className="w-8 h-8 text-primary-500" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-display font-semibold mb-6">Meet Andrea</h2>
            <p className="text-lg text-gray-700 mb-6">
              Bonjour! I'm Andrea, your host and creative guide at Designs by Ohlala. With a passion for both art and bringing people together, I've created a space where creativity flourishes and friendships bloom.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              My journey began in the charming streets of Paris, where I fell in love with the way art brings people together. Now, I bring that same magic to Wellington, creating an atmosphere where every workshop feels like a delightful soirée with friends.
            </p>
            <a href="#workshops" className="btn-primary inline-flex">
              Join My Next Workshop
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
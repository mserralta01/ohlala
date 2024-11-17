import React from 'react';
import { motion } from 'framer-motion';
import { galleryItems } from '../data/gallery';

export function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-primary-50/30 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-display font-semibold mb-6">Our Gallery</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore the magical moments and beautiful creations from our past workshops
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="break-inside-avoid"
            >
              <div className="relative group rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">
                <div className={`relative ${item.height === 'tall' ? 'h-[600px]' : 'h-[400px]'}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
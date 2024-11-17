import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Workshop } from '../types/workshop';

interface WorkshopProps {
  workshop: Workshop;
  index: number;
}

export function WorkshopCard({ workshop, index }: WorkshopProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={workshop.image} 
          alt={workshop.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {workshop.spots <= 3 && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
            <span className="text-sm font-medium">Hurry! Only {workshop.spots} spots left</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold mb-2">{workshop.title}</h3>
        <p className="text-gray-600 mb-4">{workshop.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-primary-500 font-semibold block">{workshop.price}</span>
            <span className="text-sm text-gray-500">{workshop.date}</span>
          </div>
          <Link 
            to={`/workshops/${workshop.id}`}
            className="flex items-center text-primary-500 hover:text-primary-600 font-semibold group"
          >
            View Details 
            <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { workshops } from '../data/workshops';
import { Clock, Users, Palette, ArrowLeft } from 'lucide-react';

export function WorkshopDetailPage() {
  const { id } = useParams();
  const workshop = workshops.find(w => w.id === id);

  if (!workshop) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Workshop not found</h2>
          <Link to="/workshops" className="text-primary-500 hover:text-primary-600">
            View all workshops
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link 
          to="/workshops"
          className="inline-flex items-center text-gray-600 hover:text-primary-500 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Workshops
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={workshop.image} 
                alt={workshop.title}
                className="w-full h-[500px] object-cover"
              />
              {workshop.spots <= 3 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full">
                  Hurry! Only {workshop.spots} spots left
                </div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-display font-semibold mb-4">{workshop.title}</h1>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                {workshop.duration}
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-5 h-5 mr-2" />
                {workshop.spots} spots left
              </div>
              <div className="flex items-center text-gray-600">
                <Palette className="w-5 h-5 mr-2" />
                {workshop.skillLevel}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md mb-8">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-gray-600">{workshop.date}</p>
                  <p className="text-gray-600">{workshop.time}</p>
                </div>
                <p className="text-3xl font-display text-primary-500">{workshop.price}</p>
              </div>
              <button className="w-full btn-primary">
                Book Now
              </button>
            </div>

            <div className="prose prose-lg">
              <p className="mb-6">{workshop.longDescription}</p>
              
              <h3 className="text-xl font-semibold mb-4">What's Included</h3>
              <ul className="space-y-2">
                {workshop.materials.map((material, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                    {material}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
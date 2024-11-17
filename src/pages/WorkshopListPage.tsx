import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { upcomingWorkshops, pastWorkshops } from '../data/workshops';
import { WorkshopCard } from '../components/WorkshopCard';
import { Search, Calendar, Clock, Users } from 'lucide-react';

export function WorkshopListPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredUpcoming = upcomingWorkshops.filter(workshop =>
    workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workshop.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPast = pastWorkshops.filter(workshop =>
    workshop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    workshop.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-primary-50/30 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-display font-semibold mb-6">Our Workshops</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Join us for sophisticated creative experiences in our intimate Wellington atelier
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search workshops..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Workshop Benefits */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Flexible Scheduling",
                description: "Multiple workshop dates to fit your schedule"
              },
              {
                icon: Clock,
                title: "Intimate Sessions",
                description: "2-3 hour workshops for optimal learning"
              },
              {
                icon: Users,
                title: "Small Groups",
                description: "Limited spots for personalized attention"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 mx-auto mb-4 bg-primary-50 rounded-full flex items-center justify-center">
                  <benefit.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Workshops */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-display font-semibold mb-4">Upcoming Workshops</h2>
          <p className="text-gray-600">Reserve your spot in our next creative adventures</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredUpcoming.map((workshop, index) => (
            <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
          ))}
        </div>
      </div>

      {/* Past Workshops */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-display font-semibold mb-4">Past Workshops</h2>
            <p className="text-gray-600">Glimpses of our previous creative gatherings</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPast.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <img 
                    src={workshop.image} 
                    alt={workshop.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-gray-900/80 text-white px-3 py-1 rounded-full">
                    <span className="text-sm">Past Event</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-2">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>{workshop.date}</p>
                    <p>{workshop.time}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
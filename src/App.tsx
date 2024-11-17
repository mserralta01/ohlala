import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProcessSection } from './components/ProcessSection';
import { HostSection } from './components/HostSection';
import { LifestyleSection } from './components/LifestyleSection';
import { Footer } from './components/Footer';
import { WorkshopListPage } from './pages/WorkshopListPage';
import { WorkshopDetailPage } from './pages/WorkshopDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { WorkshopCard } from './components/WorkshopCard';
import { motion } from 'framer-motion';
import { workshops } from './data/workshops';

function HomePage() {
  return (
    <>
      <Header />
      <ProcessSection />
      <HostSection />
      <LifestyleSection />

      <section id="workshops" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="section-title">Featured Workshops</h2>
            <p className="section-subtitle">
              Immerse yourself in our carefully curated creative experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workshops.slice(0, 3).map((workshop, index) => (
              <WorkshopCard key={workshop.id} workshop={workshop} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workshops" element={<WorkshopListPage />} />
          <Route path="/workshops/:id" element={<WorkshopDetailPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
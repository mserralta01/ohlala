import React from 'react';
import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2">Designs by Ohlala</h3>
            <div className="flex items-start space-x-2 text-gray-400 mb-4">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <p>15815 Boeing Ct, Wellington, FL, 33414</p>
            </div>
            <a 
              href="tel:+13059875311" 
              className="text-gray-400 hover:text-primary-300 transition-colors flex items-center mb-2"
            >
              <Phone className="w-4 h-4 mr-2" />
              +1 (305) 987-5311
            </a>
            <a 
              href="mailto:info@designsbyOhlala.com" 
              className="text-gray-400 hover:text-primary-300 transition-colors flex items-center"
            >
              <Mail className="w-4 h-4 mr-2" />
              info@designsbyOhlala.com
            </a>
          </div>
          
          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
            <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors flex items-center">
              <Instagram className="w-4 h-4 mr-2" /> Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-primary-300 transition-colors flex items-center">
              <Facebook className="w-4 h-4 mr-2" /> Facebook
            </a>
          </div>

          <div className="flex flex-col space-y-2">
            <h4 className="text-lg font-semibold mb-2">Legal</h4>
            <Link to="/terms" className="text-gray-400 hover:text-primary-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-primary-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/refund" className="text-gray-400 hover:text-primary-300 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; 2024 Designs by Ohlala. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary-500" />
            <span>in Wellington, Florida</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
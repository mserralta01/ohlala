import React from 'react';
import { motion } from 'framer-motion';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-display font-semibold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg">
            <h2>1. Information Collection</h2>
            <p>We collect information you provide when booking workshops, including name, email, phone number, and payment details. This information is used solely for workshop administration and communication.</p>

            <h2>2. Use of Information</h2>
            <p>Your information is used to:</p>
            <ul>
              <li>Process workshop bookings</li>
              <li>Send workshop confirmations and reminders</li>
              <li>Communicate about upcoming events and promotions</li>
              <li>Process payments</li>
            </ul>

            <h2>3. Data Protection</h2>
            <p>We implement appropriate security measures to protect your personal information. Your data is never sold to third parties.</p>

            <h2>4. Marketing Communications</h2>
            <p>You may opt out of marketing communications at any time while still receiving essential workshop-related communications.</p>

            <h2>5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request corrections to your data</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
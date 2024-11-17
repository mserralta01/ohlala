import React from 'react';
import { motion } from 'framer-motion';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-display font-semibold mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-lg">
            <h2>1. Workshop Bookings</h2>
            <p>All workshop bookings are final and subject to availability. Payment is required at the time of booking to secure your spot.</p>

            <h2>2. Cancellation Policy</h2>
            <p>Cancellations made 48 hours or more before the workshop start time will receive a full refund. Cancellations made less than 48 hours before the workshop will not be refunded but may be transferred to another workshop date, subject to availability.</p>

            <h2>3. Workshop Materials</h2>
            <p>All materials listed for each workshop are included in the price. Participants may not bring their own materials unless specifically arranged with Designs by Ohlala.</p>

            <h2>4. Photography</h2>
            <p>Designs by Ohlala may photograph workshops for promotional purposes. By attending our workshops, you consent to the use of your image in our promotional materials.</p>

            <h2>5. Liability</h2>
            <p>Participants attend workshops at their own risk. Designs by Ohlala is not responsible for any personal injury or property damage during workshops.</p>

            <h2>6. Workshop Changes</h2>
            <p>We reserve the right to modify workshop content, timing, or instructor without prior notice while maintaining the quality of the experience.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
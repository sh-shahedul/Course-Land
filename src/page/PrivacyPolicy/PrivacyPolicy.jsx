import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const PrivacyPolicy = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-pink-600 mb-6">
          Privacy Policy
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg ">
          Your privacy is important to us at Course Land. We are committed to protecting your personal information
          and being transparent about how we collect, use, and safeguard your data while providing a secure
          online learning experience.
        </p>
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-16 max-w-5xl mx-auto space-y-10 relative z-10">
       
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            1. Information We Collect
          </h3>
          <p className="text-gray-600 dark:text-gray-400 ">
            We collect personal information you provide when signing up, enrolling in courses, or contacting us.
            This may include your name, email address, payment details, and profile information.
          </p>
        </div>    
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            2. How We Use Your Information
          </h3>
          <p className="text-gray-600 dark:text-gray-400 ">
            Your information is used to provide course services, process payments, improve user experience,
            and send relevant updates or notifications. We do not sell your personal data to third parties.
          </p>
        </div>
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            3. Security
          </h3>
          <p className="text-gray-600 dark:text-gray-400 ">
            We implement appropriate technical and organizational measures to protect your data from unauthorized
            access, alteration, or disclosure. Our servers and APIs are secured and follow best practices.
          </p>
        </div>
      
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            4. Cookies & Tracking
          </h3>
          <p className="text-gray-600 dark:text-gray-400 ">
            We may use cookies and similar technologies to enhance your browsing experience, analyze site usage,
            and provide personalized content. You can control cookies through your browser settings.
          </p>
        </div>

        {/* Your Rights */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            5. Your Rights
          </h3>
          <p className="text-gray-700 dark:text-gray-400 ">
            You have the right to access, update, or delete your personal information. You can also opt-out of
            marketing communications at any time by contacting us.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
            6. Contact Us
          </h3>
          <p className="text-gray-700 dark:text-gray-400 ">
            For any questions regarding this Privacy Policy or your data, please contact us at
            <Link to='/contact'className="font-semibold text-pink-600"> hello@courseland.com</Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default PrivacyPolicy;

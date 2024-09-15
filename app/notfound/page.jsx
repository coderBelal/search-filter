import React from 'react';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">Page Not Found</p>
        <motion.button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.history.back()}
        >
          Go Back
        </motion.button>
      </motion.div>
    </div>
  );
};

export default NotFound;

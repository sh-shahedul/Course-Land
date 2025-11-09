import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router';
const CourseCard = ({course}) => {
    return (
        <div>
            <motion.div
            key={course._id}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white/80 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 relative flex flex-col">
            <figure className='rounded-xl p-5'>
                <img
              src={course.imageURL}
              alt={course.title}
              className="w-full h-80 object-cover rounded-xl"
            />
            </figure>
            <div className="p-5 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <span className="inline-block bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full mb-2">
                  {course.category}
                </span>
                <p className="text-pink-600 font-bold mb-2">${course.price}</p>
                <p className="text-gray-600 text-base font-semibold mb-2">
                 <span className='font-bold'> Duration:</span> {course.duration}
                </p>
                <p className="text-gray-600 text-base font-semibold mb-4">
                  <span className='font-bold'>Instructor:</span> {course.instructor}
                </p>
              </div>
              
              {/* Full width button */}
              <Link to={`/details/${course._id}`}
                className=" border px-8 py-2 rounded-lg text-center  cursor-pointer 
              bg-linear-to-br from-pink-500 via-purple-600 to-indigo-400  text-white font-medium  hover:from-sky-500 hover:to-pink-500 "
              >
                View Details
              </Link>
            </div>
          </motion.div>
            
        </div>
    );
};

export default CourseCard;
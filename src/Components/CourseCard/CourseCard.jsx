import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router';
import { FaClock, FaDollarSign, FaUser } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { FcOvertime } from 'react-icons/fc';
const CourseCard = ({course}) => {
    return (
        <div>
<motion.div
  key={course._id}
  whileHover={{ scale: 1.03 }}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.1, ease: "easeOut" }}
  className="relative flex flex-col bg-white/10 backdrop-blur-md shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 h-full"
>
  {/* Image Section */}
  <figure className="relative rounded-t-xl overflow-hidden h-64 sm:h-72">
    <motion.img
      src={course.imageURL}
      alt={course.title}
      className="w-full h-full object-cover"
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.5 }}
    />
    {course.isFeatured && (
      <span className="absolute top-3 left-3 bg-pink-500 text-white px-3 py-1 rounded-full text-xs shadow-md">
        Featured
      </span>
    )}
  </figure>

  {/* Content */}
  <div className="p-5 flex flex-col flex-1 justify-between min-h-[280px]">
    <div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{course.title}</h3>

      <span className="inline-block bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full mb-3">
        {course.category}
      </span>

      {/* Price */}
      <p className="flex items-center mb-2 font-medium ">💰 Course Fee :  &nbsp; <span className="mr-1 text-base text-pink-600">{course.price}৳</span> <span className='ml-1 text-base font-black'></span>
      </p>

      {/* Duration */}
      <p className="flex items-center mb-2 font-medium ">
      <FcOvertime size={20} /> &nbsp; Duration : &nbsp; <span className='text-indigo-600'> {course.duration}</span>
      </p>

      {/* Instructor */}
      <p className="flex items-center mb-4 font-medium ">
        👨‍🏫 Instructor: &nbsp; <span className='text-purple-600'>{course.instructor}</span>
      </p>
    </div>

    {/* View Details Button */}
    <Link
      to={`/details/${course._id}`}
      className="w-full text-center bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium py-2 rounded-full hover:from-indigo-500 hover:to-pink-500 transition-all duration-300"
    >
      View Details
    </Link>
  </div>
</motion.div>

            
        </div>
    );
};

export default CourseCard;
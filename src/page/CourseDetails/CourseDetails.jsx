import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Loading from '../../Components/Loading/Loading';
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { AuthContext } from '../../Provider/AuthContext';
import toast from 'react-hot-toast';

const CourseDetails = () => {
   const [course, setCourse] = useState({});
   const [loading, setLoading] = useState(true);
    const{id}=useParams()
    const {user} = use(AuthContext)
  useEffect(() => {  
      axios.get(`http://localhost:3000/course/${id}`)
      .then((data) => {
        setCourse(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course:", error);
        setLoading(false);
      });
  }, [id]);

    const handelEnroll = ()=>{
        const finalCourse = {
          title:course.title,
          imageURL:course.imageURL,
          price: course.price,
          duration:course.duration,
          description:course.description,
          created_by:course.created_by,
          category:course.category,
          created_at:new Date(),
          isFeatured:course.isFeatured,
          rating:course.rating,
          instructor:course.instructor,
          enrolled_by:user.email,

        }

        axios.post('http://localhost:3000/enrolled',finalCourse)
          
        .then(data=>{
          console.log(data.data)
          toast.success('enorll confirm course')
        })
        .catch((error)=>{
          console.log('cannot enroll',error)
        })
    }






  if(loading){
    return <Loading></Loading>
  }
    return (
        <div>
             <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className=" sm:flex justify-center items-start my-10 p-3">
      {/* Image Section */}
      
        <div className=" relative">
        <img
          src={course.imageURL}
          alt={course.title}
          className="sm:w-[700px] sm:h-[500px]  rounded-2xl object-cover"
        />
        {course.isFeatured && (
          <span className="absolute top-4 left-4 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            Featured
          </span>
        )}
      </div>

      {/* Text / Content Section */}
      <div className="lg:w-1/2 p-6 md:p-10 flex flex-col justify-between ">
        <div className=''>
          <h1 className="text-3xl font-bold mb-3 text-gray-800">
            {course.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
              {course.category}
            </span>
            <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full">
              {course.level}
            </span>
            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
              {course.duration}
            </span>
          </div>

          <p className="text-gray-600 font-semibold text-base mb-6">
            {course.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <p className="text-gray-800 font-bold text-xl">
                Instructor : <span className="text-pink-600 font-semibold text-base">{course.instructor}</span>
              </p>
              <p className="text-gray-800 font-bold text-xl">
               Enrolled Students : <span className="text-pink-600 font-semibold text-base">{course.enrolledStudents}</span>
              </p>
            </div>

            
          </div>
        </div>

        {/* Price & Enroll Button */}
        <div className="flex justify-between items-center mb-10">
          <p className="text-2xl font-bold text-indigo-600">${course.price}</p>
          <div className="flex items-center gap-2 text-yellow-500">
              <Star fill="gold" size={20} />
              <p className="text-gray-700 font-bold ">{course.rating} / 5</p>
            </div>
        </div>
       <div className='flex justify-end gap-7'>
         <button
            onClick={handelEnroll}
            className="bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            Enroll Now
          </button>
        <Link to='/'
            className="bg-linear-to-br from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300">
           Back To Home
          </Link>
       </div>
      </div>
      
    </motion.div>
        </div>
    );
};

export default CourseDetails;


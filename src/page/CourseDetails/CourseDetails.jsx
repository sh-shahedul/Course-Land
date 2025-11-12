import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import Loading from '../../Components/Loading/Loading';
import { motion } from "framer-motion";
import { AuthContext } from '../../Provider/AuthContext';
import toast from 'react-hot-toast';
import ErrorDetails from '../../Components/ErrorPage/ErrorDetails';

const CourseDetails = () => {
   const [course, setCourse] = useState({});
   const [loading, setLoading] = useState(true);
   const [error,setError]= useState(false)
    const{id}=useParams()
    const {user} = use(AuthContext)
  useEffect(() => {  
      axios.get(`https://online-learning-platform-server-livid.vercel.app/course/${id}`)
      .then((data) => {
        setCourse(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course:", error);
        setLoading(false);
         setError(true)
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

        axios.post('https://online-learning-platform-server-livid.vercel.app/enrolled',finalCourse)
          
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
  if(error||!course) {
    return <ErrorDetails></ErrorDetails>
  }
    return (
   <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-indigo-50 py-10 px-3 sm:px-6">
    <title>Courese details | CourseLand</title>
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row"
  >
    {/* Left Section - Image */}
    <div className="relative w-full lg:w-1/2">
      <img
        src={course.imageURL}
        alt={course.title}
        className="w-full h-[260px] sm:h-[360px] lg:h-full object-cover"
      />
      {course.isFeatured && (
        <div className="absolute top-4 left-4 bg-linear-to-r from-pink-600 to-purple-600 text-white px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full shadow-lg">
          Featured
        </div>
      )}
    </div>

    {/* Right Section - Content */}
    <div className="flex-1 p-5 sm:p-8 md:p-10 flex flex-col justify-between">
      {/* Course Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
          {course.title}
        </h1>

        <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6">
          <span className="bg-indigo-100 text-indigo-700 text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full font-medium">
            {course.category}
          </span>
          <span className="bg-pink-100 text-pink-700 text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full font-medium">
            {course.level}
          </span>
          <span className="bg-purple-100 text-purple-700 text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full font-medium">
            {course.duration}
          </span>
        </div>

        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-10">
          {course.description}
        </p>

        {/* Instructor Section */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-linear-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-md">
            {course.instructor?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-gray-800 font-semibold text-sm sm:text-lg">
              Instructor
            </p>
            <p className="text-pink-600 font-bold text-base sm:text-xl">
              {course.instructor}
            </p>
          </div>
        </div>
      </div>

      
      <div className="my-6 sm:my-10 h-[2px] bg-linear-to-r from-pink-300 via-purple-300 to-indigo-300"></div>

      {/* Price & Buttons */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5 sm:gap-6">
        <p className="text-2xl sm:text-3xl font-extrabold text-indigo-700 tracking-wide">
          ${course.price}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            onClick={handelEnroll}
             className="px-3 py-2 md:px-6  rounded-full bg-linear-to-br from-pink-500 via-purple-600 to-indigo-400 text-white font-semibold hover:from-indigo-500 hover:to-pink-500" >
            Enroll Now
          </button>

          <Link
            to="/"
            className="px-3 py-2 md:px-6  rounded-full font-semibold border-2 border-indigo-500 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 text-center"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  </motion.div>
</div>



    );
};

export default CourseDetails;


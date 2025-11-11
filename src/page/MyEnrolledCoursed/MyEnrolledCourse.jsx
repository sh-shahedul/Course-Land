import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Loading from '../../Components/Loading/Loading';

const MyEnrolledCourse = () => {
  const { user } = useContext(AuthContext);
  const [enroll, setEnroll] = useState([]);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    // if (!user?.email) return;
    axios(`http://localhost:3000/enrolled?email=${user.email}`)
      .then(data => {
        console.log('after enrolled', data.data);
        setEnroll(data.data);
        setLoading(false)
      });
  }, [user]);



  if(loading) return<Loading></Loading>
  return (
    <div className='min-h-screen  py-10 px-4'>
      <title>My-Enrolle-Course/CourseLand</title>
      <h1 className="text-2xl md:text-4xl font-bold text-pink-600 mb-6 text-center">
        🎓 My Enrolled Courses
      </h1>

       {enroll.length === 0 && (
          <p className='text-center col-span-full text-4xl pt-60 flex justify-center items-center text-pink-600 font-bold'>
            No enrolled courses found.
          </p>
        )}

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[97%] mx-auto'>
        {enroll.map((course, index) => (
          <div
            key={index}
            className='bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100'
          >
            <img
              src={course.imageURL}
              alt={course.title}
              className='w-full h-52 object-cover'
            />
            <div className='p-5 space-y-3'>
              <div className='flex justify-between items-center'>
                <span className='text-sm text-indigo-600 font-semibold uppercase'>
                  {course.category}
                </span>
                {course.isFeatured && (
                  <span className='text-xs bg-pink-100 text-pink-600 px-3 py-1 rounded-full font-medium'>
                    Featured
                  </span>
                )}
              </div>

              <h2 className='text-xl font-bold text-gray-800 leading-snug'>
                {course.title}
              </h2>

              <p className='text-gray-600 text-sm leading-relaxed line-clamp-2'>
                {course.description}
              </p>

              <div className='flex justify-between items-center text-gray-700 font-medium pt-2'>
                <p>⏱ {course.duration}</p>
                <p>💰 ${course.price}</p>
              </div>

              <div className='border-t pt-3 text-sm text-gray-500'>
                <p>
                  👨‍🏫 <span className='font-medium text-gray-700'>{course.instructor}</span>
                </p>
                <p>📅 {new Date(course.created_at).toLocaleDateString()}</p>
              </div>

              <div className='text-xs text-gray-500 pt-2'>
                <p>👤 Enrolled by: <span className='font-medium'>{course.enrolled_by}</span></p>
              </div>
            </div>
          </div>
        ))}

       
      </div>
    </div>
  );
};

export default MyEnrolledCourse;

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Loading from '../../Components/Loading/Loading';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyAddedCourse = () => {
  const { user } = useContext(AuthContext);
  const [myCourse, setMyCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:3000/course?email=${user.email}`)
      .then((data) => {
        setMyCourse(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
        setLoading(false);
      });
  }, [user,refetch]);


const handleDelete =(id)=>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {


axios.delete(`http://localhost:3000/course/${id}`)
  .then(data=>{
    console.log('after delete data',data.data)

     if(data.data.deletedCount){
      Swal.fire({
      title: "Deleted!",
      text: "Your course has been deleted.",
      icon: "success"
       });
     setRefetch(!refetch)
      

     }
  })




    
  }
});




  
  
}




  if (loading) return <Loading />;

  return (
<div className="w-full max-w-6xl mx-auto mt-10 px-2 sm:px-4">
  <title>My-Added-Course-CourseLand</title>
  {myCourse.length === 0 && (
    <div className='min-h-screen text-center col-span-full text-4xl flex justify-center items-center text-pink-600 font-bold'>
       No courses added yet.
    </div>
  )}

  {myCourse.length > 0 && (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border rounded-lg overflow-hidden text-sm sm:text-base">
        {/* Table Header */}
        <thead className="bg-gray-100 text-gray-700 font-semibold">
          <tr>
            <th className="text-left px-4 py-3 whitespace-nowrap">SI.</th>
            <th className="text-left px-4 py-3 whitespace-nowrap">Course</th>
            <th className="text-left px-4 py-3 whitespace-nowrap">Instructor</th>
            <th className="text-left px-4 py-3 whitespace-nowrap">Price</th>
            <th className="text-right pr-24 py-3 whitespace-nowrap">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {myCourse.map((course, index) => (
            <tr
              key={course._id}
              className="border-b hover:bg-gray-50 transition-colors duration-200"
            >
              {/* Serial No */}
              <td className="px-4 py-3 font-medium whitespace-nowrap">
                {index + 1}
              </td>

              {/* Course Info */}
              <td className="px-4 py-3 whitespace-nowrap">
                <div className="flex items-center space-x-3 min-w-[200px]">
                  <img
                    src={course.imageURL}
                    alt={course.title}
                    className="w-14 h-14 sm:w-16 sm:h-16 object-cover rounded-lg"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold truncate max-w-[150px] sm:max-w-none">
                      Title: {course.title}
                    </span>
                    <span className="text-gray-500 text-xs sm:text-sm truncate max-w-[150px] sm:max-w-none">
                      Category: {course.category}
                    </span>
                  </div>
                </div>
              </td>

              {/* Instructor */}
              <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                {course.instructor}
              </td>

              {/* Price */}
              <td className="px-4 py-3 text-pink-600 font-semibold whitespace-nowrap">
                {course.price} TK
              </td>

              {/* Actions */}
              <td className="px-4 py-3 text-right space-x-2 whitespace-nowrap">
                <Link
                  to={`/details/${course._id}`}
                  className="px-3 py-1 bg-linear-to-r from-pink-500 via-purple-600 to-indigo-400 text-white rounded-full font-medium text-sm hover:from-indigo-500 hover:to-pink-500 transition-colors duration-300"
                >
                  View
                </Link>
                <Link
                  to={`/updateCourse/${course._id}`}
                  className="px-3 py-1 bg-green-500 text-white rounded-full font-medium text-sm hover:bg-green-600 transition-colors duration-300"
                >
                  Update
                </Link>
                <button
                  onClick={() => handleDelete(course._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-full font-medium text-sm hover:bg-red-600 transition-colors duration-300"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

  );
};

export default MyAddedCourse;

import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import Loading from '../../Components/Loading/Loading';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';

const MyAddedCourse = () => {
  const { user } = useContext(AuthContext);
  const [myCourse, setMyCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://online-learning-platform-server-livid.vercel.app/course?email=${user.email}`
      )
      .then((data) => {
        setMyCourse(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
        setLoading(false);
      });
  }, [user, refetch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://online-learning-platform-server-livid.vercel.app/course/${id}`
          )
          .then((data) => {
            if (data.data.deletedCount) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your course has been deleted.',
                icon: 'success',
              });
              setRefetch(!refetch);
            }
          });
      }
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full max-w-6xl mx-auto mt-10 px-2 sm:px-4">
      <title>My Added Course | CourseLand</title>
      <h2 className="text-3xl font-bold mb-4 text-center text-pink-600">
        My Added Course
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-2xl border border-gray-200 my-15">
        <table className="min-w-[700px] sm:min-w-full divide-y divide-gray-200">
          {/* Table header */}
          <thead className="bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white">
            <tr>
              <th className="text-left px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                SI.
              </th>
              <th className="text-left px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                Course
              </th>
              <th className="text-left px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                Instructor
              </th>
              <th className="text-left px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                Price
              </th>
              <th className="text-right px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold uppercase tracking-wider whitespace-nowrap">
                Actions
              </th>
            </tr>
          </thead>

          {/* Table body */}
          <tbody className="divide-y divide-gray-100">
            {myCourse.length === 0 ? (
              <tr>
                <td
                  colSpan="5"
                  className="text-center py-10 text-pink-600 font-semibold text-xl">
                  No courses added yet.
                </td>
              </tr>
            ) : (
              myCourse.map((course, index) => (
                <tr key={course._id} className="transition duration-200">
                  {/* Serial no. */}
                  <td className="px-4 sm:px-6 py-4 text-gray-600 dark:text-gray-300 font-medium whitespace-nowrap">
                    {index + 1}
                  </td>

                  {/* Course  info */}
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3 min-w-[180px]">
                      <img
                        src={course.imageURL}
                        alt={course.title}
                        className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg border flex-shrink-0"
                      />
                      <div className="flex flex-col">
                        <p className="font-semibold text-gray-600 dark:text-gray-300 text-sm sm:text-base">
                          {course.title}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                          Category: {course.category}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Instructor */}
                  <td className="px-4 sm:px-6 py-4 text-gray-600 dark:text-gray-300 whitespace-nowrap text-sm sm:text-base">
                    {course.instructor}
                  </td>

                  {/* Price */}
                  <td className="px-4 sm:px-6 py-4 text-pink-600 font-semibold whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      {course.price} <FaBangladeshiTakaSign size={14} />
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-4 sm:px-6 py-4 text-right space-x-1 sm:space-x-2 whitespace-nowrap">
                    <Link
                      to={`/details/${course._id}`}
                      className="px-2 sm:px-3 py-1 bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium rounded-full hover:from-indigo-500 hover:to-pink-500 text-xs sm:text-sm">
                      View
                    </Link>
                    <Link
                      to={`/updateCourse/${course._id}`}
                      className="px-2 sm:px-3 py-1 bg-green-500 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-green-600">
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(course._id)}
                      className="px-2 sm:px-3 py-1 bg-red-500 text-white rounded-full text-xs sm:text-sm font-medium hover:bg-red-600">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedCourse;



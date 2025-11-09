import axios from "axios";
import React, { use, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";

const AddCourse = () => {
  const {user}= use(AuthContext)
  const [loading, setLoading] = useState(false);
  const handelADDCourse =(e)=>{
      e.preventDefault()
     const title = e.target.title.value;
     const imageURL = e.target.imageURL.value;
     const price = e.target.price.value;
     const duration = e.target.duration.value;
     const category = e.target.category.value;
     const description = e.target.description.value;
     console.log(title,imageURL,price,duration,category,description)
          
       const newCourse = {title,imageURL,price,duration,category,description,
        created_by:user.email , created_at: new Date()
       }
      axios.post('http://localhost:3000/course',newCourse)
      .then(data=>{
        console.log('after saving data',data)
      })
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-3 text-center">Add New Course</h2>
      <div className="w-[200px] h-1 mx-auto my-4 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500"></div>


      <form onSubmit={handelADDCourse} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Course Title"
         className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold "

          required
        />

        <input
          type="text"
          name="imageURL"
          placeholder="Image URL"
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold "
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price ($)"
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold "
          required
        />

        <input
          type="text"
          name="duration"
          placeholder="Duration (e.g., 6 weeks)"
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold "
          required
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
         
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold "
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          
           className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold "
          rows={4}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-linear-to-br from-pink-500 via-purple-600 to-indigo-400 text-white font-semibold  hover:from-indigo-500 hover:to-pink-500 transition-colors duration-300 rounded-full"
        >
          {loading ? "Adding..." : "Add Course"}
        </button>
      </form>

      {/* {success && <p className="mt-4 text-center text-green-600">{success}</p>} */}
    </div>
  );
};

export default AddCourse;

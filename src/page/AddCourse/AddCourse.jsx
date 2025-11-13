import axios from "axios";
import React, { use, useState } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Loading from "../../Components/Loading/Loading";
import toast from "react-hot-toast";
import instructorLogo from "../../assets/user.png";

const AddCourse = () => {
  const {user}= use(AuthContext)
  const [loading,setLoading] = useState(false);
  const handelADDCourse =(e)=>{
      e.preventDefault()
      
     const title = e.target.title.value;
     const imageURL = e.target.imageURL.value;
     const price = e.target.price.value;
     const duration = e.target.duration.value;
     const category = e.target.category.value;
     const description = e.target.description.value;
     const level = e.target.level.value;
     const isFeatured = e.target.isFeatured.value === "true";
    //  console.log(title,imageURL,price,duration,category,description)
          
       const newCourse = {title,imageURL,price,duration,category,description, isFeatured,level,
        created_by:user.email , instructor:user.displayName, created_at: new Date()
       }
        setLoading(true);

      axios.post('https://online-learning-platform-server-livid.vercel.app/course',newCourse)
      .then(data=>{
        console.log('after saving data',data)
        setLoading(false);

        toast.success("Course added successfully 🎉");
        e.target.reset();
        
      })
      .catch((err) => {
        console.error("Error saving data:", err);
        toast.error("Failed to add course 😢");
        
      })
      .finally(() => {
        setLoading(false);
      });
  }
   
  if(loading){
    return<Loading></Loading>
  }

  return (
<div className="max-w-4xl mx-auto p-8 shadow-2xl rounded-3xl my-20 border border-white   ">
  <title>Add Course | CourseLand</title>
  <h2 className="text-3xl font-bold mb-4 text-center text-pink-600">
    Add New Course
  </h2>
  <div className="w-46 h-1 mx-auto my-4 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

  <form onSubmit={handelADDCourse} className="space-y-6">
    {/* Instructor Info */}
    <div className="flex items-center space-x-4 mb-4 bg-pink-50 dark:bg-gray-500 p-4 rounded-xl shadow-inner">
     <img
    referrerPolicy="no-referrer"
    src={user?.photoURL ? user.photoURL : instructorLogo}
    alt="Instructor Avatar"
    className="w-16 h-16 rounded-full border-2 border-pink-300 object-cover"/>
      <div className="flex-1 space-y-2">
        <input
          type="text"
          name="instructor"
          value={user?.displayName || ""}
          readOnly
          className="w-full px-4 py-2 border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-600 dark:text-gray-50 font-semibold"
        />
        <input
          type="email"
          name="instructorEmail"
          value={user?.email || ""}
          readOnly
          className="w-full px-4 py-2 border border-purple-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-600 dark:text-gray-50 font-semibold "
        />
      </div>
    </div>

    {/* Course Title & Price */}
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        name="title"
        placeholder="Course Title"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-600 font-semibold  dark:text-gray-300 dark:placeholder-gray-300"
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price Taka"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold  dark:placeholder-gray-300"
        required
      />
    </div>

    {/* Image URL & Duration */}
    <div className="flex flex-col md:flex-row gap-4">
      <input
        type="text"
        name="imageURL"
        placeholder="Image URL"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold  dark:placeholder-gray-300"
        required
      />
      <input
        type="text"
        name="duration"
        placeholder="Duration (e.g., 6 weeks)"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold  dark:placeholder-gray-300"
        required
      />
    </div>

    {/* Level & Category */}
    <div className="flex flex-col md:flex-row gap-4">
      <select
        name="level"
        defaultValue="Level"
        required
        className="select flex-1  px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold  dark:text-gray-300" >
        <option>Select Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Beginner to Intermediate">Beginner to Intermediate</option>
        <option value="Beginner to Advanced">Beginner to Advanced</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Intermediate to Advanced">Intermediate to Advanced</option>
        <option value="Advanced">Advanced</option>
      </select>

      <select
        name="category"
        defaultValue="Category"
        required
        className=" select flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold  dark:text-gray-300">
        <option>Select Category</option>
        <option value="Web Development">Development</option>
        <option value="Tech & Data">Tech & Data</option>
        <option value="Marketing">Marketing</option>
        <option value="Design">Design</option>
        <option value="Language Learning">Language Learning</option>
        <option value="Health & Fitness">Health & Fitness</option>
        <option value="Photography">Photography</option>
      </select>
    </div>

    {/* isFeatured */}
    <select
      defaultValue="isFeatured"
      name="isFeatured"
      required
      className=" select w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold  dark:text-gray-300" >
      <option className="text-gray-400"> Is Featured </option>
      <option value="true">true</option>
      <option value="false">false</option>
    </select>

    {/* Description */}
    <textarea
      name="description"
      placeholder="Course Description"
      rows={4}
      className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold  dark:text-gray-300  dark:placeholder-gray-300"
      required
    />

    {/* Submit Button */}
    <button
      type="submit"
      disabled={loading}
      className="w-full py-3 bg-linear-to-r from-pink-500 via-purple-600 to-indigo-400 text-white font-bold hover:from-indigo-500 hover:to-pink-500 transition-colors duration-300 rounded-full shadow-lg">
      {loading ? "Adding..." : "Add Course"}
    </button>
  </form>
</div>

  );
};

export default AddCourse;

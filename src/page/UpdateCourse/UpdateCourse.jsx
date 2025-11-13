import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";

const UpdateCourse = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  // 🔹 Fetch existing course data
  useEffect(() => {
     axios.get(`https://online-learning-platform-server-livid.vercel.app/course/${id}`)
    .then(data => {
      console.log("Fetched data:", data.data)
      setUpdate(data.data)
    })
    .catch(err => console.error("Fetch Error:", err));
}, [id]);

  //  update form 
  const handelUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    const title = e.target.title.value;
    const imageURL = e.target.imageURL.value;
    const price = e.target.price.value;
    const duration = e.target.duration.value;
    const category = e.target.category.value;
    const description = e.target.description.value;
    const level = e.target.level.value;
    const isFeatured = e.target.isFeatured.value === "true";

    const updateCourse = {title,imageURL,price,duration,category,description,level,isFeatured, };

    axios.patch(`https://online-learning-platform-server-livid.vercel.app/course/${id}`, updateCourse)
      .then((data) => {
        console.log("After update:", data.data);
        setUpdate(data.data);
       toast.success("🎉 Update Successful!");
       navigate('/myAddCourse')
      
      })
      .catch((err) => console.error("Update Error:", err))
      .finally(() => {
        setLoading(false)
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 shadow-2xl rounded-3xl mt-10 border border-white my-15 ">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-pink-600">
        Update Your Course
      </h2>
      <div className="w-56 h-1 mx-auto mb-10 rounded-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500"></div>

      <form onSubmit={handelUpdate} className="space-y-6">
        {/* Course Title & Price */}
        
        <div className="flex flex-col md:flex-row gap-4">
          <input
            defaultValue={update?.title}
            type="text"
            name="title"
            placeholder="Course Title"
            className="flex-1 px-4 py-2 border dark:text-gray-300 border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold"
            required
          />
          <input
            defaultValue={update?.price}
            type="number"
            name="price"
            placeholder="Price ($)"
            className="flex-1 px-4 py-2 border  border-gray-300 dark:text-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold"
            required
          />
        </div>

        {/* Image URL & Duration */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            defaultValue={update?.imageURL}
            type="text"
            name="imageURL"
            placeholder="Image URL"
            className="flex-1 px-4 py-2 border border-gray-300 dark:text-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold"
            required
          />
          <input
            defaultValue={update?.duration}
            type="text"
            name="duration"
            placeholder="Duration (e.g., 6 weeks)"
            className="flex-1 px-4 py-2 border border-gray-300 dark:text-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold"
            required
          />
        </div>

        {/* Level & Category */}
        <div className="flex flex-col md:flex-row gap-4">
          <select
            name="level"
           
            required
            className="select flex-1 px-4 py-2 border border-gray-300 dark:text-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold"
          >
            <option >Select Level</option>
            <option selected={update?.level == "Beginner" } value="Beginner">Beginner</option>
            <option selected={update?.level == "Beginner to Intermediate" } value="Beginner to Intermediate"> Beginner to Intermediate</option>
            <option selected={update?.level == "Beginner to Advanced" }  value="Beginner to Advanced">Beginner to Advanced</option>
            <option selected={update?.level == "Intermediate" }  value="Intermediate">Intermediate</option>
            <option selected={update?.level == "Intermediate to Advanced" }  value="Intermediate to Advanced"> Intermediate to Advanced</option>
            <option selected={update?.level == "Advanced"}  value="Advanced">Advanced</option>
          </select>

           <select
            name="category"          
            required
            className="select flex-1 px-4 py-2 border border-gray-300 dark:text-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold" >
            <option >Select Category</option>
            <option selected={update?.category == "Development" }  value=" Development">Development</option>
            <option selected={update?.category == "Tech & Data" } value="Tech & Data">Tech & Data</option>
            <option selected={update?.category == "Marketing" } value="Marketing">Marketing</option>
            <option selected={update?.category == "Design" } value="Design">Design</option>
            <option selected={update?.category == "Language Learning" } value="Language Learning">Language Learning</option>
            <option selected={update?.category == "Health & Fitness" } value="Health & Fitness">Health & Fitness</option>
            <option selected={update?.category == "Photography" } value="Photography">Photography</option>
          </select> 
        </div>

        {/* isFeatured */}
        <select
          name="isFeatured"
          value={update?.isFeatured === true || update?.isFeatured === "true" ? "true" : "false"} 
          onChange={(e) => setUpdate({ ...update, isFeatured: e.target.value })}
          required
          className="select w-full px-4 py-2 border border-gray-300 dark:text-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold" >
          <option disabled>Is Featured</option>
          <option selected={update?.isFeatured == "true" } value="true">true</option>
          <option selected={update?.isFeatured == "false" } value="false">false</option>
        </select>

        {/* Description */}
        <textarea
          defaultValue={update?.description}
          name="description"
          placeholder="Course Description"
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 dark:text-gray-300 rounded-2xl focus:outline-none focus:ring-1 focus:ring-pink-500 focus:border-pink-500 text-gray-700 font-semibold"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-linear-to-r from-pink-500 via-purple-600 to-indigo-400 text-white font-bold hover:from-indigo-500 hover:to-pink-500 transition-colors duration-300 rounded-full shadow-lg"
        >
          {loading ? "Updating..." : "Update Course"}
        </button>
      </form>
    </div>
  );
};

export default UpdateCourse;








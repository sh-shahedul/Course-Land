import React, { useState, useEffect } from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Loading from "../../Components/Loading/Loading";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState(["All Category"]);
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(true);
    const url =
      selectedCategory === "All Category"
        ? "http://localhost:3000/course"
        : `http://localhost:3000/course?category=${encodeURIComponent(selectedCategory)}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        
        if (selectedCategory === "All Category") {
          const uniqueCategories = ["All Category", ...Array.from(new Set(data.map((c) => c.category))),];
          setCategories(uniqueCategories);
        }
      })
      .catch((err) => console.error("Error fetching courses:", err))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
    {/* Title */}
    <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3">
      All Courses
    </h1>
  <div className=" w-54 h-1 mx-auto bg-linear-to-r from-pink-500 via-purple-600 to-indigo-400 rounded-full"></div>
    {/* Description */}
    <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mt-4">
      Explore our wide range of courses and find the perfect one to enhance your skills.  
      Browse by category, instructor, and price to discover courses tailored for you.
    </p>

    {/* Optional Divider */}
    
  </div>

        {/* Category Dropdown */}
        <div className="mb-6 flex justify-between items-center w-[97%] mx-auto py-10">
        <h1 className="text-3xl font-semibold">Courses : <span className="text-xl font-black text-pink-600">({courses.length})</span></h1>
          <select
            className="select w-full max-w-xs px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat,index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        
        {loading ? (
         <Loading></Loading>
        ) : courses.length === 0 ? (
          <p className="text-center text-gray-500">
            No courses found in this category.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;


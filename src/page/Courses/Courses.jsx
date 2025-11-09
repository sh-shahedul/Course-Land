import React, { useState, useEffect } from "react";
import CourseCard from "../../Components/CourseCard/CourseCard";
import Loading from "../../Components/Loading/Loading";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    setLoading(true);
    const url =
      selectedCategory === "All"
        ? "http://localhost:3000/course"
        : `http://localhost:3000/course?category=${encodeURIComponent(selectedCategory)}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        
        if (selectedCategory === "All") {
          const uniqueCategories = ["All", ...Array.from(new Set(data.map((c) => c.category))),];
          setCategories(uniqueCategories);
        }
      })
      .catch((err) => console.error("Error fetching courses:", err))
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          All Courses
        </h2>

        {/* Category Dropdown */}
        <div className="mb-6 flex justify-between items-center w-[97%] mx-auto py-10">
        <h1 className="text-3xl font-semibold">Categories : <span className="text-xl font-black text-pink-600">({courses.length})</span></h1>
          <select
            className="w-full max-w-xs px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
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
              <CourseCard key={course.title} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Courses;


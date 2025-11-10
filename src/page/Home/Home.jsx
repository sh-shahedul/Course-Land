import React, { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import axios from 'axios';
import Loading from '../../Components/Loading/Loading';
import CourseCard from '../../Components/CourseCard/CourseCard';
import TopInstructor from '../../Components/TopInstructor/TopInstructor';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';




const Home = () => {
  const [courses, setCourses] = useState([]);

    useEffect(() => {
    axios.get("http://localhost:3000/featuresCourse")
     .then(data=>{
        setCourses(data.data)
        console.log(data)
     })
      
  }, []);
    return (
        <div>
            <Hero></Hero>

      <section className="py-16 ">
  <div className="w-[97%] mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Popular Courses
    </h2>

    {courses.length === 0 ? (
      <Loading></Loading>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) =><CourseCard key={course._id} course={course}></CourseCard> )}
      </div>
    )}
  </div>
</section>
      <TopInstructor></TopInstructor>
      <WhyChooseUs></WhyChooseUs>

            
        </div>
    );
};

export default Home;




import React, { useEffect, useState } from 'react';
import Hero from '../../Components/Hero/Hero';
import axios from 'axios';
// import Loading from '../../Components/Loading/Loading';
import CourseCard from '../../Components/CourseCard/CourseCard';
import TopInstructor from '../../Components/TopInstructor/TopInstructor';
import WhyChooseUs from '../../Components/WhyChooseUs/WhyChooseUs';
import Loading from '../../Components/Loading/Loading';
import Achivement from '../../Components/Achivement/Achivement';




const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading,setLoading] = useState(true)
  

    useEffect(() => {
    axios.get("https://online-learning-platform-server-livid.vercel.app/featuresCourse")
     .then(data=>{
        setCourses(data.data)
        // console.log(data)
        setLoading(false)
     })
      
  }, []);


  if(loading){
    return <Loading></Loading>
  }
    return (
        <div>
          <title>Home-CourseLand</title>
            <Hero></Hero>

      <section className="py-10 ">
  <div className="w-[97%] mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 text-center">
      Popular Courses
    </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 text-base md:text-lg   text-center">
      Explore our most sought-after courses and level up your skills with top-rated content.  
      Carefully curated to ensure quality learning and maximum impact, these courses are perfect for anyone ready to grow.
    </p>


    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-5">
        {courses.map((course) =><CourseCard key={course._id} course={course}></CourseCard> )}
      </div>
 
  </div>
</section>
      <TopInstructor></TopInstructor>
      <WhyChooseUs></WhyChooseUs>
      
      <Achivement></Achivement>
            
        </div>
    );
};

export default Home;




import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthContext';
import CourseCard from '../../Components/CourseCard/CourseCard';

const MyEnrolledCourse = () => {
 const {user}= use(AuthContext)
 const [enroll , setEnroll] = useState([])

    useEffect(()=>{
   axios(`http://localhost:3000/enrolled?email=${user.email}`)
     .then(data=>{
        console.log('after enrolle' ,data.data)
        setEnroll(data.data)
     })

    },[user])
    return (
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10 w-[97%] mx-auto'>
            {
              enroll.map(course=><CourseCard key={course._id}  course={course}></CourseCard>)
            }
        </div>
    );
};

export default MyEnrolledCourse;
import React from 'react';
import { motion } from 'framer-motion';

const instructor = [
  {
    name: 'John Smith',
    role: 'AI & Machine Learning',
    image: 'https://i.ibb.co/8DSSp71w/man2.png',
  },
  {
    name: 'Ava Thompson',
    role: 'App Development',
    image: 'https://i.ibb.co/F4tMqqjZ/girl.jpg',
  },
  {
    name: 'Michael Green',
    role: 'Full Stack Developer',
    image: 'https://i.ibb.co/NnWXDTtf/man3.png',
  },
];

const TopInstructor = () => {
  return (
    <section className="text-center py-16 px-4 bg-base-100">
      <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-6">
        Top Instructors
      </h2>

      <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
        Our top instructors are professionals with years of teaching and industry
        experience. They are passionate about sharing their knowledge and helping
        students reach their highest potential. Learn from the best and master the
        skills you need to excel in your career.
      </p>

      <div className="flex flex-wrap justify-center gap-10 ">
        {instructor.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}           
            whileInView={{ opacity: 1, y: 0 }}       
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.3 }} >
            <div
              className="rounded-full w-72 h-[400px] flex flex-col items-center pt-8 pb-6  transition-transform hover:scale-105 "
            >
              {/* Image Hover Animation */}
              <div className=" overflow-hidden h-94 rounded-t-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="  object-cover"
                />
              </div>

              {/* Name and Role */}
              <div className='bg-amber-100 rounded-b-full w-[288px] py-10'>
                <h3 className="text-lg font-bold text-primary mb-1">{member.name}</h3>
                <p className="text-sm text-secondary font-medium mb-4">{member.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TopInstructor;

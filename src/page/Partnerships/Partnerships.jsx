import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaSchool, FaMapMarkerAlt } from "react-icons/fa";

const partners = [
  {
    name: "Bright Future Learning Center",
    location: "Dhaka, Bangladesh",
    topTeachers: ["Mr. Rahim", "Ms. Ayesha", "Mr. Karim"],
  },
  {
    name: "Global Knowledge Hub",
    location: "Chittagong, Bangladesh",
    topTeachers: ["Ms. Nadia", "Mr. Imran", "Ms. Fatema"],
  },
  {
    name: "NextGen Education",
    location: "Sylhet, Bangladesh",
    topTeachers: ["Mr. Tanvir", "Ms. Sumi", "Mr. Arif"],
  },
  {
    name: "Elite Learning Academy",
    location: "Khulna, Bangladesh",
    topTeachers: ["Ms. Rina", "Mr. Hasan", "Ms. Laila"],
  },
  {
    name: "Master Minds Institute",
    location: "Rajshahi, Bangladesh",
    topTeachers: ["Mr. Amin", "Ms. Jannat", "Mr. Zia"],
  },
];

const Partnerships = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 px-6 md:px-16 py-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Heading */}
      <motion.div
        className="text-center mb-12 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 animate-gradient-x">
          Our Partnerships
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We collaborate with top learning centers and teachers across the country
          to provide quality education.
        </p>
      </motion.div>

      {/* Partners Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200 hover:scale-105 transition-transform flex flex-col justify-between h-70"
          >
            <div>
              {/* Partner Header */}
              <div className="flex items-center gap-3 mb-4">
                <FaSchool className="text-indigo-600 text-2xl" />
                <h2 className="text-xl md:text-2xl font-bold text-gray-800">{partner.name}</h2>
              </div>

              {/* Top Teachers */}
              <div className="flex items-center text-gray-500 mb-2 gap-2 flex-wrap">
                <FaChalkboardTeacher className="text-purple-600" />
                <span className="font-medium">Top Teachers:</span>
                <span>{partner.topTeachers.join(", ")}</span>
              </div>

              {/* Location */}
              <p className="text-gray-500 flex items-center gap-2">
                <FaMapMarkerAlt className="text-pink-600" /> {partner.location}
              </p>
            </div>

            {/* Button at bottom */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition"
            >
              Explore Center
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.div
        className="mt-12 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-gray-500">
          We are proud to work with hundreds of centers and teachers nationwide.
        </p>
      </motion.div>
    </div>
  );
};

export default Partnerships;

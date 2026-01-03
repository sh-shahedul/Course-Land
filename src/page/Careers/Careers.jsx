import { motion } from "framer-motion";
import { FaBriefcase, FaMapMarkerAlt, FaRocket } from "react-icons/fa";

const jobs = [
  {
    title: "Frontend Developer (React.js)",
    location: "Remote / Worldwide",
    type: "Full-time",
    description:
      "Build and maintain dynamic web applications using React.js and modern frontend technologies. Collaborate with designers and backend engineers to create sleek UI.",
  },
  {
    title: "Backend Developer (Node.js)",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    description:
      "Design robust backend services with Node.js and Express. Ensure scalable APIs and optimize server performance.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description:
      "Design modern, engaging interfaces for web and mobile. Create wireframes, prototypes, and work closely with frontend developers.",
  },
  {
    title: "Marketing & Growth Specialist",
    location: "Remote",
    type: "Part-time",
    description:
      "Develop marketing campaigns, social media strategies, and analyze user growth metrics to drive LearnHub forward.",
  },
];

const Careers = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 px-6 md:px-16 py-16 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Page Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 animate-gradient-x">
          Careers at LearnHub
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Join our dynamic team and help us shape the future of learning. Explore
          our open positions below.
        </p>
      </motion.div>

      {/* Job Listings */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform border border-gray-200"
          >
            <div className="flex items-center mb-4">
              <FaBriefcase className="text-purple-600 mr-3 text-2xl" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">{job.title}</h2>
            </div>
            <div className="flex items-center text-gray-500 mb-2 space-x-4">
              <span className="flex items-center gap-1">
                <FaMapMarkerAlt /> {job.location}
              </span>
              <span className="flex items-center gap-1 font-semibold text-purple-600">{job.type}</span>
            </div>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white px-5 py-2 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition"
            >
              <FaRocket /> Apply Now
            </motion.button>
          </motion.div>
        ))}
      </div>

      {/* Footer Note */}
      <motion.div
        className="mt-12 text-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-gray-500">
          Don’t see a role that fits? We’re always looking for talented individuals. Reach out to{" "}
          <a href="mailto:careers@learnhub.com" className="text-purple-600 font-semibold">
            careers@learnhub.com
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default Careers;

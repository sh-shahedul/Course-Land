import { motion } from "framer-motion";
import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const termsData = [
  {
    title: "Introduction",
    content:
      "Welcome to LearnHub! By accessing our platform, you agree to comply with these Terms of Service. Please read them carefully before using our services.",
  },
  {
    title: "Account Registration",
    content:
      "To access certain features, you may need to register an account. You are responsible for keeping your credentials secure and for all activity under your account.",
  },
  {
    title: "User Conduct",
    content:
      "Users must engage respectfully. You cannot post offensive, illegal, or harmful content. Any violations may result in account suspension or termination.",
  },
  {
    title: "Content Usage",
    content:
      "All educational materials are for personal use only. Redistribution, commercial use, or modification without permission is strictly prohibited.",
  },
  {
    title: "Privacy Policy",
    content:
      "We respect your privacy. Data collected is used to improve your learning experience and is not shared with third parties without consent.",
  },
  {
    title: "Termination",
    content:
      "We reserve the right to suspend or terminate accounts that violate these terms or are inactive for extended periods.",
  },
  {
    title: "Changes to Terms",
    content:
      "We may update these Terms occasionally. Users are encouraged to review them regularly. Continued use of our services constitutes acceptance of the updated terms.",
  },
];

const TermsAndService = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-pink-50 to-indigo-50 p-8 md:p-16">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 animate-gradient-x">
          Terms & Services
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          LearnHub is committed to providing a safe and productive learning
          environment. Please read our terms carefully.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto space-y-4">
        {termsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none hover:bg-purple-50 transition"
              onClick={() => toggleSection(index)}
            >
              <span className="text-lg md:text-xl font-semibold text-gray-800">
                {item.title}
              </span>
              {openIndex === index ? (
                <MdExpandLess size={28} className="text-purple-600" />
              ) : (
                <MdExpandMore size={28} className="text-purple-600" />
              )}
            </button>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                openIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.4 }}
              className="px-6 pb-4 text-gray-600 text-sm md:text-base overflow-hidden"
            >
              {item.content}
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <p className="text-gray-500">
          By continuing to use LearnHub, you agree to these Terms of Service.
        </p>
      </motion.div>
    </div>
  );
};

export default TermsAndService;

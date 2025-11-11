import React from "react";
import { useNavigate } from "react-router";
import { AlertTriangle } from "lucide-react";

const CourseErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50">
      {/* Icon */}
      <div className="bg-indigo-100 p-10 rounded-full shadow-md mb-6">
        <AlertTriangle className="text-pink-500 w-16 h-16" />
      </div>

      {/* Error Code / Message */}
      <h1 className="text-5xl font-bold text-pink-600 mb-3">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-pink-600 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 max-w-md text-center mb-8">
        The Page you are looking for does not exist or has been removed.
        Please check other Page or try searching again.
      </p>

      {/* Action Buttons */}
      <div className="flex gap-3 flex-wrap justify-center">
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-full bg-linear-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-medium hover:from-indigo-500 hover:to-pink-500 transition-all duration-300"
        >
          Back to Home
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2 rounded-full border-2 border-pink-500 text-pink-500 font-medium hover:bg-pink-50 transition-all duration-300"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default CourseErrorPage;

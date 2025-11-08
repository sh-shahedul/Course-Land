import React, { useState, useEffect, use } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthContext";
import { useLocation } from "react-router";
const ForgotPassword = () => {
  const { forgotUser } = use(AuthContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
   useEffect(() => {
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
   }, [location.state]);
  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address!");
      return;
    }
    forgotUser(email)
      .then(() => {
        toast.success("📧 Password reset link sent! Redirecting to Gmail...");       
        setTimeout(() => {
          window.location.href = "https://mail.google.com/";
        }, 1000);
      })
      .catch((error) => {
        setError(error.message);
        toast.error("❌ Failed to send reset email!");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-100 via-orange-200 to-orange-50">
      <div className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-md text-center">
        <h2 className="text-2xl font-bold text-orange-500 mb-2">
          Forgot Password?
        </h2>
        <p className="text-gray-500 mb-6">
          Enter your email address and we’ll send you a password reset link.
        </p>

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full focus:outline-none focus:border-orange-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {error && <p className="text-red-600 font-medium">{error}</p>}

          <button
            type="submit"
            className="btn w-full bg-linear-to-r from-orange-400 to-pink-500 text-white hover:scale-105 transform transition-all duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

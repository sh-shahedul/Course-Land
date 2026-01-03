import React, { use, useEffect, useState } from 'react';
// import { AuthContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCamera, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthContext';

const MyProfile = () => {
  const { user, updateProfileuser, setuser } = use(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photo: ''
  });

  // Fetch user data from MongoDB
  useEffect(() => {
    if (user?.email) {
      fetch(`https://online-learning-platform-server-livid.vercel.app/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
          setUserData(data);
          setFormData({
            name: data?.name || user.displayName || '',
            email: data?.email || user.email || '',
            photo: data?.photo || user.photoURL || ''
          });
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setFormData({
            name: user.displayName || '',
            email: user.email || '',
            photo: user.photoURL || ''
          });
        });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Update Firebase Profile
      await updateProfileuser({
        displayName: formData.name,
        photoURL: formData.photo
      });

      // Update context
      setuser({
        ...user,
        displayName: formData.name,
        photoURL: formData.photo
      });

      // Update MongoDB
      const updateData = {
        name: formData.name,
        photo: formData.photo
      };

      await fetch(`https://online-learning-platform-server-livid.vercel.app/users/${user.email}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      });

      toast.success('✅ Profile updated successfully!');
      setIsEditing(false);
      setLoading(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      toast.error('❌ Failed to update profile');
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: userData?.name || user.displayName || '',
      email: userData?.email || user.email || '',
      photo: userData?.photo || user.photoURL || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
            My Profile
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Manage your personal information
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
        >
          {/* Header with Avatar */}
          <div className="relative h-48 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
            <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={formData.photo || 'https://via.placeholder.com/150'}
                  alt="Profile"
                  className="w-32 h-32 rounded-full border-8 border-white dark:border-gray-800 shadow-xl object-cover"
                />
                {isEditing && (
                  <div className="absolute bottom-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-2 shadow-lg">
                    <FaCamera className="text-white text-xl" />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="pt-20 pb-8 px-8">
            {/* User Role Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200 dark:border-purple-800">
                🎓 {userData?.role || ''}
              </span>
            </div>

            {/* Edit/Save Buttons */}
            <div className="flex justify-center gap-3 mb-8">
              {!isEditing ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <FaEdit /> Edit Profile
                </motion.button>
              ) : (
                <>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleUpdate}
                    disabled={loading}
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
                  >
                    <FaSave /> {loading ? 'Saving...' : 'Save Changes'}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCancel}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <FaTimes /> Cancel
                  </motion.button>
                </>
              )}
            </div>

            {/* Profile Fields */}
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  <FaUser className="text-pink-500" /> Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Field (Read Only) */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  <FaEnvelope className="text-purple-500" /> Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-not-allowed"
                  placeholder="Email cannot be changed"
                />
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ℹ️ Email cannot be changed for security reasons
                </p>
              </div>

              {/* Photo URL Field */}
              <div>
                <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
                  <FaCamera className="text-indigo-500" /> Photo URL
                </label>
                <input
                  type="url"
                  name="photo"
                  value={formData.photo}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300"
                  placeholder="Enter photo URL"
                />
              </div>

              {/* Account Info */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
                  Account Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-pink-200 dark:border-pink-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Member Since</p>
                    <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      {userData?.createdAt 
                        ? new Date(userData.createdAt).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })
                        : 'Recently Joined'}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
                    <p className="text-sm text-gray-600 dark:text-gray-400">Account Status</p>
                    <p className="text-lg font-bold text-green-600 dark:text-green-400">
                      ✅ Active
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MyProfile;
// import React, { use, useEffect, useState } from 'react';
// // import { AuthContext } from '../Provider/AuthContext';
// import toast from 'react-hot-toast';
// import { motion } from 'framer-motion';
// import { FaUser, FaEnvelope, FaCamera, FaEdit, FaSave, FaTimes } from 'react-icons/fa';
// import { AuthContext } from '../../Provider/AuthContext';

// const MyProfile = () => {
//   const { user, updateProfileuser, setuser } = use(AuthContext);
//   const [isEditing, setIsEditing] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [userData, setUserData] = useState(null);
  
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     photo: ''
//   });

//   // Fetch user data from MongoDB
//   useEffect(() => {
//     if (user?.email) {
//       fetch(`https://online-learning-platform-server-livid.vercel.app/users/${user.email}`)
//         .then(res => res.json())
//         .then(data => {
//           setUserData(data);
//           setFormData({
//             name: data?.name || user.displayName || '',
//             email: data?.email || user.email || '',
//             photo: data?.photo || user.photoURL || ''
//           });
//         })
//         .catch(error => {
//           console.error('Error fetching user data:', error);
//           setFormData({
//             name: user.displayName || '',
//             email: user.email || '',
//             photo: user.photoURL || ''
//           });
//         });
//     }
//   }, [user]);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Update Firebase Profile
//       await updateProfileuser({
//         displayName: formData.name,
//         photoURL: formData.photo
//       });

//       // Update context
//       setuser({
//         ...user,
//         displayName: formData.name,
//         photoURL: formData.photo
//       });

//       // Update MongoDB
//       const updateData = {
//         name: formData.name,
//         photo: formData.photo
//       };

//       await fetch(`https://online-learning-platform-server-livid.vercel.app/users/${user.email}`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(updateData)
//       });

//       toast.success('✅ Profile updated successfully!');
//       setIsEditing(false);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error updating profile:', error);
//       toast.error('❌ Failed to update profile');
//       setLoading(false);
//     }
//   };

//   const handleCancel = () => {
//     setFormData({
//       name: userData?.name || user.displayName || '',
//       email: userData?.email || user.email || '',
//       photo: userData?.photo || user.photoURL || ''
//     });
//     setIsEditing(false);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900/10 dark:to-indigo-900/10 py-16 px-4">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-center mb-12"
//         >
//           <h1 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
//             My Profile
//           </h1>
//           <p className="text-xl text-gray-600 dark:text-gray-300">
//             Manage your personal information
//           </p>
//         </motion.div>

//         {/* Profile Card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700"
//         >
//           {/* Header with Avatar */}
//           <div className="relative h-48 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500">
//             <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
//               <div className="relative">
//                 <motion.img
//                   whileHover={{ scale: 1.05 }}
//                   src={formData.photo || 'https://via.placeholder.com/150'}
//                   alt="Profile"
//                   className="w-32 h-32 rounded-full border-8 border-white dark:border-gray-800 shadow-xl object-cover"
//                 />
//                 {isEditing && (
//                   <div className="absolute bottom-0 right-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full p-2 shadow-lg">
//                     <FaCamera className="text-white text-xl" />
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Content */}
//           <div className="pt-20 pb-8 px-8">
            

//             {/* Edit/Save Buttons */}
//             <div className="flex justify-center gap-3 mb-8">
//               {!isEditing ? (
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setIsEditing(true)}
//                   className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//                 >
//                   <FaEdit /> Edit Profile
//                 </motion.button>
//               ) : (
//                 <>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleUpdate}
//                     disabled={loading}
//                     className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
//                   >
//                     <FaSave /> {loading ? 'Saving...' : 'Save Changes'}
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={handleCancel}
//                     className="flex items-center gap-2 px-6 py-3 bg-gray-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
//                   >
//                     <FaTimes /> Cancel
//                   </motion.button>
//                 </>
//               )}
//             </div>

//             {/* Profile Fields */}
//             <div className="space-y-6">
//               {/* Name Field */}
//               <div>
//                 <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
//                   <FaUser className="text-pink-500" /> Full Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   disabled={!isEditing}
//                   className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300"
//                   placeholder="Enter your name"
//                 />
//               </div>

//               {/* Email Field (Read Only) */}
//               <div>
//                 <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
//                   <FaEnvelope className="text-purple-500" /> Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   disabled
//                   className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 cursor-not-allowed"
//                   placeholder="Email cannot be changed"
//                 />
//                 <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
//                   ℹ️ Email cannot be changed for security reasons
//                 </p>
//               </div>

//               {/* Photo URL Field */}
//               <div>
//                 <label className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold mb-2">
//                   <FaCamera className="text-indigo-500" /> Photo URL
//                 </label>
//                 <input
//                   type="url"
//                   name="photo"
//                   value={formData.photo}
//                   onChange={handleChange}
//                   disabled={!isEditing}
//                   className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:border-purple-500 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all duration-300"
//                   placeholder="Enter photo URL"
//                 />
//               </div>

//               {/* Account Info */}
//               <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
//                 <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-4">
//                   Account Information
//                 </h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 p-4 rounded-xl border border-pink-200 dark:border-pink-800">
//                     <p className="text-sm text-gray-600 dark:text-gray-400">Member Since</p>
//                     <p className="text-lg font-bold text-gray-800 dark:text-gray-200">
//                       {userData?.createdAt 
//                         ? new Date(userData.createdAt).toLocaleDateString('en-US', { 
//                             year: 'numeric', 
//                             month: 'long', 
//                             day: 'numeric' 
//                           })
//                         : 'Recently Joined'}
//                     </p>
//                   </div>
//                   <div className="bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 p-4 rounded-xl border border-purple-200 dark:border-purple-800">
//                     <p className="text-sm text-gray-600 dark:text-gray-400">Account Status</p>
//                     <p className="text-lg font-bold text-green-600 dark:text-green-400">
//                       ✅ Active
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
import React, { useEffect, useState, useContext } from 'react';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaCamera, FaEdit, FaSave, FaTimes, FaPhone, FaMapMarkerAlt, FaBriefcase, FaGraduationCap, FaShieldAlt, FaBell, FaLock, FaEye } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthContext';

const MyProfile = () => {
  const { user, updateProfileuser, setuser } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photo: '',
    phone: '',
    location: '',
    bio: '',
    occupation: '',
    education: ''
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
            photo: data?.photo || user.photoURL || '',
            phone: data?.phone || '',
            location: data?.location || '',
            bio: data?.bio || '',
            occupation: data?.occupation || '',
            education: data?.education || ''
          });
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
          setFormData({
            name: user.displayName || '',
            email: user.email || '',
            photo: user.photoURL || '',
            phone: '',
            location: '',
            bio: '',
            occupation: '',
            education: ''
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
        photo: formData.photo,
        phone: formData.phone,
        location: formData.location,
        bio: formData.bio,
        occupation: formData.occupation,
        education: formData.education
      };

      const response = await fetch(`https://online-learning-platform-server-livid.vercel.app/users/${user.email}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      });

      if (response.ok) {
        // Update local userData state immediately
        const updatedUserData = {
          ...userData,
          ...updateData
        };
        setUserData(updatedUserData);
        
        // Also update formData to reflect changes in preview
        setFormData({
          ...formData,
          ...updateData
        });
        
        toast.success('✅ Profile updated successfully!');
        setIsEditing(false);
      } else {
        throw new Error('Update failed');
      }
      
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
      photo: userData?.photo || user.photoURL || '',
      phone: userData?.phone || '',
      location: userData?.location || '',
      bio: userData?.bio || '',
      occupation: userData?.occupation || '',
      education: userData?.education || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Account Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your profile information and account settings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden sticky top-8">
              <div className="p-4">
                <nav className="space-y-1">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === 'profile'
                        ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <FaUser className="text-lg" />
                    <span>Profile</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('security')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === 'security'
                        ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <FaShieldAlt className="text-lg" />
                    <span>Security</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('notifications')}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeTab === 'notifications'
                        ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 font-medium'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                    }`}
                  >
                    <FaBell className="text-lg" />
                    <span>Notifications</span>
                  </button>
                </nav>
              </div>
            </div>
          </motion.div>

          {/* Main Content - 2 Column Layout */}
          <div className="lg:col-span-9 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Edit Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              {activeTab === 'profile' && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                  {/* Edit Header */}
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          Edit Profile
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          Update your personal information
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {!isEditing ? (
                          <button
                            onClick={() => setIsEditing(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200"
                          >
                            <FaEdit className="text-sm" />
                            <span>Edit</span>
                          </button>
                        ) : (
                          <>
                            <button
                              onClick={handleUpdate}
                              disabled={loading}
                              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50"
                            >
                              <FaSave className="text-sm" />
                              <span>{loading ? 'Saving...' : 'Save'}</span>
                            </button>
                            <button
                              onClick={handleCancel}
                              className="flex items-center gap-2 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors duration-200"
                            >
                              <FaTimes className="text-sm" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Profile Form */}
                  <div className="p-6">
                    <div className="space-y-6">
                      {/* Photo URL */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <FaCamera className="inline mr-2 text-purple-500" />
                          Profile Photo URL
                        </label>
                        <input
                          type="url"
                          name="photo"
                          value={formData.photo}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all"
                          placeholder="https://example.com/photo.jpg"
                        />
                      </div>

                      {/* Full Name */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <FaUser className="inline mr-2 text-purple-500" />
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <FaEnvelope className="inline mr-2 text-purple-500" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          disabled
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 cursor-not-allowed"
                        />
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          Email cannot be changed
                        </p>
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <FaPhone className="inline mr-2 text-purple-500" />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>

                      {/* Location */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <FaMapMarkerAlt className="inline mr-2 text-purple-500" />
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all"
                          placeholder="City, Country"
                        />
                      </div>

                      {/* Occupation */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <FaBriefcase className="inline mr-2 text-purple-500" />
                          Occupation
                        </label>
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all"
                          placeholder="e.g., Software Engineer"
                        />
                      </div>

                      {/* Education */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          <FaGraduationCap className="inline mr-2 text-purple-500" />
                          Education
                        </label>
                        <input
                          type="text"
                          name="education"
                          value={formData.education}
                          onChange={handleChange}
                          disabled={!isEditing}
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all"
                          placeholder="e.g., Bachelor's in CS"
                        />
                      </div>

                      {/* Bio */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleChange}
                          disabled={!isEditing}
                          rows="4"
                          className="w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-white disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:cursor-not-allowed transition-all resize-none"
                          placeholder="Tell us about yourself..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'security' && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    Security Settings
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3">
                        <FaLock className="text-gray-600 dark:text-gray-400" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">Change Password</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Update your password regularly</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-lg transition-colors">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                    Notification Preferences
                  </h3>
                  <div className="space-y-4">
                    {['Email Notifications', 'Course Updates'].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
                        <p className="font-medium text-gray-900 dark:text-white">{item}</p>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right Column - Profile Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 sticky top-8">
                {/* Preview Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400">
                    <FaEye />
                    <h3 className="text-xl font-bold">Live Preview</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    See how your profile will look
                  </p>
                </div>

                {/* Profile Preview Content */}
                <div className="p-6">
                  {/* Avatar & Basic Info */}
                  <div className="text-center mb-6">
                    <img
                      src={formData.photo || 'https://via.placeholder.com/150'}
                      alt="Profile Preview"
                      className="w-32 h-32 rounded-full object-cover border-4 border-purple-100 dark:border-purple-900 mx-auto mb-4 shadow-lg"
                    />
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {formData.name || 'Your Name'}
                    </h2>
                    {formData.occupation && (
                      <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">
                        {formData.occupation}
                      </p>
                    )}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {formData.email}
                    </p>
                  </div>

                  {/* Bio */}
                  {formData.bio && (
                    <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed text-center">
                        {formData.bio}
                      </p>
                    </div>
                  )}

                  {/* Details */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <FaPhone className="text-purple-500" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {formData.phone || 'No phone number added'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <FaMapMarkerAlt className="text-purple-500" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {formData.location || 'No location added'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <FaBriefcase className="text-purple-500" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {formData.occupation || 'No occupation added'}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <FaGraduationCap className="text-purple-500" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">
                        {formData.education || 'No education added'}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                        <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                          {userData?.coursesEnrolled || 0}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Courses</p>
                      </div>
                      <div className="text-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                          Active
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Status</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
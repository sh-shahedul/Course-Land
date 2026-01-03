
// import React, { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { FaTrash, FaSearch } from "react-icons/fa";
// import Loading from "../../Components/Loading/Loading";

// const API = "https://online-learning-platform-server-livid.vercel.app";

// const UserManagement = () => {
//   const [search, setSearch] = useState("");
//   const queryClient = useQueryClient();

//   /* ================= GET USERS ================= */
//   const { data: users = [], isLoading, isError } = useQuery({
//     queryKey: ["users"],
//     queryFn: async () => {
//       const res = await axios.get(`${API}/users`);
//       return res.data;
//     },
//   });

//   /* ================= UPDATE ROLE ================= */
//   const roleMutation = useMutation({
//     mutationFn: ({ email, role }) =>
//       axios.patch(`${API}/users/${email}`, { role }),
//     onSuccess: () => {
//       toast.success("Role updated");
//       queryClient.invalidateQueries(["users"]);
//     },
//     onError: () => toast.error("Role update failed"),
//   });

//   /* ================= DELETE USER ================= */
//   const deleteMutation = useMutation({
//     mutationFn: (email) => axios.delete(`${API}/users/${email}`),
//     onSuccess: () => {
//       toast.success("User deleted");
//       queryClient.invalidateQueries(["users"]);
//     },
//     onError: () => toast.error("Delete failed"),
//   });

//   /* ================= SEARCH ================= */
//   const filteredUsers = users.filter((u) =>
//     `${u.name} ${u.email} ${u.role}`.toLowerCase().includes(search.toLowerCase())
//   );

//   if (isLoading) return <Loading />;
//   if (isError)
//     return <p className="text-center text-red-500 font-semibold">Error loading users!</p>;

//   return (
//     <div className="p-8 md:p-10">
//       <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-gradient bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
//         User Management
//       </h2>

//       {/* SEARCH */}
//       <div className="relative max-w-md mx-auto mb-8">
//         <FaSearch className="absolute left-3 top-3 text-gray-400" />
//         <input
//           onChange={(e) => setSearch(e.target.value)}
//           placeholder="Search user..."
//           className="w-full pl-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
//         />
//       </div>

//       {/* TABLE */}
//       <div className="overflow-x-auto shadow-lg rounded-lg">
//         <table className="w-full border-collapse border border-gray-200">
//           <thead className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white">
//             <tr>
//               <th className="py-3 px-4 text-left">Name</th>
//               <th className="py-3 px-4 text-left">Email</th>
//               <th className="py-3 px-4 text-left">Role</th>
//               <th className="py-3 px-4 text-left">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredUsers.map((user, idx) => (
//               <tr
//                 key={user._id}
//                 className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
//               >
//                 <td className="py-3 px-4 font-medium">{user.name}</td>
//                 <td className="py-3 px-4">{user.email}</td>

//                 <td className="py-3 px-4">
//                   <select
//                     value={user.role || "student"}
//                     onChange={(e) =>
//                       roleMutation.mutate({
//                         email: user.email,
//                         role: e.target.value,
//                       })
//                     }
//                     className="border border-gray-300 rounded-lg px-3 py-1 shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
//                   >
//                     <option value="student">Student</option>
//                     <option value="admin">Admin</option>
//                   </select>
//                 </td>

//                 <td className="py-3 px-4 flex gap-2">
//                   <button
//                     onClick={() => deleteMutation.mutate(user.email)}
//                     className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full shadow-md transition"
//                   >
//                     <FaTrash />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       <p className="text-center mt-6 text-gray-500">
//         Showing {filteredUsers.length} users
//       </p>
//     </div>
//   );
// };

// export default UserManagement;
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";
import { FaTrash, FaSearch } from "react-icons/fa";
import Loading from "../../Components/Loading/Loading";

const API = "https://online-learning-platform-server-livid.vercel.app";

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const queryClient = useQueryClient();

  /* ================= GET USERS ================= */
  const { data: users = [], isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axios.get(`${API}/users`);
      return res.data;
    },
  });

  /* ================= UPDATE ROLE ================= */
  const roleMutation = useMutation({
    mutationFn: ({ email, role }) =>
      axios.patch(`${API}/users/${email}`, { role }),
    onSuccess: () => {
      Swal.fire({
        icon: "success",
        title: "Role updated",
        timer: 1200,
        showConfirmButton: false,
      });
      queryClient.invalidateQueries(["users"]);
    },
    onError: () =>
      Swal.fire({
        icon: "error",
        title: "Role update failed",
        timer: 1200,
        showConfirmButton: false,
      }),
  });

  /* ================= DELETE USER ================= */
  const deleteMutation = useMutation({
    mutationFn: (email) => axios.delete(`${API}/users/${email}`),
    onSuccess: () => queryClient.invalidateQueries(["users"]),
  });

  const handleDelete = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMutation.mutate(email);
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };

  /* ================= SEARCH ================= */
  const filteredUsers = users.filter((u) =>
    `${u.name} ${u.email} ${u.role}`.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <Loading />;
  if (isError)
    return <p className="text-center text-red-500 font-semibold">Error loading users!</p>;

  return (
    <div className="p-8 md:p-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-gradient bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 bg-clip-text text-transparent">
        User Management
      </h2>

      {/* SEARCH */}
      <div className="relative max-w-md mx-auto mb-8">
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search user..."
          className="w-full pl-10 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-pink-400 focus:border-pink-400 transition"
        />
      </div>

      {/* TABLE */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="w-full border-collapse border border-gray-200">
          <thead className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-500 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Role</th>
              <th className="py-3 px-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user, idx) => (
              <tr
                key={user._id}
                className={idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="py-3 px-4 font-medium">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>

                <td className="py-3 px-4">
                  <select
                    value={user.role || "student"}
                    onChange={(e) =>
                      roleMutation.mutate({
                        email: user.email,
                        role: e.target.value,
                      })
                    }
                    className="border border-gray-300 rounded-lg px-3 py-1 shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition"
                  >
                    <option value="student">Student</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>

                <td className="py-3 px-4 flex gap-2">
                  <button
                    onClick={() => handleDelete(user.email)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full shadow-md transition"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center mt-6 text-gray-500">
        Showing {filteredUsers.length} users
      </p>
    </div>
  );
};

export default UserManagement;

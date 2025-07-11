// import React, { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import api from "../config/api";
// import img from "../assets/PHOTO.jpg"
// import img2 from "../assets/backgroundba.jpg"
// const UserDashboard = () => {
//   const [userdata, setUserData] = useState({
//     fullName: "John Doe",
//     email: "john.doe@example.com",
//     phone: "123-456-7890",
//   });

//   const fetchUserData = async () => {
//     try {
//       const res = await api.get("/user/profile");
//       setUserData(res.data.data);
//       toast.success(res.data.message);
//     } catch (error) {
//       toast.error(
//         `Error : ${error.response?.status || error.message} | ${
//           error.response?.data.message || ""
//         }`
//       );
//     }
//   };

//   useEffect(() => {
//     fetchUserData();
//   }, []);

//   return (
//     // <>
//     //   <div className="flex flex-col items-center justify-center bg-gray-100">
       
//     //     <h1 className="text-2xl font-bold">User Dashboard</h1>
//     //     <p className="text-gray-600">Welcome to your dashboard!</p>
//     //   </div>

//     //   <div className="bg-white mx-auto my-5 w-[25%] border p-6 rounded-lg shadow-md grid justify-around gap-5">
//     //     <h3>
//     //       <b>Name :</b> {userdata.fullName}
//     //     </h3>
//     //     <h3>
//     //       <b>Email :</b> {userdata.email}
//     //     </h3>
//     //     <h3>
//     //       <b>Phone :</b> {userdata.phone}
//     //     </h3>
//     //   </div>
//     // </>
//     <div className="min-h-screen bg-white font-sans">
//       {/* Header / Cover Image */}
//       <div className="relative mt-[-10%]">
//         <img 
//           src={img2}
//           alt="Cover"
//           className="w-full h-64 object-cover rounded-b-xl relative"
//         />
//         <button className="absolute bottom-4 right-4 bg-white px-4 py-1 text-sm rounded-md border shadow-sm">
//           ✏️ Edit cover
//         </button>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-col lg:flex-row px-6  absolute lg:px-20 -mt-20">
//         {/* Sidebar */}
//         <div className="bg-white shadow-lg rounded-xl w-full lg:w-72 p-6">
//           <div className="flex flex-col items-center absolute">
//             <img
//               src={img}
//               className="w-24 h-24 rounded-full border-4 border-white -mt-16 "
//               alt="Profile"
//             />
//             <h2 className="text-xl font-semibold mt-4 gap-5">{userdata.fullName}</h2>
//             <p className="text-gray-500 gap-5" >{userdata.email}</p>
//           </div>

//           <div className="mt-6 space-y-2">
//             <button className="w-full flex items-center px-4 py-2 text-pink-600 bg-pink-50 rounded-md font-medium">
//               <span className="mr-2">📋</span> Orders
//             </button>
//             <button className="w-full flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md gap-3">
//               <span className="mr-2">⚙️</span> Settings
//             </button>
//           </div>
//         </div>

//         {/* Main Panel */}
//         <div className="flex-1 mt-10 lg:mt-0 lg:ml-10">
//           <h1 className="text-2xl font-bold mb-4">Orders</h1>

//           {/* Tabs */}
//           <div className="flex gap-4 mb-6">
//             <button className="bg-pink-500 text-white px-4 py-2 rounded-md font-medium">
//               In Progress
//             </button>
//             <button className="text-gray-600 hover:text-black px-4 py-2 rounded-md">
//               Order History
//             </button>
//             <button className="text-gray-600 hover:text-black px-4 py-2 rounded-md">
//               Return Requests
//             </button>
//           </div>

//           {/* Shipment List */}
//           <div className="bg-white rounded-lg p-6 shadow border">
//             <h2 className="font-semibold text-lg mb-2">
//               2 Shipments{" "}
//               <span className="text-sm text-gray-500">
//                 (Order# 403-3644257-9688312)
//               </span>
//             </h2>
//             <button className="float-right text-gray-600 hover:text-black">
//               🖨️
//             </button>
//             <hr className="mt-4" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
  




import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../config/api";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState("");

  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data.message || ""
        }`
      );
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-2xl font-bold">User Dashboard</h1>
        <p className="text-gray-600">Welcome to your dashboard!</p>
      </div>

      <div className="bg-white relative mx-auto my-5 w-[50%] border p-6 rounded-lg shadow-md flex justify-center gap-20 items-center">
        <div className="">
          <div className="w-50 h-50 rounded-full">
            <img
              src={userdata.photo}
              alt=""
              className="w-50 h-50 rounded-full object-cover"
            />
          </div>
          
        </div>
        <div className="grid justify-around gap-5">
          <h3>
            <b>Name :</b> {userdata.fullName}
          </h3>
          <h3>
            <b>Email :</b> {userdata.email}
          </h3>
          <h3>
            <b>Phone :</b> {userdata.phone}
          </h3>
        </div>
        <button
          className="absolute top-1 right-1 border p-2 rounded-lg flex gap-2 justify-center items-center bg-rose-300 hover:bg-rose-400 text-lg"
          onClick={() => navigate("/userDashboardEdit")}
        >
          {" "}
          <CiEdit />
          Edit
        </button>
      </div>
    </>
  );
};

export default UserDashboard;
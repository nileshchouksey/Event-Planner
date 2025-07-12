
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import api from "../../config/api";
import { FaUserEdit } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ProfileEditModal from "./ProfileEditModal";


const Profile = () => {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState("");
  const [isEditModalOpen,setIsEditModalOpen] = useState(false)


  const fetchUserData = async () => {
    try {
      const res = await api.get("/user/profile");
      setUserData(res.data.data);
      toast.success(res.data.message);
    } catch (error) {
      toast.error(
        `Error : ${error.response?.status || error.message} | ${
          error.response?.data?.message || ""
        }`
      );
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  // Fallback image if no photo
  const fallbackPic = '/PHOTO.jpg';
  const profilePic = userdata.photo || fallbackPic;

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-amber-100 flex flex-col items-center py-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
        {/* <button
          className="border border-white hover:scale-105 text-white p-2 rounded-lg font-bold flex gap-2 justify-center items-center hover:bg-pink-600 text-lg"
          onClick={() => setIsEditModalOpen(true)}
        >
          {" "}
          <FaUserEdit className="text-xl" />
          Edit
        </button> */}
        {/* Profile Image & Basic Info */}
        <div className="flex flex-col items-center md:w-1/3">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-300 shadow-md mb-4">
            <img
              src={profilePic}
              alt="profilepic"
              className="w-full h-full object-cover"
              onError={e => { e.target.onerror = null; e.target.src = fallbackPic; }}
            />
          </div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">{userdata.fullName || "User Name"}</h2>
          <p className="text-gray-500 mb-2">{userdata.occupation || "Occupation"}</p>
          {/* <button
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
            onClick={() => navigate("/customer/profile/edit")}
          >
            <CiEdit size={20} /> Edit Profil
          </button> */}
          <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow hover:bg-blue-600 transition"
          onClick={() => setIsEditModalOpen(true)}
        >
          {" "}
          <FaUserEdit className="text-xl" />
          Edit Profile
        </button>
        </div>

        {/* Details Section */}
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-600 mb-2">Contact Info</h3>
            <div className="mb-2"><span className="font-medium">Email:</span> <span>{userdata.email || "-"}</span></div>
            <div className="mb-2"><span className="font-medium">Phone:</span> <span>{userdata.phone || "-"}</span></div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-amber-600 mb-2">Personal Info</h3>
            <div className="mb-2"><span className="font-medium">Gender:</span> <span>{userdata.gender || "-"}</span></div>
            <div className="mb-2"><span className="font-medium">City:</span> <span>{userdata.city || "-"}</span></div>
            <div className="mb-2"><span className="font-medium">State:</span> <span>{userdata.state || "-"}</span></div>
          </div>
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Address</h3>
            <div className="mb-2"><span className="font-medium">Address:</span> <span>{userdata.address || "-"}</span></div>
          </div>
        </div>
      </div>
    </div>
    
      <ProfileEditModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
        }}
        oldData={userdata}
      />
    </>
  );
};

export default Profile;

import React from "react";
import {
  FaTachometerAlt,
  FaUser,
  FaCalendarCheck,
  FaLifeRing,
  FaCommentDots,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ active, setActive }) => {
  // Dummy user info for avatar and name (replace with props or context if available)
  const userName = "Customer";
  const avatar = "/PHOTO.jpg";

  const menuItems = [
    { key: "overview", label: "Overview", icon: <FaTachometerAlt /> },
    { key: "profile", label: "Profile", icon: <FaUser /> },
    { key: "bookings", label: "Bookings", icon: <FaCalendarCheck /> },
    { key: "support", label: "Support", icon: <FaLifeRing /> },
    { key: "feedback", label: "Feedback", icon: <FaCommentDots /> },
  ];

  return (
    <aside className="w-80 bg-white shadow-xl rounded-2xl min-h-[87vh] p-6 flex flex-col justify-between">
      {/* Top Section: Avatar & Title */}
      <div>
        <div className="flex flex-col items-center mb-6">
          <img src={avatar} alt="avatar" className="w-20 h-20 rounded-full border-4 border-blue-300 shadow mb-2 object-cover" />
          <span className="text-lg font-semibold text-gray-700">{userName}</span>
        </div>
        <div className="border-b pb-3 mb-4 text-center">
          <span className="text-2xl font-bold text-blue-600">Customer Dashboard</span>
        </div>
        <nav>
          <ul className="flex flex-col gap-2">
            {menuItems.map(item => (
              <li
                key={item.key}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-lg cursor-pointer border border-transparent transition-all duration-200 ${
                  active === item.key
                    ? "bg-blue-500 text-white shadow-md"
                    : "hover:bg-blue-100 hover:text-blue-700 hover:scale-[1.04] hover:shadow-lg group"
                }`}
                onClick={() => setActive(item.key)}
              >
                <span className={`text-xl transition-colors duration-200 ${active === item.key ? "text-white" : "text-blue-500 group-hover:text-blue-700"}`}>{item.icon}</span>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Logout Button */}
      <div className="pt-6">
        <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg text-lg font-bold border border-red-500 text-red-500 bg-white hover:bg-red-500 hover:text-white transition-all shadow">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
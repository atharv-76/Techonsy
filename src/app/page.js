"use client";

import { useState } from "react";
import Modal from "@/Components/Modal";
import UserPage from "./client";
import AdminPage from "./Admin";
import { ToastContainer, toast } from "react-toastify";

export default function Home() {
  const [modalType, setModalType] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false); // Track if user is logged in
  const [userRole, setUserRole] = useState(""); // Track user role (Admin/User)

  const handleLoginSuccess = (role) => {
    setLoggedIn(true);
    setUserRole(role);
    setModalType(null); // Close modal
  };

  return (
    <div>

    {
      !loggedIn ? (
          <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900" >
              <h1 className="text-2xl font-bold mb-6">Welcome to Login/Register System</h1>
              <div className="space-x-4">
                <button
                  onClick={() => setModalType("Login")}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Login
                </button>
                <button
                  onClick={() => setModalType("Register")}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Register
                </button>
              </div>
          </div>
              
        ) : (
            <>
            {userRole === "Admin" ? 
            <AdminPage /> : 
            <UserPage />}
            </>
        )
    }
      
      <Modal
        isOpen={!!modalType}
        onClose={() => setModalType(null)}
        type={modalType}
        onLoginSuccess={handleLoginSuccess} // Pass the callback to Modal
      />
    <ToastContainer/>
</div>
  );
}

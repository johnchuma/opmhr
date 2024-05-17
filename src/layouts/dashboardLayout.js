import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar";
import { useContext, useState } from "react";
import { UserContext } from "../auth/privateRoute";
import { Toaster } from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
const DashboardLayout = () => {
  const { user } = useContext(UserContext);
  const [showLogout, setshowLogout] = useState(false);
  return (
    <div>
      <Toaster position="top-right" />
      <div className="flex">
        <div className=" w-3/12 h-screen bg-dark px-5 fixed pt-5 ">
          <Sidebar />
        </div>
        <div className=" w-9/12 ms-auto min-h-screen  bg-white  text-textColor ">
          <div className="py-5 fixed w-9/12 items-center ms-auto bg-white border-b border-borderColor z-10 flex  justify-between px-10">
            <div>
              <h1 className="text-xl text-textColor">Welcome, {user.name}</h1>
              {/* <p>Welcome</p> */}
            </div>
            <div
              onClick={() => {
                setshowLogout(!showLogout);
              }}
              className="flex space-x-1 relative items-center"
            >
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user.profileURL}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-muted"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              {showLogout && (
                <div className="absolute right-0 bg-white py-3 px-4 mt-24 shadow-lg">
                  <button
                    onClick={() => {
                      setshowLogout(!showLogout);
                      signOut(auth);
                    }}
                    className="flex text-sm items-center text-muted "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                      />
                    </svg>
                    <div> Logout</div>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="px-10 py-5 mt-20">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

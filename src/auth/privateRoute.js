import { createContext, useEffect, useState } from "react";
import { getUser } from "../controllers/authController";
import { auth } from "../utils/firebase";
import { Outlet, Navigate, useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
export const UserContext = createContext();
const PrivateRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser(user.email).then((data) => {
          setUser(data);
          switch (data.role) {
            case "User":
              navigate("/dashboard/cv");
              break;
            case "Company":
              navigate("/dashboard/companyProfile");
              break;
            case "Marketing":
              navigate("/dashboard/subscribers");
              break;
            default:
              break;
          }
          setLoading(false);
        });
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);
  return loading ? (
    <div className="flex   ms-auto w-full  justify-center items-center min-h-screen">
      <div className="border-4 rounded-full border-textColor h-8 w-8 animate-spin border-t-transparent "></div>
    </div>
  ) : (
    <div>
      {user == null ? (
        <Navigate to="/login" replace />
      ) : (
        <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
      )}
    </div>
  );
};

export default PrivateRoute;

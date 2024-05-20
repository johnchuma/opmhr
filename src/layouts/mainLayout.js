import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { createContext, useEffect, useState } from "react";
import { getUser } from "../controllers/authController";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addVisitor } from "../controllers/visitorsController";
export const UserContext = createContext();

const MainLayout = () => {
  const { pathname } = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getUser(user.email).then((data) => {
          setUser(data);
          setLoading(false);
        });
      } else {
        setUser(null);
        setLoading(false);
      }
    });
  }, []);
  useEffect(() => {
    if (localStorage.getItem("visitedToptarget")) {
    } else {
      localStorage.setItem("visitedToptarget", "true");
      addVisitor({ page: pathname });
    }
  }, []);
  return (
    <div>
      <Navbar />
      <UserContext.Provider value={{ user }}>
        <Outlet />
      </UserContext.Provider>
      <Footer />
    </div>
  );
};

export default MainLayout;

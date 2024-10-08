import { useLocation, useNavigate } from "react-router-dom";
import { products, services } from "../utils/arrays";
import { createContext, useEffect, useState } from "react";
import { useScroll, motion, AnimatePresence } from "framer-motion";
import { FaToolbox, FaTools } from "react-icons/fa";
import { set } from "firebase/database";
import {
  AiOutlineArrowDown,
  AiOutlineClose,
  AiOutlineMenu,
} from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = ({ isScrolling, setIsScrolling, pathname }) => {
  const navigate = useNavigate();
  const [isModalShowing, setisModalShowing] = useState(false);
  const [selectedItem, setSelectedItem] = useState(false);
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [path, setPath] = useState("/");
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [pathname]);

  return (
    <div className="relative w-full text-base text-dark">
      <motion.div
        className={`fixed w-full ${
          isScrolling
            ? " bg-white shadow-lg text-dark "
            : "bg-black bg-opacity-40 text-white"
        }  z-50  `}
      >
        <AnimatePresence>
          {showMenu && (
            <motion.div
              exit={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ease: "linear" } }}
              initial={{ x: -300, opacity: 0 }}
              className="fixed h-screen w-10/12 bg-white px-8 py-6 shadow-2xl"
            >
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">menu</h1>
                <button
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  <AiOutlineClose />
                </button>
              </div>
              <div className="space-y-2 mt-5">
                {[
                  { title: "Home", path: "/" },
                  { title: "About Us", path: "/company" },
                  { title: "Services", path: "/services", subItems: services },
                  { title: "Products", path: "/products", subItems: products },
                  { title: "Carreer", path: "/jobs" },
                  { title: "Blogs", path: "/blog" },
                  { title: "Contact", path: "/contactus" },
                ].map((item, index) => {
                  return (
                    <div>
                      <div
                        className=" flex justify-between"
                        onClick={() => {
                          if (!item.subItems) {
                            navigate(item.path);
                            setShowMenu(false);
                          } else {
                            if (index == selectedItem) {
                              setSelectedItem(null);
                            } else {
                              setSelectedItem(index);
                            }
                          }
                        }}
                      >
                        {item.title}
                        <div>
                          {item.subItems && (
                            <FaChevronDown className="text-muted " />
                          )}
                        </div>
                      </div>

                      {item.subItems && selectedItem == index && (
                        <div className="space-y-2  px-3 text-sm mt-3 text-muted">
                          {item.subItems.map((e) => {
                            return (
                              <div
                                onClick={() => {
                                  navigate(
                                    `${item.path}/${e.title
                                      .toLowerCase()
                                      .replace(/ /g, "-")}`
                                  );
                                  setShowMenu(false);
                                }}
                                className=""
                              >
                                {e.title}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="flex w-10/12 md:w-10/12 2xl:w-8/12  items-center mx-auto py-4 justify-between">
          <img className=" h-10 md:h-12" src="/logo.png" />
          <div className="md:hidden block">
            <AiOutlineMenu
              onClick={() => {
                setShowMenu(true);
              }}
              className=" text-2xl"
            />
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-3">
              {[
                { title: "Home", path: "/" },
                { title: "About Us", path: "/company" },
                { title: "Services", path: "/services" },
                { title: "Products", path: "/products" },
                { title: "Carreer", path: "/jobs" },
                { title: "Blogs", path: "/blog" },
                { title: "Contact", path: "/contactus" },
              ].map((item, index) => {
                return (
                  <button
                    key={index}
                    className={`${
                      ["Services", "Products"].includes(item.title) && "group"
                    } py-4 hover:text-primary transition-all duration-200 `}
                    onClick={() => {
                      if (index !== 2 && index !== 3) {
                        // alert(index);
                        // alert(item.path);
                        navigate(item.path);
                      }
                    }}
                  >
                    <div
                      onMouseEnter={() => {
                        if (["Services", "Products"].includes(item.title)) {
                          setShow(true);
                          setSelectedItem(item.title);
                        } else {
                          setShow(false);
                          setSelectedItem(null);
                        }
                        console.log("hovered");
                      }}
                      className="flex items-center space-x-1"
                    >
                      <div>{item.title}</div>
                      {["Services", "Products"].includes(item.title) && (
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
                            d="m19.5 8.25-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      )}
                    </div>

                    <AnimatePresence>
                      {show == true && item.title == "Products" && (
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3 },
                          }}
                          exit={{ opacity: 0, y: 50 }}
                          className={`  absolute text-start bg-white shadow py-8  border left-0 right-0  top-[80px]`}
                        >
                          <div
                            onMouseLeave={() => {
                              setShow(false);
                            }}
                            className="w-10/12 2xl:w-8/12 mx-auto "
                          >
                            <div className="grid grid-cols-12 gap-8 items-center">
                              <div className=" col-span-3">
                                <img src="/software.png" />
                              </div>
                              <div className=" col-span-9">
                                <h1 className="text-2xl mb-3 font-medium">
                                  Our Products
                                </h1>
                                <div className="  grid grid-cols-3 gap-5 ">
                                  {products.map((item, index) => {
                                    return (
                                      <div
                                        onClick={() => {
                                          navigate(
                                            `/products/${item.title
                                              .toLowerCase()
                                              .replace(/ /g, "-")}`
                                          );
                                          setShow(false);
                                        }}
                                        className={` transition-all flex space-x-3 bg-white hover:scale-105  shadow   items-center px-4 rounded-xl duration-300 cursor-pointer py-2  border-gray-200 
                             }`}
                                      >
                                        <div className="text-2xl flex justify-center  items-center ounded-2xl text-primary">
                                          {item.icon}
                                        </div>
                                        <p className="text-dark">
                                          {item.title}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <AnimatePresence>
                      {show == true && selectedItem == "Services" && (
                        <motion.div
                          initial={{ opacity: 0, y: 50 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.3 },
                          }}
                          exit={{ opacity: 0, y: 50 }}
                          className={`  absolute text-start bg-white shadow   border left-0 right-0  top-20`}
                        >
                          <div
                            onMouseLeave={() => {
                              setShow(false);
                            }}
                            className="w-10/12 2xl:w-8/12 mx-auto "
                          >
                            <div className="grid grid-cols-12 gap-5 items-center">
                              <div className=" col-span-3">
                                <img className="pt-8" src="/services.png" />
                              </div>
                              <div className=" col-span-9 py-8">
                                <h1 className="text-2xl mb-3 font-medium">
                                  Our services
                                </h1>
                                <div className="  grid grid-cols-3 gap-5  ">
                                  {services.map((item, index) => {
                                    return (
                                      <div
                                        key={`service${index}`}
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          const route = `/services/${item.title
                                            .toLowerCase()
                                            .replace(/ /g, "-")}`;
                                          navigate(route);
                                          setShow(false);
                                        }}
                                        className={` transition-all flex space-x-3 bg-white hover:scale-105  shadow   items-center px-4 rounded-xl duration-300 cursor-pointer py-2  border-gray-200 
                             }`}
                                      >
                                        <div className=" flex justify-center  items-center text-2xl  rounded-4xl text-primary ">
                                          {item.icon}
                                        </div>
                                        <p className="text-dark">
                                          {item.title}
                                        </p>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="hidden md:block">
            <div className="flex space-x-3">
              <button
                onClick={() => {
                  navigate("/login");
                }}
                className="py-3 px-4 rounded-xl hover:scale-105 transition-all  duration-200 cursor-pointer  "
              >
                Sign In
              </button>
              <button
                className={`border-2 ${
                  isScrolling
                    ? "border-primary bg-primary text-white border-opacity-15 "
                    : "border-white border-opacity-75"
                }  py-2 px-3 rounded-full hover:scale-105 transition-all  duration-200 cursor-pointer`}
              >
                Book a free Demo
              </button>
            </div>
          </div>
        </div>
        {/* <motion.div className="h-2 bg-primary " style={{scaleX:scrollYProgress}}></motion.div> */}
      </motion.div>
    </div>
  );
};

export default Navbar;

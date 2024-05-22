import { useNavigate } from "react-router-dom";
import { products, services } from "../utils/arrays";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  return (
    <div className="relative w-full">
      <div className="fixed w-full bg-white border-b border-borderColor  text-muted z-50">
        <div className="flex w-11/12  items-center mx-auto py-4 justify-between">
          <img
            className="h-10 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
            src="/logo.jpeg"
          />
          <div className="flex space-x-3">
            {[
              { title: "Services", path: "/services/0" },
              { title: "Company", path: "/company" },
              { title: "Products", path: "/products" },
              { title: "Investment", path: "/investment" },
              { title: "Jobs", path: "/jobs" },
              { title: "Posts", path: "/blog" },
              { title: "Contacts", path: "/contactus" },
            ].map((item) => {
              return (
                <button
                  className={`${
                    ["Services", "Products"].includes(item.title) && "group"
                  } py-4`}
                  onClick={() =>
                    !["Services", "Products"].includes(item.title) &&
                    navigate(item.path)
                  }
                >
                  <div className="flex items-center space-x-1">
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
                  {show == true && item.title == "Services" && (
                    <div
                      className={` hover:block ${
                        item.title == "Services" && "group-hover:block"
                      } hidden absolute text-start bg-white shadow-lg py-8 delay-700 transition-all border left-0 right-0  top-16`}
                    >
                      <div className="w-11/12 mx-auto ">
                        <h1 className="font-medium mb-3 text-textColor text-2xl pb-2 border-b-2 border-borderColor">
                          Our services
                        </h1>
                        <div className="  grid grid-cols-2 ">
                          {services.map((item, index) => {
                            return (
                              <div
                                onClick={() => {
                                  navigate(`/services/${item}`);
                                  setShow(false);
                                  setTimeout(() => {
                                    setShow(true);
                                  }, [1000]);
                                }}
                                className={` transition-all hover:underline  rounded-md duration-300 cursor-pointer py-2 hover:text-primary border-gray-200 
                             }`}
                              >
                                <p>{item}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {show == true && item.title == "Products" && (
                    <div
                      className={` hover:block ${
                        item.title == "Products" && "group-hover:block"
                      } hidden absolute text-start bg-white shadow-lg py-8 delay-700 transition-all border left-0 right-0  top-16`}
                    >
                      <div className="w-11/12 mx-auto ">
                        <h1 className="font-medium mb-3 text-textColor text-2xl pb-2 border-b-2 border-borderColor">
                          Our Products
                        </h1>
                        <div className="  grid grid-cols-2 ">
                          {products.map((item, index) => {
                            return (
                              <div
                                onClick={() => {
                                  navigate(`/products/${item}`);
                                  setShow(false);
                                  setTimeout(() => {
                                    setShow(true);
                                  }, [1000]);
                                }}
                                className={` transition-all hover:underline  rounded-md duration-300 cursor-pointer py-2 hover:text-primary border-gray-200 
                             }`}
                              >
                                <p>{item}</p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="py-3 px-4 rounded-xl  border border-borderColor"
            >
              Login
            </button>
            <button className="bg-primary text-white py-3 px-4 rounded-xl">
              Book a free Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

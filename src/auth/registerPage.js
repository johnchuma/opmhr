import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../controllers/authController";
import { getLink } from "../utils/get_link";
import { Toaster, toast } from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className=" ">
      <Toaster position="top-right" />
      <div className="grid grid-cols-12">
        <div className=" col-span-6 h-screen overflow-hidden bg-slate-900">
          <img className="w-full" src="/man.jpg" />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            const data = {
              email: e.target.email.value,
              phone: e.target.phone.value,
              name: e.target.name.value,
              password: e.target.password.value,
              repeatPassword: e.target.repeatPassword.value,
              role: currentTab == 0 ? "User" : "Company"
            };
            if (data.password != data.repeatPassword) {
              toast.error("Wrong password");
              setLoading(false);
            } else {
              getLink(file).then((image) => {
                data.profileURL = image;
                registerUser(data).then((response) => {
                  if (response.status) {
                    navigate("/dashboard");
                  } else {
                    toast.error(response.message);
                  }
                  setLoading(false);
                });
              });
            }
          }}
          className=" col-span-6 space-y-3 min-h-screen justify-center flex flex-col w-8/12 mx-auto items-center  text-center "
        >
          <img
            onClick={() => {
              navigate("/");
            }}
            src="/toptarget.png"
          />
          <div className="w-full">
            {currentTab == null && (
              <div className="flex flex-col justify-center mb-3">
                <h1 className="text-2xl  mb-5">Reason for registration ?</h1>
                <div
                  onClick={() => {
                    setCurrentTab(0);
                  }}
                  className={`border-b-4 py-2 border border-borderColor rounded-md focus:ring-primary focus:border-primary cursor-pointer w-full  hover:border-cyan-600  `}
                >
                  <h1 className="font-bold text-lg text-center">
                    Looking for a Job
                  </h1>
                </div>
                <div
                  onClick={() => {
                    setCurrentTab(1);
                  }}
                  className={`border-b-4 py-2 border border-borderColor rounded-md focus:ring-primary focus:border-primary cursor-pointer w-full  hover:border-cyan-600 `}
                >
                  <h1 className="font-bold text-lg text-center">
                    I want to Hire
                  </h1>
                </div>
              </div>
            )}
          </div>
          {currentTab != null && (
            <div>
              {currentTab == 0 && (
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="flex flex-col col-span-2 space-y-1">
                    <label
                      className="flex flex-col justify-center  cursor-pointer"
                      for="image"
                    >
                      {file == null ? (
                        <div className="space-x-2 flex flex-col justify-start items-center w-full">
                          <div className=" aspect-square rounded-full bg-gray-100 p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                              />
                            </svg>
                          </div>
                          <h1 className="text-sm text-gray-400">
                            Profile image
                          </h1>
                        </div>
                      ) : (
                        <img
                          className=" mx-auto aspect-square rounded-full object-cover h-12 w-12"
                          src={URL.createObjectURL(file)}
                        />
                      )}
                    </label>
                    <input
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                      required
                      id="image"
                      type="file"
                      className="sr-only"
                    ></input>
                  </div>
                  <div className=" text-start space-y-1 col-span-1">
                    <h1>Full Name</h1>
                    <input
                      required
                      name="name"
                      className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className=" text-start space-y-1 col-span-1">
                    <h1>Phone Number</h1>
                    <input
                      required
                      name="phone"
                      className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className=" text-start space-y-1 col-span-1">
                    <h1>Email Address</h1>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className=" text-start space-y-1 col-span-1">
                    <h1>Password</h1>
                    <input
                      required
                      type="password"
                      name="password"
                      className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className=" text-start space-y-1 col-span-1">
                    <h1>Repeat Password</h1>
                    <input
                      required
                      type="password"
                      name="repeatPassword"
                      className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Re-enter password"
                    />
                  </div>
                </div>
              )}

              {currentTab == 1 && (
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="flex flex-col col-span-2 space-y-1">
                    <label
                      className="flex flex-col justify-center  cursor-pointer"
                      for="image"
                    >
                      {file == null ? (
                        <div className="space-x-2 flex flex-col justify-start items-center w-full">
                          <div className=" aspect-square rounded-full bg-gray-100 p-3">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                              />
                            </svg>
                          </div>
                          <h1 className="text-sm text-gray-400">
                            Company logo
                          </h1>
                        </div>
                      ) : (
                        <img
                          className=" mx-auto aspect-square object-cover h-12 w-12"
                          src={URL.createObjectURL(file)}
                        />
                      )}
                    </label>
                    <input
                      onChange={(e) => {
                        setFile(e.target.files[0]);
                      }}
                      required
                      id="image"
                      type="file"
                      className="sr-only"
                    ></input>
                  </div>
                  <div className=" text-start space-y-1 col-span-1">
                    <h1>Company Name</h1>
                    <input
                      required
                      name="name"
                      className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Company name"
                    />
                  </div>
                  <div className=" text-start space-y-1 col-span-1">
                    <h1>Phone Number</h1>
                    <input
                      required
                      type="tel"
                      name="phone"
                      className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className=" text-start space-y-1 col-span-1">
                    <h1>Email Address</h1>
                    <input
                      required
                      type="email"
                      name="email"
                      className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Enter email address"
                    />
                  </div>
                  <div className=" text-start space-y-1 col-span-1">
                    <h1>Password</h1>
                    <input
                      required
                      type="password"
                      name="password"
                      className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className=" text-start space-y-1 col-span-1">
                    <h1>Repeat Password</h1>
                    <input
                      required
                      type="password"
                      name="repeatPassword"
                      className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                      placeholder="Re-enter password"
                    />
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full mt-5 py-3 text-white font-bold justify-center flex bg-primary"
              >
                {loading ? (
                  <div className="h-4 w-4 border-4 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Register"
                )}
              </button>
            </div>
          )}
          <div className=" flex justify-center space-x-2 w-full">
            <p>Already registered ?</p>
            <p
              onClick={() => {
                navigate("/login");
              }}
              className="font-bold cursor-pointer text-green-600"
            >
              Login
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

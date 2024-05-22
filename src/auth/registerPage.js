import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../controllers/authController";
import { getLink } from "../utils/get_link";
import { Toaster, toast } from "react-hot-toast";
import Spinner from "../components/spinner";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState(null);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className=" ">
      <div className=" bg-dark h-screen py-16 font-aeonik text-textColor flex items-center ">
        <Toaster position="top-right" />
        <div className="grid grid-cols-12 w-7/12 mx-auto bg-white rounded-xl shadow-2xl">
          <div className=" col-span-5 overflow-hidden bg-slate-900 rounded-l-xl">
            <img
              className="w-full h-full object-cover"
              src="https://img.freepik.com/free-photo/new-male-employee-conversing-with-female-colleagues-his-new-office-job_23-2149034616.jpg?t=st=1716275711~exp=1716279311~hmac=94fd4ac05b178d9488cb7acf0cb887a13fbf1fe8da799682460b0cb87ce15913&w=1480"
            />
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
                role: e.target.role.value,
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
            className=" col-span-7  py-16 justify-center flex flex-col px-8 items-center  text-center "
          >
            {
              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="flex flex-col col-span-2 space-y-1">
                  <label
                    className="flex flex-col justify-center  cursor-pointer"
                    for="image"
                  >
                    {file == null ? (
                      <div className="space-x-2 flex flex-col justify-start items-center w-full">
                        <div className=" aspect-square rounded-full bg-lightBackground p-3">
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
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                            />
                          </svg>
                        </div>
                        <h1 className="text-sm text-muted">Profile image</h1>
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
                  <h1 className="text-sm text-muted">Register As</h1>
                  <select
                    required
                    name="role"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option>Select option </option>
                    <option value="Company">Employer</option>
                    <option value="User">Candidate</option>
                  </select>
                </div>
                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm text-muted">Name</h1>
                  <input
                    required
                    name="name"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm text-muted">Phone Number</h1>
                  <input
                    required
                    name="phone"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm text-muted">Email Address</h1>
                  <input
                    required
                    type="email"
                    name="email"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter email address"
                  />
                </div>
                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm text-muted">Password</h1>
                  <input
                    required
                    type="password"
                    name="password"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Enter your password"
                  />
                </div>
                <div className=" text-start space-y-1 col-span-1">
                  <h1 className="text-sm text-muted">Repeat Password</h1>
                  <input
                    required
                    type="password"
                    name="repeatPassword"
                    className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Re-enter password"
                  />
                </div>
              </div>
            }
            <button
              type="submit"
              className="w-full mt-5 py-3 font-medium text-white rounded-lg justify-center flex bg-primary"
            >
              {loading ? (
                <div className="h-4 w-4 border-4 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Register"
              )}
            </button>
            <div className=" flex justify-center space-x-2 text-sm mt-2 text-muted w-full">
              <p>Already registered ?</p>
              <p
                onClick={() => {
                  navigate("/login");
                }}
                className="font-medium cursor-pointer text-primary"
              >
                Login
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

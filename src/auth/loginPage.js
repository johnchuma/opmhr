import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import { getUser } from "../controllers/authController";
import Spinner from "../components/spinner";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  return (
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
              password: e.target.password.value,
            };
            getUser(data.email).then((response) => {
              if (response) {
                if (response.password == data.password) {
                  signInWithEmailAndPassword(
                    auth,
                    data.email,
                    data.password
                  ).then(() => {
                    navigate("/dashboard");
                  });
                } else {
                  toast.error("Wrong password");
                  setLoading(false);
                }
              } else {
                toast.error("User does not exist");
                setLoading(false);
              }
            });
          }}
          className=" col-span-7  py-16 justify-center flex flex-col w-8/12 mx-auto items-center  text-center "
        >
          <div
            className="flex justify-end w-full cursor-pointer text-muted mb-3"
            onClick={() => {
              navigate("/");
            }}
          >
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
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className="w-full text-textColor text-sm">
            <h1 className=" text-2xl text-start">Login to continue</h1>
            <p className="text-start text-sm text-muted">
              To access your dashboard you have to login
            </p>
          </div>
          <div className=" text-start space-y-1 w-full text-sm mt-4 ">
            <h1 className="text-muted">Email address</h1>
            <input
              required
              name="email"
              className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary placeholder:text-sm focus:border-primary focus:ring-primary rounded-lg"
              placeholder="Enter email address"
            />
          </div>
          <div className=" text-start space-y-1 w-full text-sm mt-3">
            <h1 className="text-muted">Password</h1>
            <input
              type="password"
              required
              name="password"
              className="w-full focus:border-primary placeholder:text-sm focus:ring-primary rounded-lg border-borderColor rounded-md focus:ring-primary focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          <div className=" flex justify-end w-full cursor-pointer text-sm text-muted mt-3">
            <p>Forget password ?</p>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white font-medium justify-center mt-4 flex bg-primary rounded-lg"
          >
            {loading ? <Spinner /> : "Login"}
          </button>
          <div className=" flex justify-start space-x-2 w-full text-muted text-sm mt-2">
            <p>Don't have account ?</p>
            <p
              onClick={() => {
                navigate("/register");
              }}
              className="font-medium cursor-pointer text-primary"
            >
              Register
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

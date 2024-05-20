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
    <div className=" bg-dark h-screen py-16 font-aeonik text-textColor ">
      <Toaster position="top-right" />
      <div className="grid grid-cols-12 w-7/12 mx-auto bg-white rounded-2xl shadow-2xl">
        <div className=" col-span-5 overflow-hidden bg-slate-900 rounded-l-2xl">
          <img
            className="w-full h-full object-cover"
            src="https://img.freepik.com/free-photo/front-view-business-woman-smiling_23-2148427120.jpg?t=st=1715878390~exp=1715881990~hmac=665752cb72609ac3133128c57e8333078e08dcc8414825b39a4c4881a83d0db5&w=360"
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setLoading(true);
            const data = {
              email: e.target.email.value,
              password: e.target.password.value
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
          className=" col-span-7 space-y-3 py-16 justify-center flex flex-col w-8/12 mx-auto items-center  text-center "
        >
          <img
            className="cursor-pointer h-6"
            onClick={() => {
              navigate("/");
            }}
            src="/logo.jpeg"
          />
          <div className="w-full text-textColor text-sm">
            <h1 className="font-bold text-2xl text-start">Login to continue</h1>
            <p className="text-start text-sm text-muted">
              To access your dashboard you have to login
            </p>
          </div>
          <div className=" text-start space-y-1 w-full text-sm mt-6 ">
            <h1>Email address</h1>
            <input
              required
              name="email"
              className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary placeholder:text-sm focus:border-primary focus:ring-primary rounded-lg"
              placeholder="Enter email address"
            />
          </div>
          <div className=" text-start space-y-1 w-full text-sm">
            <h1>Password</h1>
            <input
              type="password"
              required
              name="password"
              className="w-full focus:border-primary placeholder:text-sm focus:ring-primary rounded-lg border-borderColor rounded-md focus:ring-primary focus:border-primary"
              placeholder="Enter your password"
            />
          </div>
          <div className=" flex justify-end w-full cursor-pointer text-sm text-muted">
            <p>Forget password ?</p>
          </div>
          <button
            type="submit"
            className="w-full py-3 text-white font-bold justify-center flex bg-primary rounded-lg"
          >
            {loading ? <Spinner /> : "Login"}
          </button>
          <div className=" flex justify-start space-x-2 w-full text-muted text-sm">
            <p>Don't have account ?</p>
            <p
              onClick={() => {
                navigate("/register");
              }}
              className="font-bold cursor-pointer text-primary"
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

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
    <div className=" bg-white h-screen py-16 font-aeonik text-textColor flex items-center ">
      <Toaster position="top-right" />
      <div className=" w-4/12 2xl:w-3/12 mx-auto bg-white rounded-xl shadow-2xl p-12">
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
          className="   py-16 justify-center flex flex-col mx-auto items-center  text-center "
        >
          <div className="w-full text-textColor text-sm">
            <div className="flex justify-center">
              <img src="/logo.png" className="h-12 cursor-pointer" onClick={() => {
                navigate('/')
              }} />
            </div>
            <h1 className=" text-2xl  font-medium text-center">
              Login to continue
            </h1>
            <p className="text-center text-sm text-muted">
              To access your dashboard you have to login
            </p>
          </div>
          <div className=" text-start space-y-1 w-full text-sm mt-4 ">
            <h1 className="text-muted">Email address</h1>
            <input
              required
              name="email"
              className="w-full border-borderColor  placeholder:text-sm focus:border-primary focus:ring-primary rounded-lg"
              placeholder="Enter email address"
            />
          </div>
          <div className=" text-start space-y-1 w-full text-sm mt-3">
            <h1 className="text-muted">Password</h1>
            <input
              type="password"
              required
              name="password"
              className="w-full focus:border-primary placeholder:text-sm  rounded-lg border-borderColor  focus:ring-primary focus:border-primary"
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
          <div className=" flex justify-center space-x-2 w-full text-muted text-sm mt-2">
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

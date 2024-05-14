import {useNavigate} from "react-router-dom"
import {Toaster,toast} from "react-hot-toast"
import { getUser } from "../controllers/authController";
import Spinner from "../components/spinner";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
const LoginPage = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    return ( <div className=" ">
        <Toaster position="top-right"/>
        <div className="grid grid-cols-12">
            <div className=" col-span-6 h-screen overflow-hidden bg-slate-900">
                <img className="w-full" src="/girl.jpg"/>
            </div>
            <form onSubmit={(e)=>{
                e.preventDefault()
                setLoading(true)
                const data = {
                    email:e.target.email.value,
                    password:e.target.password.value
                }
                getUser(data.email).then((response)=>{
                    if(response){
                       if(response.password == data.password ){
                        signInWithEmailAndPassword(auth, data.email,data.password).then(()=>{
                            navigate('/dashboard')
                        })
                       }else{
                        toast.error("Wrong password")
                        setLoading(false)
                       }
                    }else{
                        toast.error("User does not exist")
                        setLoading(false)
                    }
                })
            }} className=" col-span-6 space-y-3 min-h-screen justify-center flex flex-col w-8/12 mx-auto items-center  text-center ">
                <img className="cursor-pointer"  onClick={()=>{
                   navigate('/')
                }} src="/toptarget.png"/>
                 <div className="w-full">
                 <h1 className="font-bold text-2xl text-center">Login to continue</h1>
                 <p className="text-center">To access your dashboard you have to login</p>
                 </div>
                 <div className=" text-start space-y-1 w-full">
                <h1>Email address</h1>
                <input required name="email" className="w-full border-slate-300" 
                placeholder="Enter email address"/>
                </div>
                <div className=" text-start space-y-1 w-full">
                <h1>Password</h1>
                <input type="password" required name="password" className="w-full border-slate-300" 
                placeholder="Enter your password"/>
                </div>
                <div className=" flex justify-end w-full cursor-pointer">
                    <p>
                      Forget password ?
                    </p>
                </div>
                <button type="submit" 
                className="w-full py-3 text-white font-bold justify-center flex bg-green-600">
                    {loading?<Spinner/>:"Login"}
                    </button>
                <div className=" flex justify-center space-x-2 w-full">
                    <p>
                    Don't have account ?
                    </p>
                    <p onClick={()=>{
                        navigate('/register')
                    }} className="font-bold cursor-pointer text-green-600">
                      Register
                    </p>
                </div>
            </form>
        </div>
    </div> );
}
 
export default LoginPage;
import { useState } from "react";
import Spinner from "./spinner";
import { addInquiry } from "../controllers/inquiriesController";
import {Toaster,toast} from "react-hot-toast"

const InquiryForm = () => {
    const [loading, setLoading] = useState(false);
    return ( <div>
        <Toaster position="top-right"/>
        <form onSubmit={(e)=>{
            e.preventDefault()
            setLoading(true)
            const data = {
                name:e.target.name.value,
                email:e.target.email.value,
                phone:e.target.phone.value,
                service:e.target.service.value,
                message:e.target.message.value,
                isRead:false
            }
            addInquiry(data).then((data)=>{
                setLoading(false)
                e.target.name.value = "";
                e.target.email.value = "";
                e.target.phone.value = "";
                e.target.service.value = "";
                e.target.message.value =""
              
                toast.success("Sent successfully")
            })


        }}>
                        <div className="mt-3">
                        <p className="mb-2">Your full name</p>
                         <input required name="name" placeholder="Enter your name" className="w-full rounded border-slate-100"/>
                        </div>
                        
                        <div className="mt-3">
                        <p className="mb-2">Your Email (required)</p>
                         <input required name="email" placeholder="Enter your email address" className="w-full rounded border-slate-100"/>
                        </div>
                        <div className="mt-3">
                        <p className="mb-2">Phone Number (required)</p>
                         <input required name="phone" placeholder="Enter your phone number" className="w-full rounded border-slate-100"/>
                        </div>
                        <div className="mt-3">
                        <p className="mb-2">I would like to discuss:</p>
                         <select required name="service" className="w-full rounded border-slate-100">
                            <option>Select service</option>
                            {[
                                "Restructuring & Turnaround",
                                "Business Planning",
                                "Exit & Succession Plan",
                                "Strategic Plan",
                                "Global risk & Investigations",
                                "Audit & Assurance",
                                "Trades & Stocks",
                                "Information Technology"    
                            ].map((item)=>{
                                return <option value={item}>{item}</option>
                            })}
                         </select>
                        </div>
                        <div className="mt-3">
                        <p className="mb-2">Message</p>
                         <textarea  required name="message" placeholder="Write a message here" className="w-full rounded border-slate-100"/>
                        </div>
                        <button className="py-3 w-full flex justify-center font-bold hover:bg-slate-900 transition-all bg-green-600 mt-8 text-white">
                           {loading?<Spinner/>:"SUBMIT"}
                            
                            </button>
                        </form>
    </div> );
}
 
export default InquiryForm;
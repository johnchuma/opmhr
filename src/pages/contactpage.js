import { useState } from "react";
import InquiryForm from "../components/inquiryForm";

const ContactPage = () => {
    const [currentSlide, setcurrentSlide] = useState(0);
    return ( <div>
  <div className="bg-slate-900 text-white flex py-12 md:py-24 flex-col justify-center items-center">
    <h1 className="text-4xl font-bold">Contact Us</h1>
    <div className="w-12 h-2 bg-green-600 mt-3"></div>
  </div>
  <div className="bg-slate-800 text-white flex py-8  justify-center items-center">
    <h1 className="text-sm font-bold">Home</h1>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
    className="w-4 h-4 text-green-600">
    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
    </svg>
    </div>
    <h1 className="text-sm font-bold">Contact Us</h1>
  </div>
<div className="w-11/12 mx-auto my-12 md:my-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-6 items-start">
                    <div className="bg-slate-900 text-white py-12 px-8">
               
                          {currentSlide == 0 && <p className="mt-5 ">For Business: For Business enquiry fill our short feedback form or
											you can also send us an <a href="mailto:info@toptarget.co.tz"  className="text-green-600"
											                           >info@toptarget.co.tz</a> and we’ll get in
											touch shortly, or Troll Free Number <a href="#" className="text-green-600" >-
												+255677274141</a></p>}

                                                {currentSlide == 1 &&<div className="space-y-3">
                                                    {[
                                                        {icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-600">
                                                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                                      </svg>
                                                      ,title:"NIC Investment House,8th Floor, Samora Avenue, Ilala Municipality, Dar Es Salaam"},
                                                        {icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                                        </svg>
                                                        ,title:"Mobile:+255677274141"},
                                                        {icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                                                        <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                                        </svg>
                                                        ,title:"Office: +255677274141 "},
                                                        {icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                                                        <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                                                        <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                                                        </svg>
                                                        ,title:"info@toptarget.co.tz"},
                                                        {icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-600">
                                                        <path d="M19.5 22.5a3 3 0 0 0 3-3v-8.174l-6.879 4.022 3.485 1.876a.75.75 0 1 1-.712 1.321l-5.683-3.06a1.5 1.5 0 0 0-1.422 0l-5.683 3.06a.75.75 0 0 1-.712-1.32l3.485-1.877L1.5 11.326V19.5a3 3 0 0 0 3 3h15Z" />
                                                        <path d="M1.5 9.589v-.745a3 3 0 0 1 1.578-2.642l7.5-4.038a3 3 0 0 1 2.844 0l7.5 4.038A3 3 0 0 1 22.5 8.844v.745l-8.426 4.926-.652-.351a3 3 0 0 0-2.844 0l-.652.351L1.5 9.589Z" />
                                                        </svg>
                                                        ,title:"victoria@toptarget.co.tz"},
                                                     ].map((item)=><div className="flex space-x-3">
                                                        {item.icon} <div>{item.title}</div>
                                                    </div>)}
                                                    </div>}
                  <div className="flex justify-end space-x-4 mt-24">
                  <div clas onClick={()=>{
                     setcurrentSlide(0)
                  }} className="border h-8  flex justify-center items-center w-8  border-white aspect-square rounded-full cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                                    </svg>

                    </div>
                    <div clas onClick={()=>{
                         setcurrentSlide(1)
                    }} className="border h-8 flex justify-center items-center  w-8  border-white aspect-square rounded-full cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                    </div>

                  </div>
                    </div>
                    <div className="px-10 py-5 bg-gray-100">
                      <InquiryForm/>
                    </div>
                </div>
            </div>
    </div> );
}
 
export default ContactPage;
import { useState } from "react";
import InquiryForm from "../components/inquiryForm";

const ContactPage = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  return (
    <div>
   

      <div className="pt-28" />

      <div className="w-6/12 2xl:w-4/12 mx-auto ">
        <div className="grid grid-cols-1  gap-y-8 gap-x-6 items-start">
          <div className=" rounded-lg mb-12 ">
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

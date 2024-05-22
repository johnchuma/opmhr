import { useState } from "react";
import InquiryForm from "../components/inquiryForm";

const ContactPage = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  return (
    <div>
      <div className="py-12" />
      <h1 className="text-2xl text-center mb-2">Contact Us</h1>

      <div className="w-11/12 mx-auto ">
        <div className="grid grid-cols-1  gap-y-8 gap-x-6 items-start">
          <div className=" rounded-lg p-5 mt-4">
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

import { useState } from "react";
import Spinner from "./spinner";
import { addInquiry } from "../controllers/inquiriesController";
import { Toaster, toast } from "react-hot-toast";
import { services } from "../utils/arrays";

const InquiryForm = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <Toaster position="top-right" />
      <form
        className="grid grid-cols-4 gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          setLoading(true);
          const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            service: e.target.service.value,
            message: e.target.message.value,
            isRead: false
          };
          addInquiry(data).then((data) => {
            setLoading(false);
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.phone.value = "";
            e.target.service.value = "";
            e.target.message.value = "";

            toast.success("Sent successfully");
          });
        }}
      >
        <div className="">
          <p className="mb-2 text-sm text-muted">Your full name</p>
          <input
            required
            name="name"
            placeholder="Enter your name"
            className="w-full rounded-lg border border-borderColor focus:ring-primary focus:border-primary"
          />
        </div>

        <div className="">
          <p className="mb-2 text-sm text-muted">Your Email (required)</p>
          <input
            required
            name="email"
            placeholder="Enter your email address"
            className="w-full rounded-lg border border-borderColor focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="">
          <p className="mb-2 text-sm text-muted">Phone Number (required)</p>
          <input
            required
            name="phone"
            placeholder="Enter your phone number"
            className="w-full rounded-lg border border-borderColor focus:ring-primary focus:border-primary"
          />
        </div>
        <div className="">
          <p className="mb-2 text-sm text-muted">I would like to discuss:</p>
          <select
            required
            name="service"
            className="w-full rounded-lg border border-borderColor focus:ring-primary focus:border-primary"
          >
            <option>Select service</option>
            {services.map((item) => {
              return <option value={item.title}>{item.title}</option>;
            })}
          </select>
        </div>
        <div className="mt-0 col-span-4">
          <p className="mb-2 text-sm text-muted">Message</p>
          <textarea
            required
            name="message"
            placeholder="Write a message here"
            className="w-full rounded-lg border border-borderColor focus:ring-primary focus:border-primary "
          />
        </div>
        <button className="py-3 w-full flex justify-center rounded-lg hover:bg-slate-900 transition-all bg-primary  text-white">
          {loading ? <Spinner /> : "SUBMIT"}
        </button>
      </form>
    </div>
  );
};

export default InquiryForm;

import { useContext, useState } from "react";

import { getLink } from "../utils/get_link";
import { addJob } from "../controllers/jobController";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Timestamp } from "firebase/firestore";
import { sectors } from "../utils/arrays";
import { UserContext } from "../auth/privateRoute";
const AddJob = ({ refresh, setRefresh }) => {
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [skills, setSkills] = useState(null);
  const [description, setDescription] = useState(null);

  const [responsibilities, setResponsibilities] = useState(null);
  const { user } = useContext(UserContext);
  return (
    <div>
      <button
        onClick={() => {
          setShowModal(true);
        }}
        className="py-2 px-4 bg-primary rounded-lg text-white "
      >
        New Job
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-center items-center">
          <div className="w-7/12 bg-white  shadow-xl rounded-lg  h-3/4 overflow-y-scroll px-8 py-10">
            <div className="flex justify-between">
              <h1 className="text-lg ">Publish New Job</h1>
              <svg
                onClick={() => {
                  setShowModal(false);
                }}
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
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                getLink(file).then((link) => {
                  const data = {
                    logo: link ?? user.profileURL,
                    company: e.target.company.value,
                    phone: user.role == "Company" ? user.phone : null,
                    email: user.role == "Company" ? user.email : null,
                    address: e.target.address.value,
                    title: e.target.title.value,
                    description,
                    type: e.target.type.value,
                    salary: e.target.salary.value,
                    sector: e.target.sector.value,
                    vacancies: e.target.vacancies.value,
                    skills,
                    responsibilities,
                    companyId: user.role == "Company" ? user.id : null,
                    email: user.role == "Company" ? user.email : null,
                    phone: user.role == "Company" ? user.phone : null,
                    applicants: [],
                    published: user.role == "Company" ? false : true,
                    deadline: Timestamp.fromDate(
                      new Date(e.target.deadline.value)
                    )
                  };
                  addJob(data).then((data) => {
                    setLoading(false);
                    setRefresh(refresh + 1);
                    setShowModal(false);
                  });
                });
              }}
              className="space-y-4 mt-5"
            >
              <div className="flex flex-col space-y-1">
                <label
                  className="flex justify-center  cursor-pointer"
                  for="image"
                >
                  {file == null ? (
                    user.role == "Company" ? (
                      <img
                        className=" w-16 aspect-square object-cover  mx-auto"
                        src={user.profileURL}
                      />
                    ) : (
                      <div className="space-x-2 flex">
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
                            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                          />
                        </svg>
                        <h1 className="text-muted text-sm">Company logo*</h1>
                      </div>
                    )
                  ) : (
                    <img
                      className=" w-16 aspect-square  mx-auto"
                      src={URL.createObjectURL(file)}
                    />
                  )}
                </label>
                <input
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                  }}
                  required={user.role != "Company"}
                  id="image"
                  type="file"
                  className="sr-only"
                ></input>
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Company name</h1>
                <input
                  required
                  name="company"
                  defaultValue={user.role == "Company" && user.name}
                  className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Write company name"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Company address</h1>
                <input
                  required
                  name="address"
                  defaultValue={user.role == "Company" && user.address}
                  className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Write ompany address"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Job title</h1>
                <input
                  required
                  name="title"
                  className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Write job title"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Vacancies Available</h1>
                <input
                  required
                  name="vacancies"
                  type="number"
                  className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Enter the number of vacancies"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Sector</h1>
                <select
                  required
                  name="sector"
                  className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Write job title"
                >
                  {sectors.map((item) => {
                    return <option value={item}>{item}</option>;
                  })}
                </select>
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Looking for ?</h1>
                <select
                  required
                  name="type"
                  className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Write job title"
                >
                  <option value="Employee">Employee</option>
                  <option value="Trainee">Trainee</option>
                  <option value="Volunteer">Volunteer</option>
                </select>
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Salary (TSH)</h1>
                <input
                  required
                  name="salary"
                  className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                  placeholder="Write  salary"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Job description</h1>
                <ReactQuill
                  theme="snow"
                  placeholder="Write description here"
                  value={description}
                  onChange={setDescription}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Key responsibilities</h1>
                <ReactQuill
                  theme="snow"
                  placeholder="Write key responsibilities here"
                  value={responsibilities}
                  onChange={setResponsibilities}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Skills & Qualifications</h1>
                <ReactQuill
                  theme="snow"
                  placeholder="Write skills & qualificaions"
                  value={skills}
                  onChange={setSkills}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <h1 className="text-muted text-sm">Deadline</h1>
                <input
                  type="date"
                  required
                  name="deadline"
                  className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
                />
              </div>
              <div className=" flex space-x-3 items-center">
                <input
                  type="checkbox"
                  required
                  className=" border-borderColor rounded-md focus:ring-primary focus:border-primary"
                />
                <h1 className="text-red-400 text-sm">
                  I Declare that the terms and procedures were put in place from
                  OPM HR Limited. Be prepared to sign a commercial contract and
                  pay for the obvious costs when looking for the best employee
                  for my company
                </h1>
              </div>

              <button
                type="submit"
                className="py-3 px-7 mt-5  bg-primary rounded-lg text-white flex justify-center w-40 "
              >
                {loading ? (
                  <div className="h-4 checked:text-green w-4 border-4 rounded-full border-white border-t-transparent  animate-spin" />
                ) : (
                  "Publish Job"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddJob;

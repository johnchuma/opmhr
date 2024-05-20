import { useParams, useNavigate } from "react-router-dom";
import { getJob, updateJob } from "../controllers/jobController";
import { useContext, useEffect, useState } from "react";
import PageLoader from "../components/pageLoader";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getLink } from "../utils/get_link";
import { addApplication } from "../controllers/applicationsController";
import { toast } from "react-hot-toast";
import Spinner from "../components/spinner";
import { UserContext } from "../layouts/mainLayout";

const ApplyForAJob = () => {
  const { uuid } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const { user } = useContext(UserContext);
  const [letter, setLetter] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    getJob(uuid).then((data) => {
      setJob(data);
      setLoading(false);
    });
  }, []);
  return loading ? (
    <PageLoader />
  ) : (
    <div>
      <div className="bg-slate-900 list text-white flex py-12 md:py-24 flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Send Application</h1>
        <div className="w-12 h-2 bg-primary mt-3"></div>
      </div>
      <div className="bg-slate-800 text-white flex py-8  justify-center items-center">
        <h1
          onClick={() => {
            navigate(`/jobDetails/${job.id}`);
          }}
          className="text-sm font-bold cursor-pointer"
        >
          Job details
        </h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-green-600"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h1 className="text-sm font-bold cursor-pointer ">Send Application</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSending(true);
          const data = {
            name: user.name,
            email: user.email,
            gender: user.gender,
            age: user.age,
            phone: user.phone,
            address: user.address,
            image: user.profileURL,
            skills: user.skills,
            education: user.education,
            userId: user.id,
            experiences: user.experiences,
            refrees: user.refrees,
            salary: user.salary,
            bio: user.bio,
            companyId: job.companyId,
            jobId: job.id,
            jobTitle: job.title,
            coverLetter: letter
          };
          console.log(data);
          getLink(e.target.cv.files[0]).then((link) => {
            if (link) {
              data.cv = link;
              data.fileName = e.target.cv.files[0].name;
              addApplication(data).then((data) => {
                updateJob(job.id, { applicants: [...job.applicants, user.id] });
                setSending(false);
                toast.success("Your application is sent successfully");
                navigate(-1);
              });
            } else {
              setSending(false);
            }
          });
        }}
        className="  py-12 md:py-24 w-6/12 mx-auto"
      >
        <h1 className="font-bold text-2xl ">Application Form</h1>
        <p className="mb-4">Other details will be taken from your account*</p>

        <p className="mb-2">Write a cover letter</p>
        <ReactQuill
          theme="snow"
          placeholder="Write cover letter here"
          value={letter}
          onChange={setLetter}
        />
        <p className="mt-4 mb-2">Upload your CV/Resume</p>
        <input
          required
          type="file"
          name="cv"
          className="w-full border-borderColor rounded-md focus:ring-primary focus:border-primary"
        />
        <button
          type="submit"
          className="py-3 px-5 bg-primary font-bold mt-5 text-white w-48 flex justify-center"
        >
          {sending ? <Spinner /> : "Send Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplyForAJob;

import { useParams, useNavigate } from "react-router-dom";
import { getJob } from "../controllers/jobController";
import PageLoader from "../components/pageLoader";
import { useContext, useEffect, useState } from "react";
import { formatDate } from "../utils/format_date";
import { UserContext } from "../layouts/mainLayout";
import { FaArrowLeft, FaCalendar } from "react-icons/fa";
import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";

const JobDetails = () => {
  const { uuid } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    getJob(uuid).then((data) => {
      setJob(data);
      setLoading(false);
      setTimeout(() => {
        const listComp = document.getElementById("skillsList");
        const responsibilitiesList = document.getElementById(
          "responsibilitiesList"
        );

        if (listComp) {
          const ulComp = listComp.querySelector("ul");
          const ulElement = responsibilitiesList.querySelector("ul");
          if (ulComp) {
            ulComp.classList.add("list-decimal");
            ulComp.classList.add("ml-4");
            ulElement.classList.add("list-decimal");
            ulElement.classList.add("ml-4");
          }
        }
      }, 2000);
    });
  }, []);
  return loading ? (
    <PageLoader />
  ) : (
    <div className=" pt-20 pb-12">
      <div className="w-full h-48 bg-primary  flex  flex-col justify-center  items-center  ">
        <h1 className=" text-4xl mb-1  text-white  ">{job.title}</h1>
        <p className="text-sm text-white text-opacity-70">
          Company: {job.company}
        </p>
      </div>
      <div className="w-8/12 2xl:w-6/12 mx-auto  grid grid-cols-12 text-lg">
        <div className="flex justify-between">
          <img
            className="h-18 w-18 rounded-full border-4 border-white  -translate-y-10 object-cover "
            src={job.logo}
          />
          {/* <div className="bg-white ">Go back</div> */}
        </div>

        <div className=" col-span-12 text-start">
          <div className="flex flex-row justify-start w-full mt-2">
            <button className="py-1 px-3 mb-2 me-2 space-x-2 items-center text-sm rounded-full border border-muted border-opacity-30  flex">
              <FaLocationDot className="text-muted " />
              <div>{job.address}</div>
            </button>
            <button className="py-1 px-3 mb-2 me-2 space-x-2 items-center text-sm rounded-full border border-muted border-opacity-30  flex">
              <FaPeopleGroup className="text-muted " />
              <div>{job.vacancies} Vacancies</div>
            </button>
            <button className="py-1 px-3 mb-2 me-2 items-center text-sm rounded-full border border-muted border-opacity-30  space-x-2  flex">
              <FaCalendar className="text-muted " />
              <div>Deadline {formatDate(job.deadline.toDate())}</div>
            </button>
          </div>
          <p
            className="mt-5 text-base text-muted"
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></p>
          <h1 className=" pb-2 text-2xl mt-8">Skills</h1>
          <div
            className="text-base text-muted"
            id="skillsList"
            dangerouslySetInnerHTML={{ __html: job.skills }}
          ></div>

          <h1 className=" pt-5 pb-2 text-2xl">Responsibilites</h1>
          <div
            className="text-base text-muted"
            id="responsibilitiesList"
            dangerouslySetInnerHTML={{ __html: job.responsibilities }}
          ></div>

          {user == null ? (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className=" hover:scale-105 transition-all  duration-200 cursor-pointer bg-primary font-medium text-white py-4 px-6 mt-8 rounded-full"
            >
              Apply Job
            </button>
          ) : (
            user.role == "User" && (
              <div>
                {" "}
                {job.applicants.includes(user.id) ? (
                  <button className="py-3 px-5 bg-green-100 text-green-700 font-medium mt-5 ">
                    Applied
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      navigate(`/applyForAJob/${job.id}`);
                    }}
                    className="py-3 px-5 bg-primary font-medium mt-5 text-white"
                  >
                    Apply job
                  </button>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

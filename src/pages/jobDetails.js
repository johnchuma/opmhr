import { useParams, useNavigate } from "react-router-dom";
import { getJob } from "../controllers/jobController";
import PageLoader from "../components/pageLoader";
import { useContext, useEffect, useState } from "react";
import { formatDate } from "../utils/format_date";
import { UserContext } from "../layouts/mainLayout";

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
    <div className="pt-8">
      <div className="w-8/12 mx-auto py-12 md:py-24 grid grid-cols-12 text-lg">
        <div className=" col-span-12">
          <div className="flex items-center space-x-3">
            <img className="h-12 w-12 object-cover " src={job.logo} />
            <div className=" space-y-2 ">
              <h1 className=" text-xl   ">{job.title}</h1>
              <p className="text-sm text-muted">Company: {job.company}</p>
            </div>
          </div>
          <div className="flex flex-wrap mt-4">
            <button className="py-1 px-3 mb-2 me-2 items-center text-sm rounded-full bg-gray-100  flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-muted me-2"
              >
                <path
                  fillRule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clipRule="evenodd"
                />
              </svg>
              <div>{job.address}</div>
            </button>
            <button className="py-1 px-3 mb-2 me-2 items-center text-sm rounded-full bg-gray-100 flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-muted me-2"
              >
                <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
              </svg>

              <div>{job.vacancies} Vacancies</div>
            </button>
            <button className="py-1 px-3 mb-2 me-2 items-center text-sm rounded-full bg-gray-100  flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-muted me-2"
              >
                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <div>Deadline {formatDate(job.deadline.toDate())}</div>
            </button>
          </div>
          <p
            className="mt-5 text-base text-muted"
            dangerouslySetInnerHTML={{ __html: job.description }}
          ></p>
          <h1 className=" pb-2 text-lg mt-8">Skills</h1>
          <div
            className="text-base text-muted"
            id="skillsList"
            dangerouslySetInnerHTML={{ __html: job.skills }}
          ></div>

          <h1 className=" pt-5 pb-2 text-lg">Responsibilites</h1>
          <div
            className="text-base text-muted"
            id="responsibilitiesList"
            dangerouslySetInnerHTML={{ __html: job.responsibilities }}
          ></div>

          {user == null ? (
            <div className="mt-8 text-muted text-sm">
              To apply for this job you need to{" "}
              <span
                onClick={() => {
                  navigate("/login");
                }}
                className="font-medium cursor-pointer  text-primary"
              >
                Login
              </span>
            </div>
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
                    Apply for a Job
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

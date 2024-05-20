import { useEffect, useState } from "react";
import { sectors } from "../utils/arrays";
import { getActiveJobs, getJobs } from "../controllers/jobController";
import { formatDate } from "../utils/format_date";
import { useNavigate } from "react-router-dom";
import PageLoader from "../components/pageLoader";

const JobsPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [selectedSectors, setSelectedSectors] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getActiveJobs().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, [refresh]);
  return loading ? (
    <PageLoader />
  ) : (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-12 py-12 md:py-24 w-11/12 mx-auto">
        <div className=" col-span-12 px-0 mt-8 md:mt-0 ">
          <h1 className="text-2xl text-center mb-2">Jobs</h1>
          <div className=" p-2 w-9/12 mx-auto rounded-lg ">
            <div className="flex space-x-2">
              <select
                onChange={(e) => {
                  if (e.target.value == "") {
                    setSelectedSectors([]);
                  } else {
                    setSelectedSectors([e.target.value]);
                  }
                }}
                className=" py-1 bg-transparent border-borderColor rounded-md focus:ring-primary focus:border-primary  "
              >
                <option value="">Select sector</option>
                {sectors.map((item) => {
                  return <option value={item}>{item}</option>;
                })}
              </select>
              <select
                onChange={(e) => {
                  setSelectedType(e.target.value);
                }}
                className="w-full py-1 bg-transparent border-borderColor rounded-md focus:ring-primary focus:border-primary  "
              >
                <option value="">Select category</option>
                <option value="Employee">Employee</option>
                <option value="Trainee">Trainee</option>
                <option value="Volunteer">Volunteer</option>
              </select>
              <input
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
                placeholder="Search here... "
                className="w-full py-1 bg-transparent border-borderColor rounded-md focus:ring-primary focus:border-primary "
              />
              <button className="flex space-x-2 md:block items-center rounded-lg py-2 px-8 bg-primary text-white">
                <h1>Search</h1>
              </button>
            </div>
          </div>
          <div className="space-y-4 mt-5 grid grid-cols-3">
            {posts
              .filter((item) =>
                item.title.toLowerCase().includes(keyword.toLowerCase())
              )
              .filter((item) => item.type.includes(selectedType))
              .filter((item) =>
                selectedSectors.length > 0
                  ? selectedSectors.includes(item.sector)
                  : true
              )
              .map((item) => {
                return (
                  <div
                    onClick={() => {
                      navigate(`/jobDetails/${item.id}`);
                    }}
                  >
                    <div className="bg-white border rounded-lg border-borderColor cursor-pointer px-4 md:px-8 py-8 ">
                      <div className="flex items-center space-x-2">
                        <img
                          className="h-10 w-10 object-cover "
                          src={item.logo}
                        />
                        <div className=" ">
                          <h1 className="text-lg line-clamp-2">{item.title}</h1>
                          <p className="text-sm text-muted">
                            Company: {item.company}
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex flex-wrap mt-2">
                        <button className="py-1 px-3 rounded-full  mb-2 me-2 items-center text-sm -full bg-green-100  flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>{item.address}</div>
                        </button>
                        <button className="py-1  rounded-full px-3 mb-2 me-2 items-center text-sm -full bg-indigo-100 flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
                          </svg>

                          <div>{item.vacancies} Vacancies</div>
                        </button>
                        <button className="py-1 rounded-full  px-3 mb-2 me-2 items-center text-sm -full bg-orange-100  flex">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                            <path
                              fillRule="evenodd"
                              d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            Deadline {formatDate(item.deadline.toDate())}
                          </div>
                        </button>
                      </div> */}
                      <p
                        className="mt-2 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;

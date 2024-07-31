import { useEffect, useState } from "react";
import { sectors } from "../utils/arrays";
import { getActiveJobs, getJobs } from "../controllers/jobController";
import { formatDate } from "../utils/format_date";
import { useNavigate } from "react-router-dom";
import PageLoader from "../components/pageLoader";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

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
    <div className="w-full h-48 bg-primary  flex  justify-center items-center pt-20 ">
      <h1 className="text-white text-4xl ">Jobs</h1>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-12   md:w-8/12 2xl:w-6/12 mx-auto pt-8 pb-12">
        <div className=" col-span-12 px-0 mt-8 md:mt-0 ">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: -20,
              opacity: 1,
              transition: { duration: 1, delay: 0 },
            }}
            className=" mx-auto bg-white  translate-y-10 p-8 rounded-3xl"
          >
            <div className="flex items-center justify-between">
              <div className="flex space-x-2 w-5/12 items-center bg-slate-50  py-2 px-8 rounded-full">
                <FaSearch />
                <input
                  onChange={(e) => {
                    setKeyword(e.target.value);
                  }}
                  className="w-full border-0 bg-transparent focus:border-o focus:ring-0"
                  placeholder="Search keyword/ job title"
                />
              </div>
              <div className="flex space-x-2 w-3/12 items-center bg-slate-50  py-2 px-8 rounded-full">
                <div>
                  {" "}
                  <select
                    onChange={(e) => {
                      if (e.target.value == "") {
                        setSelectedSectors([]);
                      } else {
                        setSelectedSectors([e.target.value]);
                      }
                    }}
                    className="w-full border-0 bg-transparent focus:border-o focus:ring-0"
                  >
                    <option value="">Select sector</option>
                    {sectors.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>
                </div>
              </div>
              <div className="flex space-x-2   items-center bg-slate-50  py-2 px-8 rounded-full">
                <div>
                  <select
                    onChange={(e) => {
                      setSelectedType(e.target.value);
                    }}
                    className="w-full border-0 bg-transparent focus:border-o focus:ring-0"
                  >
                    <option>Category</option>
                    <option value="Employee">Employee</option>
                    <option value="Trainee">Trainee</option>
                    <option value="Volunteer">Volunteer</option>
                  </select>
                </div>
              </div>
              <button className="bg-primary hover:scale-105 transition-all  duration-200 cursor-pointer font-medium text-white py-4 px-6 rounded-full">
                Search
              </button>
            </div>
          </motion.div>

          <div className="space-y-6 mt-0 ">
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
                    <div className="bg-white  rounded-xl shadow-lg cursor-pointer px-4 md:px-8 py-8 ">
                      <div className="flex items-center space-x-2">
                        <div className="w-1/12">
                          <img className=" object-cover " src={item.logo} />
                        </div>
                        <div className="w-10/12 ">
                          <h1 className="text-xl line-clamp-2">{item.title}</h1>
                          <p className="text-sm text-muted">
                            Company: {item.company}
                          </p>
                          <p
                            className="mt-2 line-clamp-2 text-textColor text-opacity-80"
                            dangerouslySetInnerHTML={{
                              __html: item.description,
                            }}
                          ></p>
                        </div>
                        <div>
                          <button className="py-3 w-40 flex justify-center rounded-full hover:scale-105 transition-all border border-primary   text-primary">
                            Apply Now
                          </button>
                        </div>
                      </div>
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

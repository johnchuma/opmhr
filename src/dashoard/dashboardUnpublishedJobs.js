import { useContext, useEffect, useState } from "react";
import { addBlog, getBlogs } from "../controllers/blogController";
import { getLink } from "../utils/get_link";
import AddBlog from "../components/addBlog";
import { timeAgo } from "../utils/time_ago";
import BlogPost from "../components/blogPost";
import AddJob from "../components/addJob";
import JobPost from "../components/jobPost";
import {
  getCompanyPendingJobs,
  getCompanyPublishedJobs,
  getJobs,
  getUnpublishedJobs
} from "../controllers/jobController";
import { UserContext } from "../auth/privateRoute";
import NoData from "../components/noData";

const DashboardUnpublishedJobs = () => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(() => {
    setLoading(true);

    getUnpublishedJobs().then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, [refresh]);
  return loading ? (
    <div className="flex   ms-auto w-full  justify-center items-center h-96">
      <div className="border-4 rounded-full border-textColor h-8 w-8 animate-spin border-t-transparent "></div>
    </div>
  ) : (
    <div>
      <div className="flex justify-between">
        <h1 className="text-lg">Unpublished Jobs</h1>
        {/* <AddJob refresh={refresh} setRefresh={setRefresh}/> */}
      </div>
      {posts.length < 1 ? (
        <NoData />
      ) : (
        <div className="grid grid-cols-2 gap-4 mt-8">
          {posts.map((item) => (
            <JobPost refresh={refresh} setRefresh={setRefresh} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardUnpublishedJobs;

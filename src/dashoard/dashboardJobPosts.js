import { useContext, useEffect, useState } from "react";
import { addBlog, getBlogs } from "../controllers/blogController";
import { getLink } from "../utils/get_link";
import AddBlog from "../components/addBlog";
import { timeAgo } from "../utils/time_ago";
import BlogPost from "../components/blogPost";
import AddJob from "../components/addJob";
import JobPost from "../components/jobPost";
import { getCompanyPendingJobs, getJobs } from "../controllers/jobController";
import { UserContext } from "../auth/privateRoute";
import NoData from "../components/noData";

const DashboardJobPosts = () => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(() => {
    setLoading(true);
    if (user.role == "Company") {
      getCompanyPendingJobs().then((data) => {
        setPosts(data);
        setLoading(false);
      });
    } else {
      getJobs().then((data) => {
        setPosts(data);
        setLoading(false);
      });
    }
  }, [refresh]);
  return loading ? (
    <div className="flex   ms-auto w-full  justify-center items-center h-96">
      <div className="border-4 rounded-full border-slate-900 h-8 w-8 animate-spin border-t-transparent "></div>
    </div>
  ) : (
    <div>
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Job Posts</h1>
        <AddJob refresh={refresh} setRefresh={setRefresh} />
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

export default DashboardJobPosts;

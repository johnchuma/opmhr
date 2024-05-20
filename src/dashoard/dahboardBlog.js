import { useEffect, useState } from "react";
import { addBlog, getBlogs } from "../controllers/blogController";
import { getLink } from "../utils/get_link";
import AddBlog from "../components/addBlog";
import { timeAgo } from "../utils/time_ago";
import BlogPost from "../components/blogPost";
import NoData from "../components/noData";

const DashboardBlog = () => {
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getBlogs().then((data) => {
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
        <h1 className="text-lg">Blog posts</h1>
        <AddBlog refresh={refresh} setRefresh={setRefresh} />
      </div>
      {posts.length < 1 ? (
        <NoData />
      ) : (
        <div className="grid grid-cols-3 gap-4 mt-8">
          {posts.map((item) => (
            <BlogPost refresh={refresh} setRefresh={setRefresh} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardBlog;

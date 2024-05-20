import { useEffect, useState } from "react";
import { sectors } from "../utils/arrays";
import { getJobs } from "../controllers/jobController";
import { formatDate } from "../utils/format_date";
import { useNavigate } from "react-router-dom";
import { getBlogs } from "../controllers/blogController";
import { timeAgo } from "../utils/time_ago";
import PageLoader from "../components/pageLoader";

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
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
    <PageLoader />
  ) : (
    <div>
      <div className="pt-24"></div>
      <h1 className="text-2xl text-center mb-2">Blog Posts</h1>

      <div className="pt-4  w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
        {posts.map((item) => {
          return (
            <div
              onClick={() => {
                navigate(`/blogPostDetails/${item.id}`);
              }}
              className=" border border-borderColor rounded-md p-4 cursor-pointer  "
            >
              <img
                className="h-32 object-cover w-full rounded-md"
                src={item.image}
              />
              <div className="  px-0 py-4 ">
                <h1 className="text-lg  line-clamp-2">{item.title}</h1>
                <p className="text-sm text-muted">
                  Published: {timeAgo(item.createdAt.toDate())}
                </p>

                <p className="mt-2 line-clamp-1">{item.introduction}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;

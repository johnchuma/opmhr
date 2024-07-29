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
      

      <div className="pt-28 pb-8  w-8/12 2xl:w-6/12 mx-auto  gap-5">
        {posts.map((item) => {
          return (
            <div
              onClick={() => {
                navigate(`/blogPostDetails/${item.id}`);
              }}
              className="  rounded-md p-4 cursor-pointer flex space-x-6 "
            >
              <img
                className=" h-56 object-cover w-full rounded-lg"
                src={item.image}
              />
              <div className="  px-0 py-4 ">
                <h1 className="text-2xl  line-clamp-2 ">{item.title}</h1>
                <p className="text-sm text-muted">
                  Published: {timeAgo(item.createdAt.toDate())}
                </p>

                <p className="mt-2 line-clamp-3 font-light text-textColor text-opacity-80">
                  {item.introduction}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogPage;

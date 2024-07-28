import { useParams, useNavigate } from "react-router-dom";
import PageLoader from "../components/pageLoader";
import { useEffect, useState } from "react";
import { getBlog } from "../controllers/blogController";
import { timeAgo } from "../utils/time_ago";
import { useContext } from "react";
import { addComment, getComments } from "../controllers/commentsController";
import { toast } from "react-hot-toast";
import { UserContext } from "../layouts/mainLayout";
import { FaArrowLeft } from "react-icons/fa";

const BlogPostDetails = () => {
  const { uuid } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);

  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    getBlog(uuid).then((data) => {
      setPost(data);
      setLoading(false);
    });
  }, []);
  useEffect(() => {
    getComments(uuid, { setComments });
  }, []);
  return loading ? (
    <PageLoader />
  ) : (
    <div>
  

      <div className=" w-8/12 2xl:w-6/12 gap-x-10 mx-auto pt-28 pb-12 text-base ">
        <div onClick={()=>{
          navigate('/blog')
        }} className="flex space-x-2 cursor-pointer items-center text-muted mb-4">
          <FaArrowLeft />
          <h1 className="underline">Back</h1>
        </div>
        <h1 className="text-3xl font-medium">{post.title}</h1>
        <p className="text-sm text-muted pt-2">
          Published {timeAgo(post.createdAt.toDate())}
        </p>
        <img className="w-full my-5 rounded-lg" src={post.image} />
        <div className="space-y-5 text-textColor text-lg text-opacity-70">
          <p>{post.introduction}</p>
          <p>{post.paragraph1}</p>
          <p>{post.paragraph2}</p>
          <p>{post.paragraph3}</p>
          <p>{post.conclusion}</p>
        </div>
      </div>
      <div className="w-8/12 2xl:w-6/12 mx-auto">
        <h1 className=" text-xl mb-3">Share Your Comment Below</h1>
        <form
          className="grid grid-cols-12 space-y-4 w-full items-end "
          onSubmit={(e) => {
            e.preventDefault();
            const data = {
              comment: e.target.comment.value,
              name: user == null ? e.target.name.value : user.name,
              image: user == null ? null : user.profileURL,
              blogId: post.id,
            };
            addComment(data).then((data) => {
              e.target.comment.value = "";
              toast.success("Sent successfully");
            });
          }}
        >
          {user == null && (
            <div className="flex flex-col col-span-12 space-y-1">
              <label className="text-muted">Username</label>
              <input
                className=" border-borderColor rounded-md focus:ring-primary focus:border-primary bg-transparent"
                placeholder="Write username"
                name="name"
              />
            </div>
          )}
          <div className="flex flex-col col-span-12 space-y-2">
            <label className="text-muted">Write your comment</label>
            <textarea
              lines={1}
              name="comment"
              className="  border-borderColor rounded-md focus:ring-primary focus:border-primary bg-transparent w-full"
              placeholder="Type your comment here"
            />
          </div>
          <div className="col-span-2">
            <button
              className="bg-primary rounded-lg py-2 px-3 text-white"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
        <h1 className=" py-2  text-lg mt-8">Comments</h1>
        <div className="space-y-4 mb-24 ">
          {comments.map((item) => {
            return (
              <div className="flex space-x-3 items-center w-full">
                <div className=" h-9 w-9 bg-green-100  flex justify-center items-center rounded-full">
                  {item.image ? (
                    <img src={item.image} className="rounded-full h-9 w-9" />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <h1 className=" text-sm text-muted ">{item.name}</h1>
                    <p className=" text-muted text-sm">
                      {timeAgo(item.createdAt.toDate())}
                    </p>
                  </div>
                  <h1 className="text-base ">{item.comment}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPostDetails;

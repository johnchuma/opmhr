import { useEffect, useState } from "react";
import { sectors } from "../utils/arrays";
import { getJobs } from "../controllers/jobController";
import { formatDate } from "../utils/format_date";
import {useNavigate} from "react-router-dom"
import { getBlogs } from "../controllers/blogController";
import { timeAgo } from "../utils/time_ago";
import PageLoader from "../components/pageLoader";

const BlogPage = () => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate()
    const [refresh, setRefresh] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
      getBlogs().then((data)=>{
        setPosts(data)
        setLoading(false)

      })
    }, [refresh]);
    return ( loading?<PageLoader/>: <div>
          <div className="bg-slate-900 text-white flex py-12 md:py-24 flex-col justify-center items-center">
    <h1 className="text-4xl font-bold">Blog</h1>
    <div className="w-12 h-2 bg-green-600 mt-3"></div>
  </div>
  <div className="bg-slate-800 text-white flex py-8  justify-center items-center">
    <h1 className="text-sm font-bold">Home</h1>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
    className="w-4 h-4 text-green-600">
    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
    </svg>
    </div>
    <h1 className="text-sm font-bold">Blog</h1>
  </div>
  <div className="py-12 md:py-24 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-5">
    {posts.map((item)=>{
        return <div onClick={()=>{
            navigate(`/blogPostDetails/${item.id}`)
        }} className="bg-white shadow-lg cursor-pointer  ">
              <img className="h-32 object-cover w-full" src={item.image}/>
              <div className="  px-5 py-4 ">
              <h1 className="text-lg font-semibold line-clamp-2">{item.title}</h1> 
              <p className="text-sm">Published: {timeAgo(item.createdAt.toDate())}</p>
  
              <p className="mt-2 line-clamp-1">{item.introduction}</p>
              </div>
          </div>
    })}
  </div>
    </div> );
}
 
export default BlogPage;
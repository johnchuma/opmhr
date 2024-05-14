import {useParams,useNavigate} from "react-router-dom"
import PageLoader from "../components/pageLoader";
import { useEffect, useState } from "react";
import { getBlog } from "../controllers/blogController";
import { timeAgo } from "../utils/time_ago";
import { useContext } from "react";
import { UserContext } from "../layouts/websiteLayout";
import { addComment, getComments } from "../controllers/commentsController";
import {toast} from "react-hot-toast"
const BlogPostDetails = () => {
   const {uuid} = useParams()
const [post, setPost] = useState(null);
const [comments, setComments] = useState([]);
const [loading, setLoading] = useState(true);
const {user} = useContext(UserContext)

const navigate = useNavigate()
   useEffect(() => {
    setLoading(true)
     getBlog(uuid).then((data)=>{
          setPost(data)
         setLoading(false)

     })
   }, []);
   useEffect(() => {
     getComments(uuid,{setComments})
  
   }, []);
    return (loading?<PageLoader/>: <div>
          <div className="bg-slate-900 text-white flex py-12 md:py-24 flex-col justify-center items-center">
    <h1 className="text-4xl font-bold">Blog post</h1>
    <div className="w-12 h-2 bg-green-600 mt-3"></div>
  </div>
  <div className="bg-slate-800 text-white flex py-8  justify-center items-center">
    <h1 onClick={()=>{
         navigate('/blog')
    }} className="text-sm font-bold cursor-pointer">Posts</h1>
    <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
    className="w-4 h-4 text-green-600">
    <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
    </svg>
    </div>
    <h1  className="text-sm font-bold cursor-pointer ">{post.title}</h1>
  </div>
  <div className="w-11/12 md:w-8/12 gap-x-10 mx-auto py-12 md:py-24 text-lg ">
     <h1 className="text-5xl font-bold">{post.title}</h1>
     <p className="text-lg pt-2">Published {timeAgo(post.createdAt.toDate())}</p>
     <img className="w-full my-5" src={post.image}/>
    <div className="space-y-5">
    <p>{post.introduction}</p>
    <p>{post.paragraph1}</p>
    <p>{post.paragraph2}</p>
    <p>{post.paragraph3}</p>
    <p>{post.conclusion}</p>
    </div>

  


  
  </div>
  <div className="w-8/12 mx-auto">
  <h1 className=" text-3xl mb-3 font-bold">Share Your Comment Below</h1>
  <form className="grid grid-cols-12 space-y-4 w-full items-end " onSubmit={(e)=>{
      e.preventDefault()
      const data = {
        comment:e.target.comment.value,
        name:user==null?e.target.name.value:user.name,
        image:user==null?null:user.profileURL,
        blogId:post.id
      }
       addComment(data).then((data)=>{
        e.target.comment.value = ""
        toast.success("Sent successfully")
       })
    }}>
      
      { user==null&&
        <div className="flex flex-col col-span-12 space-y-1">
   

        <label>Username</label>
        <input  className=" border-slate-300 bg-transparent" placeholder="Write username" name="name"/>
        </div>}
        <div className="flex flex-col col-span-12 space-y-2">
          <label>Write your comment</label>
        <textarea lines={1} name="comment" className=" rounded border-slate-300 bg-transparent w-full"  placeholder="Type your comment here"/>
        </div>
        <div className="col-span-2">
          <button className="bg-green-600  py-2 px-3 font-bold text-white" type="submit">Send message</button>
        </div>
    </form>
    <h1 className=" py-2 font-bold text-xl mt-8">Comments</h1>
  <div className="space-y-4 mb-24 ">
  {comments.map((item)=>{
      return <div className="flex space-x-3 items-center w-full">
        <div className=" h-9 w-9 bg-green-100  flex justify-center items-center rounded-full">
          {item.image?<img src={item.image} className="rounded-full h-9 w-9"/>:<svg xmlns="http://www.w3.org/2000/svg"
           fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-5 h-5"> <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>
}
        </div>
        <div>
          <div className="flex  space-x-3">
          <h1 className=" font-semibold">{item.name}</h1>
          <p className="text-gray-500">{timeAgo(item.createdAt.toDate())}</p>
          </div>
          <h1 className="text-lg">{item.comment}</h1>

        </div>
      </div>
    })}
  </div>
  
 
  </div>
    </div> );
}
 
export default BlogPostDetails;
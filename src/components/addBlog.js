import { useState } from "react";
import { addBlog } from "../controllers/blogController";
import { getLink } from "../utils/get_link";

const AddBlog = ({refresh,setRefresh}) => {
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    return ( <div>
            <button onClick={()=>{
                setShowModal(true)
            }} className="py-2 px-4 bg-green-600 text-white ">New post</button>
       {
        showModal&& <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-center items-center">
        <div className="w-7/12 bg-white  shadow-xl h-3/4 overflow-y-scroll px-8 py-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Publish new post</h1>
          <svg onClick={()=>{
                setShowModal(false)
          }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
      </div>
     <form onSubmit={(e)=>
     {
      e.preventDefault()
      setLoading(true)
        getLink(file).then((link)=>{
          const data = {
              image:link,
              title:e.target.title.value,
              introduction:e.target.introduction.value,
              paragraph1:e.target.paragraph1.value,
              paragraph2:e.target.paragraph2.value,
              paragraph3:e.target.paragraph3.value,
              conclusion:e.target.conclusion.value,
            }
            addBlog(data).then((data)=>{
             setLoading(false)
             setRefresh(refresh+1)
             setShowModal(false)
            })
      })
      
     }} className="space-y-4 mt-5">
      <div className="flex flex-col space-y-1">
      <label className="flex justify-center  cursor-pointer" for="image">
      {file == null ?  <div className="space-x-2 flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
      <h1>Pick image</h1>
      </div> : <img className="w-5/12 mx-auto" src={URL.createObjectURL(file)}/>}
     
      
          </label >
      <input onChange={(e)=>{
         setFile(e.target.files[0])
      }} required id="image" type="file" className="sr-only"></input>
      </div>
     <div className="flex flex-col space-y-1">
      <h1>Blog title</h1>
      <input required name="title" className="w-full border-slate-300" placeholder="Blog title"/>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Introduction</h1>
      <textarea required name="introduction" className="w-full border-slate-300" placeholder="Write introduction here"/>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>First paragraph</h1>
      <textarea name="paragraph1" className="w-full border-slate-300" placeholder="Write here"/>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Second paragraph</h1>
      <textarea name="paragraph2" className="w-full border-slate-300" placeholder="Write here"/>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Third paragraph</h1>
      <textarea name="paragraph3" className="w-full border-slate-300" placeholder="Write here"/>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Conclusion</h1>
      <textarea required name="conclusion" className="w-full border-slate-300" placeholder="Write conclusion here"/>
      </div>
      <button type="submit" className="py-3 px-7 bg-green-600 text-white flex justify-center w-40 ">
          {loading?<div className="h-4 w-4 border-4 border-white border-t-transparent rounded-full animate-spin"/>:"Publish Post"}</button>
     </form>
       
        </div>
      </div>
       }
        
    </div> );
}
 
export default AddBlog;
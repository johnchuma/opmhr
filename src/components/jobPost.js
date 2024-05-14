import { useState } from "react";
import { deleteBlog, updateBlog } from "../controllers/blogController";
import { timeAgo } from "../utils/time_ago";
import { getLink } from "../utils/get_link";
import { formatDate } from "../utils/format_date";
import { deleteJob, updateJob } from "../controllers/jobController";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { Timestamp } from "firebase/firestore";
import moment from "moment";
import { sectors } from "../utils/arrays";
import Spinner from "./spinner";
import {toast} from "react-hot-toast"
const JobPost = ({item,refresh,setRefresh}) => {
    const [showModal, setShowModal] = useState(false);
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [publishing, setPublishing] = useState(false);
    const [description, setDescription] = useState(item.description);
    const [skills, setSkills] = useState(item.skills);
    const [responsibilities, setResponsibilities] = useState(item.responsibilities);
    return ( <div>
        <div onClick={()=>{
          setShowModal(true)
        }} className="bg-white shadow cursor-pointer px-8 py-8 ">
            <div className="flex items-center space-x-2">
            <img className="h-10 w-10 object-cover" src={item.logo}/>
            <div className=" ">
            <h1 className="text-lg font-semibold line-clamp-2">{item.title}</h1> 
            <p className="text-sm">Company: {item.company}</p>  
            </div>
            </div>
            <div className="flex flex-wrap mt-2">
            <button className="py-1 px-3 mb-2 me-2 items-center text-sm rounded-full bg-green-100  flex">
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                </svg>
                <div>
                {item.address}
                </div>
                </button>
                <button className="py-1 px-3 mb-2 me-2 items-center text-sm rounded-full bg-indigo-100 flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                 fill="currentColor" className="w-4 h-4">
  <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
</svg>

                <div>
                {item.vacancies} Vacancies
                </div>
                </button>
                <button className="py-1 px-3 mb-2 me-2 items-center text-sm rounded-full bg-orange-100  flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" 
                fill="currentColor" className="w-4 h-4">
                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                </svg>
                <div>
              Deadline {formatDate(item.deadline.toDate())}
                </div>
                </button>
            </div>
            <p className="mt-2 line-clamp-2" dangerouslySetInnerHTML={{ __html:item.description }}></p>
        </div>
        {
        showModal&& <div className="fixed inset-0 bg-black bg-opacity-25 z-50 flex justify-center items-center">
         <div className="w-7/12 bg-white  shadow-xl h-3/4 overflow-y-scroll px-8 py-10">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold"></h1>
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
              logo:link??item.logo,
              company:e.target.company.value,
              address:e.target.address.value,
              title:e.target.title.value,
              description,
              type:e.target.type.value,
              vacancies:e.target.vacancies.value,
              salary:e.target.salary.value,
              sector:e.target.sector.value,
              skills,
              responsibilities,
              deadline: Timestamp.fromDate(new Date(e.target.deadline.value)),
            }
            updateJob(item.id,data).then((data)=>{
             setLoading(false)
             setRefresh(refresh+1)
             setShowModal(false)
            })
      })
      
     }} className="space-y-4 mt-5">
      <div className="flex flex-col space-y-1">
      <label className="flex justify-center  cursor-pointer" for="image">
      {file == null ?  <img className=" w-16 aspect-square mx-auto"
       src={item.logo}/>: <img className=" w-16 aspect-square mx-auto" src={URL.createObjectURL(file)}/>}
     
      
          </label >
      <input onChange={(e)=>{
         setFile(e.target.files[0])
      }}  id="image" type="file" className="sr-only"></input>
      </div>

  

      <div className="flex flex-col space-y-1">
      <h1>Company name</h1>
      <input required name="company" defaultValue={item.company} className="w-full border-slate-300"
       placeholder="Write company name"/>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Company address</h1>
      <input required name="address" defaultValue={item.address} className="w-full border-slate-300"
       placeholder="Write ompany address"/>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Job title</h1>
      <input required name="title" defaultValue={item.title} className="w-full border-slate-300" 
      placeholder="Write job title"/>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Vacancies Available</h1>
      <input required name="vacancies" type="number" defaultValue={item.vacancies} className="w-full border-slate-300" 
      placeholder="Enter the number of vacancies"/>
    </div>
      <div className="flex flex-col space-y-1">
      <h1>Sector</h1>
      <select required name="sector" defaultValue={item.sector}  className="w-full border-slate-300" 
      placeholder="Write job title">
        {sectors.map((item)=>{
          return <option  value={item}>{item}</option>
        })}
      </select>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Job category</h1>
      <select required name="type" defaultValue={item.type} className="w-full border-slate-300" 
      placeholder="Write job title">
        <option value="Employee">Employee</option>
        <option value="Trainee">Trainee</option>
        <option value="Volunteer">Volunteer</option>

      </select>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Salary (TSH)</h1>
      <input required name="salary" defaultValue={item.salary} className="w-full border-slate-300" 
      placeholder="Write job salary"/>
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Job description</h1>
      <ReactQuill theme="snow" defaultValue={item.description} placeholder="Write key responsibilities here" value={description} onChange={setDescription} />

      </div>
      <div className="flex flex-col space-y-1">
      <h1>Key responsibilities</h1>
      <ReactQuill theme="snow" defaultValue={item.responsibilities} placeholder="Write key responsibilities here" value={responsibilities} onChange={setResponsibilities} />

      </div>
      <div className="flex flex-col space-y-1">
      <h1>Skills & Qualifications</h1>
      <ReactQuill theme="snow" defaultValue={item.skills} placeholder="Write skills & qualificaions" value={skills} onChange={setSkills} />
     
      </div>
      <div className="flex flex-col space-y-1">
      <h1>Deadline</h1>
      <input type="date" required defaultValue={moment(item.deadline.toDate()).format("YYYY-MM-DD")} name="deadline" className="w-full border-slate-300" />
      </div>
      {
        item.companyId &&<div className="mt-8">
          <h1 className="font-bold text-lg">Publisher's contacts</h1>
    <div className="flex space-x-2 text-slate-600">  <p>{item.email}</p>,
      <p>{item.phone}</p></div>
        </div>
      }
      <div className="flex space-x-2">
      <button type="submit" className="py-3 px-7 bg-green-600 text-white flex justify-center w-40 ">
          {loading?<div className="h-4 w-4 border-4 border-white border-t-transparent rounded-full animate-spin"/>:"Save changes"}
      </button>
    {item.published == false&&  <div onClick={()=>{
      setPublishing(true)
      updateJob(item.id,{
        published:true
      }).then((data)=>{
        toast.success("Published successfully")
        setPublishing(false)
        setShowModal(false)
        setRefresh(refresh+1)
      })
    }} className="py-3 px-7 cursor-pointer bg-orange-600 text-white flex justify-center min-w-40 ">
          {publishing?<Spinner/>:"Publish This Job"}
      </div>}
      </div>
     </form>
       <div onClick={()=>{
         deleteJob(item.id).then((data)=>{
          setRefresh(refresh+1)
          toast.success("Deleted successfully")
          setShowModal(false)
         })
       }} className="flex justify-center mt-8 text-red-300 hover:text-red-600 cursor-pointer">
        <div className="flex space-x-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
</svg>

        <h1 className="font-bold ">Delete Post</h1> 
          
        </div>
        </div>
        </div>
      </div>
       }
    </div>  );
}
 
export default JobPost;
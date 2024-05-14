import {useLocation,useNavigate} from "react-router-dom"
const MiniSidebar = () => {
    const {pathname} = useLocation()
    const navigate = useNavigate()

    return (    <div className=" pr-10 hidden md:block">
    <div className="bg-gray-100 border-l-4 mb-4  border-orange-400">
     <div className="space-y-4 py-8">
     {[
         {title:"Contact Us",path:"/contactUs"},
         {title:"Why top target ?",path:"/whyus"},
         {title:"Clients & partners",path:"/partners"},
         {title:"Top target in a glance",path:"/aboutus"},

     ].map((item)=>{
         return <div  className={` px-4 cursor-pointer text-lg -translate-x-1 ${item.path==pathname?"border-l-4 border-slate-900":"border-l-4 border-orange-400"} font-bold`} onClick={()=>{
             navigate(item.path)
         }
         }>{item.title}</div>
     })}
     </div>
    </div>

                            
<div>
<h1 className="text-xl font-bold">For Business Enquiry</h1>
 <p className="">You can also send us an email and we’ll get in touch shortly, or Troll Free Number +255677274141</p>
</div>
 </div> );
}
 
export default MiniSidebar;
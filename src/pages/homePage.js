const HomePage = () => {
    return ( <div className="pt-20">
        <div className="  bg-lightBackground py-12 h-screen ">
        <div className="flex flex-col space-y-6 justify-center items-center w-7/12 mx-auto text-center font-aeonik ">
            <h1 className="text-5xl font-medium ">Bridging HR and Technlogy for Global Success</h1>
            <p className="text-muted">We empower organizations with innovative solutions , optimizing HR functions for unparalleled efficiency and global success. We Offer a wide Range of HR solution to the business.</p>
            <div className="flex space-x-4">
                <button className="bg-primary text-white py-3 px-4 rounded-xl">Subscribe Now</button>
                <button className="bg-color text-primary py-3 px-4 rounded-xl flex items-center bg-white space-x-2  ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>
                <div>Demo</div>
               </button>
            </div>
        </div>
        <div className="mb-24">
        <div className=" flex w-11/12 mx-auto mt-8 relative z-0 justify-center ">
            <img className="w-full aspect-video object-cover rounded-3xl " src="/video.png"/>
            <div className="absolute  bg-black bg-opacity-20 border-8 border-white  rounded-3xl w-full flex h-full items-center justify-center ">
                <div className="w-24 h-24 rounded-full bg-white animate-pulse hover:animate-none transition-all duration-500 flex justify-center items-center ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 text-primary h-7">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                </svg>

                </div>
            </div>
        </div>
        </div>
        </div>
        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <br/><br/><br/><br/><br/>
        <div className="grid grid-cols-6 w-11/12 mx-auto pb-20 opacity-35">
            {["logo (1).jpg","logo (1).png","logo (2).jpg","logo (2).png","logo (3).jpg","logo (3).png"].map((item)=>{
               return <div className="flex justify-center"><img className="h-10" src={`/logos/${item}`}/></div>
            })}
        </div>
        <div className="grid grid-cols-12 w-11/12 mx-auto justify-between space-x-10 pb-20 ">
            <div className=" col-span-5">
                <h1 className="text-3xl font-medium">Short summary about OPM International HR Consultants: </h1>
            </div>
            <div className=" col-span-7">
                <p className=" text-muted"> A premier HR-IT consulting firm specializing in bridging the gap between human resources and cutting-edge technology across the globe.We empower organizations with innovative solutions , optimizing HR functions for unparalleled efficiency and global success. We Offer a wide Range of HR solution to the business.</p>
            </div>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-12 space-x-16 items-center">
        <div className=" col-span-6">
            <h1 className="text-3xl font-medium">Explore our services</h1>
            <p className="mt-3 text-muted">
            Weare the bridge to a modern, data-driven, and globally-minded HR function.Let us help you unlock the full potential of your HR technology and workforce across local and international borders.
            </p>
          <div className=" space-y-3 mt-8">
          {[
            "Global HR Technology Consulting",
            "International and Local HR Data Analytics & Reporting",
            "Global HR Process Automation",
            "Global HR Transformation Strategy",
            "Global Change Management & Training"            
            ].map((item)=>{
                return <div className="text-muted border-l-8 border-l-primary flex justify-between border-2 border-lightBackground  rounded-lg py-2 px-3 ">
                    <p>{item}</p>
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-muted text-opacity-40">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                    </div>
                </div>
            })}
          </div>

            </div>
            <div className=" col-span-6">
                <img className=" rounded-3xl " src="girl.png"/>
            </div>
           
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-12 space-x-16 items-center py-24">
        <div className=" col-span-6">
                <img className=" rounded-3xl" src="girl2.jpg"/>
            </div>
        <div className=" col-span-6">
            <h1 className="text-3xl font-medium">Our softwares/products</h1>
            <p className="mt-3 text-muted">
            Weare the bridge to a modern, data-driven, and globally-minded HR function.Let us help you unlock the full potential of your HR technology and workforce across local and international borders.
            </p>
            <p className="mt-3 text-muted">
            Weare the bridge to a modern, data-driven, and globally-minded HR function.Let us help you unlock the full potential of your HR technology and workforce across local and international borders.
            </p>
          <div className=" space-y-3 mt-8">
        
          </div>

            </div>
           
           
        </div>
        <div className="w-full mx-auto bg-lightBackground py-24 mb-8">
            <div className="w-6/12 mx-auto text-center space-y-4">
            <h1 className="font-medium text-3xl">Latest job posts</h1>
            <p className="text-muted">Deserunt sit non. Magna ullamco consectetur proident ex est duis magna tempor duis commodo velit qui amet. Quis cillum  mollit sunt.</p>
          
            
            </div>
            <div className="grid grid-cols-3 w-11/12 mx-auto gap-4 mt-8">
          {[
            {
                title:"Digital Marketing Specialist",
                company:"OMNI-SOLUTIONS",
                location:"Dar es Salaam",
                salary:"2,000,000 TSH",
                employement:"Full Time"  
            },
            {
                title:"Digital Marketing Specialist",
                company:"OMNI-SOLUTIONS",
                location:"Dar es Salaam",
                salary:"2,000,000 TSH",
                employement:"Full Time"  
            },
            {
                title:"Digital Marketing Specialist",
                company:"OMNI-SOLUTIONS",
                location:"Dar es Salaam",
                salary:"2,000,000 TSH",
                employement:"Full Time"  
            },
            {
                title:"Digital Marketing Specialist",
                company:"OMNI-SOLUTIONS",
                location:"Dar es Salaam",
                salary:"2,000,000 TSH",
                employement:"Full Time"  
            },
            {
                title:"Digital Marketing Specialist",
                company:"OMNI-SOLUTIONS",
                location:"Dar es Salaam",
                salary:"2,000,000 TSH",
                employement:"Full Time"  
            },
            {
                title:"Digital Marketing Specialist",
                company:"OMNI-SOLUTIONS",
                location:"Dar es Salaam",
                salary:"2,000,000 TSH",
                employement:"Full Time"  
            }
        ].map((item)=>{
                return <div className="bg-white p-4 rounded-lg">
                    <div className="flex space-x-3">
                        <div className="w-2/12">
                        <img src="https://cdn.vox-cdn.com/thumbor/VKD3KfczL8xi89_n32rmbjTpdlg=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13674554/Mastercard_logo.jpg"/>
                        </div>
                        <div className="w-10/12">
                        <h1 className="font-medium ">{item.title}</h1>
                        <p className="text-primary">{item.company}</p>
                     
                        <p className="flex text-muted space-x-3">
                        <i>
                        {item.location}
                            </i>  
                            <span>
                       -
                        </span>
                        <span>
                        2 min ago
                        </span>
                        </p>

                        <p className="flex text-muted space-x-3">
                        <span>
                        {item.salary}
                            </span>  
                        <span className="flex items-center space-x-1 "> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 text-muted h-4">
                        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
                        </svg> 
                        <span>
                        {item.employement}
                        </span>
                        </span>
                        </p>


                        </div>
                    </div>
                </div>
            })}
          </div>
          <div className="flex justify-center space-x-3 mt-8">
                <button className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
                </svg>
                </button>
                <button className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                </svg>
                </button>
             </div>
        </div> 
        <div className="w-6/12 mx-auto py-12 text-center">
        <h1 className="font-medium text-3xl text-primary">Our director statement</h1>
        <p className=" italic text-xl  text-muted"><span className="text-8xl text-orange-400">"</span>
         Do velit eiusmod ad excepteur officia officia laboris consequat minim aute excepteur sit. Dolore occaecat aute ex laborum reprehenderit veniam ex magna ut ut sit sunt mollit. Consequat laboris sint eu nulla officia.
        </p>
<div className="text-end">
<span className="text-8xl text-orange-400">"</span>

</div>

        </div>
        <div className="w-11/12 mx-auto bg-lightBackground rounded-2xl py-24">
            <div className="w-6/12 mx-auto text-center space-y-4">
            <h1 className="font-medium text-3xl">Get our Daily Updates</h1>
            <p className="text-muted">Deserunt sit non. Magna ullamco consectetur proident ex est duis magna tempor duis commodo velit qui amet. Quis cillum  mollit sunt.</p>
             <div className="flex justify-center space-x-3">
                <input placeholder="Enter email address" className=" border-muted focus:border-primary focus:ring-primary   border-opacity-10 rounded-md"/>
                <button className="text-white bg-primary px-2 py-2 rounded-lg">Subscribe</button>
             </div>
            </div>
        </div>
    </div> );
}
 
export default HomePage;
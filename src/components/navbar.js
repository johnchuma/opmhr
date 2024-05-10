const Navbar = () => {
    return ( <div className="fixed w-full bg-white  text-muted z-50">
    <div className="flex w-11/12  items-center mx-auto py-4 justify-between">
        <img className="h-12" src="/logo.jpeg"/>
        <div className="flex space-x-3">
            {[
                {title:"Products",path:""},
                {title:"Company",path:""},
                {title:"Jobs",path:""},
                {title:"Posts",path:""},
                {title:"Contacts",path:""},

            ].map((item)=>{
                return <button>{item.title}</button>
            })}
        </div>
        <div className="flex space-x-3">
        <button className=" bg-lightBackground py-3 px-4 rounded-xl">Login</button>
        <button className="bg-primary text-white py-3 px-4 rounded-xl">Book a free Demo</button>

        </div>

    </div>
    </div> );
}
 
export default Navbar;
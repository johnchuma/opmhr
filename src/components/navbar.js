import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="fixed w-full bg-white border-b border-borderColor  text-muted z-50">
      <div className="flex w-11/12  items-center mx-auto py-4 justify-between">
        <img
          className="h-12 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
          src="/logo.jpeg"
        />
        <div className="flex space-x-3">
          {[
            { title: "Services", path: "/services/0" },
            { title: "Products", path: "/products" },
            { title: "Company", path: "/company" },
            { title: "Investment", path: "/investment" },
            { title: "Jobs", path: "/jobs" },
            { title: "Posts", path: "/blog" },
            { title: "Contacts", path: "/contactus" }
          ].map((item) => {
            return (
              <button onClick={() => navigate(item.path)}>{item.title}</button>
            );
          })}
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => {
              navigate("/login");
            }}
            className=" bg-lightBackground py-3 px-4 rounded-xl"
          >
            Login
          </button>
          <button className="bg-primary text-white py-3 px-4 rounded-xl">
            Book a free Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

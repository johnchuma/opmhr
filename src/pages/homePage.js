import { useNavigate } from "react-router-dom";
import { services, softwares } from "../utils/arrays";
import { useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";
import {
  FaArrowRight,
  FaBeer,
  FaLightbulb,
  FaPeopleCarry,
  FaSearch,
  FaSign,
  FaSwift,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
const HomePage = () => {
  //animation variants
  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const navigate = useNavigate();
  return (
    <div className=" overflow-hiden bg-white text-textColor ">
      <div className="  pt-0 relative h-screen w-screen">
        <img
          className="h-full w-full object-cover absolute"
          src="/background.png"
        />
        <div className="absolute h-full w-full ">
          <div className="   py-12 h-screen w-10/12 2xl:w-8/12 mx-auto rounded-xl items-center flex ">
            <div className=" gap-16  grid grid-cols-12 items-start ">
              <motion.div
                initial={{ x: -2000, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
                className=" space-y-8 col-span-8 "
              >
                <h1 className="text-6xl font-medium leading-tight text-white  ">
                  Bridging HR and Technlogy for Global Success
                </h1>
                <p className="text-white text-opacity-80 text-lg">
                  We empower organizations with innovative solutions ,
                  optimizing HR functions for unparalleled efficiency and global
                  success. We Offer a wide Range of HR solution to the business.
                </p>
                <div className="flex space-x-4 items-center">
                  <button className="bg-primary hover:scale-105 transition-all  duration-200 cursor-pointer font-medium text-white py-4 px-6 rounded-full">
                    Subscribe Now
                  </button>
                  <div className="w-12 h-12 rounded-full   border border-white border-opacity-75 hover:animate-none transition-all duration-500 flex justify-center items-center ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 text-white h-7"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <h1 className="text-white">Watch video</h1>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ y: 300, opacity: 0 }}
        animate={{ y: -50, opacity: 1, transition: { duration: 1, delay: 1 } }}
        className="w-10/12 2xl:w-8/12 mx-auto bg-white shadow-2xl -translate-y-10 p-8 rounded-3xl"
      >
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 w-8/12 items-center bg-slate-50  py-2 px-8 rounded-full">
            <FaSearch />
            <input
              className="w-full border-0 bg-transparent focus:border-o focus:ring-0"
              placeholder="Search keyword/ job title"
            />
          </div>
          <div className="flex space-x-2  items-center bg-slate-50  py-2 px-8 rounded-full">
            <select className="w-full border-0 bg-transparent focus:border-o focus:ring-0">
              <option>Select category</option>
              <option value="Employee">Employee</option>
              <option value="Trainee">Trainee</option>
              <option value="Volunteer">Volunteer</option>
            </select>
          </div>
          <button className="bg-primary hover:scale-105 transition-all  duration-200 cursor-pointer font-medium text-white py-4 px-6 rounded-full">
            Search Jobs
          </button>
        </div>
      </motion.div>

      <motion.div
        whileInView="visible"
        initial="hidden"
        variants={scrollAnimationVariants}
        className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center gap-16"
      >
        <div className=" col-span-6">
          <h1 className="font-medium text-textColor text-4xl">
            About OPM International HR Consultants
          </h1>
          <p className="text-lg text-muted  mt-4">
            A premier HR-IT consulting firm specializing in bridging the gap
            between human resources and cutting-edge technology across the
            globe.We empower organizations with innovative solutions ,
            optimizing HR functions for unparalleled efficiency and global
            success. We Offer a wide Range of HR solution to the business
          </p>
          <button className="bg-primary hover:scale-105 transition-all  duration-200 cursor-pointer font-medium text-white py-4 px-6 mt-8 rounded-full">
            Learn More
          </button>
        </div>

        <div className=" col-span-6">
          <img src="/about.png" />
        </div>
      </motion.div>
      <motion.div
        variants={scrollAnimationVariants}
        whileInView="visible"
        initial="hidden"
        className="bg-lightBackground py-8"
      >
        <div className="flex justify-center">
          <h1 className="text-4xl font-medium py-12">Our core values</h1>
        </div>
        <div className="w-10/12 2xl:w-8/12 grid grid-cols-5 gap-8 mx-auto ">
          {[
            {
              icon: <FaSign />,
              title: "Integrity",
              details:
                "We conduct ourselves with the highest ethical standards, building trust and transparency in all our interactions.",
            },
            {
              icon: <FaPeopleCarry />,
              title: "Client-Centricity",
              details:
                "We are deeply committed to understanding your unique needs and exceeding your expectations.",
            },
            {
              icon: <FaPeopleGroup />,
              title: "Collaboration",
              details:
                "We believe in the power of teamwork and open communication, fostering a collaborative environment for shared growth.",
            },
            {
              icon: <FaLightbulb />,
              title: "Innovation",
              details:
                "We continuously explore and implement cutting-edge HR strategies and technologies to drive success.",
            },
            {
              icon: <FaSwift />,
              title: "Diversity and Inclusion",
              details:
                "We celebrate the unique perspectives and experiences of all individuals, creating an inclusive and welcoming work environment.",
            },
          ].map((item) => {
            return (
              <div className="hover:scale-105 transition-all  duration-200 cursor-pointer">
                <div className="p-3 rounded-2xl items-center justify-center flex size-20 bg-white shadow-xl text-primary text-2xl">
                  {item.icon}
                </div>
                <h1 className="font-medium text-textColor text-2xl mt-8 ">
                  {item.title}
                </h1>
                <p className="text-base text-muted mt-1">{item.details}</p>
              </div>
            );
          })}
        </div>
        <div className="w-8/12 2xl:w-6/12 mx-auto text-center py-12 ">
          <h1 className="f font-medium text-4xl my-8">
            We Simplify HR Activities Around the World
          </h1>
          <p className="text-lg text-muted mt-2">
            Covering over 20 Countries in the world.
          </p>
          <div className="grid grid-cols-7 items-center space-x-3 my-8">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => {
              return (
                <div className="flex justify-center">
                  <img className="h-16" src={`Ellipse ${item}.png`} />
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-7 items-center space-x-3 mt-4">
            {[10, 11, 12, 13, 14, 15, 16].map((item) => {
              return (
                <div className="flex justify-center">
                  <img className=" h-16 " src={`Ellipse ${item}.png`} />
                </div>
              );
            })}
          </div>
          <p className="text-lg text-muted mt-8">
            Comply with local tax laws, handle pensions and social
            contributions, seamlessly.
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={scrollAnimationVariants}
        whileInView="visible"
        initial="hidden"
        className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center py-24"
      >
        <div className=" col-span-6">
          <h1 className="font-medium text-textColor text-4xl">
            Performance Management Software
          </h1>
          <p className="text-lg text-muted  mt-4">
            Performance Management Software is designed to help organizations
            streamline and optimize their performance
          </p>
          <div className="flex space-x-4">
            <button className="bg-primary font-medium text-white py-4 px-6 mt-8 rounded-full hover:scale-105 transition-all  duration-200 cursor-pointer">
              Order software
            </button>
            <button className=" hover:scale-105 transition-all  duration-200 cursor-pointer border border-dark  border-opacity-45 font-medium text-dark py-4 px-6 mt-8 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        <div className=" col-span-6">
          <img src="/product.png" />
        </div>
      </motion.div>
      <motion.div
        variants={scrollAnimationVariants}
        whileInView="visible"
        initial="hidden"
        className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center py-4 gap-8"
      >
        <div className=" col-span-6">
          <img src="/hris.svg" />
        </div>
        <div className=" col-span-6">
          <h1 className="font-medium text-textColor text-4xl">
            HRIS (Human Resources Information System)
          </h1>
          <p className="text-lg text-muted  mt-4">
            HRIS (Human Resources Information System) software is a
            comprehensive solution designed to manage HR functions efficiently.
          </p>
          <div className="flex space-x-4">
            <button className=" hover:scale-105 transition-all  duration-200 cursor-pointer bg-primary font-medium text-white py-4 px-6 mt-8 rounded-full">
              Order software
            </button>
            <button className="  hover:scale-105 transition-all  duration-200 cursor-pointer border border-dark  border-opacity-45 font-medium text-dark py-4 px-6 mt-8 rounded-full">
              Learn More
            </button>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={scrollAnimationVariants}
        whileInView="visible"
        initial="hidden"
        className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center py-24"
      >
        <div className=" col-span-6">
          <h1 className="font-medium text-textColor text-4xl">
            Payroll Software
          </h1>
          <p className="text-lg text-muted  mt-4">
            Payroll software simplifies and automates the payroll process,
            ensuring accuracy and compliance with legal standards.
          </p>
          <div className="flex space-x-4">
            <button className=" hover:scale-105 transition-all  duration-200 cursor-pointer bg-primary font-medium text-white py-4 px-6 mt-8 rounded-full">
              Order software
            </button>
            <button className="  hover:scale-105 transition-all  duration-200 cursor-pointer border border-dark  border-opacity-45 font-medium text-dark py-4 px-6 mt-8 rounded-full">
              Learn More
            </button>
          </div>
        </div>

        <div className=" col-span-6">
          <img src="/payroll.svg" />
        </div>
      </motion.div>
      <div className="flex justify-center items-center">
        <button className=" flex items-center space-x-3 hover:bg-primary  hover:text-white  hover:scale-105 transition-all  duration-200 cursor-pointer border border-dark  border-opacity-45 font-medium text-dark py-4 px-6 mt-8 rounded-full">
          <div>View more softwares</div>
          <FaArrowRight />
        </button>
      </div>
      <motion.div
        variants={scrollAnimationVariants}
        whileInView="visible"
        initial="hidden"
        className=" pt-24"
      >
        <div className="w-6/12 mx-auto text-center">
          <h1 className="text-4xl font-medium">Our Services</h1>
        </div>
        <div className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-4 gap-6 mt-8">
          {services.map((item) => (
            <div className="bg-white shadow-2xl rounded-2xl  p-5 flex flex-col text-center items-center">
              <div className="text-primary text-3xl">{item.icon}</div>
              <h1 className="font-medium text-xl mt-2">{item.title}</h1>
              <p className="text-muted mt-2">{item.description}</p>
            </div>
          ))}
        </div>

        <motion.div
          variants={scrollAnimationVariants}
          whileInView="visible"
          initial="hidden"
          className=" w-10/12 2xl:w-8/12 mx-auto py-24"
        >
          <h1 className="text-4xl font-medium text-center ">
            Latest blog posts
          </h1>
          <p className="text-muted text-center text-xl py-3">
            Take a look at our new blogs and guides
          </p>
          <div className=" grid grid-cols-3 gap-4 ">
            {[
              {
                title:
                  "Revolutionizing HR with Automation: The Future is Heres",
                image: "blog1.png",
              },
              {
                title: "Enhancing Employee Experience Through HR Automation",
                image: "blog2.png",
              },
              {
                title: "Driving Business Growth with HR Process Automation",
                image: "blog3.png",
              },
            ].map((item) => (
              <div className=" py-5 flex flex-col text-start">
                <img className="rounded-2xl" src={item.image} />
                <h1 className="font-medium text-xl mt-2">{item.title}</h1>
                <p className="text-muted mt-2 line-clamp-3">
                  {item.description}
                </p>
                <h1 className="font-medium text-sm text-primary">Read more</h1>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-primary hover:scale-105 transition-all  duration-200 cursor-pointer text-white font-medium mt-4 py-3 px-6 rounded-full">
              Explore More
            </button>
          </div>
        </motion.div>
        <motion.div
          variants={scrollAnimationVariants}
          whileInView="visible"
          initial="hidden"
          className="bg-primary py-24"
        >
          <div className="w-4/12 mx-auto flex flex-col space-y-4 items-center">
            <img className="h-24" src="subscribe.png" />
            <h1 className="text-3xl text-white font-medium text-center">
              Subscribe to our newsletter to avoid missing our blogs and
              updates.
            </h1>
            <button className="bg-white hover:scale-105 transition-all  duration-200 cursor-pointer text-textColor font-medium mt-4 py-3 px-4 rounded-full">
              Subscribe Now
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;

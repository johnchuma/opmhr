import { motion } from "framer-motion";
import { NavbarContext } from "../../layouts/mainLayout";
import { useContext, useEffect } from "react";
import { GrDocumentPerformance, GrNetwork, GrSteps } from "react-icons/gr";
import { GoGoal, GoLocation } from "react-icons/go";
import { FcFeedback } from "react-icons/fc";
import { VscFeedback, VscLocation } from "react-icons/vsc";
import { MdOutlineModelTraining } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
const Attendance = () => {
  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const { isScrolling, setIsScrolling, setPathname } =
    useContext(NavbarContext);
  useEffect(() => {
    setIsScrolling(true);
    setPathname("/performancemanagementSoftware");
  }, []);
  return (
    <div>
      <motion.div
        whileInView="visible"
        initial="hidden"
        className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center pt-28 pb-12"
      >
        <div className=" col-span-6">
          <img src="/calender.svg" />
        </div>
        <div className=" col-span-6">
          <h1 className="font-medium text-textColor text-5xl">
            Attendance Management System
          </h1>
          <p className="text-lg text-muted  mt-4">
            An attendance management system is an essential feature of HRMS
            software that precisely tracks time for attendance, breaks, time
            off, and clocking in and out. This prevents any error in a record
            and makes attendance management precise and efficient.
          </p>
          <button className=" hover:scale-105 transition-all  duration-200 cursor-pointer bg-primary font-medium text-white py-4 px-6 mt-8 rounded-full">
            Order software
          </button>
        </div>
      </motion.div>
      <motion.div
        whileInView="visible"
        initial="hidden"
        className="bg-lightBackground py-16"
      >
        <div className="flex justify-center">
          <h1 className="text-5xl font-medium pb-12">Software features</h1>
        </div>
        <div className="w-10/12 2xl:w-8/12 grid grid-cols-3 gap-8 mx-auto ">
          {[
            {
              icon: <GrNetwork />,
              title: "Remote Attendance",
              description:
                "Using your mobile phone, mark attendance remotely with an automated attendance system for employees utilizing a GPS-tracking sensor.",
            },
            {
              icon: <GoLocation />,

              title: "Geo-tagging & Geo-fencing",
              description:
                "Geo-tagging: Tag employee location while marking attendance and Geo-fencing: Create a virtual fence around the employee",
            },
            {
              icon: <VscLocation />,

              title: "Geo-Tracking",
              description:
                "Track your remote employee location in real-time for enhanced transparency in location data.",
            },
          ].map((item) => {
            return (
              <div className="hover:scale-105 transition-all p-5 rounded-lg flex space-x-4 bg-white shadow-lg duration-200 cursor-pointer">
                <div className=" text-2xl text-primary mt-2">{item.icon}</div>
                <div>
                  <h1 className=" font-normal text-textColor text-xl ">
                    {item.title}
                  </h1>
                  <p className="text-base text-muted mt-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        variants={scrollAnimationVariants}
        whileInView="visible"
        initial="hidden"
        className=" py-16 w-10/12 2xl:w-8/12 mx-auto p-8 rounded-2xl shadow-2xl bg-primary grid grid-cols-12 my-16"
      >
        <div className=" col-span-12 flex flex-col items-center">
          <h1 className=" text-2xl text-white font-medium">
            Are you curious about this software ?
          </h1>
          <button className=" hover:scale-105 transition-all  duration-200 cursor-pointer bg-white font-medium  py-4 px-6 mt-8 rounded-full">
            Request a demo
          </button>
        </div>
        <div className=" col-span-4"></div>
      </motion.div>
    </div>
  );
};

export default Attendance;

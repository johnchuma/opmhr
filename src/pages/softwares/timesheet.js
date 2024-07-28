import { motion } from "framer-motion";
import { NavbarContext } from "../../layouts/mainLayout";
import { useContext, useEffect } from "react";
import { GrDocumentPerformance, GrSteps } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { FcFeedback } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineModelTraining } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
const Timesheet = () => {
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
        className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center pt-28 mb-12"
      >
        <div className=" col-span-6">
          <img src="/product.png" />
        </div>
        <div className=" col-span-6">
          <h1 className="font-medium text-textColor text-6xl">
            Timesheet Management Software
          </h1>
          <p className="text-lg text-muted  mt-4">
            Timesheet management is a practice of tracking time spent by
            employees. This is a set of data that helps to analyze how much time
            is spent on the project or a task they are assigned with. This data
            can be also utilized for the payroll calculation by the accounting
            and human resource department. This software helps to reduce
            employee time theft. With advanced technology, we now have
            AI-powered software that helps to give accurate data and store all
            the important information on the cloud for you. To get the most
            efficiency we need tools that are easy to operate, low maintenance
            and are accessible remotely with ease.
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
          <h1 className="text-6xl font-medium pb-12">Software features</h1>
        </div>
        <div className="w-10/12 2xl:w-8/12 grid grid-cols-2 gap-8 mx-auto ">
          {[
            {
              icon: <GrDocumentPerformance />,
              title: "Real-time Data Visibility",
              description:
                "View real-time project progress and up-to-date statistics with the help of the custom report generation option.",
            },
            {
              icon: <GoGoal />,

              title: "24/7 Remote Access",
              description:
                "Access your timesheet data anytime, anywhere with cloud-based employee management system utilizing the dedicated ESS Portal.",
            },
            {
              icon: <VscFeedback />,

              title: "Custom Reporting",
              description:
                "Tweak every single aspect of reports including the dates and all other parameters to generate custom reports.",
            },
            {
              icon: <GrSteps />,
              title: "Timesheet Summary",
              description:
                "Single-page summary view of timesheets to provide an overview of how much time is spent in undertaking specific tasks.",
            }
          ].map((item) => {
            return (
              <div className="hover:scale-105 transition-all p-5 rounded-lg flex space-x-4 bg-white shadow-lg duration-200 cursor-pointer">
                <div className=" text-4xl text-primary mt-2">{item.icon}</div>
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
          <h1 className=" text-4xl text-white font-medium">
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

export default Timesheet;

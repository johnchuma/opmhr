import { motion } from "framer-motion";
import { NavbarContext } from "../../layouts/mainLayout";
import { useContext, useEffect } from "react";
import { GrDocumentPerformance, GrSteps } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { FcFeedback } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineModelTraining } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
const FullAndFinal = () => {
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
            className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center pt-28"
          >
            <div className=" col-span-6">
              <img src="/product.png" />
            </div>
            <div className=" col-span-6">
              <h1 className="font-medium text-textColor text-6xl">
                Performance Management Software
              </h1>
              <p className="text-lg text-muted  mt-4">
                Our Performance Management services are designed to elevate your
                organization's human capital to new heights. With a meticulous
                approach tailored to meet your unique needs, our services encompass
                a wide range of offerings including:
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
            <div className="w-10/12 2xl:w-8/12 grid grid-cols-3 gap-8 mx-auto ">
              {[
                {
                  icon: <GrDocumentPerformance />,
                  title: "Performance Appraisal Systems",
                  description:
                    "We develop customized performance appraisal systems that align with your organization's goals and values, providing a clear framework for assessing and rewarding employee performance.",
                },
                {
                  icon: <GoGoal />,
    
                  title: "Goal Setting and Alignment",
                  description:
                    "Our goal-setting services help streamline objectives across all levels of your organization, ensuring that individual goals are in sync with the broader organizational goals.",
                },
                {
                  icon: <VscFeedback />,
    
                  title: "Feedback and Coaching",
                  description:
                    "Our expert team offers personalized feedback and coaching to employees, fostering a culture of continuous improvement and growth within your organization.",
                },
                {
                  icon: <MdOutlineModelTraining />,
    
                  title: "Training and Development",
                  description:
                    "We provide tailored training programs aimed at enhancing employee skills and competencies, driving performance and productivity.",
                },
                {
                  icon: <GrSteps />,
                  title: "Performance Improvement Plans",
                  description:
                    "In cases where performance falls below expectations, we assist in developing performance improvement plans that support employees in reaching their full potential.",
                },
                {
                  icon: <LuDatabase />,
    
                  title: "Data-Driven Insights",
                  description:
                    "Leveraging advanced analytics, we provide data-driven insights to help identify trends, monitor performance metrics, and make informed decisions to optimize performance management processes.",
                },
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
    

export default FullAndFinal;

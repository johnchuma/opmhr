import { motion } from "framer-motion";
import { useContext } from "react";
import { NavbarContext } from "../../layouts/mainLayout";
import { GrDocumentPerformance, GrSteps } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { FcFeedback } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineModelTraining } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
import {
  FaLightbulb,
  FaStepBackward,
  FaStepForward,
  FaUser,
} from "react-icons/fa";
import {
  AiOutlineAlignRight,
  AiOutlineBarChart,
  AiOutlineBook,
  AiOutlineBulb,
  AiOutlineCalendar,
  AiOutlineSwapRight,
} from "react-icons/ai";
const ChangeManagementAndTrainingServices = () => {
  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const { isScrolling, setIsScrolling, setPathname } =
    useContext(NavbarContext);
  return (
    <div className="pt-20">
      <div className="w-full h-48 bg-primary  flex  justify-center items-center pt-18 ">
        <h1 className="text-white text-4xl ">
          Change management & training services
        </h1>
      </div>
      <div className=" w-8/12 2xl:w-8/12 mx-auto">
        <div
          whileInView="visible"
          initial="hidden"
          className="mx-auto grid grid-cols-12 items-center gap-24 pt-12 mb-12 "
        >
          <div className=" col-span-6">
            <img src="/performance.svg" />
          </div>
          <div className=" col-span-6">
            <p className="text-lg text-muted  mt-4">
              We understand that staying competitive in today's fast-paced
              business landscape requires more than just keeping up with the
              latest HR trends - it requires a comprehensive transformation
              strategy that aligns your people, processes, and technology with
              your overarching business goals.
            </p>
            <button className=" hover:scale-105 transition-all  duration-200 cursor-pointer bg-primary font-medium text-white py-4 px-6 mt-8 rounded-full">
              Request service
            </button>
          </div>
        </div>
      </div>
      <motion.div
        whileInView="visible"
        initial="hidden"
        className="bg-lightBackground py-16"
      >
        <div className="flex justify-center">
          <h1 className="text-4xl font-medium pb-12">What we offer</h1>
        </div>
        <div className="w-10/12 2xl:w-8/12 grid grid-cols-3 gap-8 mx-auto ">
          {[
            {
              title: "Performance Appraisal Systems",
              icon: <AiOutlineBarChart />,
              description:
                "We develop customized performance appraisal systems that align with your organization's goals and values, providing a clear framework for assessing and rewarding employee performance.",
            },
            {
              title: "Goal Setting and Alignment",
              icon: <AiOutlineSwapRight />,
              description:
                "Our goal-setting services help streamline objectives across all levels of your organization, ensuring that individual goals are in sync with the broader organizational goals.",
            },
            {
              title: "Feedback and Coaching",
              icon: <AiOutlineBook />,
              description:
                "Our expert team offers personalized feedback and coaching to employees, fostering a culture of continuous improvement and growth within your organization.",
            },
            {
              title: "Training and Development",
              icon: <AiOutlineAlignRight />,
              description:
                "We provide tailored training programs aimed at enhancing employee skills and competencies, driving performance and productivity.",
            },
            {
              title: "Performance Improvement Plans",
              icon: <AiOutlineCalendar />,
              description:
                "In cases where performance falls below expectations, we assist in developing performance improvement plans that support employees in reaching their full potential.",
            },
            {
              title: "Data-Driven Insights",
              icon: <AiOutlineBulb />,
              description:
                "Leveraging advanced analytics, we provide data-driven insights to help identify trends, monitor performance metrics, and make informed decisions to optimize performance management processes.",
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
            Click below to request this service
          </h1>
          <button className=" hover:scale-105 transition-all   duration-200 cursor-pointer bg-white font-medium  py-4 px-6 mt-8 rounded-full">
            Request service
          </button>
        </div>
        <div className=" col-span-4"></div>
      </motion.div>
    </div>
  );
};

export default ChangeManagementAndTrainingServices;

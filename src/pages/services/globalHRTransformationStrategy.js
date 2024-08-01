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
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineBook,
  AiOutlineBorderlessTable,
  AiOutlineBulb,
  AiOutlineCalendar,
  AiOutlineDotChart,
  AiOutlineLineChart,
  AiOutlineSwapRight,
  AiOutlineUser,
} from "react-icons/ai";
const GlobalHRTransformationStrategy = () => {
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
          Global HR transformation Strategy
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
              In the digital age, data is king, and at OPM International HR
              Consultants, we're dedicated to helping businesses harness the
              full potential of their HR data. Our International and Local HR
              Data Analytics & Reporting service is designed to provide
              actionable insights that drive strategic decision-making and fuel
              organizational success.
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
              title: "Gain Actionable Insights",
              icon: <AiOutlineBulb />,
              description:
                "Transform raw HR data into actionable insights that drive informed decision-making at every level of your organization.",
            },
            {
              title: "Ensure Compliance",
              icon: <AiOutlineBorderlessTable />,
              description:
                "Stay ahead of regulatory requirements and mitigate risks by leveraging comprehensive reporting tools that provide visibility into compliance metrics.",
            },
            {
              title: "Enhance Operational Efficiency",
              icon: <AiOutlineDotChart />,
              description:
                "Identify inefficiencies and bottlenecks in your HR processes, allowing you to streamline operations and improve productivity.",
            },
            {
              title: "Drive Business Growth",
              icon: <AiOutlineLineChart />,
              description:
                "By making data-driven decisions, you can align your HR strategies with your overall business objectives, driving growth and profitability.",
            },
            {
              title: "Improve Talent Management",
              icon: <AiOutlineUser/>,
              description:
                "Identify top performers, track key performance indicators, and develop data-driven strategies for talent acquisition, retention, and development.",
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

export default GlobalHRTransformationStrategy;

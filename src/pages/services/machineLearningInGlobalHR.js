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
  AiOutlineCalculator,
  AiOutlineCalendar,
  AiOutlinePicCenter,
  AiOutlineSolution,
  AiOutlineSwapRight,
  AiTwotonePieChart,
} from "react-icons/ai";
const MachinelearningInGlobalHR = () => {
  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const { isScrolling, setIsScrolling, setPathname } =
    useContext(NavbarContext);
  return (
    <div className="pt-20">
      <div className="w-full h-48 bg-primary  flex  justify-center items-center pt-18 ">
        <h1 className="text-white text-4xl ">
          AI & Machine Learning in global HR
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
              We're pioneering the integration of AI and machine learning
              technologies into global HR operations, revolutionizing the way
              businesses manage their human capital.
            </p>
            <p className="text-lg text-muted  mt-4">
              Our AI & Machine Learning in Global HR service offers a
              comprehensive suite of products and solutions designed to enhance
              decision-making, streamline processes, and drive organizational
              success. Leveraging the power of advanced algorithms and
              predictive analytics, we empower businesses to unlock valuable
              insights from their HR data and optimize every aspect of their
              talent management strategy.
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
              title: "Data-driven Insights",
              icon: <AiOutlineCalendar />,
              description:
                "Harness the power of AI and machine learning to analyze vast amounts of HR data, uncovering hidden patterns and trends that enable more informed decision-making.",
            },
            {
              title: "Predictive Analytics",
              icon: <AiTwotonePieChart />,
              description:
                "Anticipate future workforce needs, identify high-potential employees, and predict attrition risks with advanced predictive analytics models, allowing you to proactively address talent challenges.",
            },
            {
              title: "Personalized Employee Experiences",
              icon: <AiOutlinePicCenter />,
              description:
                "Leverage AI-driven personalization to deliver tailored learning and development opportunities, career paths, and benefits packages that resonate with each individual employee, driving engagement and retention.",
            },
            {
              title: "Automation of Routine Tasks",
              icon: <AiOutlineCalculator />,
              description:
                "Automate repetitive HR tasks such as resume screening, scheduling interviews, and candidate sourcing, freeing up valuable time for your HR team to focus on strategic initiatives.",
            },
            {
              title: "Continuous Improvement",
              icon: <AiOutlineSolution />,
              description:
                "Utilize AI-powered feedback mechanisms to gather employee feedback in real-time, identify areas for improvement, and drive continuous enhancements to your HR processes and policies.",
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

export default MachinelearningInGlobalHR;

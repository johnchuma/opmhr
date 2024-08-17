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
  AiOutlineCustomerService,
  AiOutlineMoneyCollect,
  AiOutlinePieChart,
  AiOutlineSwapRight,
  AiOutlineUser,
} from "react-icons/ai";
import { RiAccountBoxLine, RiArchiveStackLine } from "react-icons/ri";
const AddressingComplexHRProcess = () => {
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
          Addressing complex HR processes
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
              We understand the challenges that businesses face in managing
              complex HR processes efficiently. That's why we're proud to offer
              our Global HR Process Automation service, designed to streamline
              your HR operations and drive productivity like never before.
            </p>

            <p className="text-lg text-muted  mt-4">
              Our comprehensive suite of products encompasses cutting-edge
              automation tools tailored to meet the diverse needs of global
              enterprises. From automating routine tasks like payroll processing
              and employee onboarding to orchestrating complex workflows and
              approvals, our solutions empower you to automate your HR processes
              from end to end.
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
              title: "Boost Efficiency",
              icon: <AiOutlinePieChart />,
              description:
                "Automate time-consuming tasks and workflows, reducing manual errors and increasing operational efficiency across your organization.",
            },
            {
              title: "Enhance Employee Experience",
              icon: <AiOutlineUser />,
              description:
                "Streamline the employee onboarding process, improve communication channels, and provide self-service options, resulting in a seamless and engaging employee experience.",
            },
            {
              title: "Drive Cost Savings",
              icon: <AiOutlineMoneyCollect />,
              description:
                "By eliminating manual processes and reducing the need for paper-based documentation, you can significantly reduce administrative costs and improve your bottom line.",
            },
            {
              title: "Scale Your Operations",
              icon: <RiArchiveStackLine />,
              description:
                "As your business grows, our scalable automation solutions grow with you, ensuring that your HR processes remain efficient and effective, no matter the size of your organization.",
            },
            {
              title: "Ensure Compliance",
              icon: <RiAccountBoxLine />,
              description:
                "Stay ahead of changing regulations and compliance requirements by automating compliance checks and documentation processes, reducing the risk of errors and penalties.",
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

export default AddressingComplexHRProcess;

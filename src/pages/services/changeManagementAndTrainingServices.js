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
  AiOutlinePaperClip,
  AiOutlinePartition,
  AiOutlinePieChart,
  AiOutlineSwapRight,
} from "react-icons/ai";
const ChangeManagementAndTrainingServices = () => {
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
              title: "Strategic Alignment",
              icon: <AiOutlineAlignRight />,
              description:
                "Align your HR strategy with your organization's overall business objectives, ensuring that your HR initiatives support and contribute to your long-term success.",
            },
            {
              title: "Process Optimization",
              icon: <AiOutlinePartition />,
              description:
                "Streamline and optimize your HR processes to improve efficiency, reduce costs, and enhance the overall employee experience.",
            },
            {
              title: "Technology Integration",
              icon: <AiOutlineBook />,
              description:
                "Leverage cutting-edge HR technology solutions to automate manual tasks, enable data-driven decision-making, and provide greater visibility into your workforce metrics.",
            },
            {
              title: "Change Management",
              icon: <AiOutlinePaperClip />,
              description:
                "Implement effective change management strategies to minimize resistance and maximize adoption, ensuring a smooth transition to your new HR operating model.",
            },
            {
              title: "Continuous Improvement",
              icon: <AiOutlinePieChart />,
              description:
                "Foster a culture of continuous improvement within your organization, empowering your HR team to adapt to evolving business needs and drive ongoing enhancements to your HR strategy and processes.",
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

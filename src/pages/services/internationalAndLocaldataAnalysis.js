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
    AiFillMoneyCollect,
  AiOutlineAlignRight,
  AiOutlineBarChart,
  AiOutlineBook,
  AiOutlineBulb,
  AiOutlineCalendar,
  AiOutlineComment,
  AiOutlineCustomerService,
  AiOutlineGateway,
  AiOutlineSwapRight,
  AiTwotoneCarryOut,
} from "react-icons/ai";
const InternationalAndLocalDataAnalysis = () => {
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
          International and local HR data Analytics & Reporting
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
              We recognize that successful implementation of HR initiatives
              hinges on effective change management and comprehensive training
              programs. That's why we're proud to offer our Global Change
              Management & Training service, designed to equip your organization
              with the tools and knowledge needed to navigate change with
              confidence and drive lasting success.
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
              title: "Change Readiness Assessment",
              icon: <AiOutlineBarChart />,
              description:
                "Evaluate your organization's readiness for change, identifying potential barriers and opportunities for success, and develop tailored strategies to drive adoption and buy-in.",
            },
            {
              title: "Communication Strategies",
              icon: <AiOutlineComment />,
              description:
                "Develop clear and consistent communication strategies to keep employees informed and engaged throughout the change process, minimizing uncertainty and resistance.",
            },
            {
              title: "Stakeholder Engagement",
              icon: <AiFillMoneyCollect />,
              description:
                "Engage key stakeholders at all levels of your organization, fostering alignment, building support, and ensuring that everyone is on board with the change initiative.",
            },
            {
              title: "Customized Training Programs",
              icon: <AiOutlineCustomerService/>,
              description:
                "Develop customized training programs that address the specific needs of your workforce, providing them with the skills, knowledge, and resources they need to thrive in the new environment.",
            },
            {
              title: "Ongoing Support",
              icon: <AiOutlineGateway />,
              description:
                "Provide ongoing support and guidance to your team, ensuring that they have the resources and assistance they need to successfully navigate the challenges of change and drive sustainable results.",
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

export default InternationalAndLocalDataAnalysis;

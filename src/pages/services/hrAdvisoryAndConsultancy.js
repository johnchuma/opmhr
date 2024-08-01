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
  FaPeopleCarry,
  FaStepBackward,
  FaStepForward,
  FaUser,
} from "react-icons/fa";
import {
    AiFillCheckSquare,
  AiOutlineAlignRight,
  AiOutlineArrowsAlt,
  AiOutlineBarChart,
  AiOutlineBook,
  AiOutlineBuild,
  AiOutlineBulb,
  AiOutlineCalendar,
  AiOutlineDeleteColumn,
  AiOutlineExpandAlt,
  AiOutlineGold,
  AiOutlineShareAlt,
  AiOutlineSwapRight,
  AiOutlineWoman,
  AiTwotoneCheckSquare,
} from "react-icons/ai";
const HRAdvisoryAndConsultancy = () => {
  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const { isScrolling, setIsScrolling, setPathname } =
    useContext(NavbarContext);
  return (
    <div className="pt-20">
      <div className="w-full h-48 bg-primary  flex  justify-center items-center pt-18 ">
        <h1 className="text-white text-4xl ">HR Advisory and Consultancy</h1>
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
              We, the OPM Team, are proud to offer comprehensive HR Advisory &
              Consultancy services, tailored to meet the unique needs of your
              organization. Our team of experienced professionals provides
              strategic guidance and practical solutions to help you navigate
              the ever-changing landscape of human resources.
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
              title: "Strategic HR Planning",
              icon: <AiOutlineArrowsAlt />,
              description:
                "We work with you to develop a comprehensive HR strategy that aligns with your business objectives. This includes identifying your talent needs, developing talent management programs, and creating a culture of engagement and performance.",
            },
            {
              title: "Training & Development",
              icon: <FaPeopleCarry />,
              description:
                "We offer a wide range of training and development programs to help your employees reach their full potential.",
            },
            {
              title: "Talent Acquisition & Management",
              icon: <AiOutlineBuild />,
              description:
                "We help you attract, hire, and retain top talent. Our services include job descriptions, candidate sourcing, interview coaching, and onboarding programs.",
            },
            {
              title: "HR Technology",
              icon: <AiTwotoneCheckSquare />,
              description:
                "We can help you select and implement the right HR technology solutions to streamline your HR processes and improve efficiency.",
            },
            {
              title: "Compensation & Benefits",
              icon: <AiOutlineGold />,
              description:
                "We ensure your compensation and benefits programs are competitive and compliant with all applicable laws and regulations.",
            },
            {
              title: "Employee Relations",
              icon: <AiOutlineShareAlt />,
              description:
                "We provide guidance on employee relations issues, including performance management, disciplinary action, and conflict resolution.",
            },
            {
              title: "HR Compliance",
              icon: <AiOutlineDeleteColumn />,
              description:
                "We help you ensure your HR practices are compliant with all applicable laws and regulations.",
            },
            {
              title: "HR Audits",
              icon: <AiFillCheckSquare />,
              description:
                "We conduct comprehensive HR audits to identify areas of risk and compliance.",
            },
            {
              title: "Project Management",
              icon: <AiOutlineWoman />,
              description:
                "We can manage your HR projects from start to finish, ensuring they are completed on time and within budget.",
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

export default HRAdvisoryAndConsultancy;

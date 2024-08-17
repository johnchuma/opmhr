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
  AiFillExperiment,
  AiFillInteraction,
  AiOutlineAlignRight,
  AiOutlineBarChart,
  AiOutlineBook,
  AiOutlineBulb,
  AiOutlineCalendar,
  AiOutlineCompass,
  AiOutlineGateway,
  AiOutlineGlobal,
  AiOutlineInteraction,
  AiOutlineSetting,
  AiOutlineSolution,
  AiOutlineSwapRight,
  AiOutlineUser,
} from "react-icons/ai";
const GlobalStaffOutsourcingSolution = () => {
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
          Global staff outsourcing Solutions
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
              We understand the unique challenges and opportunities of building
              a workforce that spans across borders. Our Global Staffing
              Outsourcing service is designed to empower your business by
              seamlessly integrating top talent from around the world. We offer
              comprehensive solutions tailored to meet the dynamic needs of your
              organization, ensuring you stay competitive and efficient in an
              evolving global market.
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
              title: "Both Local and International Recruitment",
              icon: <AiOutlineGlobal />,
              description:
                "Sourcing, vetting, and hiring the best talent from across the globe.",
            },
            {
              title: "Employee Onboarding",
              icon: <AiOutlineUser />,
              description:
                "Structuring onboarding programs that align with your corporate culture and compliance requirements.",
            },
            {
              title: "HR Management",
              icon: <AiFillExperiment />,
              description:
                "Offering full-range HR services including payroll, benefits administration, and performance management.",
            },
            {
              title: "Mobility Solutions",
              icon: <AiOutlineSolution />,
              description:
                "Assisting with employee relocations, including visa application and housing.",
            },
            {
              title: "Strategic Staffing Consultation",
              icon: <AiOutlineSetting />,
              description:
                "Working closely with you to forecast and meet your future staffing needs.",
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
      <div className=" w-8/12 2xl:w-8/12 mx-auto">
        <div
          whileInView="visible"
          initial="hidden"
          className="mx-auto grid grid-cols-12 items-center gap-24 pt-12 mb-12 "
        >
          <div className=" col-span-6">
            <p className="text-lg text-muted  mt-4">
              At OPM International HR consultants, we are committed to providing
              you with exceptional service that aligns with your strategic
              goals. Connect with us to discover how our Global Staffing
              Outsourcing solutions can enhance your operational capabilities
              and help you harness the power of a diverse global workforce.
            </p>
          </div>
          <div className=" col-span-6">
            <img src="/performance.svg" />
          </div>
        </div>
      </div>
      <motion.div
        whileInView="visible"
        initial="hidden"
        className="bg-lightBackground py-16"
      >
        <div className="flex justify-center">
          <h1 className="text-4xl font-medium pb-12">Our Strength</h1>
        </div>
        <div className="w-10/12 2xl:w-8/12 grid grid-cols-3 gap-8 mx-auto ">
          {[
            {
              title: "Expertise in Diverse Markets",
              icon: <AiOutlineGateway />,
              description:
                "With extensive knowledge of various international labor markets, we are adept at navigating the complexities of recruiting and managing global talent pools.",
            },
            {
              title: "Tailored Recruitment Strategies",
              icon: <AiOutlineBook />,
              description:
                "We customize our recruitment strategies based on your specific business goals, industry specifics, and the unique aspects of each geographic location.",
            },
            {
              title: "Seamless Integration",
              icon: <AiOutlineInteraction />,
              description:
                "Our end-to-end staffing services ensure a smooth integration of new global employees into your existing teams, fostering synergy and enhancing productivity.",
            },
            {
              title: "Compliance and Risk Management",
              icon: <AiOutlineCompass />,
              description:
                "We handle all aspects of compliance and labor laws in each country, minimizing risks and protecting your business against potential legal and financial liabilities.",
            },
            {
              title: "Dedicated Support",
              icon: <AiOutlineSetting />,
              description:
                "Our team provides continuous support and consultancy, from the initial recruitment process to ongoing HR management, ensuring your global team remains robust and effective.",
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

export default GlobalStaffOutsourcingSolution;

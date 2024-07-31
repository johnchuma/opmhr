import { motion } from "framer-motion";
import { NavbarContext } from "../../layouts/mainLayout";
import { useContext, useEffect } from "react";
import { GrDocumentPerformance, GrSteps } from "react-icons/gr";
import { BsDatabase, BsPeople } from "react-icons/bs";
import {
  FaAnchor,
  FaChartArea,
  FaDev,
  FaPlayCircle,
  FaReceipt,
} from "react-icons/fa";
import { Fa42Group, FaAdversal, FaChartGantt } from "react-icons/fa6";

const HRIS = () => {
  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const { isScrolling, setIsScrolling, setPathname } =
    useContext(NavbarContext);
  useEffect(() => {
    setIsScrolling(true);
    setPathname("/hris");
  }, []);
  return (
    <div>
      <motion.div
        whileInView="visible"
        initial="hidden"
        className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center pt-28"
      >
        <div className=" col-span-6">
          <img src="/hris.svg" />
        </div>
        <div className=" col-span-6">
          <h1 className="font-medium text-textColor text-4xl">HRIS Software</h1>
          <p className="text-lg text-muted  mt-4">
            HRIS (Human Resources Information System) software is a
            comprehensive solution designed to streamline HR processes,
            centralize HR data, automate administrative tasks, and improve
            overall efficiency within an organization.
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
          <h1 className="text-4xl font-medium pb-12">Software features</h1>
        </div>
        <div className="w-10/12 2xl:w-8/12 grid grid-cols-2 gap-8 mx-auto ">
          {[
            {
              icon: <GrDocumentPerformance />,
              title: "Performance Management",
              description:
                "HRIS software often includes performance management features to help clients effectively manage employee performance, set goals, conduct performance reviews, and provide feedback. Clients can track employee performance over time, identify top performers, and develop personalized development plans to support career growth and organizational objectives.",
            },
            {
              icon: <BsDatabase />, // Replace with appropriate icon
              title: "Centralized Employee Database",
              description:
                "HRIS software provides a centralized database to store all employee information, including personal details, employment history, performance evaluations, training records, and more. This centralized   repository ensures data integrity, eliminates duplicate records, and provides easy access to accurate employee information.",
            },
            {
              icon: <FaAdversal />, // Replace with appropriate icon
              title: "Employee Self-Service Portal",
              description:
                "HRIS software typically includes an employee self-service portal where employees can view and update their personal information, submit time-off requests, access company policies and documents, and participate in training programs. This empowers employees to take control of their HR-related tasks, reduces administrative burden on HR staff, and enhances employee satisfaction.",
            },
            {
              icon: <FaReceipt />, // Replace with appropriate icon
              title: "Recruitment and Applicant Tracking",
              description:
                "HRIS software often includes recruitment and applicant tracking features that streamline the hiring process from job posting to candidate onboarding. Clients can efficiently manage job postings, track applicants, schedule interviews, conduct assessments, and make data-driven hiring decisions using intuitive dashboards and analytics.",
            },
            {
              icon: <Fa42Group />, // Replace with appropriate icon
              title: "Benefits Administration",
              description:
                "HRIS software simplifies benefits administration by providing tools to manage employee benefits, enrollments, eligibility, and compliance. Clients can configure benefit plans, communicate benefits information to employees, track benefit costs, and generate reports to ensure regulatory compliance and optimize benefits offerings.",
            },
            {
              icon: <FaPlayCircle />, // Replace with appropriate icon
              title: "Payroll Processing",
              description:
                "HRIS software often includes payroll processing functionality to automate payroll calculations, tax deductions, and direct deposits. Clients can streamline payroll administration, ensure accuracy and compliance, and generate payroll reports with ease. Integration with time and attendance systems further enhances payroll accuracy and efficiency.",
            },
            {
              icon: <FaDev />, // Replace with appropriate icon
              title: "Training and Development",
              description:
                "HRIS software helps clients manage employee training and development initiatives by tracking training requirements, scheduling training sessions, and monitoring employee progress. Clients can identify skill gaps, deliver targeted training programs, and measure the effectiveness of training investments to drive employee development and performance improvement.",
            },
            {
              icon: <FaChartArea />, // Replace with appropriate icon
              title: "Analytics and Reporting",
              description:
                "HRIS software provides robust analytics and reporting capabilities, allowing clients to generate custom reports, visualize HR data trends, and gain actionable insights into workforce metrics. Clients can track key HR metrics, identify areas for improvement, and make data-driven decisions to optimize HR strategies and initiatives.",
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

export default HRIS;

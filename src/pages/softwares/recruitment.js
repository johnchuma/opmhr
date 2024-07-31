import { motion } from "framer-motion";
import { NavbarContext } from "../../layouts/mainLayout";
import { useContext, useEffect } from "react";
import { GrDocumentPerformance, GrSteps } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { FcFeedback } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineModelTraining } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
const Recruitment = () => {
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
          <h1 className="font-medium text-textColor text-5xl">
            Recruitment Management System
          </h1>
          <p className="text-lg text-muted  mt-4">
            A recruitment management system works in typical flows, from
            planning to recruit the right talent to finishing the onboarding.
            Besides, it integrates with HRMS software to manage HRMS Payroll.
            Let’s discuss how the recruitment management system works during the
            candidate hiring process.
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
          <h1 className="text-5xl font-medium pb-12">Software features</h1>
        </div>
        <div className="w-10/12 2xl:w-8/12 grid grid-cols-2 gap-8 mx-auto ">
          {[
            {
              icon: <GrDocumentPerformance />,
              title: "Job Posting",
              description:
                "The recruitment management system helps recruiters write the vacancy post in the right format and then assists them in posting it on relevant pages, platforms, or social media channels. Consequently, Employers attract sufficient talent for those particular positions.",
            },
            {
              icon: <VscFeedback />,

              title: "Candidate Sourcing",
              description:
                "With the assistance of the recruitment management system, employers can smoothly identify potential candidates through various channels, numerous job search platforms, and social networks. Besides, existing employees can refer someone to any particular relevant platform through the RMS portal",
            },
            {
              icon: <MdOutlineModelTraining />,

              title: "Candidate Screening",
              description:
                "After posting a job, employers receive a pile of resumes from different portals; the right recruitment management system automatically analyzes and parses the resumes to obtain the relevant information before scheduling the interview process and initiating the candidate selection.",
            },
            {
              icon: <GrSteps />,
              title: "Interview Scheduling",
              description:
                "The system automates the interview scheduling process by coordinating with the shortlisted candidates via mail or DM and scheduling the interview date and time on the candidate’s calendar to keep them engaged. As a result, the candidate’s interview time does not overlap between the two companies, and the employer properly maintains each candidate’s interview schedule data.",
            },
            {
              icon: <LuDatabase />,

              title: "Candidate Selection",
              description:
                "In many companies, RMS automates the assessments and tests according to the required post vacancy. Additionally, added data analytic features offer detailed information on recruitment metrics and assist employers in decision-making. Different recruitment management tools even automate the selection mail or offer letters to candidates and provide feedback.",
            },
            {
              icon: <LuDatabase />,

              title: "Initiating Negotiation",
              description:
                "This system also offers applicant tracking features through which recruiters can track the candidate’s performance and salary expectations throughout the hiring process. So, after selecting the candidates, employers have valuable insight into how to draft negotiation strategies effectively.",
            },
            {
              icon: <LuDatabase />,

              title: "Hiring and Onboarding",
              description:
                "The transition from candidates to employees occurs during the onboarding process. Recruitment management software also automates this process by sending welcome emails, distributing employee handbooks and annexures, and completing paperwork in lieu of HR professionals. It often tracks the progress of the onboarding tasks.",
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

export default Recruitment;

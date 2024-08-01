import { motion } from "framer-motion";
import { NavbarContext } from "../../layouts/mainLayout";
import { useContext, useEffect } from "react";
import { GrDocumentPerformance, GrSteps, GrUbuntu } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { FcFeedback } from "react-icons/fc";
import { VscFeedback, VscMultipleWindows } from "react-icons/vsc";
import { MdOutlineModelTraining, MdParagliding } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
const Expenses = () => {
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
          <h1 className="font-medium text-textColor text-4xl">
            Expenses Management Software
          </h1>
          <p className="text-lg text-muted  mt-4">
            Expense management software is a tool that automates the tracking,
            managing, reimbursement, and controlling of business expenses. It
            streamlines expense management by evaluating the costs and providing
            error-free expense reports that benefit business growth and
            productivity.
          </p>
          <button className=" hover:scale-105 transition-all  duration-200 cursor-pointer bg-primary font-medium text-white py-4 px-6 mt-8 rounded-full">
            Book a free demo
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
        <div className="w-10/12 2xl:w-8/12 grid grid-cols-3 gap-8 mx-auto ">
          {[
            {
              icon: <GrUbuntu />,
              title: "User-Friendly Interface",
              description:
                "Advanced user interface that eases the management of expenses and eliminates confusion as well as complexes that arise due to overly complex UI.",
            },

            {
              icon: <VscMultipleWindows />,

              title: "Multiple Manager Approval",
              description:
                "Facilitates Multiple managers’ approval for expense claims that ensures authentication of the claim amounts and complete control of the expense claim process.",
            },
            {
              icon: <MdParagliding />,

              title: "Partial Reimbursement",
              description:
                "Facilitates reimbursement of the partial claim amount for staying within budget and curbs overspending by the employees.",
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

export default Expenses;

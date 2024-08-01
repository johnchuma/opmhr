import { motion } from "framer-motion";
import { NavbarContext } from "../../layouts/mainLayout";
import { useContext, useEffect } from "react";
import { GrDocumentPerformance, GrSteps } from "react-icons/gr";
import { GoGoal } from "react-icons/go";
import { FcFeedback } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";
import { MdOutlineModelTraining } from "react-icons/md";
import { LuDatabase } from "react-icons/lu";
import { FaCashRegister } from "react-icons/fa";
import {
  Ri24HoursFill,
  Ri24HoursLine,
  Ri4kLine,
  RiAdminLine,
  RiCashLine,
  RiClockwiseLine,
  RiReceiptLine,
  RiRepeatOneLine,
  RiScales2Line,
  RiSecurePaymentLine,
  RiStackFill,
  RiStackLine,
  RiSubscript,
  RiTimeLine,
} from "react-icons/ri";
const PayrollSoftware = () => {
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
        className="w-10/12 2xl:w-8/12 gap-24 mx-auto grid grid-cols-12 items-center pt-28 pb-12"
      >
        <div className=" col-span-6">
          <img src="/payroll.svg" />
        </div>
        <div className=" col-span-6">
          <h1 className="font-medium text-textColor text-4xl">
            Payroll Software
          </h1>
          <p className="text-lg text-muted  mt-4">
            Payroll software plays a crucial role in managing one of the most
            critical aspects of any business—employee compensation.
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
        <div className="w-10/12 2xl:w-8/12 grid grid-cols-2 gap-8 mx-auto ">
          {[
            {
              icon: <RiStackLine />, // Replace with appropriate icon
              title: "Automated Payroll Processing",
              description:
                "Payroll software automates the entire payroll process, from calculating wages and deductions to generating paychecks or facilitating direct deposits. By automating repetitive tasks, clients can save time, minimize errors, and ensure accurate and timely payroll processing.",
            },
            {
              icon: <RiRepeatOneLine />, // Replace with appropriate icon
              title: "Tax Compliance and Reporting",
              description:
                "Payroll software helps clients stay compliant with tax regulations by automatically calculating payroll taxes, including federal, state, and local taxes, and deducting them from employees' paychecks. The software also generates tax forms, such as W-2s and 1099s, and facilitates electronic filing, reducing the risk of errors and penalties.",
            },
            {
              icon: <Ri4kLine />, // Replace with appropriate icon
              title: "Employee Self-Service",
              description:
                "Many payroll software solutions offer employee self-service portals where employees can access their pay stubs, view their tax information, update their personal details, and manage their direct deposit preferences. This empowers employees to take control of their payroll-related tasks, reducing administrative burden on HR and payroll staff.",
            },
            {
              icon: <RiTimeLine />, // Replace with appropriate icon
              title: "Time and Attendance Integration",
              description:
                "Payroll software often integrates with time and attendance systems to automatically import employee hours worked and calculate accurate pay based on time records. This integration ensures that payroll calculations are based on actual hours worked, reducing payroll errors and discrepancies.",
            },
            {
              icon: <RiAdminLine />, // Replace with appropriate icon
              title: "Benefit Deductions and Administration",
              description:
                "Payroll software allows clients to manage employee benefits deductions, such as health insurance premiums, retirement contributions, and flexible spending accounts. The software calculates benefit deductions accurately and ensures that employees receive the correct compensation after deductions.",
            },
            {
              icon: <RiReceiptLine />, // Replace with appropriate icon
              title: "Customizable Payroll Reports",
              description:
                "Payroll software provides clients with customizable payroll reports that offer insights into payroll expenses, tax liabilities, employee earnings, and deductions. Clients can generate reports tailored to their specific needs, track key payroll metrics, and analyze trends to inform decision-making.",
            },
            {
              icon: <RiCashLine />, // Replace with appropriate icon
              title: "Multi-State and Multi-Currency Support",
              description:
                "For clients operating in multiple states or countries, payroll software offers support for multi-state and multi-currency payroll processing. This capability ensures compliance with varying tax laws and regulations across different jurisdictions, simplifying payroll administration for clients with diverse workforce locations.",
            },
            {
              icon: <RiSecurePaymentLine />, // Replace with appropriate icon
              title: "Security and Data Protection",
              description:
                "Payroll software prioritizes data security and protection by implementing robust security measures, such as encryption, access controls, and regular data backups. Clients can trust that sensitive payroll information, including employee salaries and tax data, is safeguarded against unauthorized access or breaches.",
            },
            {
              icon: <RiScales2Line />, // Replace with appropriate icon
              title: "Scalability and Flexibility",
              description:
                "Payroll software is scalable and flexible, capable of accommodating the evolving needs of growing businesses. Whether clients are adding new employees, expanding into new markets, or implementing changes to payroll policies, the software can adapt to accommodate these changes without disruption.",
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

export default PayrollSoftware;

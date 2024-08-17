import { motion } from "framer-motion";
import { useContext, useEffect } from "react";
import {
  FaArrowRight,
  FaBeer,
  FaCircle,
  FaLightbulb,
  FaPeopleCarry,
  FaSearch,
  FaSign,
  FaStar,
  FaSwift,
} from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { NavbarContext } from "../layouts/mainLayout";
import { useLocation } from "react-router-dom";
import { GiNinjaStar } from "react-icons/gi";
const CompanyPage = () => {
  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const { isScrolling, setIsScrolling, setPathname } =
    useContext(NavbarContext);

  useEffect(() => {
    setIsScrolling(true);
    setPathname("/company");
  }, []);
  return (
    <div>
      <div className="mx-auto text-textColor text-opacity-80 py-8 pt-28">
        <div className="" />
        <motion.div
          whileInView="visible"
          initial="hidden"
          variants={scrollAnimationVariants}
          className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center gap-16"
        >
          <div className=" col-span-6">
            <h1 className="font-medium text-textColor text-5xl">
              About OPM International HR Consultants
            </h1>
            <p className="text-lg text-muted  mt-4">
              A premier HR-IT consulting firm specializing in bridging the gap
              between human resources and cutting-edge technology across the
              globe.We empower organizations with innovative solutions ,
              optimizing HR functions for unparalleled efficiency and global
              success. We Offer a wide Range of HR solution to the business
            </p>
          </div>

          <div className=" col-span-6">
            <img src="/about.png" />
          </div>
        </motion.div>
        <motion.div
          variants={scrollAnimationVariants}
          whileInView="visible"
          initial="hidden"
          className="bg-lightBackground py-8"
        >
          <div className="flex justify-center">
            <h1 className="text-5xl font-medium py-12 text-textColor">
              Our core values
            </h1>
          </div>
          <div className="w-10/12 2xl:w-8/12 grid grid-cols-5 gap-8 mx-auto ">
            {[
              {
                icon: <FaSign />,
                title: "Integrity",
                details:
                  "We conduct ourselves with the highest ethical standards, building trust and transparency in all our interactions.",
              },
              {
                icon: <FaPeopleCarry />,
                title: "Client-Centricity",
                details:
                  "We are deeply committed to understanding your unique needs and exceeding your expectations.",
              },
              {
                icon: <FaPeopleGroup />,
                title: "Collaboration",
                details:
                  "We believe in the power of teamwork and open communication, fostering a collaborative environment for shared growth.",
              },
              {
                icon: <FaLightbulb />,
                title: "Innovation",
                details:
                  "We continuously explore and implement cutting-edge HR strategies and technologies to drive success.",
              },
              {
                icon: <FaSwift />,
                title: "Diversity and Inclusion",
                details:
                  "We celebrate the unique perspectives and experiences of all individuals, creating an inclusive and welcoming work environment.",
              },
            ].map((item) => {
              return (
                <div className="hover:scale-105 transition-all  duration-200 cursor-pointer">
                  <div className="p-3 rounded-2xl items-center justify-center flex size-20 bg-white shadow-xl text-primary text-2xl">
                    {item.icon}
                  </div>
                  <h1 className="font-medium text-textColor text-2xl mt-8 ">
                    {item.title}
                  </h1>
                  <p className="text-base text-muted mt-1">{item.details}</p>
                </div>
              );
            })}
          </div>
          <div className="w-8/12 2xl:w-6/12 mx-auto text-center py-12 ">
            <h1 className="f font-medium text-5xl my-8 text-textColor">
              Why Us
            </h1>
            <p className="text-lg text-muted mt-2">
              We take the time to understand your unique business needs and
              develop customized solutions that perfectly align with your
              strategic objectives.
            </p>

            <p className="text-lg text-primary mt-8">
              Let OPM International HR-IT Consultants be your catalyst for
              growth
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={scrollAnimationVariants}
          whileInView="visible"
          initial="hidden"
          className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center py-24 gap-8"
        >
          <div className=" col-span-6">
            <img src="/target.svg" />
          </div>
          <div className=" col-span-6">
            <h1 className="font-medium text-textColor text-5xl">Our Mission</h1>
            {[
              "To ignite growth in SMEs by providing innovative and comprehensive HR solutions.",
              "To champion a positive and productive work environment, fostering employee engagement and satisfaction.",
              "To partner with businesses in their journey to cultivate a thriving and successful workforce.",
            ].map((item) => {
              return (
                <div className="flex space-x-2 items-center">
                  <div>
                    <div className="bg-primary bg-opacity-20 rounded-full h-12 w-12 items-center flex flex-col justify-center">
                      <GiNinjaStar className="text-primary" />
                    </div>
                  </div>
                  <p className="text-lg text-muted mt-4">{item}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          variants={scrollAnimationVariants}
          whileInView="visible"
          initial="hidden"
          className="w-10/12 2xl:w-8/12 mx-auto grid grid-cols-12 items-center py-0 gap-8"
        >
          <div className=" col-span-6">
            <h1 className="font-medium text-textColor text-5xl">Our vision</h1>

            {[
              "We aim to push boundaries using advanced tech for transformative HR solutions.",
            ].map((item) => {
              return (
                <div className="flex space-x-2 items-center">
                  <div>
                    <div className="bg-primary bg-opacity-20 rounded-full h-12 w-12 items-center flex flex-col justify-center">
                      <GiNinjaStar className="text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg text-muted mt-4">{item}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className=" col-span-6">
            <img className="" src="/vision.svg" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyPage;

import { useNavigate } from "react-router-dom";
import { services, softwares } from "../utils/arrays";
import { useEffect } from "react";
import { MotionConfig, motion } from "framer-motion";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className=" overflow-hiden bg-lightBackground text-textColor ">
      <div className="bg-blackBackground  pt-40">
        <div className="   py-12 h-screen w-11/12 mx-auto rounded-xl  ">
          <div className=" gap-16  grid grid-cols-12 items-start ">
            <div className=" space-y-8 col-span-6 ">
              <h1 className="text-5xl font-medium leading-snug text-white  ">
                Bridging HR and <span className="text-primary">Technlogy</span>{" "}
                <br />
                for Global Success
              </h1>
              <p className="text-lightTextColor text-lg">
                We empower organizations with innovative solutions , optimizing
                HR functions for unparalleled efficiency and global success. We
                Offer a wide Range of HR solution to the business.
              </p>
              <div className="flex space-x-4 items-center">
                <button className="bg-primary font-medium text-white py-4 px-6 rounded-xl">
                  Subscribe Now
                </button>
                <div className="w-12 h-12 rounded-full  border border-slate-200 animate-pulse hover:animate-none transition-all duration-500 flex justify-center items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-7 text-white h-7"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h1 className="text-white">Watch video</h1>
              </div>
            </div>
            <div className=" col-span-6">
              <img className="w-[700px] absolute" src="/right hero.svg" />
            </div>
          </div>
        </div>
      </div>
      <div
        className=" h-[650px] w-full mt-0 bg-no-repeat "
        style={{ backgroundImage: "url('/shape.png')" }}
      >
        <div className="w-11/12 mx-auto">
          <div className="w-5/12">
            <h1 className="font-bold text-white text-2xl">
              About OPM International HR Consultants
            </h1>
            <p className="text-lg text-lightTextColor mt-3">
              A premier HR-IT consulting firm specializing in bridging the gap
              between human resources and cutting-edge technology across the
              globe.We empower organizations with innovative solutions ,
              optimizing HR functions for unparalleled efficiency and global
              success. We Offer a wide Range of HR solution to the business
            </p>
          </div>
        </div>
      </div>
      <div className="w-11/12 grid grid-cols-2 gap-8 mx-auto">
        <div className=" space-y-2">
          {[
            {
              title: "Integrity",
              details:
                "We conduct ourselves with the highest ethical standards, building trust and transparency in all our interactions."
            },
            {
              title: "Client-Centricity",
              details:
                "We are deeply committed to understanding your unique needs and exceeding your expectations."
            },
            {
              title: "Collaboration",
              details:
                "We believe in the power of teamwork and open communication, fostering a collaborative environment for shared growth."
            },
            {
              title: "Innovation",
              details:
                "We continuously explore and implement cutting-edge HR strategies and technologies to drive success."
            },
            {
              title: "Diversity and Inclusion",
              details:
                "We celebrate the unique perspectives and experiences of all individuals, creating an inclusive and welcoming work environment."
            }
          ].map((item) => {
            return (
              <div className="flex space-x-2">
                <div>
                  <div className="h-6 w-6 mt-1 flex bg-primary rounded-full justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6 h-4 w-4 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-textColor text-lg ">
                    {item.title}
                  </h1>
                  <p className="text-base text-muted mt-1">{item.details}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="bg-white rounded-2xl px-24 py-16 flex flex-col justify-center text-center items-center">
            <img className="h-48" src="/values.png" />
            <h1 className="font-bold text-textColor text-2xl mt-4">
              Our Core values
            </h1>
            <p className="text-lg text-muted mt-2">
              Transforming HR with Cutting-Edge Technology;- Your Partner in
              Global Talent Management.
            </p>
            <button className="border-1 border-borderColor text-primary font-bold mt-4 py-2 px-3 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="py-12 bg-blackBackground mt-8">
        <div className="w-8/12 bg-[#0E2828] py-12 px-12 mx-auto rounded-2xl text-center">
          <h1 className="font-bold text-white text-2xl mt-4">
            We Simplify HR Activities Around the World
          </h1>
          <p className="text-lg text-lightTextColor mt-2">
            Covering over 20 Countries in the world.
          </p>
          <div className="grid grid-cols-7 items-center space-x-3 my-8">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => {
              return (
                <div className="flex justify-center">
                  <img className="h-16" src={`Ellipse ${item}.png`} />
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-7 items-center space-x-3 mt-4">
            {[10, 11, 12, 13, 14, 15, 16].map((item) => {
              return (
                <div className="flex justify-center">
                  <img className=" h-16 " src={`Ellipse ${item}.png`} />
                </div>
              );
            })}
          </div>
          <p className="text-lg text-lightTextColor mt-8">
            Comply with local tax laws, handle pensions and social
            contributions, seamlessly.
          </p>
        </div>
      </div>
      <div className=" py-20">
        <div className="w-6/12 mx-auto text-center">
          <h1 className="text-2xl font-bold">Our Services</h1>
          <p className="text-lg text-muted">
            Lorem ipsum dolor sit amet consectetur. Id duis eu montes lacus
            purus tellus in. Sit eu tellus in id ultrices pellentesque nisl
            orci.
          </p>
        </div>
        <div className="w-11/12 mx-auto grid grid-cols-4 gap-4 mt-8">
          {services.map((item) => (
            <div className="bg-white border rounded-2xl p-5 flex flex-col text-center items-center">
              <img className="h-12" src={item.icon} />
              <h1 className="font-medium text-xl mt-2">{item.title}</h1>
              <p className="text-muted mt-2">{item.description}</p>
            </div>
          ))}
        </div>
        <motion.div className="text-center mt-16 ">
          <p className="text-primary">Testimonials</p>
          <h1 className="text-2xl font-bold mt-2 ">
            Highly rated by Global HR Companies
          </h1>
          <motion.div
            animate={{ x: -240 }}
            className="flex space-x-10 mt-3 items-center"
          >
            <motion.div
              animate={{ scale: 0.7 }}
              style={{
                backgroundImage: "url(testimon.png)",
                objectFit: "fill"
              }}
              className=" min-w-[550px] rounded-3xl mx-auto mt-4 mb-12 "
            >
              <div className=" text-white  text-start top-0 bottom-0 right-0 left-0 py-8 px-6  flex flex-col justify-center">
                <p className="text-white text-lg italic text-start ">
                  “Partnering with OPM International HR Consultants for their
                  Global HR Process Automation service has revolutionized our
                  operations. Automating payroll and onboarding has boosted
                  efficiency, enhanced the employee experience, and ensured
                  compliance. ”
                </p>
                <div className="mt-12">
                  <h1 className="font-bold text-lg ">Catherine</h1>
                  <p className="text-base">Product manager, ABX Company</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              style={{
                backgroundImage: "url(testimon.png)",
                objectFit: "fill"
              }}
              className=" min-w-[550px] rounded-3xl mx-auto mt-4 mb-12 "
            >
              <div className=" text-white  text-start top-0 bottom-0 right-0 left-0 py-8 px-6  flex flex-col justify-center">
                <p className="text-white text-lg italic text-start ">
                  “Partnering with OPM International HR Consultants for their
                  Global HR Process Automation service has revolutionized our
                  operations. Automating payroll and onboarding has boosted
                  efficiency, enhanced the employee experience, and ensured
                  compliance. Our HR team now focuses on strategic growth
                  initiatives, thanks to OPM's cutting-edge solutions. Highly
                  recommended!”
                </p>
                <div className="mt-12">
                  <h1 className="font-bold text-lg ">Catherine</h1>
                  <p className="text-base">Product manager, ABX Company</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{ scale: 0.7 }}
              style={{
                backgroundImage: "url(testimon.png)",
                objectFit: "fill"
              }}
              className=" min-w-[550px] rounded-3xl mx-auto mt-4 mb-12 "
            >
              <div className=" text-white  text-start top-0 bottom-0 right-0 left-0 py-8 px-6  flex flex-col justify-center">
                <p className="text-white text-lg italic text-start ">
                  “Partnering with OPM International HR Consultants for their
                  Global HR Process Automation service has revolutionized our
                  operations. Automating payroll and onboarding has boosted
                  efficiency, enhanced the employee experience, and ensured
                  compliance. Our HR team now focuses on strategic growth
                  initiatives, thanks to OPM's cutting-edge solutions. Highly
                  recommended!”
                </p>
                <div className="mt-12">
                  <h1 className="font-bold text-lg ">Catherine</h1>
                  <p className="text-base">Product manager, ABX Company</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="bg-blackBackground py-24 ">
          <div className="w-11/12 mx-auto grid grid-cols-12 gap-24 items-center">
            <div className=" col-span-6 ">
              <h1 className="text-3xl font-bold text-white">
                Explore our HR softwares
              </h1>
              <p className="text-lightTextColor text-base mt-3">
                Discover our innovative HR software suite, designed to
                streamline payroll, onboarding, workflows, and compliance.
                Enhance efficiency, improve employee experiences, and drive
                business growth with our cutting-edge solutions tailored for
                global enterprises
              </p>
            </div>
            <div className=" col-span-6">
              <img src="software.png" />
            </div>
          </div>
          <div className="flex justify-center h-1">
            <motion.img className="h-32" src="pointer.png" />
          </div>
        </div>
        <div className="bg-white py-12">
          <div className="w-11/12 mx-auto grid grid-cols-4 gap-4 ">
            {softwares.map((item) => (
              <div className=" py-5 flex flex-col text-center items-center">
                <img className="h-12" src={item.icon} />
                <h1 className="font-medium text-xl mt-2">{item.title}</h1>
                <p className="text-muted mt-2 line-clamp-3">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" w-11/12 mx-auto py-16">
          <h1 className="text-2xl font-bold text-center ">Latest blog posts</h1>
          <p className="text-muted text-center">
            Take a look at our new blogs and guides
          </p>
          <div className=" grid grid-cols-3 gap-4 ">
            {[
              {
                title:
                  "Revolutionizing HR with Automation: The Future is Heres",
                image: "blog1.png"
              },
              {
                title:
                  "Revolutionizing HR with Automation: The Future is Heres",
                image: "blog2.png"
              },
              {
                title:
                  "Revolutionizing HR with Automation: The Future is Heres",
                image: "blog3.png"
              }
            ].map((item) => (
              <div className=" py-5 flex flex-col text-start">
                <img className="rounded-2xl" src={item.image} />
                <h1 className="font-medium text-lg mt-2">{item.title}</h1>
                <p className="text-muted mt-2 line-clamp-3">
                  {item.description}
                </p>
                <h1 className="font-medium text-sm text-primary">Read more</h1>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="bg-primary text-white font-medium mt-4 py-3 px-4 rounded-lg">
              Explore More
            </button>
          </div>
        </div>
        <div className="bg-primary py-16">
          <div className="w-4/12 mx-auto flex flex-col space-y-4 items-center">
            <img className="h-24" src="subscribe.png" />
            <h1 className="text-2xl text-white font-medium text-center">
              Subscribe to our newsletter to avoid missing our blogs and
              updates.
            </h1>
            <button className="bg-white text-textColor font-medium mt-4 py-3 px-4 rounded-lg">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

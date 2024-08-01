import { useNavigate } from "react-router-dom";
import { products } from "../utils/arrays";
import { motion } from "framer-motion";
const Footer = () => {
  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        variants={scrollAnimationVariants}
        whileInView="visible"
        initial="hidden"
        className="   bg-lightBackground text-lg py-24 "
      >
        <div className="w-10/12 2xl:w-8/12 mx-auto">
          <div className="grid grid-cols-5 gap-x-4  ">
            <div>
              <img className="h-12" src="/logo.png" />
            </div>
            <div>
              <h1 className=" font-medium text-xl">Products</h1>
              <div className="text-muted mt-3 space-y-1">
                {products.map((item) => {
                  return (
                    <p
                      className="cursor-pointer hover:text-primary"
                      onClick={() => {
                        navigate(
                          `/products/${item.title
                            .toLowerCase()
                            .replace(/ /g, "-")}`
                        );
                      }}
                    >
                      {" "}
                      {item.title}
                    </p>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className=" font-medium  text-xl">Company</h1>
              <div className="text-muted mt-3 space-y-1">
                {[
                  { title: "Home", path: "/" },
                  { title: "About Us", path: "/company" },
                  { title: "Jobs", path: "/jobs" },
                  { title: "Posts", path: "/blog" },
                  { title: "Contact", path: "/contactus" },
                ].map((item) => {
                  return (
                    <p
                      onClick={() => {
                        navigate(item.path);
                      }}
                      className=" cursor-pointer hover:text-primary "
                    >
                      {item.title}
                    </p>
                  );
                })}
              </div>
            </div>
            <div>
              <h1 className=" font-medium  text-xl">Support</h1>
              <div className="text-muted  mt-3 space-y-1 ">
                <div className="text-muted mt-3 space-y-1">
                  {[{ title: "Contact Us", path: "/contactus" }].map((item) => {
                    return (
                      <p
                        onClick={() => {
                          navigate(item.path);
                        }}
                        className=" cursor-pointer hover:text-primary "
                      >
                        {item.title}
                      </p>
                    );
                  })}
                </div>
                <p>support@opmhr.com</p>
                <p></p>
              </div>
            </div>
            <div>
              <h1 className=" font-medium  text-xl mb-4">Address</h1>
              <iframe
                width="250"
                height="200"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                id="gmap_canvas"
                src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Makumbusho%20St.%20Dar%20es%20Salaam+(OPM%20International%20HR%20Consultancy%20Ltd)&amp;t=h&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>{" "}
            </div>
          </div>
          <div className="flex justify-between text-muted text-base mt-24">
            <p>
              <span className="font-medium ">English.</span> @2024. All rights
              reserved
            </p>
            <div className="flex  space-x-2">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 01-47.9 47.9z" />
              </svg>

              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0075-94 336.64 336.64 0 01-108.2 41.2A170.1 170.1 0 00672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 00-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 01-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 01-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z" />
              </svg>

              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M7.170999999999999 5.009 A2.188 2.188 0 0 1 4.983 7.197000000000001 A2.188 2.188 0 0 1 2.7949999999999995 5.009 A2.188 2.188 0 0 1 7.170999999999999 5.009 z" />
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
              </svg>
              <svg fill="none" viewBox="0 0 24 24" className="w-5 h-5">
                <path
                  fill="currentColor"
                  d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 011-1h3v-4h-3a5 5 0 00-5 5v2.01h-2l-.396 3.98h2.396v8.01z"
                />
              </svg>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M2.004 22l1.352-4.968A9.954 9.954 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.954 9.954 0 01-5.03-1.355L2.004 22zM8.391 7.308a.961.961 0 00-.371.1 1.293 1.293 0 00-.294.228c-.12.113-.188.211-.261.306A2.729 2.729 0 006.9 9.62c.002.49.13.967.33 1.413.409.902 1.082 1.857 1.971 2.742.214.213.423.427.648.626a9.448 9.448 0 003.84 2.046l.569.087c.185.01.37-.004.556-.013a1.99 1.99 0 00.833-.231 4.83 4.83 0 00.383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288.083-.086.155-.187.21-.302.078-.163.156-.474.188-.733.024-.198.017-.306.014-.373-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.401-.621a.498.498 0 00-.177-.041.482.482 0 00-.378.127v-.002c-.005 0-.072.057-.795.933a.35.35 0 01-.368.13 1.416 1.416 0 01-.191-.066c-.124-.052-.167-.072-.252-.109l-.005-.002a6.01 6.01 0 01-1.57-1c-.126-.11-.243-.23-.363-.346a6.296 6.296 0 01-1.02-1.268l-.059-.095a.923.923 0 01-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41a4.38 4.38 0 00.263-.373c.118-.19.155-.385.093-.536-.28-.684-.57-1.365-.868-2.041-.059-.134-.234-.23-.393-.249-.054-.006-.108-.012-.162-.016a3.385 3.385 0 00-.403.004z" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;

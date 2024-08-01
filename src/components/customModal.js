import { AnimatePresence,motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

const CustomModal = ({heading,setShow,show,content}) => {
    return ( <AnimatePresence>
        {show && (
          <motion.div   className=" fixed inset-0 bg-black z-50 bg-opacity-30 ">
            <div className="flex flex-col justify-center items-center h-full w-full">
              <motion.div initial={{scale:0,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0,opacity:0}}  
              className="p-10 w-6/12 2xl:w-4/12 bg-white rounded-md shadow-2xl ">
                <div className="flex justify-between items-center mb-5 border-b pb-2 border-border">
                  <h1 className=" text-2xl font-semibold">{heading??""}</h1>
                  
                  <IoClose
                    onClick={() => {
                      setShow(false);
                    }}
                    className="text-xl cursor-pointer text-muted hover:text-red-400"
                  />
                </div>
                {content}
              </motion.div>
            </div>
          </motion.div>
        )}
        </AnimatePresence>  );
}
 
export default CustomModal;
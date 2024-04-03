//Link
import { Link } from "react-router-dom";

//framer-motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../utils";

//icons
import { VscDebugStart } from "react-icons/vsc";

export const Landing = () => {
  return (
    <div className="h-full w-full overflow-hidden ">
      <div className="container mx-auto  flex flex-col justify-between  sm:flex-row sm:px-36">
        <div className="flex flex-col py-16 text-center  sm:justify-center sm:space-y-16">
          {/* logo */}
          <motion.div
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            <img
              src="/LogoA.svg"
              className="mx-auto mb-8 max-w-[250px] sm:mb-0"
            />
          </motion.div>
          {/* title */}
          <div className="mb-8 hidden sm:flex sm:flex-col">
            <motion.h1
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 mb-10"
            >
              Find everything
              <br /> at one <span className="text-accent ">place.</span>
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-secondary"
            >
              Wubba Lubba Dub Dub
            </motion.p>
          </div>
          {/* redirect to home */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-fitsm:mt-0 mx-auto"
          >
            <button className=" btn flex items-center space-x-2">
              <Link to={"/home"}>Start</Link>
              <VscDebugStart className="text-xl" />
            </button>
          </motion.div>
        </div>
        {/* image */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="absolute -bottom-56 mx-auto sm:relative sm:-bottom-0 sm:h-screen sm:max-w-[40vw]"
        >
          <img src="/landingrick.svg" className=" h-screen" />
        </motion.div>
      </div>
    </div>
  );
};

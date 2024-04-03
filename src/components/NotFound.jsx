//link
import { Link } from "react-router-dom";

//framer-motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../utils";

//icon
import { IoMdArrowBack } from "react-icons/io";

export const NotFound = () => {
  return (
    <div className="container mx-auto h-[80vh] items-center justify-center space-y-10 px-24 py-24">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="flex flex-col items-center justify-center space-y-10 xl:flex-row xl:justify-start xl:space-x-10 xl:space-y-0"
      >
        <img src="/warning.svg" width={80} />
        <h1 className="h1 text-7xl">404</h1>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="justify-center"
      >
        <p className="text-center text-xl xl:text-start">
          We are sorry, but this page does not exist.
          <br />
          <span>But don&apos;t worry!</span>
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="mx-auto w-fit xl:mx-0 "
      >
        <button className="btn flex items-center space-x-3">
          <IoMdArrowBack className="text-xl" />
          <Link to={"/home"}>Home</Link>
        </button>
      </motion.div>
    </div>
  );
};

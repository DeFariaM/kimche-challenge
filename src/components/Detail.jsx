//icons
import { IoClose } from "react-icons/io5";

//framer-motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../utils";

export const Detail = ({ setShowInfo, character }) => {
  const { name, image, status, origin, species, location, gender } = character;
  return (
    <div className="fixed inset-0 items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm">
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="relative m-auto mx-auto my-10 flex h-[90vh] w-[80vw] flex-col items-center justify-between rounded-md bg-accent/70 p-10 sm:mt-24 md:h-[50vh] xl:h-[70vh] xl:flex-row"
      >
        {/* close icon */}
        <IoClose
          className="absolute right-3 top-3 cursor-pointer text-3xl font-extrabold"
          onClick={() => setShowInfo(false)}
        />

        {/* image */}
        <div>
          <img src={image} className="rounded-md" />
        </div>

        {/* info */}
        <div className="flex h-[80%] max-h-[300px] flex-col justify-between">
          <h1 className="h1">{name}</h1>
          <span>Status: {status}</span>
          <span>Gender: {gender}</span>
          <span>Specie: {species}</span>
          <span>Origin: {origin?.name}</span>
          <span>Last seen: {location?.name}</span>
        </div>

        {/* imagen complementaria */}
        <div className="hidden xl:flex">
          <img src="/rickandmorty.png" width={300} />
        </div>
      </motion.div>
    </div>
  );
};

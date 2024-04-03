//hooks
import { useState } from "react";

//components
import { Card, Detail, Paginate } from "../components";

//icons
import { FaRegSadTear } from "react-icons/fa";

//framer-motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../utils";

export const Home = ({ data, setPageNum }) => {
  const { results, info } = data.characters;
  const { pages, count } = info;

  //aux para mostrar el detalle y definir de cuál personaje se va a mostrar la info
  const [showInfo, setShowInfo] = useState(false);
  const [character, setCharacter] = useState([]);

  return (
    <div className="container mx-auto w-full p-6">
      {results.length ? (
        <>
          {/* cards */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`grid grid-cols-2 justify-center gap-4 sm:grid-cols-5
      ${results.length <= 10 ? "sm:h-[70vh] sm:grid-rows-2" : results.length <= 15 ? "sm:grid-rows-3" : "sm:grid-rows-4"}`}
          >
            {results?.map((char, index) => (
              <div
                key={index}
                onClick={() => {
                  setCharacter(char);
                  setShowInfo(true);
                }}
                className="cursor-pointer"
              >
                <Card key={index} img={char.image} name={char.name} />
              </div>
            ))}
          </motion.div>
          {/* pagination */}
          <div className="pt-2">
            <Paginate setPageNum={setPageNum} pages={pages} count={count} />
          </div>
          {showInfo && (
            <Detail setShowInfo={setShowInfo} character={character} />
          )}
        </>
      ) : (
        <div className="flex h-[70vh] flex-col justify-center space-y-4 text-center text-3xl">
          <div className="flex flex-col items-center justify-center space-y-4">
            <FaRegSadTear className="justify-center text-6xl text-accent" />
            <p>We are sorry</p>
          </div>

          <p>There are no matches</p>
        </div>
      )}
    </div>
  );
};

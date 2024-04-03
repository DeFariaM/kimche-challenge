import { useState } from "react";
import { Card, Detail, Paginate } from "../components";

export const Home = ({ data, setPageNum }) => {
  const { results, info } = data.characters;
  const { pages, count } = info;
  const [showInfo, setShowInfo] = useState(false);
  const [character, setCharacter] = useState([]);
  console.log(character);

  return (
    <div className="container mx-auto px-6 py-6">
      {results.length ? (
        <>
          {/* cards */}
          <div
            className={`grid justify-center grid-cols-5 gap-4
      ${results.length <= 10 ? "grid-rows-2 h-[70vh]" : results.length <= 15 ? "grid-rows-3" : "grid-rows-4"}`}>
            {results?.map((char, index) => (
              <div
                key={index}
                onClick={() => {
                  setCharacter(char);
                  setShowInfo(true);
                }}
                className="cursor-pointer">
                <Card key={index} img={char.image} name={char.name} />
              </div>
            ))}
          </div>
          {/* pagination */}
          <div className="pt-2">
            <Paginate setPageNum={setPageNum} pages={pages} count={count} />
          </div>
          {showInfo && (
            <Detail setShowInfo={setShowInfo} character={character} />
          )}
        </>
      ) : (
        <div className="h-[70vh]  text-center justify-center flex flex-col">
          <span>Lo sentimos =C</span>
          <p>No hay coincidencias con la búsqueda</p>
        </div>
      )}
    </div>
  );
};

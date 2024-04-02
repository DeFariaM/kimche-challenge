import { Card } from "../components";

export const Home = ({ data, setPageNum, pageNum, loading }) => {
  const { results } = data.characters;

  return (
    <div className="container mx-auto px-6 py-4">
      {/* cards */}
      <div
        className={`grid justify-center grid-cols-5 gap-4
      ${results.length <= 10 ? "grid-rows-2" : results.length <= 15 ? "grid-rows-3" : "grid-rows-4"}`}>
        {results?.map(({ image, name }, index) => (
          <Card key={index} img={image} name={name} />
        ))}
      </div>
    </div>
  );
};

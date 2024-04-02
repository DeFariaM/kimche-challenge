import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="h-full w-full overflow-hidden ">
      <div className="flex justify-between container mx-auto px-36">
        <div className="py-16 text-center flex flex-col justify-between">
          {/* logo */}
          <div>
            <img src="/LogoA.svg" className="max-w-[250px] mx-auto" />
          </div>
          {/* title */}
          <div>
            <h1 className="h1 mb-10">
              Encuentra todo en
              <br /> un solo <span className="text-accent ">lugar.</span>
            </h1>
            <p className="text-secondary">Wubba Lubba Dub Dub</p>
          </div>
          {/* redirect to home */}
          <div>
            <button className=" btn">
              <Link to={"/home"}>Empezar!</Link>
            </button>
          </div>
        </div>
        {/* image */}
        <img src="/landingrick.svg" className="h-screen" />
      </div>
    </div>
  );
};

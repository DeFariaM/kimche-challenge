import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="h-full w-full overflow-hidden ">
      <div className="container mx-auto  flex flex-col justify-between  sm:flex-row sm:px-36">
        <div className="flex flex-col py-16 text-center  sm:justify-center sm:space-y-16">
          {/* logo */}
          <div>
            <img
              src="/LogoA.svg"
              className="mx-auto mb-8 max-w-[250px] sm:mb-0"
            />
          </div>
          {/* title */}
          <div className="mb-8 hidden sm:flex sm:flex-col">
            <h1 className="h1 mb-10">
              Find everything
              <br /> at one <span className="text-accent ">place.</span>
            </h1>
            <p className="text-secondary">Wubba Lubba Dub Dub</p>
          </div>
          {/* redirect to home */}
          <div className="sm:mt-0">
            <button className=" btn">
              <Link to={"/home"}>Start!</Link>
            </button>
          </div>
        </div>
        {/* image */}
        <div className="absolute -bottom-56 mx-auto sm:relative sm:-bottom-0 sm:h-screen sm:max-w-[40vw]">
          <img src="/landingrick.svg" className=" h-screen" />
        </div>
      </div>
    </div>
  );
};

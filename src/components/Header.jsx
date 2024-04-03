//icons
import { BiSearch } from "react-icons/bi";
import { IoMdMenu, IoMdClose } from "react-icons/io";

//components
import { Select } from "./Select";

//data
import { genderData, speciesData, statusData } from "../utils";
import { useState, useEffect } from "react";

//framer-motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../utils";

export const Header = ({
  setGenderC,
  setNameC,
  setSpeciesC,
  setStatusC,
  nameC,
}) => {
  //funcón de reset para mostrar resultados sin filtrar y devolver input
  //y selects a estado inicial
  const reset = () => {
    const gender = document.getElementById("gender");
    const status = document.getElementById("status");
    const specie = document.getElementById("specie");
    gender.selectedIndex = 0;
    status.selectedIndex = 0;
    specie.selectedIndex = 0;

    setGenderC("");
    setNameC("");
    setSpeciesC("");
    setStatusC("");
  };

  const [toggle, setToggle] = useState(null);

  useEffect(() => {
    if (window.innerWidth < 1028) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }, []);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 1028) setToggle(true);
    if (window.innerWidth < 1028) setToggle(false);
  });
  return (
    <div className="container mx-auto flex items-center justify-between px-6 py-4">
      {/* logo */}
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <img src="/LogoA.svg" className="max-w-[150px]" />
      </motion.div>

      {toggle && (
        <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="absolute right-[5%] top-[80px] z-10 flex min-h-[25vh] w-[90%] flex-col justify-center space-y-5 bg-black  xl:relative xl:right-0 xl:top-0 xl:min-h-0 xl:w-full xl:flex-row  xl:items-center xl:space-x-2 xl:space-y-0 "
        >
          {/* input search */}
          <div className="relative mx-auto items-center">
            <input
              type="text"
              onChange={(e) => setNameC(e.target.value)}
              placeholder="Search your favorite character!"
              value={nameC}
              className="input mx-auto min-w-[320px]"
            />
            <BiSearch className="absolute right-2 top-2 hidden text-2xl text-accent xl:flex" />
          </div>

          {/* selects */}
          <div className="flex flex-col space-x-2 space-y-5 xl:flex-row xl:space-y-0">
            <Select name="Gender" data={genderData} setFunc={setGenderC} />
            <Select name="Specie" data={speciesData} setFunc={setSpeciesC} />
            <Select name="Status" data={statusData} setFunc={setStatusC} />
          </div>

          {/* reset */}
          <div className="">
            <button className="btn mb-5 xl:mb-0" onClick={reset}>
              Reset
            </button>
          </div>
        </motion.div>
      )}

      {/* mobile menu btns */}
      <button
        className="fixed right-3 top-2 xl:hidden"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <div
            className={`origin-center rotate-90 transform  transition duration-200 ease-out ${toggle && "rotate-180"}`}
          >
            <IoMdClose className="m-3  text-3xl text-accent" />
          </div>
        ) : (
          <div
            className={` origin-center  transform transition duration-200 ease-out ${toggle && "rotate-180"}`}
          >
            <IoMdMenu className="m-3  text-3xl text-accent" />
          </div>
        )}
      </button>
    </div>
  );
};

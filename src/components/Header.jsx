//icons
import { BiSearch } from "react-icons/bi";

//components
import { Select } from "./Select";

//data
import { genderData, speciesData, statusData } from "../utils";

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
    const species = document.getElementById("species");
    gender.selectedIndex = 0;
    status.selectedIndex = 0;
    species.selectedIndex = 0;

    setGenderC("");
    setNameC("");
    setSpeciesC("");
    setStatusC("");
  };
  return (
    <div className="container mx-auto flex justify-between py-4 items-center px-4">
      {/* logo */}
      <div>
        <img src="/LogoA.svg" className="max-w-[150px]" />
      </div>

      {/* input search */}
      <div className="flex space-x-2 items-center relative">
        <input
          type="text"
          onChange={(e) => setNameC(e.target.value)}
          placeholder="Busca a tu personaje favorito"
          value={nameC}
          className="min-w-[350px] input"
        />
        <BiSearch className="text-2xl absolute right-2" />
      </div>

      {/* selects */}
      <div className="space-x-2">
        <Select name="Gender" data={genderData} setFunc={setGenderC} />
        <Select name="Specie" data={speciesData} setFunc={setSpeciesC} />
        <Select name="Status" data={statusData} setFunc={setStatusC} />
      </div>
      <div>
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

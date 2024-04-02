import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Landing } from "./pages";
import { Footer, Header, Loading } from "./components";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { CHARACTERS } from "./utils";

function App() {
  //para renderizado condicional del header y el footer
  const { pathname } = useLocation();

  //estados locales para manejo de variables de query
  const [nameC, setNameC] = useState("");
  const [speciesC, setSpeciesC] = useState("");
  const [genderC, setGenderC] = useState("");
  const [statusC, setStatusC] = useState("");
  const [pageNum, setPageNum] = useState(1);

  //resultados de query
  const { data, loading } = useQuery(CHARACTERS, {
    variables: {
      nameC,
      speciesC,
      genderC,
      statusC,
      pageNum,
    },
  });

  return (
    <>
      <div>
        {pathname !== "/" && (
          <Header
            setGenderC={setGenderC}
            setNameC={setNameC}
            setSpeciesC={setSpeciesC}
            setStatusC={setStatusC}
            nameC={nameC}
          />
        )}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={
              loading ? (
                <Loading />
              ) : (
                <Home data={data} setPageNum={setPageNum} pageNum={pageNum} />
              )
            }
          />
        </Routes>
        {pathname !== "/" && <Footer />}
      </div>
    </>
  );
}

export default App;

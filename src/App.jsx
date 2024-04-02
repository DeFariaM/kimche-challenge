import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Landing } from "./pages";
import { Footer, Header } from "./components";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <div>
        {pathname !== "/" && <Header />}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        {pathname !== "/" && <Footer />}
      </div>
    </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Alcohol from "./components/Alcohol/Alcohol";
import MainPage from "./components/MainPage/MainPage";
import NonAlcohol from "./components/Non-alcohol/Non-alcohol";
import PageNotFound from "./components/PageNotFound/PageNotFound";

import useMainMenu from "./api/useMainMenuHook";

function App() {
  const [first, setFirst] = useState();
  const mainMenu = useMainMenu("Червоні");

  useEffect(() => {
    setFirst(mainMenu);
  }, [mainMenu]);

  console.log(first);

  return (
    <>
      <Routes>
        <Route exact path="/forrest-app" element={<MainPage />} />
        <Route path="/non-alcohol" element={<NonAlcohol />} />
        <Route path="/full-list" element={<Alcohol />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

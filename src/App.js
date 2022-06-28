import { Route, Routes } from "react-router-dom";
import Alcohol from "./components/Alcohol/Alcohol";
import Buttons from "./components/MainPage/Buttons";
import NonAlcohol from "./components/Non-alcohol/Non-alcohol";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/forrest-app" element={<Buttons />} />
        <Route path="/non-alcohol" element={<NonAlcohol />} />
        <Route path="/full-list" element={<Alcohol />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;

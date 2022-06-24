
import { Route, Routes } from "react-router-dom";
import Alcohol from "./components/Alcohol/Alcohol";
import Header from "./components/Header/Header";
import Buttons from "./components/MainPage/Buttons";
import NonAlcohol from "./components/Non-alcohol/Non-alcohol";
import Social from "./components/Social/Social";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Buttons />} />
        <Route path="/non-alcohol" element={<NonAlcohol />} />
        <Route path="/full-list" element={<Alcohol />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Social />
    </>
  );
}

export default App;

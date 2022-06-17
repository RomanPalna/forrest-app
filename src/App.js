import { Route, Routes } from "react-router-dom";
import HotDrinks from "./components/Drinks/HotDrinks/Hotdrinks";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import NonAlcohol from "./components/Non-alcohol/Non-alcohol";
import Social from "./components/Social/Social";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/non-alcohol" element={<NonAlcohol />} />
        <Route path="/hot-drinks" element={<HotDrinks />} />
        <Route path="/full=price" element={<div>Full price</div>} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <Social />
    </>
  );
}

export default App;

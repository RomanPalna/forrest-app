import { Route, Routes } from "react-router-dom";
import Alcohol from "./components/Alcohol/Alcohol";
import BeerList from "./components/Drinks/Beer/BeerList";
import CocktailList from "./components/Drinks/Cocktails/CocktailList";
import WhiskyList from "./components/Drinks/Whisky/WhiskyList";
import MainPage from "./components/MainPage/MainPage";
import NonAlcohol from "./components/Non-alcohol/Non-alcohol";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/forrest-app" element={<MainPage />} />
        <Route path="/non-alcohol" element={<NonAlcohol />} />

        <Route path="/full-list" element={<Alcohol />} />
        <Route path="/beer" element={<BeerList />} />
        <Route path="/cocktails" element={<CocktailList />} />
        <Route path="/whisky" element={<WhiskyList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

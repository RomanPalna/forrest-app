import { Route, Routes } from "react-router-dom";
import Alcohol from "./components/Alcohol/Alcohol";
import BeerList from "./components/Drinks/Beer/BeerList";
import CocktailList from "./components/Drinks/Cocktails/CocktailList";
import WhiskyList from "./components/Drinks/Whisky/WhiskyList";
import GorilkaList from "./components/Drinks/Gorilka/GorilkaList";
import WhiteWineList from "./components/Drinks/WhiteWine/WhiteWineList";
import MainPage from "./components/MainPage/MainPage";
import NonAlcohol from "./components/Non-alcohol/Non-alcohol";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import RedWineList from "./components/Drinks/RedWine/RedWineList";
import SparklingWineList from "./components/Drinks/SparklingWine/SparklingWineList";
import Lemonades from "./components/Drinks/Lemonades/LemonadesList";
import CoffeeTeaList from "./components/Drinks/CoffeeTea/CoffeeTea";
import ColdDrinksList from "./components/Drinks/ColdDrinks/ColdDrinksList";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/forrest-app" element={<MainPage />} />

        <Route path="/non-alcohol" element={<NonAlcohol />} />
        <Route path="/lemonades" element={<Lemonades />} />
        <Route path="/coffee-tea" element={<CoffeeTeaList />} />
        <Route path="/cold-drinks" element={<ColdDrinksList />} />

        <Route path="/full-list" element={<Alcohol />} />
        <Route path="/beer" element={<BeerList />} />
        <Route path="/cocktails" element={<CocktailList />} />
        <Route path="/whisky" element={<WhiskyList />} />
        <Route path="/gorilka" element={<GorilkaList />} />
        <Route path="/white-wine" element={<WhiteWineList />} />
        <Route path="/red-wine" element={<RedWineList />} />
        <Route path="/sparkling-wine" element={<SparklingWineList />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

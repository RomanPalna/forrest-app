import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function ColdDrinksList() {
  const [coldDrinks, setColdDrinks] = useState();
  const coldDrinksList = useMainMenu("Холодні напої");
  const single = "single";

  useEffect(() => {
    setColdDrinks(coldDrinksList);
  }, [coldDrinksList]);

  return (
    <Markup drinks={coldDrinks} caption={"холодні напої"} format={single} />
  );
}

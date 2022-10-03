import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function CocktailList() {
  const [cocktails, setCocktails] = useState();
  const cocktalList = useMainMenu("Коктейлі алкогольні");
  const single = "single";

  useEffect(() => {
    setCocktails(cocktalList);
  }, [cocktalList]);

  return <Markup drinks={cocktails} caption={"коктейлі"} format={single} />;
}

import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";
// import cocktails from "../../../JSON/cocktails.json";

export default function CocktailList() {
  const [cocktails, setCocktails] = useState();
  const cocktalList = useMainMenu("Коктейлі алкогольні");

  useEffect(() => {
    setCocktails(cocktalList);

    return () => {
      setCocktails([]);
    };
  }, [cocktalList]);

  return <Markup drinks={cocktails} caption={"коктейлі"} />;
}

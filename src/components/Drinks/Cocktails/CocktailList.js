import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

const SINGLE = "single";
const PATH = "cocktails";

export default function CocktailList() {
  const [cocktails, setCocktails] = useState();
  const cocktalList = useMainMenu("Коктейлі алкогольні");

  useEffect(() => {
    setCocktails(cocktalList);
  }, [cocktalList]);

  return (
    <Markup
      drinks={cocktails}
      caption={"коктейлі"}
      path={PATH}
      format={SINGLE}
    />
  );
}

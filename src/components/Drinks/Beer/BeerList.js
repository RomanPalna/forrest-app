import { useState, useEffect } from "react";
import Markup from "../Markup/Markup";
// import beer from "../../../JSON/beer.json";
import useMainMenu from "../../../api/useMainMenuHook";

export default function BeerList() {
  const [beer, setBeer] = useState();
  const mainMenu = useMainMenu("Пиво");

  useEffect(() => {
    setBeer(mainMenu);
  }, [mainMenu]);

  return <Markup drinks={beer} caption={"пиво"} />;
}

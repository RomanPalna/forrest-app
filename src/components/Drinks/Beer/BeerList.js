import { useState, useEffect } from "react";
import Markup from "../Markup/Markup";
import useMainMenu from "../../../api/useMainMenuHook";

export default function BeerList() {
  const [beer, setBeer] = useState();
  const beerList = useMainMenu("Пиво");

  useEffect(() => {
    setBeer(beerList);
  }, [beerList]);

  return <Markup drinks={beer} caption={"пиво"} />;
}

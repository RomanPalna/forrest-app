import { useState, useEffect } from "react";
import Markup from "../Markup/Markup";
import useMainMenu from "../../../api/useMainMenuHook";

export default function BeerList() {
  const [beer, setBeer] = useState();
  const beerList = useMainMenu("Пиво");
  const single = "single";

  useEffect(() => {
    setBeer(beerList);
  }, [beerList]);

  return <Markup drinks={beer} caption={"пиво"} format={single} />;
}

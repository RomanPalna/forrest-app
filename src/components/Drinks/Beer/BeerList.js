import { useState, useEffect } from "react";
import Markup from "../Markup/Markup";
import useMainMenu from "../../../api/useMainMenuHook";

export default function BeerList() {
  const [beer, setBeer] = useState();
  const beerList = useMainMenu("Пиво");
  const nonAlcBeer = useMainMenu("Пиво б/а");
  const single = "single";

  useEffect(() => {
    if (beerList) {
      const array = beerList.concat(nonAlcBeer);
      setBeer(array);
    }
  }, [beerList, nonAlcBeer]);

  return <Markup drinks={beer} caption={"пиво"} format={single} />;
}

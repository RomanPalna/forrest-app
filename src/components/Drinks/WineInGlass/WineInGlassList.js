import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function WineInGlassList() {
  const [wines, setWines] = useState();
  const groupName = "Вино розлив";
  const wineList = useMainMenu(groupName);
  const single = "glass";

  useEffect(() => {
    setWines(wineList);
  }, [wineList]);

  return <Markup drinks={wines} caption={"вино на розлив"} format={single} />;
}

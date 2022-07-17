import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function RedWineList() {
  const [redWine, setRedWine] = useState();

  const redWineList = useMainMenu("Червоні");
  const wine = "wine";

  useEffect(() => {
    setRedWine(redWineList);
  }, [redWineList]);

  return <Markup drinks={redWine} caption={"Червоні вина"} format={wine} />;
}

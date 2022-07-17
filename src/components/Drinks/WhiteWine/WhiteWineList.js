import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function WhiteWineList() {
  const [whiteWine, setWhiteWine] = useState();
  const whiteWineList = useMainMenu("Білі");
  const wine = "wine";

  useEffect(() => {
    setWhiteWine(whiteWineList);
  }, [whiteWineList]);

  return <Markup drinks={whiteWine} caption={"білі вина"} format={wine} />;
}

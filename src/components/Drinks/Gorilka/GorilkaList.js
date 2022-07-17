import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function GorilkaList() {
  const [gorilka, setGorilka] = useState();

  const gorilkaList = useMainMenu("Горілка");
  const fifty = "fifty";

  useEffect(() => {
    setGorilka(gorilkaList);
  }, [gorilkaList]);

  return <Markup drinks={gorilka} caption={"горілка"} format={fifty} />;
}

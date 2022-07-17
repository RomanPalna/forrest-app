import { useState, useEffect } from "react";
import Markup from "../Markup/Markup";
import useMainMenu from "../../../api/useMainMenuHook";

export default function WhiskyList() {
  const [whisky, setwhiskey] = useState();
  const whiskyList = useMainMenu("Віскі");
  const fifty = "fifty";

  useEffect(() => {
    setwhiskey(whiskyList);
  }, [whiskyList]);

  return <Markup drinks={whisky} caption={"віскі"} format={fifty} />;
}

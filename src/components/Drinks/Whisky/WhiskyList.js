import { useState, useEffect } from "react";
import Markup from "../Markup/Markup";
import useMainMenu from "../../../api/useMainMenuHook";

export default function WhiskyList() {
  const [whiskey, setwhiskey] = useState();

  const whiskyList = useMainMenu("Віскі");

  useEffect(() => {
    setwhiskey(whiskyList);
  }, [whiskyList]);

  return <Markup drinks={whiskey} caption={"віскі"} />;
}

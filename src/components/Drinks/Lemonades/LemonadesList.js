import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function Lemonades() {
  const [lemonades, setLemonades] = useState();
  const groupName = "Фреші/лимонади";
  const lemonadesList = useMainMenu(groupName);
  const single = "single";

  useEffect(() => {
    setLemonades(lemonadesList);
  }, [lemonadesList]);

  return (
    <Markup drinks={lemonades} caption={"лимонади та фреші"} format={single} />
  );
}

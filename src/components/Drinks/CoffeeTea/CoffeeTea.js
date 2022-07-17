import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function CoffeeTea() {
  const [coffee, setCoffee] = useState();
  const coffeeList = useMainMenu("Кава/Чай");
  const single = "single";

  useEffect(() => {
    setCoffee(coffeeList);
  }, [coffeeList]);

  return <Markup drinks={coffee} caption={"кава чай"} format={single} />;
}

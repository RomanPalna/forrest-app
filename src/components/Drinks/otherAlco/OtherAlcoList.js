import { useState, useEffect } from "react";
import Markup from "../Markup/Markup";

import useMainMenu from "../../../api/useMainMenuHook";

export default function OtherAlcoList() {
  const [otherAlco, setOtherAlco] = useState();

  const rum = useMainMenu("Роми");
  const vermouth = useMainMenu("Вермути");
  const gin = useMainMenu("Джини");
  const tequila = useMainMenu("Текіли");
  const liquers = useMainMenu("Лікери");

  const fifty = "fifty";

  useEffect(() => {
    if (rum && vermouth && gin && tequila && liquers) {
      const array = rum
        .concat(vermouth)
        .concat(gin)
        .concat(tequila)
        .concat(liquers);
      setOtherAlco(array);
    }
  }, [rum, vermouth, gin, tequila, liquers]);

  return (
    <Markup
      drinks={otherAlco}
      caption={"Ром, Вермут, Текіла, Джин, Настоянки, Лікери"}
      format={fifty}
    />
  );
}

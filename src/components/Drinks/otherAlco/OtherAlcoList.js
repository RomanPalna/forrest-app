import { useState, useEffect } from "react";
import Markup from "../Markup/Markup";

import useMainMenu from "../../../api/useMainMenuHook";

export default function OtherAlcoList() {
  const [otherAlco, setOtherAlco] = useState();

  const rum = useMainMenu("Роми");
  const vermouth = useMainMenu("Вермути");
  const gin = useMainMenu("Джини");
  const tequila = useMainMenu("Текіли");

  const fifty = "fifty";

  useEffect(() => {
    if (rum) {
      const array = rum.concat(vermouth).concat(gin).concat(tequila);
      setOtherAlco(array);
    }
  }, [rum, vermouth, gin, tequila]);

  return (
    <Markup
      drinks={otherAlco}
      caption={"Ром, Вермут, Текіла, Джин"}
      format={fifty}
    />
  );
}

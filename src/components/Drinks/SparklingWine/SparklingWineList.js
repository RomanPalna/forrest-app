import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function SparklingWineList() {
  const [sparkling, setSparkling] = useState();
  const sparklingList = useMainMenu("Ігристі");
  const champagneList = useMainMenu("Шампанське");
  const wine = "wine";

  useEffect(() => {
    if (sparklingList && champagneList) {
      const array = champagneList.concat(sparklingList);
      setSparkling(array);
    }
  }, [champagneList, sparklingList]);

  return (
    <Markup
      drinks={sparkling}
      caption={"шампанське, ігристі вина"}
      format={wine}
    />
  );
}

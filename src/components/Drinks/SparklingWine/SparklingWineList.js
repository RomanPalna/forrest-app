import { useState, useEffect } from "react";
import useMainMenu from "../../../api/useMainMenuHook";
import Markup from "../Markup/Markup";

export default function SparklingWineList() {
  const [sparkling, setSparkling] = useState();
  const sparklingList = useMainMenu("Ігристі");
  const wine = "wine";

  useEffect(() => {
    setSparkling(sparklingList);
  }, [sparklingList]);

  return (
    <Markup
      drinks={sparkling}
      caption={"шампанське, ігристі вина"}
      format={wine}
    />
  );
}
